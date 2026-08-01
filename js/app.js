/* ===== LifeLink Core Orchestrator & View Handlers ===== */

// Landing Page Renderer
function renderHome() {
  const activeDonors = registeredDonors.filter(d => d.available).length;
  const totalDonations = registeredDonors.reduce((sum, d) => sum + (d.donations || 0), 0) + 1240;

  return `
    <section class="lp-hero">
      <div class="lp-hero-inner">
        <div class="lp-eyebrow">${SVG_ICONS.activity(16, 'var(--accent)')} Smart Emergency Blood Dispatch Network</div>
        <h1 class="lp-hero-title">
          Minutes Matter. <br><span class="lp-red">Lifesavers Connect Here.</span>
        </h1>
        <p class="lp-lede">
          LifeLink bridges critical blood shortage gaps by instantly matching patients, hospitals, and emergency dispatchers with verified active blood donors nearby.
        </p>

        <div class="lp-hero-ctas">
          <button class="btn btn-primary btn-lg glow-card" onclick="navigateTo('register')">
            ${SVG_ICONS.heart(20)} Become a Donor
          </button>
          <button class="btn btn-outline btn-lg lp-emergency-btn glow-card" onclick="navigateTo('emergency')">
            ${SVG_ICONS.siren(20)} Emergency Request
          </button>
        </div>

        <div class="lp-hero-pulse">
          <div class="lp-pulse-track">
            <svg viewBox="0 0 1200 70" preserveAspectRatio="none">
              <path d="M0,35 L200,35 L220,10 L240,60 L260,20 L280,45 L300,35 L500,35 L520,5 L540,65 L560,15 L580,50 L600,35 L800,35 L820,12 L840,58 L860,22 L880,42 L900,35 L1200,35" />
            </svg>
            <svg viewBox="0 0 1200 70" preserveAspectRatio="none">
              <path d="M0,35 L200,35 L220,10 L240,60 L260,20 L280,45 L300,35 L500,35 L520,5 L540,65 L560,15 L580,50 L600,35 L800,35 L820,12 L840,58 L860,22 L880,42 L900,35 L1200,35" />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Counter Bar -->
    <div class="lp-stats-row reveal-up">
      <div class="lp-stat">
        <div class="stat-number">${registeredDonors.length + 150}+</div>
        <div class="lp-stat-label">Registered Donors</div>
      </div>
      <div class="lp-stat">
        <div class="stat-number">${activeDonors}+</div>
        <div class="lp-stat-label">Active & Ready</div>
      </div>
      <div class="lp-stat">
        <div class="stat-number">${totalDonations}+</div>
        <div class="lp-stat-label">Lives Impacted</div>
      </div>
      <div class="lp-stat">
        <div class="stat-number">6</div>
        <div class="lp-stat-label">Metros Covered</div>
      </div>
    </div>

    <!-- Solution Grid -->
    <section class="section lp-problem-section">
      <div class="container">
        <div class="lp-section-head reveal-up">
          <div class="lp-eyebrow">${SVG_ICONS.shield(16, 'var(--accent)')} Why LifeLink</div>
          <h2>Designed for Speed when Seconds Count</h2>
        </div>

        <div class="lp-problem-grid">
          <div class="lp-problem-card reveal-up stagger-1 glow-card">
            <div class="lp-problem-num">01 / REALTIME MATCHING</div>
            <h3>Smart Compatibility Engine</h3>
            <p>Instant multi-directional compatibility matching prevents wrong transfusions and finds exact blood group matches immediately.</p>
          </div>

          <div class="lp-problem-card reveal-up stagger-2 glow-card">
            <div class="lp-problem-num">02 / EMERGENCY DISPATCH</div>
            <h3>Direct Patient Alerts</h3>
            <p>High-priority emergency alerts broadcast directly to active registered donors in the patient's city with 1-click call response.</p>
          </div>

          <div class="lp-problem-card reveal-up stagger-3 glow-card">
            <div class="lp-problem-num">03 / CLOUD SYNC</div>
            <h3>Live Blood Bank Inventory</h3>
            <p>Centralized cloud database tracks blood bank units in real time so hospitals can check reserve stock without manual calling.</p>
          </div>
        </div>

        <!-- CTA Banner -->
        <div class="lp-cta-banner reveal-scale">
          <div>
            <h2>Ready to save a life today?</h2>
            <p>Join LifeLink's network of active donors or check blood group compatibility in seconds.</p>
          </div>
          <button class="btn btn-primary btn-lg glow-card" onclick="navigateTo('register')">
            ${SVG_ICONS.heart(20)} Join Network Free
          </button>
        </div>
      </div>
    </section>
  `;
}

