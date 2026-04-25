/* ===================================================
   THE COFFEE — MAISON DE CAFÉ
   JavaScript — Full Interactivity
   =================================================== */

// ── State ──────────────────────────────────────────
let cart = [];
let selectedSize = { label: 'Small', multiplier: 1 };
let testimonialIndex = 0;
let testimonialsTotal = 5;

// ── Menu Data ──────────────────────────────────────
const menuItems = [
  // ESPRESSO
  { id: 1, name: 'The Gold Espresso', category: 'espresso', price: 185, desc: 'Ethiopian Yirgacheffe double shot, slow-pulled for caramel notes.', emoji: '☕', tag: 'Bestseller' },
  { id: 2, name: 'Classic Americano', category: 'espresso', price: 155, desc: 'Two shots of our house blend over hot filtered water. Clean, bold.', emoji: '☕', tag: null },
  { id: 3, name: 'Flat White', category: 'espresso', price: 195, desc: 'Micro-foamed whole milk over a ristretto shot. Silky perfection.', emoji: '🥛', tag: 'Popular' },
  { id: 4, name: 'Cortado', category: 'espresso', price: 175, desc: 'Equal parts espresso and steamed milk. For the true purist.', emoji: '☕', tag: null },
  { id: 5, name: 'Reserve Cappuccino', category: 'espresso', price: 185, desc: 'A traditional 1:1:1 ratio of espresso, steamed milk, and foam.', emoji: '☕', tag: null },
  { id: 6, name: 'Café Maison Latte', category: 'espresso', price: 210, desc: 'Our signature latte with house-made vanilla bean syrup and oat milk.', emoji: '🥛', tag: 'Signature' },
  { id: 7, name: 'Piccolo', category: 'espresso', price: 165, desc: 'Ristretto in a long macchiato glass with lightly textured milk.', emoji: '☕', tag: null },
  { id: 8, name: 'Macchiato', category: 'espresso', price: 160, desc: 'Espresso marked with a dollop of velvety foam. Strong and bold.', emoji: '☕', tag: null },

  // COLD DRINKS
  { id: 9, name: 'Midnight Nitro Cold Brew', category: 'cold', price: 230, desc: '24-hour Colombian cold brew, nitrogen-infused. Creamy, zero bitterness.', emoji: '🥤', tag: "Chef's Pick" },
  { id: 10, name: 'Iced Gold Espresso Tonic', category: 'cold', price: 215, desc: 'Espresso over premium tonic water and crushed ice. Effervescent bliss.', emoji: '🥤', tag: null },
  { id: 11, name: 'Classic Cold Brew', category: 'cold', price: 195, desc: '18-hour steeped Ethiopian beans. Smooth, rich, and deeply complex.', emoji: '🥤', tag: null },
  { id: 12, name: 'Iced Maison Latte', category: 'cold', price: 205, desc: 'Our signature latte over ice. Perfect for warm Manila days.', emoji: '🥛', tag: 'Popular' },
  { id: 13, name: 'Shaken Brown Sugar Espresso', category: 'cold', price: 220, desc: 'Hand-shaken espresso with brown sugar oat milk foam over ice.', emoji: '🥤', tag: 'New' },
  { id: 14, name: 'Coffee Lemonade', category: 'cold', price: 200, desc: 'Cold brew layered over fresh lemonade. Bright, tart, refreshing.', emoji: '🍋', tag: null },

  // NON-COFFEE
  { id: 15, name: 'Emerald Matcha Latte', category: 'non-coffee', price: 210, desc: 'Ceremonial-grade Japanese matcha with oat milk and vanilla bean.', emoji: '🍵', tag: 'Seasonal' },
  { id: 16, name: 'Golden Turmeric Latte', category: 'non-coffee', price: 195, desc: 'Turmeric, ginger, cinnamon, and oat milk. Anti-inflammatory and delicious.', emoji: '🌿', tag: null },
  { id: 17, name: 'Hojicha Oat Latte', category: 'non-coffee', price: 210, desc: 'Roasted green tea with creamy oat milk. Warm, nutty, sophisticated.', emoji: '🍵', tag: null },
  { id: 18, name: 'Dark Chocolate Mocha', category: 'non-coffee', price: 205, desc: 'Single-origin 70% dark cacao with steamed whole milk. No coffee.', emoji: '🍫', tag: null },
  { id: 19, name: 'Butterfly Pea Lemonade', category: 'non-coffee', price: 185, desc: 'Color-changing butterfly pea tea with fresh lemon and honey.', emoji: '🫐', tag: 'New' },
  { id: 20, name: 'Sparkling Rose Hibiscus', category: 'non-coffee', price: 195, desc: 'Hibiscus tea, rose syrup, and sparkling water. Floral and effervescent.', emoji: '🌸', tag: null },

  // FOOD
  { id: 21, name: 'Butter Croissant', category: 'food', price: 120, desc: 'French-style croissant with 81 layers of Normandy butter. Crisp, flaky.', emoji: '🥐', tag: 'Bestseller' },
  { id: 22, name: 'Almond Croissant', category: 'food', price: 150, desc: 'Day-old croissant soaked in rum syrup, filled with frangipane.', emoji: '🥐', tag: null },
  { id: 23, name: 'Egg & Truffle Toast', category: 'food', price: 220, desc: 'Sourdough, soft scrambled eggs, truffle oil, and chives.', emoji: '🍳', tag: "Chef's Pick" },
  { id: 24, name: 'Smoked Salmon Bagel', category: 'food', price: 265, desc: 'House-made cream cheese, smoked salmon, capers, and red onion.', emoji: '🥯', tag: null },
  { id: 25, name: 'Avocado Toast', category: 'food', price: 195, desc: 'Rye bread, smashed avo, poached egg, chili flakes, microgreens.', emoji: '🥑', tag: 'Popular' },
  { id: 26, name: 'Tiramisu', category: 'food', price: 175, desc: 'House-made with our espresso. Proper mascarpone, no shortcuts.', emoji: '🍰', tag: null },
  { id: 27, name: 'Kouign Amann', category: 'food', price: 140, desc: 'Breton caramelized butter cake. Crispy outside, caramel inside.', emoji: '🧁', tag: 'Rare' },
  { id: 28, name: 'Banana Walnut Loaf', category: 'food', price: 130, desc: 'Brown butter banana bread with toasted walnuts and sea salt.', emoji: '🍌', tag: null },

  // SEASONAL
  { id: 29, name: 'Ube Latte', category: 'seasonal', price: 225, desc: 'Batangas purple yam, oat milk, and espresso. Proudly Filipino.', emoji: '🟣', tag: 'Filipino Pride' },
  { id: 30, name: 'Pandan Cold Brew', category: 'seasonal', price: 215, desc: 'Cold brew with fresh pandan extract and coconut milk foam.', emoji: '🌿', tag: 'Limited' },
  { id: 31, name: 'Sago at Gulaman Latte', category: 'seasonal', price: 220, desc: 'Espresso with brown sugar sago, gulaman jelly, and milk.', emoji: '🧋', tag: 'Limited' },
  { id: 32, name: 'Salted Egg Tart', category: 'seasonal', price: 165, desc: 'Flaky pastry, custard filling, topped with salted egg yolk.', emoji: '🥚', tag: 'Seasonal' },
];

