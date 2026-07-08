const products = [
  { id: 1, name: "Classic Red Roses", price: 85, category: "roses", occasion: "anniversary", rating: 5, date: "2026-06-01", image: "assets/cat_roses.webp", shortDesc: "A timeless classic to express your deepest love and devotion.", fullDesc: "This luxurious arrangement features 24 long-stemmed, premium red roses, expertly arranged with fresh greenery. Perfect for expressing profound love and making any anniversary unforgettable. Includes a beautiful glass vase and complimentary floral food.", availability: "In Stock" },
  { id: 2, name: "Elegant White Lilies", price: 65, category: "lilies", occasion: "sympathy", rating: 4.5, date: "2026-06-15", image: "assets/cat_lilies.webp", shortDesc: "Pure white lilies offering comfort, peace, and stunning elegance.", fullDesc: "Pristine white lilies symbolizing purity and rebirth. Expertly arranged with delicate ferns, this bouquet provides a serene and comforting presence, making it a thoughtful choice for sympathy or peaceful reflection.", availability: "In Stock" },
  { id: 3, name: "Spring Tulips", price: 45, category: "tulips", occasion: "birthday", rating: 4, date: "2026-07-01", image: "assets/cat_tulips.webp", shortDesc: "Bright and cheerful spring tulips to instantly brighten any day.", fullDesc: "A vibrant assortment of farm-fresh tulips in multiple bright colors. These blooms naturally grow and curve in the vase, bringing dynamic life and a breath of fresh spring air to any room. Perfect for birthdays.", availability: "In Stock" },
  { id: 4, name: "Purple Orchids", price: 120, category: "orchids", occasion: "anniversary", rating: 5, date: "2026-05-20", image: "assets/cat_orchids.webp", shortDesc: "Exotic and rare purple orchids representing luxury and strength.", fullDesc: "Stunning, long-lasting Phalaenopsis orchids in deep purple hues. These elegant, exotic blooms are carefully arranged in a modern ceramic pot, offering weeks of breathtaking beauty and sophisticated luxury.", availability: "Low Stock" },
  { id: 5, name: "Golden Sunflowers", price: 50, category: "sunflowers", occasion: "birthday", rating: 4.8, date: "2026-06-10", image: "assets/cat_sunflowers.webp", shortDesc: "Warm, radiant sunflowers that bring a smile to everyone's face.", fullDesc: "Large, brilliant yellow sunflowers guaranteed to brighten up anyone's day. Complemented with solidago and rustic greenery, this cheerful bouquet feels like a warm hug and is an ideal birthday surprise.", availability: "In Stock" },
  { id: 6, name: "Mixed Pastel Bouquet", price: 75, category: "mixed", occasion: "wedding", rating: 4.7, date: "2026-05-10", image: "assets/cat_mixed.webp", shortDesc: "A soft, romantic blend of pastel blooms for special milestones.", fullDesc: "A whimsical, romantic arrangement featuring soft pink roses, lavender carnations, and creamy lisianthus. Designed by our master florists to capture the gentle, loving essence of a romantic celebration or wedding.", availability: "In Stock" },
  { id: 7, name: "Bridal White Bouquet", price: 150, category: "mixed", occasion: "wedding", rating: 5, date: "2026-04-01", image: "assets/cat_wedding.webp", shortDesc: "The ultimate bridal arrangement featuring pristine white premium blooms.", fullDesc: "Our signature wedding arrangement. An opulent, hand-tied bouquet featuring white peonies, garden roses, and delicate freesia. Carefully curated to provide an unforgettable statement piece for your special day.", availability: "Pre-order Only" },
  { id: 8, name: "Peaceful Sympathy Wreath", price: 95, category: "mixed", occasion: "sympathy", rating: 4.6, date: "2026-03-15", image: "assets/cat_sympathy.webp", shortDesc: "A respectful, beautiful wreath conveying deepest sympathies.", fullDesc: "A classic, circular wreath elegantly crafted with white chrysanthemums, roses, and lush green foliage. A timeless and respectful tribute to honor a loved one and offer peace and comfort.", availability: "In Stock" },
  { id: 9, name: "Luxury Violet Dreams", price: 110, category: "orchids", occasion: "anniversary", rating: 4.9, date: "2026-07-05", image: "assets/feat_2.webp", shortDesc: "An enchanting mix of violet and lavender flowers for a calming aesthetic.", fullDesc: "A sophisticated blend of premium violet orchids, lavender roses, and purple statice. This enchanting arrangement is perfect for celebrating a milestone anniversary with a touch of royal luxury.", availability: "Low Stock" },
  { id: 10, name: "Sunshine Daisies", price: 55, category: "sunflowers", occasion: "birthday", rating: 4.2, date: "2026-06-25", image: "assets/feat_3.webp", shortDesc: "A sunny, joyful arrangement perfect for celebrating life's moments.", fullDesc: "Bright yellow and white daisies arranged playfully with baby's breath. A lighthearted, fun, and extremely cheerful bouquet that perfectly captures the joyous spirit of a birthday celebration.", availability: "In Stock" },
  { id: 11, name: "Ruby Red Luxury", price: 200, category: "roses", occasion: "wedding", rating: 5, date: "2026-07-02", image: "assets/best_1.webp", shortDesc: "Our most premium, breathtaking ruby red roses in luxury packaging.", fullDesc: "The pinnacle of floral luxury. 50 spectacular, velvety ruby red roses arranged in an oversized, premium presentation box. The ultimate romantic gesture designed to leave them completely breathless.", availability: "In Stock" },
  { id: 12, name: "White Elegance", price: 130, category: "lilies", occasion: "anniversary", rating: 4.8, date: "2026-06-28", image: "assets/best_3.webp", shortDesc: "A sophisticated arrangement of pristine white lilies and roses.", fullDesc: "An immaculate, sophisticated combination of fragrant white oriental lilies and creamy white roses. Clean, modern, and breathtakingly elegant, making it an incredible centerpiece for an anniversary.", availability: "In Stock" },
  { id: 13, name: "Pink Romance", price: 95, category: "roses", occasion: "anniversary", rating: 4.9, date: "2026-06-05", image: "assets/cat_roses_2.webp", shortDesc: "A lush arrangement of soft pink roses expressing admiration and joy.", fullDesc: "A stunning collection of sweet pink roses symbolizing grace, admiration, and joy. Complemented by delicate waxflowers, this bouquet is a beautiful expression of gentle romance.", availability: "In Stock" },
  { id: 14, name: "Stargazer Delight", price: 70, category: "lilies", occasion: "birthday", rating: 4.6, date: "2026-06-18", image: "assets/cat_lilies_2.webp", shortDesc: "Striking stargaze lilies bringing an elegant fragrance to any space.", fullDesc: "Bold, pink-speckled Stargazer lilies that captivate with their dramatic appearance and intoxicating fragrance. A truly show-stopping gift for someone who appreciates bold beauty.", availability: "Out of Stock" },
  { id: 15, name: "Vibrant Summer Tulips", price: 50, category: "tulips", occasion: "birthday", rating: 4.3, date: "2026-07-03", image: "assets/cat_tulips_2.webp", shortDesc: "A colorful, vibrant mix of yellow and red tulips for a happy occasion.", fullDesc: "A striking contrast of fiery red and bright yellow tulips. This energetic, vibrant bouquet captures the essence of summer and is guaranteed to bring warmth and happiness to any celebration.", availability: "In Stock" },
  { id: 16, name: "Pastel Spring Tulips", price: 60, category: "tulips", occasion: "wedding", rating: 4.7, date: "2026-06-22", image: "assets/cat_tulips_3.webp", shortDesc: "Soft pastel tulips perfect for a gentle, romantic spring statement.", fullDesc: "Delicate pink, white, and soft purple tulips arranged gracefully. A whisper of spring that provides a subtle, romantic touch, perfect for bridal showers or spring weddings.", availability: "In Stock" },
  { id: 17, name: "Rare Blue Orchids", price: 140, category: "orchids", occasion: "sympathy", rating: 5.0, date: "2026-05-25", image: "assets/cat_orchids_2.webp", shortDesc: "Exquisite blue orchids symbolizing peace, rarity, and spirituality.", fullDesc: "Extraordinary, dyed blue dendrobium orchids that mesmerize with their unique, vivid color. An exotic, spiritual, and deeply peaceful arrangement that stands out in any setting.", availability: "Low Stock" },
  { id: 18, name: "Massive Golden Harvest", price: 80, category: "sunflowers", occasion: "anniversary", rating: 4.9, date: "2026-06-12", image: "assets/cat_sunflowers_2.webp", shortDesc: "A massive, awe-inspiring bouquet of the finest golden sunflowers.", fullDesc: "An abundant, oversized gathering of our largest, most spectacular sunflowers. Arranged with premium autumnal foliage, this grand bouquet feels like carrying a piece of the golden hour sunshine.", availability: "In Stock" }
];

