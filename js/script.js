document.addEventListener('DOMContentLoaded', () => {
  // Loader
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 500);
    }, 1500); // Simulated loading time
  }


  // Navbar Scroll & Progress Bar
  const navbar = document.querySelector('.navbar');
  const scrollProgress = document.getElementById('scrollProgress');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  
  window.addEventListener('scroll', () => {
    // Navbar styling
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Progress Bar
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight * 100}%`;
    if (scrollProgress) scrollProgress.style.width = scroll;

    // Scroll to Top Button
    if (scrollTopBtn) {
      if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      
      // Toggle hamburger icon to close (X) icon
      const icon = hamburger.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
          document.body.style.overflow = 'hidden'; // Lock scroll
          const petals = document.getElementById('petals-container');
          if (petals) petals.style.display = 'none'; // Stop background animation
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
          document.body.style.overflow = ''; // Unlock scroll
          const petals = document.getElementById('petals-container');
          if (petals) petals.style.display = 'block'; // Resume background animation
        }
      }
    });

    // Close menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
          document.body.style.overflow = ''; // Unlock scroll
          const petals = document.getElementById('petals-container');
          if (petals) petals.style.display = 'block'; // Resume background animation
        }
      });
    });
  }

  // Global Footer Injection
  const footerElement = document.querySelector('footer');
  if (footerElement) {
    footerElement.className = 'main-footer';
    footerElement.style.cssText = 'background: var(--color-surface); color: var(--color-text); padding: 80px 0 20px; border-top: 1px solid var(--color-border); position: relative; overflow: hidden;';
    footerElement.innerHTML = `
      <div class="footer-bg-animation"></div>
      <div class="container" style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 40px; margin-bottom: 40px; position: relative; z-index: 2;">
        <div class="footer-col fade-up" style="max-width: 300px;">
          <a href="index.html" class="logo" style="margin-bottom: 20px; color: var(--color-text);">
            <img src="stackly%20logo.webp" alt="Stackly" style="height: 40px; width: auto; object-fit: contain;">
          </a>
          <p style="color: var(--color-text-muted); font-size: 0.9rem; line-height: 1.8; margin-bottom: 10px;">Spreading joy and love through beautiful, handcrafted floral arrangements for every special moment in your life.</p>
          <p style="color: var(--color-text-muted); font-size: 0.9rem; line-height: 1.8;">
            <strong>Address:</strong> MMR Complex, Chinna thirupathi, Salem-636 003<br>
            <strong>Ph:</strong> 9876543210<br>
            <strong>Email:</strong> hello@thestackly.com
          </p>
        </div>
        <div class="footer-col fade-up" style="transition-delay: 0.1s;">
          <h4 style="margin-bottom: 25px; font-family: var(--font-heading); font-size: 1.2rem; color: var(--color-text);">Quick Links</h4>
          <ul class="footer-links" style="display: flex; flex-direction: column; gap: 12px; color: var(--color-text-muted); list-style: none; padding: 0; margin: 0;">
            <li><a href="shop.html">Shop</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="404.html">Privacy Policy</a></li>
            <li><a href="404.html">Terms</a></li>
          </ul>
        </div>
        <div class="footer-col fade-up" style="transition-delay: 0.2s;">
          <h4 style="margin-bottom: 25px; font-family: var(--font-heading); font-size: 1.2rem; color: var(--color-text);">Customer Care</h4>
          <ul class="footer-links" style="display: flex; flex-direction: column; gap: 12px; color: var(--color-text-muted); list-style: none; padding: 0; margin: 0;">
            <li><a href="contact.html">Contact</a></li>
            <li><a href="404.html">Shipping Policy</a></li>
            <li><a href="404.html">Returns & Refunds</a></li>
          </ul>
        </div>
        <div class="footer-col fade-up" style="transition-delay: 0.3s; max-width: 300px;">
          <h4 style="margin-bottom: 25px; font-family: var(--font-heading); font-size: 1.2rem; color: var(--color-text);">Newsletter</h4>
          <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 15px;">Subscribe for updates and exclusive offers.</p>
          <form class="footer-newsletter" onsubmit="event.preventDefault(); alert('Subscribed!');">
            <input type="email" placeholder="Your email address" required>
            <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
          </form>
          <div class="social-links" style="display: flex; gap: 15px; margin-top: 25px;">
            <a href="404.html" class="social-icon"><i class="fa-brands fa-instagram"></i></a>
            <a href="404.html" class="social-icon"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="404.html" class="social-icon"><i class="fa-brands fa-pinterest-p"></i></a>
          </div>
        </div>
      </div>
      <div class="container text-center footer-bottom" style="border-top: 1px solid var(--color-border); padding-top: 25px; color: var(--color-text-muted); font-size: 0.9rem; position: relative; z-index: 2;">
        <p>&copy; 2026 Stackly All Rights Reserved.</p>
      </div>
    `;
  }

  // Animations using Intersection Observer
  const fadeElements = document.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right, .zoom-in');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  fadeElements.forEach(el => fadeObserver.observe(el));

  // Floating Petals Animation
  const currentPath = window.location.pathname.toLowerCase();
  if (!currentPath.includes('dashboard') && !currentPath.includes('admin')) {
    createPetals();
  }
});

function createPetals() {
  const petalsContainer = document.createElement('div');
  petalsContainer.id = 'petals-container';
  petalsContainer.style.position = 'fixed';
  petalsContainer.style.top = '0';
  petalsContainer.style.left = '0';
  petalsContainer.style.width = '100%';
  petalsContainer.style.height = '100%';
  petalsContainer.style.pointerEvents = 'none';
  petalsContainer.style.zIndex = '0';
  document.body.appendChild(petalsContainer);

  const petalImages = [
    '🌸', '🌺', '🍃' // Using emojis as placeholders, ideally these would be transparent PNGs
  ];

  for (let i = 0; i < 15; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.innerText = petalImages[Math.floor(Math.random() * petalImages.length)];
    petal.style.fontSize = Math.random() * 10 + 15 + 'px';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animation = `floatPetal ${Math.random() * 10 + 10}s linear infinite`;
    petal.style.animationDelay = `${Math.random() * 5}s`;
    petal.style.opacity = Math.random() * 0.5 + 0.3;
    petalsContainer.appendChild(petal);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Carousel Logic (Best Sellers & Testimonials)
  const carousels = document.querySelectorAll('.carousel-container');
  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    if(slides.length === 0) return;
    let currentIndex = 0;
    
    setInterval(() => {
      currentIndex++;
      if(currentIndex >= slides.length) {
        currentIndex = 0;
        track.style.transition = 'none'; // reset without transition
        track.style.transform = `translateX(0)`;
        // trigger reflow
        void track.offsetWidth;
        track.style.transition = 'transform 0.5s ease-in-out';
      } else {
        const slideWidth = slides[0].getBoundingClientRect().width;
        // gap is 30px
        track.style.transform = `translateX(-${currentIndex * (slideWidth + 30)}px)`;
      }
    }, 4000);
  });

  // Animated Counters
  const counters = document.querySelectorAll('.counter-value');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.getAttribute('data-target');
        let count = 0;
        const speed = target / 50;
        
        const updateCount = () => {
          count += speed;
          if (count < target) {
            entry.target.innerText = Math.ceil(count);
            setTimeout(updateCount, 40);
          } else {
            entry.target.innerText = target;
          }
        };
        updateCount();
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => counterObserver.observe(counter));
});
