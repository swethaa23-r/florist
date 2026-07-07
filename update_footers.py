import os
import re
import glob

new_footer = """  <!-- Footer -->
  <footer class="main-footer" style="background: var(--color-surface); color: var(--color-text); padding: 80px 0 20px; border-top: 1px solid var(--color-border); position: relative; overflow: hidden;">
    <div class="footer-bg-animation"></div>
    <div class="container" style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 40px; margin-bottom: 40px; position: relative; z-index: 2;">
      <div class="footer-col fade-up" style="max-width: 300px;">
        <a href="index.html" class="logo" style="margin-bottom: 20px; color: var(--color-text);">
          <i class="fa-solid fa-fan" style="color: var(--color-primary);"></i> Bloom & Co.
        </a>
        <p style="color: var(--color-text-muted); font-size: 0.9rem; line-height: 1.8;">Spreading joy and love through beautiful, handcrafted floral arrangements for every special moment in your life.</p>
        <div class="social-links" style="display: flex; gap: 15px; margin-top: 25px;">
          <a href="#" class="social-icon"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" class="social-icon"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="social-icon"><i class="fa-brands fa-pinterest-p"></i></a>
        </div>
      </div>
      <div class="footer-col fade-up" style="transition-delay: 0.1s;">
        <h4 style="margin-bottom: 25px; font-family: var(--font-heading); font-size: 1.2rem; color: var(--color-text);">Quick Links</h4>
        <ul class="footer-links" style="display: flex; flex-direction: column; gap: 12px; color: var(--color-text-muted);">
          <li><a href="shop.html">Shop</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms</a></li>
        </ul>
      </div>
      <div class="footer-col fade-up" style="transition-delay: 0.2s;">
        <h4 style="margin-bottom: 25px; font-family: var(--font-heading); font-size: 1.2rem; color: var(--color-text);">Customer Care</h4>
        <ul class="footer-links" style="display: flex; flex-direction: column; gap: 12px; color: var(--color-text-muted);">
          <li><a href="contact.html">Contact</a></li>
          <li><a href="#">Shipping Policy</a></li>
          <li><a href="#">Returns & Refunds</a></li>
        </ul>
      </div>
      <div class="footer-col fade-up" style="transition-delay: 0.3s; max-width: 300px;">
        <h4 style="margin-bottom: 25px; font-family: var(--font-heading); font-size: 1.2rem; color: var(--color-text);">Newsletter</h4>
        <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 15px;">Subscribe for updates and exclusive offers.</p>
        <form class="footer-newsletter">
          <input type="email" placeholder="Your email address" required>
          <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
        </form>
      </div>
    </div>
    <div class="container text-center footer-bottom" style="border-top: 1px solid var(--color-border); padding-top: 25px; color: var(--color-text-muted); font-size: 0.9rem; position: relative; z-index: 2;">
      <p>&copy; 2026 Bloom & Co. All Rights Reserved.</p>
    </div>
  </footer>"""

css_content = """
/* Footer Styles & Animations */
.main-footer .footer-col {
  flex: 1;
  min-width: 200px;
}
.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--color-text);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.social-icon:hover {
  transform: translateY(-5px);
  color: var(--color-surface);
  background: var(--color-primary);
  border-color: var(--color-primary);
  box-shadow: 0 10px 20px rgba(248, 200, 220, 0.4);
}
.footer-links a {
  position: relative;
  display: inline-block;
  transition: color 0.3s ease;
}
.footer-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: var(--color-primary);
  transition: width 0.3s ease;
}
.footer-links a:hover {
  color: var(--color-primary);
  transform: translateX(5px);
}
.footer-links a:hover::after {
  width: 100%;
}
.footer-newsletter {
  display: flex;
  position: relative;
}
.footer-newsletter input {
  width: 100%;
  padding: 12px 45px 12px 15px;
  border: 1px solid var(--color-border);
  border-radius: 30px;
  background: var(--glass-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  outline: none;
  transition: border-color 0.3s ease;
}
.footer-newsletter input:focus {
  border-color: var(--color-primary);
}
.footer-newsletter button {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: var(--color-primary);
  border: none;
  color: var(--color-surface);
  cursor: pointer;
  transition: all 0.3s ease;
}
.footer-newsletter button:hover {
  background: var(--color-accent);
  transform: translateY(-50%) scale(1.1);
}
.footer-bg-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, rgba(248, 200, 220, 0.05) 0%, rgba(216, 191, 216, 0.05) 100%);
  z-index: 1;
  pointer-events: none;
}
.footer-bg-animation::before, .footer-bg-animation::after {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: var(--color-primary);
  filter: blur(100px);
  opacity: 0.1;
  animation: floatBlobs 15s infinite alternate;
}
.footer-bg-animation::before {
  top: -100px;
  left: -100px;
}
.footer-bg-animation::after {
  bottom: -100px;
  right: -100px;
  background: var(--color-secondary);
  animation-duration: 20s;
  animation-direction: alternate-reverse;
}
@keyframes floatBlobs {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(50px, 50px) scale(1.2); }
}
"""

print("Appending CSS...")
with open("c:/Users/SWETHA/Desktop/florist/css/style.css", "a", encoding="utf-8") as f:
    f.write(css_content)

print("Replacing HTML files...")
html_files = glob.glob("c:/Users/SWETHA/Desktop/florist/*.html")
pattern = re.compile(r'<!-- Footer.*?</footer>', re.DOTALL | re.IGNORECASE)

# Sometimes the comment is just `<footer...` without `<!-- Footer`. Let's handle both.
pattern_fallback = re.compile(r'<footer.*?</footer>', re.DOTALL | re.IGNORECASE)

for file in html_files:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    if pattern.search(content):
        new_content = pattern.sub(new_footer, content)
    else:
        # try without comment
        new_content = pattern_fallback.sub(new_footer, content)
        
    with open(file, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Updated {file}")
