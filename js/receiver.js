/* ===== LifeLink Emergency Requests & Receiver Module ===== */

let emergencyRequestsList = [
  { id: 'REQ-001', patient: 'Rajesh Sharma', blood: 'O+', hospital: 'Lilavati Hospital', city: 'Mumbai', phone: '+91 98200 12345', units: 2, urgency: 'critical', status: 'Pending', createdAt: new Date().toISOString() },
  { id: 'REQ-002', patient: 'Sunita Patel', blood: 'AB-', hospital: 'Max Super Speciality', city: 'Delhi', phone: '+91 98111 54321', units: 1, urgency: 'critical', status: 'In Progress', createdAt: new Date().toISOString() },
  { id: 'REQ-003', patient: 'Vikram Malhotra', blood: 'B+', hospital: 'Manipal Hospital', city: 'Bangalore', phone: '+91 98450 99887', units: 3, urgency: 'urgent', status: 'Resolved', createdAt: new Date().toISOString() }
];

function handleEmergencyRequest(e) {
  e.preventDefault();
  const patient = document.getElementById('emg-patient').value.trim();
  const blood = document.getElementById('emg-blood').value;
  const hospital = document.getElementById('emg-hospital').value.trim();
  const city = document.getElementById('emg-city').value;
  const phone = document.getElementById('emg-phone').value.trim();
  const units = parseInt(document.getElementById('emg-units').value) || 1;

  if (!validate10DigitPhone(phone)) {
    showToast('⚠️ Contact phone number must contain exactly 10 digits.', 'error');
    return;
  }

  const selectedUrgencyBtn = document.querySelector('.urgency-option.selected');
  const urgency = selectedUrgencyBtn ? selectedUrgencyBtn.dataset.urgency : 'critical';

  const newReq = {
    id: `REQ-${String(emergencyRequestsList.length + 1).padStart(3, '0')}`,
    patient,
    blood,
    hospital,
    city,
    phone,
    units,
    urgency,
    status: 'Pending',
    createdAt: new Date().toISOString()
  };

  emergencyRequestsList.unshift(newReq);

  // Sync strictly to emergency table in Firestore
  if (typeof firebase !== 'undefined' && firebase.apps.length && db) {
    db.collection('emergency').doc(newReq.id).set(newReq)
      .then(() => console.log('✅ Emergency request saved to emergency table:', newReq.id))
      .catch(err => console.error('❌ emergency table error:', err));
  }

  showToast('🚨 Emergency request broadcasted across LifeLink network!', 'success');
  navigateTo('emergency');
}

function getUrgencyClass(urgency) {
  if (urgency === 'critical') return 'badge-red';
  if (urgency === 'urgent') return 'badge-amber';
  return 'badge-green';
}

function renderEmergency() {
  return `
    <div class="page-header" style="background: linear-gradient(180deg, #fef2f2 0%, #fff 100%);">
      <div class="container">
        <h1 style="color: var(--red-700);">${SVG_ICONS.siren(32, 'var(--red-600)')} Emergency Blood Dispatch</h1>
        <p>Broadcast urgent blood requests directly to nearby active donors and regional blood banks.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="dashboard-grid">
          <!-- Request Form -->
          <div class="form-card animate-on-scroll" style="margin: 0;">
            <h2 style="font-size: 1.5rem; margin-bottom: 4px;">Submit Emergency Request</h2>
            <p class="subtitle" style="margin-bottom: 24px;">Fill out patient details for instant network dispatch.</p>

            <form id="emergency-form" onsubmit="handleEmergencyRequest(event)">
              <div class="form-grid">
                <div class="form-group">
                  <label>Patient Name <span class="required">*</span></label>
                  <input type="text" class="form-control" id="emg-patient" placeholder="Patient's Full Name" required>
                </div>

                <div class="form-group">
                  <label>Required Blood Group <span class="required">*</span></label>
                  <select class="form-control" id="emg-blood" required>
                    <option value="">Select Blood Group</option>
                    ${BLOOD_GROUPS.map(g => `<option value="${g}">${g}</option>`).join('')}
                  </select>
                </div>

                <div class="form-group">
                  <label>Hospital / Clinic <span class="required">*</span></label>
                  <input type="text" class="form-control" id="emg-hospital" placeholder="e.g. Lilavati Hospital" required>
                </div>

                <div class="form-group">
                  <label>City <span class="required">*</span></label>
                  <select class="form-control" id="emg-city" required>
                    <option value="">Select City</option>
                    ${CITIES.map(c => `<option value="${c}">${c}</option>`).join('')}
                  </select>
                </div>

                <div class="form-group">
                  <label>Contact Phone <span class="required">*</span></label>
                  <input type="tel" class="form-control" id="emg-phone" placeholder="10-digit mobile number" required maxlength="10" minlength="10" pattern="[0-9]{10}">
                </div>

                <div class="form-group">
                  <label>Blood Units Needed <span class="required">*</span></label>
                  <input type="number" class="form-control" id="emg-units" min="1" max="10" value="2" required>
                </div>

                <div class="form-group full-width">
                  <label>Urgency Level <span class="required">*</span></label>
                  <div class="urgency-selector">
                    <div class="urgency-option normal" data-urgency="normal" onclick="document.querySelectorAll('.urgency-option').forEach(o => o.classList.remove('selected')); this.classList.add('selected');">
                      Standard (24h)
                    </div>
                    <div class="urgency-option urgent" data-urgency="urgent" onclick="document.querySelectorAll('.urgency-option').forEach(o => o.classList.remove('selected')); this.classList.add('selected');">
                      Urgent (6h)
                    </div>
                    <div class="urgency-option critical selected" data-urgency="critical" onclick="document.querySelectorAll('.urgency-option').forEach(o => o.classList.remove('selected')); this.classList.add('selected');">
                      🚨 Critical (Immediate)
                    </div>
                  </div>
                </div>
              </div>

              <div style="margin-top: 28px;">
                <button type="submit" class="btn btn-primary btn-lg pulse-beacon" style="width: 100%; background: linear-gradient(135deg, var(--red-600), var(--red-800)); font-weight: 800;">
                  ${SVG_ICONS.siren(22)} Broadcast Emergency Request Now
                </button>
              </div>
            </form>
          </div>

          <!-- Active Requests Sidebar -->
          <div>
            <h3 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
              ${SVG_ICONS.activity(20, 'var(--red-600)')} Live Emergency Feed
            </h3>
            <div style="display: flex; flex-direction: column; gap: 14px;">
              ${emergencyRequestsList.map(r => `
                <div class="card glow-card" style="padding: 18px; border-left: 4px solid ${r.urgency === 'critical' ? 'var(--critical)' : 'var(--warning)'};">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div>
                      <strong style="font-size: 1.05rem; display: block;">${r.patient}</strong>
                      <span style="font-size: 0.82rem; color: var(--text-secondary);">${r.hospital}, ${r.city}</span>
                    </div>
                    <span class="blood-badge" style="font-size: 1rem;">${r.blood}</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px; font-size: 0.82rem; color: var(--text-secondary);">
                    <span>Needed: <strong>${r.units} Units</strong></span>
                    <span class="badge ${getUrgencyClass(r.urgency)}">${r.urgency.toUpperCase()}</span>
                  </div>
                  <a href="tel:${r.phone}" class="btn btn-outline btn-sm" style="width: 100%; margin-top: 12px; font-weight: 700;">
                    ${SVG_ICONS.phone(14)} Respond to Request
                  </a>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
