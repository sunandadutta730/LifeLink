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
    <div class="page-header">
      <div class="container">
        <h1>Blood Donation Awareness</h1>
        <p>Essential facts, eligibility guidelines, and life-saving benefits of regular voluntary blood donation.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="awareness-grid">
          <div class="awareness-card glow-card animate-on-scroll">
            <h3>${SVG_ICONS.check(24, 'var(--success)')} Who Can Donate?</h3>
            <ul>
              <li>Age between 18 and 65 years</li>
              <li>Weight at least 45 kg (99 lbs)</li>
              <li>Hemoglobin level minimum 12.5 g/dL</li>
              <li>Good general health with normal blood pressure</li>
            </ul>
          </div>

          <div class="awareness-card glow-card animate-on-scroll">
            <h3>${SVG_ICONS.cross(24, 'var(--critical)')} Temporary Deferrals</h3>
            <ul>
              <li>Alcohol consumption within 24 hours</li>
              <li>Tattoo or piercing in the last 6 months</li>
              <li>Recent surgery or major dental treatment</li>
              <li>Current antibiotics or active infection</li>
            </ul>
          </div>

          <div class="awareness-card glow-card animate-on-scroll">
            <h3>${SVG_ICONS.sparkles(24, 'var(--blue-500)')} Health Benefits</h3>
            <ul>
              <li>Stimulates fresh red blood cell production</li>
              <li>Reduces harmful iron buildup in the body</li>
              <li>Free mini health checkup (BP, Hb, Pulse)</li>
              <li>Lowers risk of cardiovascular diseases</li>
            </ul>
          </div>

          <div class="awareness-card glow-card animate-on-scroll">
            <h3>${SVG_ICONS.droplet(24, 'var(--accent)')} Before Donation</h3>
            <ul>
              <li>Drink plenty of water (500ml) before donating</li>
              <li>Eat a healthy meal 2-3 hours prior</li>
              <li>Get a good night's sleep (at least 7 hours)</li>
              <li>Avoid heavy weightlifting on donation day</li>
            </ul>
          </div>

          <div class="awareness-card glow-card animate-on-scroll">
            <h3>${SVG_ICONS.heart(24, 'var(--accent)')} After Donation</h3>
            <ul>
              <li>Rest for 10-15 minutes at the donation center</li>
              <li>Enjoy snacks and juice provided by medical staff</li>
              <li>Keep the bandage on for at least 4 hours</li>
              <li>Avoid smoking or alcohol for at least 6 hours</li>
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