// ── Init ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initNavbar();
  initHeroParticles();
  initMenuGrid();
  initMenuFilters();
  initSizeSelector();
  initTestimonials();
  initAnimations();
  initSearch();
  initStatCounters();
  initBackToTop();
  setMinDate();
});

// ── Loader ──────────────────────────────────────────
function initLoader() {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
    triggerHeroAnimations();
  }, 2500);
  document.body.style.overflow = 'hidden';
}

function triggerHeroAnimations() {
  const els = document.querySelectorAll('[data-animate]');
  els.forEach(el => {
    const delay = el.dataset.delay || 0;
    setTimeout(() => el.classList.add('visible'), parseInt(delay));
  });
  setTimeout(initStatCounters, 800);
}

// ── Custom Cursor ──────────────────────────────────
function initCursor() {
  const dot = document.querySelector('.cursor-dot');
  const outline = document.querySelector('.cursor-outline');
  let mouseX = 0, mouseY = 0, outlineX = 0, outlineY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    outline.style.left = outlineX + 'px';
    outline.style.top = outlineY + 'px';
    requestAnimationFrame(animateOutline);
  }
  animateOutline();

  const hoverables = document.querySelectorAll('a, button, [onclick], input, select, textarea, .menu-item, .featured-card, .location-card, .tier-card, .testimonial-card');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