let filteredProducts = [...products];
let currentPage = 1;
const itemsPerPage = 6;
let currentModalProduct = null;
let currentModalQty = 1;

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupEventListeners();
});

function setupEventListeners() {
  // Search
  const searchInput = document.getElementById("searchInput");
  if(searchInput) searchInput.addEventListener("input", handleFilters);

  // Filter Button
  const applyFiltersBtn = document.getElementById("applyFiltersBtn");
  if(applyFiltersBtn) applyFiltersBtn.addEventListener("click", handleFilters);

  // Sort
  const sortSelect = document.getElementById("sortSelect");
  if(sortSelect) sortSelect.addEventListener("change", handleFilters);

  // Checkboxes
  const checkboxes = document.querySelectorAll('.filter-cb');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', handleFilters);
  });

  // View Toggles
  const gridBtn = document.getElementById("gridBtn");
  const listBtn = document.getElementById("listBtn");
  const shopProducts = document.getElementById("shopProducts");

  if (gridBtn && listBtn && shopProducts) {
    gridBtn.addEventListener("click", () => {
      shopProducts.classList.remove("list-view");
      gridBtn.classList.add("active");
      listBtn.classList.remove("active");
    });
    listBtn.addEventListener("click", () => {
      shopProducts.classList.add("list-view");
      listBtn.classList.add("active");
      gridBtn.classList.remove("active");
    });
  }

  // Modal close
  document.querySelector('.modal-close')?.addEventListener('click', closeQuickView);
  document.getElementById('quickViewModal')?.addEventListener('click', (e) => {
    if(e.target.id === 'quickViewModal') closeQuickView();
  });

  // Modal Quantity
  const qtyMinus = document.getElementById('modalQtyMinus');
  const qtyPlus = document.getElementById('modalQtyPlus');
  const qtyDisplay = document.getElementById('modalQty');
  if(qtyMinus && qtyPlus && qtyDisplay) {
    qtyMinus.addEventListener('click', () => {
      if(currentModalQty > 1) {
        currentModalQty--;
        qtyDisplay.textContent = currentModalQty;
      }
    });
    qtyPlus.addEventListener('click', () => {
      currentModalQty++;
      qtyDisplay.textContent = currentModalQty;
    });
  }

  // Modal Actions
  const btnAdd = document.getElementById('modalAddToCart');
  if(btnAdd) {
    btnAdd.addEventListener('click', () => {
      if(currentModalProduct) {
        if(typeof window.showToast === 'function') {
          window.showToast(`Added ${currentModalQty}x ${currentModalProduct.name} to Cart!`);
        }
        const cartBadge = document.getElementById('cartBadge');
        if (cartBadge) {
          cartBadge.style.display = 'inline-block';
          let currentCount = parseInt(cartBadge.textContent || "0");
          cartBadge.textContent = currentCount + currentModalQty;
        }
        closeQuickView();
      }
    });
  }

  const btnWishlist = document.getElementById('modalWishlist');
  if(btnWishlist) {
    btnWishlist.addEventListener('click', () => {
      toggleWishlist(btnWishlist);
    });
  }
}

