import re

categories = {
    "Pregnancy & Babies": ["pregnancy", "baby", "babys", "kids time", "growing up"],
    "Encyclopedias & Reference": ["encyclopedia", "picturepedia", "dictionary", "big book of knowledge", "1000 words", "100 people"],
    "Human Body & Wellness": ["body", "brain", "yoga", "medical", "symptoms", "workout", "me and my"],
    "Animals & Nature": ["animal", "plant", "ocean", "dinosaur", "bug", "bird", "weather", "wood land", "nature", "wildlife", "tree", "seed", "flower", "water", "sea", "whale", "dolphin", "dog", "cat", "bunny", "butterfly", "chick", "fox", "frog", "kitten", "lamb", "mouse", "penguin", "pig", "pony", "puppy", "amazon", "life cycle"],
    "Space & Universe": ["space", "universe", "sky", "star", "mars", "planets"],
    "Science, Engineering & Math": ["science", "physics", "chemistry", "biology", "math", "code", "coding", "engineering", "invention", "tech", "element", "periodic table", "scientist", "steam", "maker"],
    "History & Geography": ["history", "world war", "geography", "earth", "map", "timeline", "journey", "country", "civil war", "vietnam war", "flag", "state", "atlas", "wonders", "civilization", "stone age"],
    "Life Skills, Arts & Activities": ["art", "music", "sew", "cook", "craft", "business", "english", "law", "management", "philosophy", "religion", "myth", "chess", "paper", "paint", "fashion", "movie", "tea", "herb", "shakespeare", "poetry", "mahabharata", "bible", "gladiator", "poem", "career"],
    "Media & Pop Culture": ["avenger", "disney", "marvel", "mandalorian"],
    "Other": []
}

with open("pages/visual_index.html", "r", encoding="utf-8") as f:
    content = f.read()

header_match = re.search(r'(.*?<section\s+class="section">)', content, re.DOTALL)
if header_match:
    header = header_match.group(1)
    rest_of_file = content[header_match.end():]
    
    footer_idx = rest_of_file.rfind('</section>')
    footer = rest_of_file[footer_idx+10:]
    
    middle = rest_of_file[:footer_idx]
    
    # Extract cards
    cards = re.findall(r'(<a class="card"[\s\S]*?</a>)', middle)
    
    grouped_cards = {k: [] for k in categories.keys()}
    
    for card in cards:
        title_match = re.search(r'<h2 class="card-title">(.*?)</h2>', card, re.IGNORECASE)
        title = title_match.group(1).lower() if title_match else ""
        
        assigned = False
        for cat, keywords in categories.items():
            if cat == "Other": continue
            for kw in keywords:
                if kw in title:
                    grouped_cards[cat].append(card)
                    assigned = True
                    break
            if assigned:
                break
        
        if not assigned:
            grouped_cards["Other"].append(card)
            
    # Generate new middle content
    new_middle = ""
    for cat, cards in grouped_cards.items():
        if cards: # if not empty
            new_middle += f"""
            <div class="section-head">
                <h2 class="section-title">{cat}</h2>
                <div id="visualCount" class="section-note"></div>
            </div>
            <section id="visualGrid" class="grid">
"""
            new_middle += "\n".join(cards)
            new_middle += """
            </section>
"""

    with open("pages/visual_index.html", "w", encoding="utf-8") as f:
        f.write(header + new_middle + footer)

    print("Successfully processed and grouped visual_index.html.")
else:
    print("Could not find the target section in visual_index.html")
