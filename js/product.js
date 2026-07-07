document.addEventListener("DOMContentLoaded", () => {
  setupGallery();
  setupQuantity();
  setupTabs();
});

function setupGallery() {
  const mainImg = document.getElementById('mainImg');
  const mainImgContainer = document.querySelector('.main-img-container');
  const thumbnails = document.querySelectorAll('.thumbnails img');

  // Thumbnail click
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      // Update active state
      thumbnails.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      
      // Update main image source
      mainImg.src = thumb.src;
      
      // Reset zoom
      mainImg.style.transform = 'scale(1)';
    });
  });

  // Zoom effect on hover
  if (mainImgContainer && mainImg) {
    mainImgContainer.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = mainImgContainer.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      
      mainImg.style.transformOrigin = `${x}% ${y}%`;
      mainImg.style.transform = 'scale(2)'; // Adjust scale factor as needed
    });

    mainImgContainer.addEventListener('mouseleave', () => {
      mainImg.style.transform = 'scale(1)';
      mainImg.style.transformOrigin = 'center center';
    });
  }
}

function setupQuantity() {
  const btnMinus = document.getElementById('qtyMinus');
  const btnPlus = document.getElementById('qtyPlus');
  const input = document.getElementById('qtyInput');

  if (btnMinus && btnPlus && input) {
    btnMinus.addEventListener('click', () => {
      let val = parseInt(input.value);
      if (val > 1) {
        input.value = val - 1;
      }
    });

    btnPlus.addEventListener('click', () => {
      let val = parseInt(input.value);
      if (val < 10) { // arbitrary max limit
        input.value = val + 1;
      }
    });
  }
}

function setupTabs() {
  const headers = document.querySelectorAll('.tab-header');
  const contents = document.querySelectorAll('.tab-content');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      // Remove active from all
      headers.forEach(h => h.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Add active to clicked
      header.classList.add('active');
      const targetId = header.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });
}


function toggleWishlistProduct(btn) {
  const icon = btn.querySelector('i');
  if (icon.classList.contains('fa-regular')) {
    icon.classList.remove('fa-regular');
    icon.classList.add('fa-solid');
    icon.style.color = '#ff4757';
  } else {
    icon.classList.remove('fa-solid');
    icon.classList.add('fa-regular');
    icon.style.color = '';
  }
}
