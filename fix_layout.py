import os
import re

nav_html = """
  <!-- Navbar -->
  <nav class="navbar scrolled">
    <div class="container nav-container">
      <a href="index.html" class="logo"><img src="stackly%20logo.webp" alt="Stackly" style="height: 40px; width: auto; object-fit: contain;"></a>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="shop.html">Shop</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <div class="nav-icons">
        <a href="login.html"><i class="fa-regular fa-user"></i></a>
      </div>
    </div>
  </nav>
"""

footer_html = "\n  <footer></footer>\n"
script_html = '<script src="js/script.js"></script>\n'

files_missing_footer = ["404.html", "admin.html", "cart.html", "checkout.html", "dashboard.html", "login.html", "products.html", "signup.html"]

for f in files_missing_footer:
    with open(f, "r", encoding="utf-8") as file:
        content = file.read()
    
    if "<footer" not in content:
        # inject before <script src="js/script.js"> or </body>
        if "<script src=\"js/script.js\">" in content:
            content = content.replace("<script src=\"js/script.js\">", footer_html + "  <script src=\"js/script.js\">")
        else:
            content = content.replace("</body>", footer_html + "</body>")
            
        with open(f, "w", encoding="utf-8") as file:
            file.write(content)
        print(f"Added footer to {f}")

# Fix 404.html nav
with open("404.html", "r", encoding="utf-8") as file:
    content = file.read()
if "<nav" not in content:
    content = content.replace("<body>", "<body>\n" + nav_html)
    with open("404.html", "w", encoding="utf-8") as file:
        file.write(content)
    print("Added nav to 404.html")

# Fix products.html script
with open("products.html", "r", encoding="utf-8") as file:
    content = file.read()
if "script.js" not in content:
    content = content.replace("</body>", script_html + "</body>")
    with open("products.html", "w", encoding="utf-8") as file:
        file.write(content)
    print("Added script to products.html")