function handleFilters() {
  const searchTerm = document.getElementById("searchInput")?.value.toLowerCase() || "";
  
  // Get active categories
  const catCbs = Array.from(document.querySelectorAll('.filter-category:checked')).map(cb => cb.value);
  const occCbs = Array.from(document.querySelectorAll('.filter-occasion:checked')).map(cb => cb.value);
  const priceCbs = Array.from(document.querySelectorAll('.filter-price:checked')).map(cb => cb.value);

  filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm);
    const matchesCat = catCbs.length === 0 || catCbs.includes(p.category);
    const matchesOcc = occCbs.length === 0 || occCbs.includes(p.occasion);
    
    let matchesPrice = true;
    if (priceCbs.length > 0) {
      matchesPrice = priceCbs.some(range => {
        if (range === "under50") return p.price < 50;
        if (range === "50to100") return p.price >= 50 && p.price <= 100;
        if (range === "100to150") return p.price > 100 && p.price <= 150;
        if (range === "150to200") return p.price > 150 && p.price <= 200;
        if (range === "200to300") return p.price > 200 && p.price <= 300;
        if (range === "over300") return p.price > 300;
        return false;
      });
    }

    return matchesSearch && matchesCat && matchesOcc && matchesPrice;
  });

  // Sorting
  const sortVal = document.getElementById("sortSelect")?.value;
  if (sortVal === "newest") filteredProducts.sort((a,b) => new Date(b.date) - new Date(a.date));
  if (sortVal === "price") filteredProducts.sort((a,b) => a.price - b.price);
  if (sortVal === "popularity") filteredProducts.sort((a,b) => b.rating - a.rating);

  currentPage = 1;
  renderProducts();
}

