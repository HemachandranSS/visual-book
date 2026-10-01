import os
import glob
import subprocess
import json
import optparse

def extract_num(f):
    try:
        return int(os.path.basename(f).replace(".mp4", ""))
    except:
        return 999999

def generate_metadata(directory):
    files = glob.glob(os.path.join(directory, "*.mp4"))
    files = sorted(files, key=extract_num)
    
    if not files:
        print(f"No mp4 files found in {directory}")
        return

    metadata = {
        "total_duration": 0.0,
        "chunks": []
    }
    
    for f in files:
        cmd = [
            "ffprobe", "-v", "error", "-show_entries",
            "format=duration", "-of",
            "default=noprint_wrappers=1:nokey=1", f
        ]
        try:
            output = subprocess.check_output(cmd).decode('utf-8').strip()
            duration = float(output)
            chunk_num = extract_num(f)
            metadata["chunks"].append({
                "file": os.path.basename(f),
                "index": chunk_num,
                "duration": duration,
                "start_time": metadata["total_duration"]
            })
            metadata["total_duration"] += duration
        except Exception as e:
            print(f"Error parsing {f}: {e}")
            
    out_path = os.path.join(directory, "metadata.json")
    with open(out_path, "w") as out_f:
        json.dump(metadata, out_f, indent=2)
    print(f"[{directory}] Generated metadata.json -> {len(metadata['chunks'])} chunks | total duration: {metadata['total_duration']:.2f}s")

if __name__ == "__main__":
    import sys
    if len(sys.argv) < 2:
        print("Usage: python3 generate_metadata.py <path_to_video_directory>")
        sys.exit(1)
    generate_metadata(sys.argv[1])
