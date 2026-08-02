/* ===== LifeLink UI Controller & SPA Router Module ===== */

let currentPage = 'home';

function navigateTo(pageId) {
  currentPage = pageId;
  window.location.hash = pageId;

  // Enforce auth gate for protected pages
  if (['find', 'register', 'emergency', 'dashboard', 'compatibility', 'banks'].includes(pageId) && !currentUserAccount && !isAdminLoggedIn) {
    renderPage();
    showModal(
      'Account Required 🔐',
      'Please <strong>Sign Up</strong> or <strong>Log In</strong> to access this feature. Guests can view the Home and Awareness pages.',
      [
        { text: 'Log In / Sign Up', class: 'btn-primary', action: () => { closeModal(); openAuthModal('login', 'user'); } },
        { text: 'Cancel', class: 'btn-outline', action: () => { closeModal(); navigateTo('home'); } }
      ]
    );
    return;
  }

  // Update navbar active state
  document.querySelectorAll('.nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === pageId);
  });

  // Close mobile menu if open
  const nav = document.getElementById('main-nav');
  const toggle = document.getElementById('mobile-toggle');
  if (nav) nav.classList.remove('open');
  if (toggle) toggle.classList.remove('open');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderPage();
}

function renderPage() {
  const main = document.getElementById('main-content');
  if (!main) return;

  // Enforce Auth Gate for protected features
  if (['find', 'register', 'emergency', 'dashboard', 'compatibility', 'banks'].includes(currentPage) && !currentUserAccount && !isAdminLoggedIn) {
    main.innerHTML = `
      <section class="section" style="padding-top: calc(var(--header-height) + 60px); text-align: center;">
        <div class="container" style="max-width: 540px;">
          <div class="card glow-card" style="padding: 40px 28px; border: 2px solid var(--red-100); background: linear-gradient(180deg, #ffffff 0%, var(--red-50) 100%);">
            <div style="width: 64px; height: 64px; background: var(--red-100); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: var(--accent);">
              ${SVG_ICONS.shield(32, '#dc2626')}
            </div>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 12px; color: var(--gray-900);">Authentication Required</h2>
            <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 28px;">
              You must sign up or log in to access <strong>${currentPage.toUpperCase()}</strong>. Guest access is restricted to protect network privacy and donor safety.
            </p>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <button class="btn btn-primary btn-lg glow-card" style="width: 100%; font-weight: 700;" onclick="openAuthModal('signup', 'user')">🚀 Create Account / Log In</button>
              <button class="btn btn-outline" style="width: 100%;" onclick="navigateTo('home')">Back to Home</button>
            </div>
          </div>
        </div>
      </section>
    `;
    updateAuthHeader();
    return;
  }

  switch (currentPage) {
    case 'home': main.innerHTML = renderHome(); break;
    case 'register': main.innerHTML = renderRegister(); break;
    case 'find': main.innerHTML = renderFind(); break;
    case 'emergency': main.innerHTML = renderEmergency(); break;
    case 'compatibility': main.innerHTML = renderCompatibility(); break;
    case 'banks': main.innerHTML = renderBanks(); break;
    case 'awareness': main.innerHTML = renderAwareness(); break;
    case 'dashboard': main.innerHTML = renderDashboard(); break;
    case 'admin': main.innerHTML = renderAdmin(); break;
    default: main.innerHTML = renderHome();
  }

  updateAuthHeader();

  requestAnimationFrame(() => {
    initScrollReveal();
    if (currentPage === 'find') filterDonors();
    if (currentPage === 'dashboard') animateDashboardBars();
    if (currentPage === 'compatibility') updateCompatibilityView();
  });
}

function updateAuthHeader() {
  const container = document.getElementById('header-auth-container');
  if (!container) return;

  if (isAdminLoggedIn) {
    container.innerHTML = `
      <button class="btn btn-primary btn-sm nav-login-btn glow-card" onclick="navigateTo('admin')">${SVG_ICONS.shield(14)} Admin Panel</button>
      <button class="btn btn-outline btn-sm" onclick="handleUserLogout()" style="padding: 4px 10px; font-size: 0.8rem; border-color: var(--accent); color: var(--accent);">Log Out</button>
    `;
  } else if (currentUserAccount) {
    const displayName = currentUserAccount.name || (currentUserAccount.email ? currentUserAccount.email.split('@')[0] : 'User');
    const firstInitial = displayName.charAt(0).toUpperCase();

    container.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <div class="user-avatar-badge" onclick="openUserProfileModal()" title="View Profile (${displayName})">
          <span>${firstInitial}</span>
        </div>
        <button class="btn btn-outline btn-sm" onclick="handleUserLogout()" style="padding: 4px 10px; font-size: 0.8rem; border-color: var(--accent); color: var(--accent);">Log Out</button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <button class="btn btn-primary btn-sm nav-login-btn glow-card" onclick="openAuthModal('signup', 'user')">🚀 Sign Up / Login</button>
    `;
  }
}

function toggleMobileMenu() {
  const nav = document.getElementById('main-nav');
  const toggle = document.getElementById('mobile-toggle');
  if (nav) nav.classList.toggle('open');
  if (toggle) toggle.classList.toggle('open');
}

function showModal(title, bodyHtml, actions = []) {
  closeModal();

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal">
      <h3>${title}</h3>
      <div>${bodyHtml}</div>
      <div class="modal-actions" style="margin-top:20px;">
        ${actions.map((a, i) => `<button class="btn ${a.class}" id="modal-btn-${i}">${a.text}</button>`).join('')}
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  actions.forEach((a, i) => {
    const btn = document.getElementById(`modal-btn-${i}`);
    if (btn && a.action) btn.addEventListener('click', a.action);
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  requestAnimationFrame(() => overlay.classList.add('active'));
}

function closeModal() {
  const overlay = document.querySelector('.modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => overlay.remove(), 300);
  }
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible', 'active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll, .reveal-up, .reveal-scale, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
}

/* ===== THEME ENGINE & TOGGLE CONTROLLER ===== */
function initTheme() {
  const savedTheme = localStorage.getItem('lifelink_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(savedTheme);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('lifelink_theme', theme);
  updateThemeToggleIcon(theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

function updateThemeToggleIcon(theme) {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  if (theme === 'dark') {
    btn.innerHTML = '☀️';
    btn.setAttribute('title', 'Switch to Light Mode');
    btn.setAttribute('aria-label', 'Switch to Light Mode');
  } else {
    btn.innerHTML = '🌙';
    btn.setAttribute('title', 'Switch to Dark Mode');
    btn.setAttribute('aria-label', 'Switch to Dark Mode');
  }
}

// Auto-run theme initialization right away
initTheme();
