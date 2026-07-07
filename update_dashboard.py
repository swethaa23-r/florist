import os

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User Dashboard | Stackly</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="css/style.css">
  <style>
    .tab-content { display: none; }
    .tab-content.active { display: block; animation: fadeIn 0.4s ease-out forwards; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    .sidebar-link { display: flex; align-items: center; gap: 15px; padding: 12px 15px; border-radius: 8px; color: var(--color-text-muted); text-decoration: none; transition: all 0.3s ease; font-weight: 500; cursor: pointer; }
    .sidebar-link:hover { background: rgba(248, 200, 220, 0.1); color: var(--color-primary); }
    .sidebar-link.active { background: var(--color-primary); color: #fff; box-shadow: 0 4px 10px rgba(248, 200, 220, 0.3); }
    .admin-layout { display: flex; min-height: calc(100vh - 80px); }
  </style>
</head>
<body style="background: var(--color-surface); padding-top: 80px;">
  
  <!-- Header / Navbar -->
  <nav class="navbar scrolled" style="background: var(--glass-bg); backdrop-filter: blur(10px); border-bottom: 1px solid var(--color-border); height: 80px; position: fixed; top: 0; left: 0; right: 0; z-index: 100;">
    <div class="container nav-container" style="max-width: 100%; padding: 0 40px; display: flex; justify-content: space-between; align-items: center; height: 100%;">
      <a href="index.html" class="logo" style="margin: 0;">
        <img src="stackly%20logo.webp" alt="Stackly" style="height: 40px; width: auto; object-fit: contain;">
      </a>
      <div style="display: flex; gap: 20px; align-items: center;">

        <a href="shop.html" class="btn btn-outline" style="padding: 5px 15px; font-size: 0.9rem;">Continue Shopping</a>
      </div>
    </div>
  </nav>

  <div class="admin-layout">
    <!-- User Sidebar -->
    <aside style="width: 250px; background: var(--glass-bg); border-right: 1px solid var(--color-border); padding: 30px 20px; display: flex; flex-direction: column;">
      
      <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 30px; text-align: center;">
        <img src="https://ui-avatars.com/api/?name=Jane+Doe&background=F8C8DC&color=fff" alt="Profile" style="width: 80px; height: 80px; border-radius: 50%; margin-bottom: 15px;">
        <h3 style="font-size: 1.2rem; margin-bottom: 5px;">Jane Doe</h3>
        <p style="color: var(--color-text-muted); font-size: 0.9rem;">jane.doe@example.com</p>
      </div>

      <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; flex-grow: 1; padding: 0;">
        <li><a class="sidebar-link active" data-target="overview"><i class="fa-solid fa-chart-pie"></i> Overview</a></li>
        <li><a class="sidebar-link" data-target="orders"><i class="fa-solid fa-box"></i> Orders</a></li>
        <li><a class="sidebar-link" data-target="wishlist"><i class="fa-solid fa-heart"></i> Wishlist</a></li>
        <li><a class="sidebar-link" data-target="addresses"><i class="fa-solid fa-location-dot"></i> Addresses</a></li>
        <li><a class="sidebar-link" data-target="settings"><i class="fa-solid fa-gear"></i> Settings</a></li>
      </ul>
      
      <div style="margin-top: auto; padding-top: 20px; border-top: 1px solid var(--color-border);">
        <a href="login.html" class="sidebar-link" style="color: #ff4d4f;"><i class="fa-solid fa-right-from-bracket"></i> Logout</a>
      </div>
    </aside>
    
    <!-- User Content -->
    <main style="flex: 1; padding: 40px; background: var(--color-bg); overflow-y: auto;">
      
      <!-- Overview Section -->
      <section id="overview" class="tab-content active">
        <h1 style="font-size: 2rem; margin-bottom: 30px;">Welcome back, Jane!</h1>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 40px;">
          <div class="glass" style="padding: 20px; border-radius: var(--radius); text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.02); border-bottom: 3px solid var(--color-primary);">
            <i class="fa-solid fa-gem" style="font-size: 2rem; color: var(--color-primary); margin-bottom: 10px;"></i>
            <h3 style="font-size: 1.5rem; margin-bottom: 5px;">Gold Tier</h3>
            <p style="color: var(--color-text-muted); font-size: 0.9rem;">Member Status</p>
          </div>
          <div class="glass" style="padding: 20px; border-radius: var(--radius); text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.02); border-bottom: 3px solid var(--color-accent);">
            <i class="fa-solid fa-seedling" style="font-size: 2rem; color: var(--color-accent); margin-bottom: 10px;"></i>
            <h3 style="font-size: 1.5rem; margin-bottom: 5px;">12</h3>
            <p style="color: var(--color-text-muted); font-size: 0.9rem;">Trees Planted</p>
          </div>
          <div class="glass" style="padding: 20px; border-radius: var(--radius); text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.02); border-bottom: 3px solid var(--color-success);">
            <i class="fa-solid fa-wallet" style="font-size: 2rem; color: var(--color-success); margin-bottom: 10px;"></i>
            <h3 style="font-size: 1.5rem; margin-bottom: 5px;">$25.00</h3>
            <p style="color: var(--color-text-muted); font-size: 0.9rem;">Store Credit</p>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px; margin-bottom: 40px;">
          <div class="glass" style="padding: 25px; border-radius: var(--radius);">
            <h3 style="margin-bottom: 20px; font-size: 1.3rem;">Recent Activity</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="display: flex; align-items: center; gap: 15px; padding-bottom: 15px; border-bottom: 1px solid var(--color-border); margin-bottom: 15px;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(168, 230, 207, 0.2); color: var(--color-success); display: flex; align-items: center; justify-content: center;">
                  <i class="fa-solid fa-check"></i>
                </div>
                <div>
                  <h4 style="font-weight: 500; font-size: 1rem;">Order #ORD-1001 Delivered</h4>
                  <p style="color: var(--color-text-muted); font-size: 0.85rem;">Oct 12, 2026 at 2:30 PM</p>
                </div>
              </li>
              <li style="display: flex; align-items: center; gap: 15px; padding-bottom: 15px; border-bottom: 1px solid var(--color-border); margin-bottom: 15px;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(248, 200, 220, 0.2); color: var(--color-primary); display: flex; align-items: center; justify-content: center;">
                  <i class="fa-solid fa-heart"></i>
                </div>
                <div>
                  <h4 style="font-weight: 500; font-size: 1rem;">Added item to wishlist</h4>
                  <p style="color: var(--color-text-muted); font-size: 0.85rem;">Oct 10, 2026 at 10:15 AM</p>
                </div>
              </li>
              <li style="display: flex; align-items: center; gap: 15px;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255, 221, 153, 0.2); color: #f5b041; display: flex; align-items: center; justify-content: center;">
                  <i class="fa-solid fa-star"></i>
                </div>
                <div>
                  <h4 style="font-weight: 500; font-size: 1rem;">Earned 50 Reward Points</h4>
                  <p style="color: var(--color-text-muted); font-size: 0.85rem;">Sep 25, 2026 at 1:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div class="glass" style="padding: 25px; border-radius: var(--radius); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: linear-gradient(135deg, rgba(248,200,220,0.1), rgba(168,230,207,0.1));">
            <i class="fa-solid fa-gift" style="font-size: 3rem; color: var(--color-primary); margin-bottom: 15px;"></i>
            <h3 style="margin-bottom: 10px;">Refer a Friend</h3>
            <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 20px;">Give $10, get $10 when your friend makes their first purchase.</p>
            <button class="btn btn-primary" style="width: 100%;">Get Referral Link</button>
          </div>
        </div>
      </section>

      <!-- Orders Section -->
      <section id="orders" class="tab-content">
        <h1 style="font-size: 2rem; margin-bottom: 30px;">My Orders</h1>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 40px;">
          <div class="glass" style="padding: 20px; border-radius: var(--radius); text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
            <i class="fa-solid fa-box" style="font-size: 2rem; color: var(--color-primary); margin-bottom: 10px;"></i>
            <h3 style="font-size: 1.5rem; margin-bottom: 5px;">3</h3>
            <p style="color: var(--color-text-muted); font-size: 0.9rem;">Total Orders</p>
          </div>
          <div class="glass" style="padding: 20px; border-radius: var(--radius); text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
            <i class="fa-solid fa-star" style="font-size: 2rem; color: var(--color-accent); margin-bottom: 10px;"></i>
            <h3 style="font-size: 1.5rem; margin-bottom: 5px;">150</h3>
            <p style="color: var(--color-text-muted); font-size: 0.9rem;">Reward Points</p>
          </div>
        </div>

        <div class="glass" style="border-radius: var(--radius); overflow-x: auto; padding: 0;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; min-width: 600px;">
            <thead>
              <tr style="border-bottom: 1px solid var(--color-border); background: rgba(0,0,0,0.02);">
                <th style="padding: 15px 25px; font-weight: 600; color: var(--color-text-muted);">Order ID</th>
                <th style="padding: 15px 25px; font-weight: 600; color: var(--color-text-muted);">Date</th>
                <th style="padding: 15px 25px; font-weight: 600; color: var(--color-text-muted);">Total</th>
                <th style="padding: 15px 25px; font-weight: 600; color: var(--color-text-muted);">Status</th>
                <th style="padding: 15px 25px; font-weight: 600; color: var(--color-text-muted);">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 15px 25px; font-weight: 500;">#ORD-1001</td>
                <td style="padding: 15px 25px;">Oct 12, 2026</td>
                <td style="padding: 15px 25px; font-weight: 600;">$85.00</td>
                <td style="padding: 15px 25px;"><span style="background: rgba(168, 230, 207, 0.2); color: var(--color-success); padding: 5px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Delivered</span></td>
                <td style="padding: 15px 25px;"><button class="btn btn-outline" style="padding: 5px 10px; font-size: 0.8rem;">View Invoice</button></td>
              </tr>
              <tr style="border-top: 1px solid var(--color-border);">
                <td style="padding: 15px 25px; font-weight: 500;">#ORD-0922</td>
                <td style="padding: 15px 25px;">Sep 1, 2026</td>
                <td style="padding: 15px 25px; font-weight: 600;">$45.00</td>
                <td style="padding: 15px 25px;"><span style="background: rgba(168, 230, 207, 0.2); color: var(--color-success); padding: 5px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">Delivered</span></td>
                <td style="padding: 15px 25px;"><button class="btn btn-outline" style="padding: 5px 10px; font-size: 0.8rem;">View Invoice</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Wishlist Section -->
      <section id="wishlist" class="tab-content">
        <h1 style="font-size: 2rem; margin-bottom: 30px;">My Wishlist</h1>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 25px;">
          <!-- Product Card 1 -->
          <div class="product-card glass" style="border-radius: var(--radius); overflow: hidden; position: relative;">
            <div style="position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.8); width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #ff4d4f; cursor: pointer; z-index: 10;">
              <i class="fa-solid fa-heart"></i>
            </div>
            <img src="https://images.unsplash.com/photo-1563241598-6e5458310c14?auto=format&fit=crop&q=80&w=400" alt="Peony" style="width: 100%; height: 200px; object-fit: cover;">
            <div style="padding: 20px;">
              <h3 style="margin-bottom: 10px; font-size: 1.2rem;">Blush Peony Bouquet</h3>
              <p style="color: var(--color-primary); font-weight: 600; font-size: 1.1rem; margin-bottom: 15px;">$85.00</p>
            </div>
          </div>
          
          <!-- Product Card 2 -->
          <div class="product-card glass" style="border-radius: var(--radius); overflow: hidden; position: relative;">
            <div style="position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.8); width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #ff4d4f; cursor: pointer; z-index: 10;">
              <i class="fa-solid fa-heart"></i>
            </div>
            <img src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=400" alt="Rose" style="width: 100%; height: 200px; object-fit: cover;">
            <div style="padding: 20px;">
              <h3 style="margin-bottom: 10px; font-size: 1.2rem;">Classic Red Roses</h3>
              <p style="color: var(--color-primary); font-weight: 600; font-size: 1.1rem; margin-bottom: 15px;">$65.00</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Addresses Section -->
      <section id="addresses" class="tab-content">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
          <h1 style="font-size: 2rem; margin: 0;">Saved Addresses</h1>
          <button class="btn btn-primary"><i class="fa-solid fa-plus"></i> Add New</button>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
          <div class="glass" style="padding: 25px; border-radius: var(--radius); border-top: 5px solid var(--color-primary);">
            <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
              <span style="background: rgba(248, 200, 220, 0.2); color: var(--color-primary); padding: 5px 10px; border-radius: 5px; font-size: 0.8rem; font-weight: 600;">Default Shipping</span>
              <div>
                <button style="background: none; border: none; color: var(--color-text-muted); cursor: pointer; margin-right: 10px;"><i class="fa-solid fa-pen"></i></button>
                <button style="background: none; border: none; color: #ff4d4f; cursor: pointer;"><i class="fa-solid fa-trash"></i></button>
              </div>
            </div>
            <h3 style="margin-bottom: 10px; font-size: 1.2rem;">Jane Doe</h3>
            <p style="color: var(--color-text-muted); line-height: 1.6; margin-bottom: 15px;">
              123 Floral Avenue, Suite 100<br>
              New York, NY 10001<br>
              United States
            </p>
            <p style="color: var(--color-text-muted);"><i class="fa-solid fa-phone" style="margin-right: 10px;"></i> +1 (555) 123-4567</p>
          </div>
        </div>
      </section>

      <!-- Settings Section -->
      <section id="settings" class="tab-content">
        <h1 style="font-size: 2rem; margin-bottom: 30px;">Account Settings</h1>
        
        <div class="glass" style="padding: 30px; border-radius: var(--radius); max-width: 600px;">
          <h3 style="margin-bottom: 25px; border-bottom: 1px solid var(--color-border); padding-bottom: 10px;">Profile Details</h3>
          
          <form style="display: flex; flex-direction: column; gap: 20px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div>
                <label style="display: block; margin-bottom: 8px; color: var(--color-text-muted); font-size: 0.9rem;">First Name</label>
                <input type="text" value="Jane" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--color-border); background: var(--color-surface); color: var(--color-text); outline: none;">
              </div>
              <div>
                <label style="display: block; margin-bottom: 8px; color: var(--color-text-muted); font-size: 0.9rem;">Last Name</label>
                <input type="text" value="Doe" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--color-border); background: var(--color-surface); color: var(--color-text); outline: none;">
              </div>
            </div>
            
            <div>
              <label style="display: block; margin-bottom: 8px; color: var(--color-text-muted); font-size: 0.9rem;">Email Address</label>
              <input type="email" value="jane.doe@example.com" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--color-border); background: var(--color-surface); color: var(--color-text); outline: none;">
            </div>
            
            <h3 style="margin-top: 20px; margin-bottom: 15px; border-bottom: 1px solid var(--color-border); padding-bottom: 10px;">Change Password</h3>
            
            <div>
              <label style="display: block; margin-bottom: 8px; color: var(--color-text-muted); font-size: 0.9rem;">Current Password</label>
              <input type="password" placeholder="••••••••" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--color-border); background: var(--color-surface); color: var(--color-text); outline: none;">
            </div>
            <div>
              <label style="display: block; margin-bottom: 8px; color: var(--color-text-muted); font-size: 0.9rem;">New Password</label>
              <input type="password" placeholder="••••••••" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--color-border); background: var(--color-surface); color: var(--color-text); outline: none;">
            </div>
            
            <div style="margin-top: 20px;">
              <button type="button" class="btn btn-primary" onclick="alert('Settings saved successfully!')">Save Changes</button>
            </div>
          </form>
        </div>
      </section>

    </main>
  </div>
  
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const links = document.querySelectorAll('.sidebar-link[data-target]');
      const sections = document.querySelectorAll('.tab-content');

      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          
          // Remove active classes
          links.forEach(l => l.classList.remove('active'));
          sections.forEach(s => s.classList.remove('active'));
          
          // Add active class to clicked link and corresponding section
          link.classList.add('active');
          const target = document.getElementById(link.getAttribute('data-target'));
          if (target) target.classList.add('active');
        });
      });
    });
  </script>
  
  <footer></footer>
  <script src="js/script.js"></script>
</body>
</html>
"""

with open("c:/Users/SWETHA/Desktop/florist/dashboard.html", "w", encoding="utf-8") as f:
    f.write(html_content)