// ── Navbar ──────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveNavLink();
  });

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
  });
}

function updateActiveNavLink() {
  const sections = ['home', 'menu', 'about', 'loyalty', 'reserve', 'locations', 'contact'];
  const links = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 150) current = id;
  });
  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

// ── Hero Particles ─────────────────────────────────
function initHeroParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.style.cssText = `
      position: absolute;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      background: rgba(201,169,110,${Math.random() * 0.4 + 0.1});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: particleFloat ${Math.random() * 15 + 10}s ease-in-out infinite;
      animation-delay: ${Math.random() * 10}s;
    `;
    container.appendChild(p);
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes particleFloat {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
      25% { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(1.2); opacity: 0.8; }
      50% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px) scale(0.8); opacity: 0.5; }
      75% { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(1.1); opacity: 0.7; }
    }
  `;
  document.head.appendChild(style);
}

// ── Menu Grid ──────────────────────────────────────
function initMenuGrid(filter = 'all') {
  const grid = document.getElementById('menuGrid');
  const filtered = filter === 'all' ? menuItems : menuItems.filter(i => i.category === filter);
  grid.innerHTML = '';

  filtered.forEach((item, idx) => {
    const price = Math.round(item.price * selectedSize.multiplier);
    const card = document.createElement('div');
    card.className = 'menu-item';
    card.style.animationDelay = `${idx * 60}ms`;
    card.innerHTML = `
      <div class="menu-item-img">
        <span>${item.emoji}</span>
        ${item.tag ? `<div class="menu-item-tag">${item.tag}</div>` : ''}
      </div>
      <div class="menu-item-body">
        <p class="menu-item-cat">${formatCategory(item.category)}</p>
        <h3 class="menu-item-name">${item.name}</h3>
        <p class="menu-item-desc">${item.desc}</p>
        <div class="menu-item-footer">
          <span class="menu-item-price">
            ${selectedSize.multiplier > 1 ? `<span class="base-price">₱${item.price}</span>` : ''}
            ₱${price}
          </span>
          <button class="btn-add" onclick="addToCart('${item.name}', ${price}, '${formatCategory(item.category)}')">
            <i class="fas fa-plus"></i> Add
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Re-init cursor on new elements
  setTimeout(() => {
    document.querySelectorAll('.btn-add, .menu-item').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }, 100);
}

function formatCategory(cat) {
  const map = { espresso: 'Espresso', cold: 'Cold Drinks', 'non-coffee': 'Non-Coffee', food: 'Food & Pastries', seasonal: 'Seasonal Special' };
  return map[cat] || cat;
}

// ── Menu Filters ──────────────────────────────────
function initMenuFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      initMenuGrid(this.dataset.filter);
    });
  });
}

// ── Size Selector ─────────────────────────────────
function initSizeSelector() {
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      selectedSize = { label: this.dataset.size, multiplier: parseFloat(this.dataset.mult) };
      const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
      initMenuGrid(activeFilter);
    });
  });
}