function renderProducts() {
  const container = document.getElementById("shopProducts");
  const pagination = document.getElementById("pagination");
  if(!container) return;

  container.innerHTML = "";
  
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = filteredProducts.slice(start, end);

  if (paginatedItems.length === 0) {
    container.innerHTML = "<p>No products found matching your criteria.</p>";
    if(pagination) pagination.innerHTML = "";
    return;
  }

  paginatedItems.forEach((p, index) => {
    const stars = Array(Math.floor(p.rating)).fill('<i class="fa-solid fa-star"></i>').join('') + 
                 (p.rating % 1 !== 0 ? '<i class="fa-solid fa-star-half-stroke"></i>' : '');
    
    const delay = index * 0.1;
    
    container.innerHTML += `
      <div class="product-card" style="opacity: 0; animation: fadeIn 0.5s forwards ${delay}s;">
        <div class="product-img-wrapper" style="position:relative;">
          <img src="${p.image}" alt="${p.name}">
          <div style="position: absolute; top: 15px; right: 15px; display: flex; flex-direction: column; gap: 10px; z-index: 2;">
            <button class="btn" style="padding: 10px; border-radius: 50%; width:40px; height:40px; display:flex; align-items:center; justify-content:center;" onclick="toggleWishlist(this)" title="Wishlist">
              <i class="fa-regular fa-heart"></i>
            </button>
            <button class="btn" style="padding: 10px; border-radius: 50%; width:40px; height:40px; display:flex; align-items:center; justify-content:center;" onclick="openQuickView(${p.id})" title="Quick View">
              <i class="fa-regular fa-eye"></i>
            </button>
          </div>
        </div>
        
        <div style="display: flex;">
          <button style="flex: 1; padding: 12px; background: #ffc107; color: #333; border: none; font-size: 0.9rem; font-weight: 500; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 5px; transition: opacity 0.3s;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'" onclick="if(typeof window.showToast === 'function'){window.showToast('Added ${p.name} to Cart!');} let cb=document.getElementById('cartBadge'); if(cb){cb.style.display='inline-block'; cb.textContent=parseInt(cb.textContent||'0')+1;}"><i class="fa-solid fa-cart-shopping"></i> Cart</button>
          <button style="flex: 1; padding: 12px; background: #333; color: white; border: none; font-size: 0.9rem; font-weight: 500; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 5px; transition: opacity 0.3s;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'" onclick="window.location.href='checkout.html'"><i class="fa-solid fa-bolt"></i> Buy Now</button>
        </div>

        <div class="product-info" style="padding: 20px; text-align: center;">
          <h3 style="font-size: 1.2rem; margin-bottom: 10px; cursor: pointer;" onclick="openQuickView(${p.id})">${p.name}</h3>
          <div class="stars" style="color: var(--color-accent); margin-bottom: 10px;">${stars}</div>
          <p class="price" style="font-size: 1.2rem; font-weight: bold; color: var(--color-primary); margin-bottom: 15px;">$${p.price.toFixed(2)}</p>
          <p class="short-desc" style="color: var(--color-text-muted); margin-bottom: 0; font-size: 0.9rem;">${p.shortDesc}</p>
        </div>
      </div>
    `;
  });

  renderPagination();
}

