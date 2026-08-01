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
        <div class="compat-container animate-on-scroll">
          <div class="compat-select-row">
            <label for="compat-type">Select your blood group:</label>
            <select id="compat-type" class="compat-select" onchange="updateCompatibilityView()">
              ${BLOOD_GROUPS.map(g => `<option value="${g}" ${g === 'B+' ? 'selected' : ''}>${g}</option>`).join('')}
            </select>
          </div>

          <div id="compat-result-view"></div>
        </div>
      </div>
    </section>
  `;
}

function updateCompatibilityView() {
  const typeSelect = document.getElementById('compat-type');
  const container = document.getElementById('compat-result-view');
  if (!typeSelect || !container) return;

  const selectedGroup = typeSelect.value || 'B+';
  const info = COMPATIBILITY[selectedGroup] || COMPATIBILITY['B+'];

  container.innerHTML = `
    <div class="compat-hero-section">
      <div class="compat-hero-type">${selectedGroup}</div>
      <div class="compat-hero-label">${info.label}</div>
    </div>

    <div class="compat-main-grid">
      <!-- Donate To Column -->
      <div class="compat-column">
        <div class="compat-col-header">
          <h3 class="compat-col-title">🩸 ${selectedGroup} Can Donate To</h3>
          <p class="compat-col-subtitle">These blood types can receive from ${selectedGroup}</p>
        </div>
        <div class="compat-grid-2col">
          ${BLOOD_GROUPS.map(g => {
            const isMatch = info.donateTo.includes(g);
            return `
              <div class="compat-card ${isMatch ? 'compatible' : 'not-compatible'}">
                <div class="compat-card-type">${g}</div>
                <div class="compat-card-status">${isMatch ? '✓ COMPATIBLE' : '✕ NO'}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Receive From Column -->
      <div class="compat-column">
        <div class="compat-col-header">
          <h3 class="compat-col-title">💉 ${selectedGroup} Can Receive From</h3>
          <p class="compat-col-subtitle">These blood types can donate to ${selectedGroup}</p>
        </div>
        <div class="compat-grid-2col">
          ${BLOOD_GROUPS.map(g => {
            const isMatch = info.receiveFrom.includes(g);
            return `
              <div class="compat-card ${isMatch ? 'compatible' : 'not-compatible'}">
                <div class="compat-card-type">${g}</div>
                <div class="compat-card-status">${isMatch ? '✓ COMPATIBLE' : '✕ NO'}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}