// ── Cart ───────────────────────────────────────────
function addToCart(name, price, category) {
  const existing = cart.find(i => i.name === name && i.size === selectedSize.label);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, category, size: selectedSize.label, qty: 1, id: Date.now() });
  }
  updateCart();
  showToast(`✓ ${name} added to your order`);

  // Animate cart button
  const cartBtn = document.getElementById('cartToggle');
  cartBtn.style.transform = 'scale(1.2)';
  setTimeout(() => cartBtn.style.transform = '', 200);
}

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const cartFooter = document.getElementById('cartFooter');
  const cartCount = document.getElementById('cartCount');
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

  cartCount.textContent = totalItems;
  cartCount.classList.toggle('visible', totalItems > 0);

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-coffee"></i>
        <p>Your cup is empty</p>
        <span>Add something delicious</span>
      </div>`;
    cartFooter.style.display = 'none';
    return;
  }

  cartFooter.style.display = 'block';
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item" id="cart-item-${item.id}">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-category">${item.category} · ${item.size}</div>
        <div class="cart-item-price">₱${(item.price * item.qty).toLocaleString()}</div>
      </div>
      <div class="cart-item-qty">
        <button class="cart-qty-btn" onclick="changeQty(${item.id}, -1)"><i class="fas fa-minus"></i></button>
        <span class="cart-qty-num">${item.qty}</span>
        <button class="cart-qty-btn" onclick="changeQty(${item.id}, 1)"><i class="fas fa-plus"></i></button>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></button>
    </div>
  `).join('');

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const tax = Math.round(subtotal * 0.12);
  const total = subtotal + tax;

  document.getElementById('cartSubtotal').textContent = `₱${subtotal.toLocaleString()}`;
  document.getElementById('cartTax').textContent = `₱${tax.toLocaleString()}`;
  document.getElementById('cartTotal').textContent = `₱${total.toLocaleString()}`;
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function checkout() {
  const type = document.querySelector('input[name="orderType"]:checked')?.value || 'dine';
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const tax = Math.round(total * 0.12);
  const orderNum = 'TC' + Date.now().toString().slice(-6);

  closeCart();
  showModal(`
    <div class="modal-icon">🎉</div>
    <h3>Order Confirmed!</h3>
    <p>
      Order <strong style="color:var(--gold-400)">#${orderNum}</strong> has been received.<br/><br/>
      Type: <strong>${type === 'dine' ? 'Dine In' : type === 'takeout' ? 'Takeout' : 'Delivery'}</strong><br/>
      Items: <strong>${cart.reduce((s,i) => s+i.qty, 0)}</strong><br/>
      Total: <strong>₱${(total + tax).toLocaleString()}</strong><br/><br/>
      Estimated time: <strong>8–12 minutes</strong><br/>
      You'll earn <strong style="color:var(--gold-400)">${Math.floor(total/10)} Brew Points</strong> on this order!
    </p>
  `);
  clearCart();
}

// Cart Toggle
document.getElementById('cartToggle').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
document.getElementById('cartOverlay').addEventListener('click', closeCart);

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('active');
}
function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('active');
}

// ── Search ─────────────────────────────────────────
function initSearch() {
  const toggle = document.getElementById('searchToggle');
  const overlay = document.getElementById('searchOverlay');
  const closeBtn = document.getElementById('searchClose');
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');

  toggle.addEventListener('click', () => {
    overlay.classList.add('active');
    setTimeout(() => input.focus(), 300);
  });

  closeBtn.addEventListener('click', () => overlay.classList.remove('active'));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') overlay.classList.remove('active');
  });

  input.addEventListener('input', function () {
    const q = this.value.toLowerCase().trim();
    if (!q) { results.innerHTML = ''; return; }
    const matches = menuItems.filter(i =>
      i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q) || i.category.includes(q)
    );
    results.innerHTML = matches.length
      ? matches.slice(0, 8).map(i => `
          <div class="search-result-item" onclick="searchSelect('${i.name}', ${Math.round(i.price * selectedSize.multiplier)}, '${formatCategory(i.category)}')">
            ${i.emoji} ${i.name} — ₱${Math.round(i.price * selectedSize.multiplier)}
          </div>`).join('')
      : '<p style="color:var(--text-muted);font-family:var(--font-ui);font-size:14px">No results found</p>';
  });
}

function searchSelect(name, price, category) {
  addToCart(name, price, category);
  document.getElementById('searchOverlay').classList.remove('active');
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').innerHTML = '';
}

// ── Testimonials ───────────────────────────────────
function initTestimonials() {
  const track = document.getElementById('testimonialTrack');
  const dotsContainer = document.getElementById('tDots');
  const prevBtn = document.getElementById('tPrev');
  const nextBtn = document.getElementById('tNext');

  for (let i = 0; i < testimonialsTotal; i++) {
    const dot = document.createElement('div');
    dot.className = 't-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToTestimonial(i));
    dotsContainer.appendChild(dot);
  }

  prevBtn.addEventListener('click', () => goToTestimonial(testimonialIndex - 1));
  nextBtn.addEventListener('click', () => goToTestimonial(testimonialIndex + 1));

  // Auto-advance
  setInterval(() => goToTestimonial(testimonialIndex + 1), 5000);
}