function renderPagination() {
  const pagination = document.getElementById("pagination");
  if(!pagination) return;
  
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  pagination.innerHTML = "";

  if(totalPages <= 1) return;

  // Prev Button
  const prevBtn = document.createElement("button");
  prevBtn.className = `page-btn`;
  prevBtn.innerHTML = "&lt;-";
  if (currentPage === 1) prevBtn.style.opacity = "0.5";
  prevBtn.onclick = () => {
    if(currentPage > 1) {
      currentPage--;
      renderProducts();
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  };
  pagination.appendChild(prevBtn);

  for(let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.className = `page-btn ${i === currentPage ? "active" : ""}`;
    btn.textContent = i;
    btn.onclick = () => {
      currentPage = i;
      renderProducts();
      window.scrollTo({ top: 200, behavior: 'smooth' });
    };
    pagination.appendChild(btn);
  }

  // Next Button
  const nextBtn = document.createElement("button");
  nextBtn.className = `page-btn`;
  nextBtn.innerHTML = "-&gt;";
  if (currentPage === totalPages) nextBtn.style.opacity = "0.5";
  nextBtn.onclick = () => {
    if(currentPage < totalPages) {
      currentPage++;
      renderProducts();
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  };
  pagination.appendChild(nextBtn);
}

function toggleWishlist(btn) {
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


function openQuickView(id) {
  const product = products.find(p => p.id === id);
  if(!product) return;

  currentModalProduct = product;
  currentModalQty = 1;

  const modal = document.getElementById('quickViewModal');
  document.getElementById('modalImg').src = product.image;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalPrice').textContent = '$' + product.price.toFixed(2);
  
  // New Fields
  document.getElementById('modalCategory').querySelector('span').textContent = product.category;
  document.getElementById('modalShortDesc').textContent = product.shortDesc;
  document.getElementById('modalFullDesc').textContent = product.fullDesc;
  document.getElementById('modalQty').textContent = currentModalQty;
  
  // Availability
  const availEl = document.getElementById('modalAvailability');
  availEl.innerHTML = product.availability === "In Stock" ? 
    `<i class="fa-solid fa-check-circle"></i> <span>In Stock</span>` : 
    `<i class="fa-solid fa-exclamation-circle"></i> <span>${product.availability}</span>`;
  availEl.style.color = product.availability === "In Stock" ? "#2ecc71" : "#e67e22";

  // Rating
  const ratingEl = document.getElementById('modalRating');
  ratingEl.innerHTML = '';
  for(let i=1; i<=5; i++) {
    if(i <= Math.floor(product.rating)) {
      ratingEl.innerHTML += '<i class="fa-solid fa-star"></i>';
    } else if (i - 0.5 === product.rating) {
      ratingEl.innerHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
    } else {
      ratingEl.innerHTML += '<i class="fa-regular fa-star"></i>';
    }
  }

  // Reset wishlist button state in modal
  const btnWishlistIcon = document.getElementById('modalWishlist').querySelector('i');
  btnWishlistIcon.classList.remove('fa-solid');
  btnWishlistIcon.classList.add('fa-regular');
  btnWishlistIcon.style.color = '';
  
  modal.classList.add('active');
}

function closeQuickView() {
  document.getElementById('quickViewModal').classList.remove('active');
}