// Awareness Page Renderer
function renderAwareness() {
  return `
    <div class="page-header" style="text-align: center; padding-top: calc(var(--header-height) + 40px); padding-bottom: 20px; background: transparent;">
      <div class="container">
        <h1 style="font-size: 2.5rem; font-weight: 800; color: #111827; margin-bottom: 8px; font-family: 'Outfit', sans-serif;">
          Blood Donation <span style="color: #dc2626;">Awareness</span>
        </h1>
        <p style="font-size: 1.05rem; color: #6b7280; margin: 0;">
          Learn everything about blood donation and why it matters.
        </p>
      </div>
    </div>

    <section class="section" style="padding-top: 20px; padding-bottom: 60px;">
      <div class="container">
        <div class="awareness-grid-3col">
          <!-- Card 1: Benefits -->
          <div class="awareness-card-new animate-on-scroll">
            <div class="awareness-card-header">
              <span class="awareness-card-icon">💪</span>
              <h3>Benefits of Blood Donation</h3>
            </div>
            <ul class="awareness-list">
              <li>
                <span class="awareness-dot"></span>
                <span>Saves up to 3 lives with a single donation</span>
              </li>
              <li>
                <span class="awareness-dot"></span>
                <span>Free health screening before every donation</span>
              </li>
              <li>
                <span class="awareness-dot"></span>
                <span>Reduces risk of heart disease and cancer</span>
              </li>
              <li>
                <span class="awareness-dot"></span>
                <span>Stimulates production of new blood cells</span>
              </li>
              <li>
                <span class="awareness-dot"></span>
                <span>Burns approximately 650 calories per donation</span>
              </li>
              <li>
                <span class="awareness-dot"></span>
                <span>Gives a sense of purpose and community service</span>
              </li>
            </ul>
          </div>

          <!-- Card 2: Who Can Donate -->
          <div class="awareness-card-new animate-on-scroll">
            <div class="awareness-card-header">
              <span class="awareness-card-icon-box green">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              <h3>Who Can Donate Blood</h3>
            </div>
            <ul class="awareness-list">
              <li>
                <span class="awareness-dot"></span>
                <span>Age between 18 to 65 years</span>
              </li>
              <li>
                <span class="awareness-dot"></span>
                <span>Minimum weight of 50 kg (110 lbs)</span>
              </li>
              <li>
                <span class="awareness-dot"></span>
                <span>Hemoglobin level at least 12.5 g/dL</span>
              </li>
              <li>
                <span class="awareness-dot"></span>
                <span>No chronic illnesses or infections</span>
              </li>
              <li>
                <span class="awareness-dot"></span>
                <span>Have not donated in the last 3 months</span>
              </li>
              <li>
                <span class="awareness-dot"></span>
                <span>In good general health on donation day</span>
              </li>
            </ul>
          </div>

          <!-- Card 3: Who Cannot Donate -->
          <div class="awareness-card-new animate-on-scroll">
            <div class="awareness-card-header">
              <span class="awareness-card-icon-box red">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </span>
              <h3>Who Cannot Donate Blood</h3>
            </div>
            <ul class="awareness-list">
              <li>
                <span class="awareness-dot"></span>
                <span>Individuals with HIV, Hepatitis B/C</span>
              </li>
              <li>
                <span class="awareness-dot"></span>
                <span>Pregnant or breastfeeding women</span>
              </li>
              <li>
                <span class="awareness-dot"></span>
                <span>People with heart, kidney, or liver disease</span>
              </li>
              <li>
                <span class="awareness-dot"></span>
                <span>Those on certain medications (anticoagulants)</span>
              </li>
              <li>
                <span class="awareness-dot"></span>
                <span>People with recent tattoos or piercings (6 months)</span>
              </li>
              <li>
                <span class="awareness-dot"></span>
                <span>Individuals under the influence of alcohol</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Dashboard Page Renderer
function renderDashboard() {
  return `
    <div class="page-header">
      <div class="container">
        <h1>Network Dashboard & Analytics</h1>
        <p>Real-time analytics on blood demand, regional donor density, and active emergency alerts.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="dashboard-grid">
          <div>
            <div class="chart-card animate-on-scroll">
              <h3>Demand by Blood Group (Active Requests)</h3>
              <div class="bar-chart">
                ${Object.entries(DASHBOARD_DATA.requests).map(([group, val]) => `
                  <div class="bar-item">
                    <span class="bar-label">${group}</span>
                    <div class="bar-track">
                      <div class="bar-fill ${RARE_GROUPS.includes(group) ? 'red' : 'blue'}" data-width="${val}%">
                        ${val}%
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <div>
            <div class="chart-card animate-on-scroll" style="margin-bottom: 24px;">
              <h3>Top Regional Donor Density</h3>
              <div class="region-list">
                ${DASHBOARD_DATA.regions.map(r => `
                  <div class="region-item">
                    <span class="region-name">${r.name}</span>
                    <span class="region-count">${r.count} Donors</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="chart-card animate-on-scroll">
              <h3>Network Shortage Alerts</h3>
              <div class="alert-list">
                ${DASHBOARD_DATA.alerts.map(a => `
                  <div class="alert-item ${a.type}">
                    <div class="alert-icon">${SVG_ICONS.siren(16, a.type === 'critical' ? 'var(--critical)' : '#d97706')}</div>
                    <span>${a.text}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function animateDashboardBars() {
  document.querySelectorAll('.bar-fill').forEach(bar => {
    const targetWidth = bar.dataset.width;
    setTimeout(() => {
      bar.style.width = targetWidth;
    }, 150);
  });
}

// Initial Bootstrapper
document.addEventListener('DOMContentLoaded', () => {
  initFirebaseBackend();

  // Bind nav link clicks using data-page attribute
  document.querySelectorAll('.nav a[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      if (page) navigateTo(page);
    });
  });

  // Route from hash or default to home
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash) {
    navigateTo(initialHash);
  } else {
    renderPage();
  }

  // Header scroll shadow handler
  window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }
  });

  // Handle hash changes (browser back/forward)
  window.addEventListener('hashchange', () => {
    const pageId = window.location.hash.replace('#', '');
    if (pageId && pageId !== currentPage) {
      navigateTo(pageId);
    }
  });
});