function goToTestimonial(idx) {
  const track = document.getElementById('testimonialTrack');
  const dots = document.querySelectorAll('.t-dot');
  testimonialsTotal = Math.max(testimonialsTotal, 5);
  testimonialIndex = ((idx % testimonialsTotal) + testimonialsTotal) % testimonialsTotal;
  const cardWidth = 430; // card width + gap
  track.style.transform = `translateX(-${testimonialIndex * cardWidth}px)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === testimonialIndex));
}

// ── Animations / IntersectionObserver ─────────────
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        setTimeout(() => el.classList.add('visible'), parseInt(delay));
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

  // Stagger menu cards
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.style.opacity = '1', i * 80);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.featured-card, .location-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    cardObserver.observe(el);
  });
}

// ── Stat Counters ──────────────────────────────────
function initStatCounters() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;

    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = Math.floor(current);
    }, 16);
  });
}

// ── Back To Top ────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  });
}

// ── Scroll Utility ─────────────────────────────────
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Forms ──────────────────────────────────────────
function submitReservation(e) {
  e.preventDefault();
  showModal(`
    <div class="modal-icon">🍽️</div>
    <h3>Reservation Confirmed!</h3>
    <p>
      Your table has been reserved. A confirmation email has been sent.<br/><br/>
      We look forward to welcoming you to <strong style="color:var(--gold-400)">The Coffee</strong>.<br/><br/>
      Remember: your reservation includes a complimentary welcome drink. 🎁
    </p>
  `);
  e.target.reset();
}

function submitContact(e) {
  e.preventDefault();
  showModal(`
    <div class="modal-icon">✉️</div>
    <h3>Message Received!</h3>
    <p>
      Thank you for reaching out. Our team will get back to you within 24 hours.<br/><br/>
      For urgent inquiries, call us at <strong style="color:var(--gold-400)">+63 2 888-0000</strong>.
    </p>
  `);
  e.target.reset();
}

function subscribeNewsletter() {
  const input = document.getElementById('newsletterEmail');
  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    showToast('⚠️ Please enter a valid email address');
    return;
  }
  showToast('🎉 You\'re now part of the Brew Loop!');
  input.value = '';
}

function joinLoyalty() {
  showModal(`
    <div class="modal-icon">⭐</div>
    <h3>Welcome to The Golden Circle!</h3>
    <p>
      Your account has been created. You've received <strong style="color:var(--gold-400)">100 Brew Points</strong> as a welcome gift!<br/><br/>
      Download the The Coffee app to track your points and unlock exclusive rewards.
    </p>
  `);
}

// ── Locations ──────────────────────────────────────
function selectLocation(el) {
  document.querySelectorAll('.location-card').forEach(c => c.classList.remove('lc-active'));
  el.classList.add('lc-active');
}

// ── Toast ──────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  toastMsg.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── Modal ──────────────────────────────────────────
function showModal(html) {
  const overlay = document.getElementById('modalOverlay');
  const modal = document.getElementById('modal');
  document.getElementById('modalContent').innerHTML = html;
  overlay.classList.add('active');
  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.getElementById('modal').classList.remove('active');
}

// ── Min Date for Reservations ──────────────────────
function setMinDate() {
  const dateInput = document.querySelector('input[type="date"]');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }
}

// ── Parallax on Scroll ─────────────────────────────
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroContent = document.querySelector('.hero-content');
  if (heroContent && scrollY < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrollY * 0.25}px)`;
    heroContent.style.opacity = 1 - scrollY / 700;
  }

  const cupVisual = document.querySelector('.hero-cup-visual');
  if (cupVisual && scrollY < window.innerHeight) {
    cupVisual.style.transform = `translateY(calc(-50% + ${scrollY * 0.1}px))`;
  }
});

// ── Smooth hover audio feedback (visual only) ──────
document.querySelectorAll('.btn-primary, .btn-add, .nav-order-btn').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
  });
});

// ── Keyboard shortcuts ─────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
    const activeEl = document.activeElement.tagName;
    if (activeEl !== 'INPUT' && activeEl !== 'TEXTAREA' && activeEl !== 'SELECT') {
      e.preventDefault();
      document.getElementById('searchToggle').click();
    }
  }
  if (e.key === 'Escape') {
    closeCart();
    closeModal();
  }
});

console.log(`
  ☕ THE COFFEE — MAISON DE CAFÉ
  Est. 2026 | thecoffee.ph
  
  Press "/" to search the menu anytime.
  
  Crafted with passion. Served with elegance.
`);