#!/bin/bash

mkdir -p books/visual-books

for video in tmp/*.mp4; do
    [ -e "$video" ] || continue
    
    filename=$(basename "$video" .mp4)
    out_dir="books/visual-books/$filename"
    mkdir -p "$out_dir"
    
    echo "Processing $video -> $out_dir/"
    
    # Split the video
    ffmpeg -i "$video" -map 0 -c:v libx264 -c:a aac -f segment -segment_time 60 -reset_timestamps 1 -segment_start_number 1 "$out_dir/%d.mp4"
    
    # Generate metadata using our python script
    python3 scripts/generate_metadata.py "$out_dir"
    
    echo "Finished splitting and analyzing $filename"
    echo "--------------------------"
done

echo "All videos have been split and analyzed successfully!"
