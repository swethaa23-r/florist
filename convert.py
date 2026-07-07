import glob
import os
from PIL import Image

src_dir = r"C:\Users\SWETHA\.gemini\antigravity\brain\ad75910b-a2ac-48e8-a530-6f24ea960b87"
dest_dir = r"c:\Users\SWETHA\Desktop\florist\assets"

for file in glob.glob(os.path.join(src_dir, "service_*.png")):
    img = Image.open(file)
    # Convert to RGB if it's RGBA
    if img.mode == 'RGBA':
        img = img.convert('RGB')
    
    basename = os.path.splitext(os.path.basename(file))[0]
    # extract the "service_xxx" part and ignore timestamp
    # example: service_wedding_1783406759492
    parts = basename.split('_')
    clean_name = f"{parts[0]}_{parts[1]}" if len(parts) >= 2 else basename
    
    dest_path = os.path.join(dest_dir, f"{clean_name}.webp")
    
    # Save as webp, resize slightly if needed, adjust quality to ensure < 100kb
    # Resize to max 800x800 to help keep size small
    img.thumbnail((800, 800))
    
    quality = 85
    img.save(dest_path, "WEBP", quality=quality)
    
    while os.path.getsize(dest_path) > 100000 and quality > 10:
        quality -= 10
        img.save(dest_path, "WEBP", quality=quality)
        
    print(f"Saved {dest_path} at quality {quality} with size {os.path.getsize(dest_path)} bytes")
