document.addEventListener('DOMContentLoaded', () => {
  // Loader
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
      setTimeout(() => loader.remove(), 600);
    }, 1500); // Simulated loading time
  }

  // Set Active Link Based on URL
  const currentUrl = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentUrl) {
      link.classList.add('active');
    }
  });


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

  // Animations using AOS (dynamically loaded and mapped)
  // Performance: Add lazy loading to images
  document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });

  // Map old custom classes to AOS attributes
  const aosMap = {
    'fade-up': 'fade-up',
    'slide-in-left': 'fade-left',
    'slide-in-right': 'fade-right',
    'zoom-in': 'zoom-in',
    'flip-left': 'flip-left', // Support for flip-left
    'fade-down': 'fade-down'  // Support for fade-down
  };

  Object.keys(aosMap).forEach(cls => {
    document.querySelectorAll('.' + cls).forEach(el => {
      el.setAttribute('data-aos', aosMap[cls]);
      el.classList.remove(cls);
    });
  });

  // Load AOS dynamically
  if (!document.querySelector('link[href*="aos.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
    document.head.appendChild(link);
  }
  
  if (typeof AOS === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    script.onload = () => {
      AOS.init({ duration: 800, once: true, offset: 50 });
    };
    document.body.appendChild(script);
  } else {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }

  // Floating Petals Animation
  const currentPath = window.location.pathname.toLowerCase();
  if (!currentPath.includes('dashboard') && !currentPath.includes('admin')) {
    createPetals();
  }

  // Hero Background Auto-scroll
  const heroBgs = document.querySelectorAll('.hero-bg');
  if(heroBgs.length > 1) {
    let currentHeroIndex = 0;
    setInterval(() => {
      heroBgs[currentHeroIndex].classList.remove('active');
      currentHeroIndex = (currentHeroIndex + 1) % heroBgs.length;
      heroBgs[currentHeroIndex].classList.add('active');
    }, 5000); // Changes image every 5 seconds
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

  // Performance: Reduce heavy animations by limiting petals on mobile
  const maxPetals = window.innerWidth <= 768 ? 5 : 12;

  for (let i = 0; i < maxPetals; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.innerText = petalImages[Math.floor(Math.random() * petalImages.length)];
    petal.style.fontSize = Math.random() * 10 + 15 + 'px';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animation = `floatPetal ${Math.random() * 10 + 15}s linear infinite`; // Slower for performance
    petal.style.animationDelay = `${Math.random() * 5}s`;
    petal.style.opacity = Math.random() * 0.4 + 0.2; // slightly softer
    petalsContainer.appendChild(petal);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Carousel Logic (Best Sellers & Testimonials)
  const carousels = document.querySelectorAll('.carousel-container');
  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    if(!track || track.children.length === 0) return;
    
    setInterval(() => {
      const slideWidth = track.children[0].getBoundingClientRect().width;
      // Animate to the left
      track.style.transition = 'transform 0.5s ease-in-out';
      track.style.transform = `translateX(-${slideWidth + 30}px)`; // 30px is the gap

      // After transition, move the first slide to the end and reset transform
      setTimeout(() => {
        track.style.transition = 'none';
        track.appendChild(track.children[0]);
        track.style.transform = `translateX(0)`;
      }, 500);
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

  // Product Actions (Add to Cart, Wishlist, Quick View)
  const actionBtns = document.querySelectorAll('.action-btn');
  const modal = document.getElementById('quickViewModal');
  const modalClose = document.getElementById('closeModal');

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
    });
    modal.addEventListener('click', (e) => {
      if(e.target === modal) modal.classList.remove('active');
    });
  }

  let cartCount = 0;
  const cartBadge = document.getElementById('cartBadge');

  actionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const title = btn.getAttribute('title');
      const productCard = btn.closest('.product-card');
      
      if (title === 'Add to Cart') {
        cartCount++;
        if(cartBadge) {
          cartBadge.innerText = cartCount;
          cartBadge.style.display = 'block';
          cartBadge.style.transition = 'transform 0.2s';
          cartBadge.style.transform = 'scale(1.3)';
          setTimeout(() => cartBadge.style.transform = 'scale(1)', 200);
        }
        window.showToast('Added to Cart!');
      } else if (title === 'Wishlist') {
        const icon = btn.querySelector('i');
        if (icon && icon.classList.contains('fa-regular')) {
          icon.classList.remove('fa-regular');
          icon.classList.add('fa-solid');
          icon.style.color = '#ff4d4d'; // Red heart
          window.showToast('Added to Wishlist!');
        } else if (icon) {
          icon.classList.remove('fa-solid');
          icon.classList.add('fa-regular');
          icon.style.color = ''; 
          window.showToast('Removed from Wishlist');
        }
      } else if (title === 'Quick View' && modal && productCard) {
        const img = productCard.querySelector('img').src;
        const name = productCard.querySelector('.product-title').innerHTML.replace(/<br\s*[\/]?>/gi, ' ');
        const price = productCard.querySelector('.product-price').innerText;
        
        document.getElementById('modalImg').src = img;
        document.getElementById('modalTitle').innerText = name;
        document.getElementById('modalPrice').innerText = price;
        
        modal.classList.add('active');
      }
    });
  });
});

// Global function to show toast
window.showToast = function(message) {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.innerText = message;
    toast.style.bottom = '30px';
    setTimeout(() => {
      toast.style.bottom = '-100px';
    }, 3000);
  }
};

