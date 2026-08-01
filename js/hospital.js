/* ===== LifeLink Blood Banks & Compatibility Module ===== */

function renderBanks() {
  return `
    <div class="page-header">
      <div class="container">
        <h1>Blood Bank Directory</h1>
        <p>Live inventory levels, contact info, and unit availability across partner regional blood banks.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="bank-grid">
          ${BLOOD_BANKS.map(b => `
            <div class="bank-card glow-card animate-on-scroll">
              <div class="bank-name">${b.name}</div>
              <div class="bank-location">
                ${SVG_ICONS.mapPin(16, 'var(--gray-400)')} ${b.location}
              </div>
              
              <div class="bank-units">
                Total Available Units: <strong>${b.units} Units</strong>
              </div>

              <div class="bank-bloods">
                ${Object.entries(b.bloods).map(([group, count]) => `
                  <span class="bank-blood-tag ${count < 10 ? 'low' : ''}">
                    ${group}: ${count}u
                  </span>
                `).join('')}
              </div>

              <a href="tel:${b.contact}" class="btn btn-outline btn-sm" style="width: 100%; margin-top: 8px;">
                ${SVG_ICONS.phone(14)} ${b.contact}
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderCompatibility() {
  return `
    <div class="page-header">
      <div class="container">
        <h1>Blood Type Compatibility</h1>
        <p>Interactive biological compatibility resolver. Check who can donate to whom during critical transfusions.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="compatibility-tool form-card animate-on-scroll">
          <div class="compat-select-row">
            <label>Select Blood Group:</label>
            <select id="compat-type" class="form-control" style="max-width: 220px;" onchange="updateCompatibilityView()">
              ${BLOOD_GROUPS.map(g => `<option value="${g}">${g} (${COMPATIBILITY[g].label})</option>`).join('')}
            </select>
          </div>

          <div id="compat-result-view"></div>
        </div>

        <div class="rare-section animate-on-scroll">
          <h3>${SVG_ICONS.sparkles(24, 'var(--red-600)')} Universal & Rare Donors Priority</h3>
          <p>O- is the universal red blood cell donor type (can donate to all groups). AB+ is the universal plasma donor.</p>
          <div class="rare-badges">
            <span class="rare-badge">O- (Universal)</span>
            <span class="rare-badge">AB- (Rarest)</span>
            <span class="rare-badge">B- (High Demand)</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

function updateCompatibilityView() {
  const typeSelect = document.getElementById('compat-type');
  const container = document.getElementById('compat-result-view');
  if (!typeSelect || !container) return;

  const selectedGroup = typeSelect.value || 'O-';
  const info = COMPATIBILITY[selectedGroup];

  container.innerHTML = `
    <div class="compat-result active">
      <div style="text-align: center; margin-bottom: 32px;">
        <span class="blood-badge" style="font-size: 2rem; padding: 8px 24px;">${selectedGroup}</span>
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 12px; color: var(--accent);">${info.label}</h3>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
        <div>
          <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 16px; color: var(--gray-800); text-align: center;">
            Can CAN DONATE TO:
          </h4>
          <div class="compat-grid">
            ${BLOOD_GROUPS.map(g => {
              const can = info.donateTo.includes(g);
              return `<div class="compat-item ${can ? 'can-donate' : 'cannot'}">${g}<span class="compat-label">${can ? 'MATCH' : 'NO'}</span></div>`;
            }).join('')}
          </div>
        </div>

        <div>
          <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 16px; color: var(--gray-800); text-align: center;">
            Can RECEIVE FROM:
          </h4>
          <div class="compat-grid">
            ${BLOOD_GROUPS.map(g => {
              const can = info.receiveFrom.includes(g);
              return `<div class="compat-item ${can ? 'can-donate' : 'cannot'}">${g}<span class="compat-label">${can ? 'MATCH' : 'NO'}</span></div>`;
            }).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}
