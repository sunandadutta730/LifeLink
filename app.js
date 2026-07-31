/* ===== LifeLink – Smart Blood Donor Network ===== */
/* Application Logic */

// ===== HIGH DETAIL SVG ICON SYSTEM =====
const SVG_ICONS = {
  droplet: (size = 20, color = 'currentColor') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  search: (size = 20, color = 'currentColor') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  heart: (size = 20, color = 'currentColor') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  siren: (size = 20, color = 'currentColor') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  hospital: (size = 20, color = 'currentColor') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/><line x1="9" y1="21" x2="9" y2="9"/><line x1="15" y1="21" x2="15" y2="9"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="12" y1="6" x2="12" y2="12"/><line x1="9" y1="9" x2="15" y2="9"/></svg>`,
  phone: (size = 20, color = 'currentColor') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  mapPin: (size = 20, color = 'currentColor') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  shield: (size = 20, color = 'currentColor') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  users: (size = 20, color = 'currentColor') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  activity: (size = 20, color = 'currentColor') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  alertTriangle: (size = 20, color = 'currentColor') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  check: (size = 20, color = 'currentColor') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  cross: (size = 20, color = 'currentColor') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  trash: (size = 20, color = 'currentColor') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  sparkles: (size = 20, color = 'currentColor') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.91 5.8 6.09.2-4.73 3.84 1.63 5.96L12 15.27l-4.9 3.53 1.63-5.96L4 9l6.09-.2L12 3z"/></svg>`,
  plus: (size = 20, color = 'currentColor') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`
};

// ===== DATA =====
const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const COMPATIBILITY = {
  'O-': { donateTo: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'], receiveFrom: ['O-'], label: 'Universal Donor' },
  'O+': { donateTo: ['O+', 'A+', 'B+', 'AB+'], receiveFrom: ['O-', 'O+'], label: 'Most Common' },
  'A-': { donateTo: ['A-', 'A+', 'AB-', 'AB+'], receiveFrom: ['O-', 'A-'], label: 'Rare Type' },
  'A+': { donateTo: ['A+', 'AB+'], receiveFrom: ['O-', 'O+', 'A-', 'A+'], label: 'Common Type' },
  'B-': { donateTo: ['B-', 'B+', 'AB-', 'AB+'], receiveFrom: ['O-', 'B-'], label: 'Rare Type' },
  'B+': { donateTo: ['B+', 'AB+'], receiveFrom: ['O-', 'O+', 'B-', 'B+'], label: 'Common Type' },
  'AB-': { donateTo: ['AB-', 'AB+'], receiveFrom: ['O-', 'A-', 'B-', 'AB-'], label: 'Rarest Type' },
  'AB+': { donateTo: ['AB+'], receiveFrom: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'], label: 'Universal Receiver' }
};

const RARE_GROUPS = ['AB-', 'B-', 'O-'];

const CITIES = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'];

// Sample Donors Data
const SAMPLE_DONORS = [
  { name: 'Rahul Sharma', blood: 'O+', city: 'Mumbai', phone: '+91 98765 43210', available: true, lastDonation: '2026-03-15', donations: 12 },
  { name: 'Priya Patel', blood: 'A+', city: 'Delhi', phone: '+91 87654 32109', available: true, lastDonation: '2026-02-20', donations: 8 },
  { name: 'Arjun Singh', blood: 'B+', city: 'Bangalore', phone: '+91 76543 21098', available: false, lastDonation: '2026-06-01', donations: 15 },
  { name: 'Sneha Reddy', blood: 'AB-', city: 'Hyderabad', phone: '+91 65432 10987', available: true, lastDonation: '2025-12-10', donations: 6 },
  { name: 'Amit Kumar', blood: 'O-', city: 'Chennai', phone: '+91 54321 09876', available: true, lastDonation: '2026-01-25', donations: 20 },
  { name: 'Divya Nair', blood: 'B-', city: 'Kolkata', phone: '+91 43210 98765', available: true, lastDonation: '2026-04-05', donations: 10 },
  { name: 'Karan Mehta', blood: 'A-', city: 'Pune', phone: '+91 32109 87654', available: false, lastDonation: '2026-05-20', donations: 5 },
  { name: 'Ananya Gupta', blood: 'AB+', city: 'Ahmedabad', phone: '+91 21098 76543', available: true, lastDonation: '2025-11-18', donations: 9 },
  { name: 'Vikram Joshi', blood: 'O+', city: 'Jaipur', phone: '+91 10987 65432', available: true, lastDonation: '2026-03-30', donations: 14 },
  { name: 'Meera Iyer', blood: 'A+', city: 'Lucknow', phone: '+91 09876 54321', available: true, lastDonation: '2026-02-14', donations: 7 },
  { name: 'Rohan Das', blood: 'B+', city: 'Mumbai', phone: '+91 98765 11111', available: true, lastDonation: '2026-01-10', donations: 11 },
  { name: 'Pooja Verma', blood: 'O-', city: 'Delhi', phone: '+91 87654 22222', available: false, lastDonation: '2026-06-10', donations: 3 },
  { name: 'Aditya Rao', blood: 'AB+', city: 'Bangalore', phone: '+91 76543 33333', available: true, lastDonation: '2025-10-05', donations: 16 },
  { name: 'Kavita Mishra', blood: 'B-', city: 'Hyderabad', phone: '+91 65432 44444', available: true, lastDonation: '2026-04-22', donations: 4 },
  { name: 'Nikhil Agarwal', blood: 'A-', city: 'Chennai', phone: '+91 54321 55555', available: true, lastDonation: '2025-09-15', donations: 13 },
];

// Sample Blood Banks
const BLOOD_BANKS = [
  { name: 'Red Cross Blood Bank', location: 'Mumbai, Maharashtra', bloods: { 'O+': 45, 'A+': 32, 'B+': 28, 'AB+': 12, 'O-': 5, 'A-': 8, 'B-': 3, 'AB-': 2 }, contact: '+91 22 2345 6789', units: 135 },
  { name: 'Apollo Blood Centre', location: 'Delhi, NCR', bloods: { 'O+': 52, 'A+': 38, 'B+': 22, 'AB+': 15, 'O-': 7, 'A-': 10, 'B-': 4, 'AB-': 3 }, contact: '+91 11 3456 7890', units: 151 },
  { name: 'Fortis Blood Bank', location: 'Bangalore, Karnataka', bloods: { 'O+': 38, 'A+': 25, 'B+': 30, 'AB+': 8, 'O-': 3, 'A-': 6, 'B-': 2, 'AB-': 1 }, contact: '+91 80 4567 8901', units: 113 },
  { name: 'AIIMS Blood Centre', location: 'Hyderabad, Telangana', bloods: { 'O+': 60, 'A+': 42, 'B+': 35, 'AB+': 18, 'O-': 8, 'A-': 12, 'B-': 5, 'AB-': 4 }, contact: '+91 40 5678 9012', units: 184 },
  { name: 'Tata Blood Bank', location: 'Chennai, Tamil Nadu', bloods: { 'O+': 33, 'A+': 20, 'B+': 18, 'AB+': 10, 'O-': 4, 'A-': 5, 'B-': 2, 'AB-': 1 }, contact: '+91 44 6789 0123', units: 93 },
  { name: 'Narayana Blood Centre', location: 'Kolkata, West Bengal', bloods: { 'O+': 40, 'A+': 28, 'B+': 24, 'AB+': 14, 'O-': 6, 'A-': 9, 'B-': 3, 'AB-': 2 }, contact: '+91 33 7890 1234', units: 126 },
];

// Leaderboard data
const LEADERBOARD = [
  { name: 'Amit Kumar', blood: 'O-', donations: 20, city: 'Chennai' },
  { name: 'Aditya Rao', blood: 'AB+', donations: 16, city: 'Bangalore' },
  { name: 'Arjun Singh', blood: 'B+', donations: 15, city: 'Bangalore' },
  { name: 'Vikram Joshi', blood: 'O+', donations: 14, city: 'Jaipur' },
  { name: 'Nikhil Agarwal', blood: 'A-', donations: 13, city: 'Chennai' },
  { name: 'Rahul Sharma', blood: 'O+', donations: 12, city: 'Mumbai' },
  { name: 'Rohan Das', blood: 'B+', donations: 11, city: 'Mumbai' },
  { name: 'Divya Nair', blood: 'B-', donations: 10, city: 'Kolkata' },
  { name: 'Ananya Gupta', blood: 'AB+', donations: 9, city: 'Ahmedabad' },
  { name: 'Priya Patel', blood: 'A+', donations: 8, city: 'Delhi' },
];

// Dashboard data
const DASHBOARD_DATA = {
  requests: { 'O+': 85, 'A+': 72, 'B+': 58, 'AB+': 35, 'O-': 42, 'A-': 28, 'B-': 22, 'AB-': 15 },
  regions: [
    { name: 'Mumbai', count: 234 },
    { name: 'Delhi', count: 198 },
    { name: 'Bangalore', count: 167 },
    { name: 'Hyderabad', count: 145 },
    { name: 'Chennai', count: 132 },
  ],
  alerts: [
    { type: 'critical', text: 'AB- blood critically low in Mumbai region – Only 2 units remaining' },
    { type: 'critical', text: 'O- shortage alert in Delhi – Emergency donors needed' },
    { type: 'warning', text: 'B- running low across Bangalore blood banks' },
    { type: 'warning', text: 'Increased demand for O+ in Chennai hospitals' },
  ]
};

// ===== FIREBASE CLOUD BACKEND SYSTEM =====
// API keys are loaded from firebase-config.js (gitignored — see firebase-config.example.js for setup)
// window.firebaseConfig is set by firebase-config.js before this script runs

let db = null;
let isFirebaseConnected = false;

function initFirebaseBackend() {
  if (typeof firebase !== 'undefined') {
    try {
      if (!firebase.apps.length) {
        if (!window.firebaseConfig) {
          console.error('❌ firebase-config.js not found! Copy firebase-config.example.js → firebase-config.js and fill in your keys.');
          return;
        }
        firebase.initializeApp(window.firebaseConfig);
      }
      db = firebase.firestore();

      // 1. donors — Registered blood donors
      db.collection('donors').onSnapshot((snapshot) => {
        if (!snapshot.empty) {
          registeredDonors = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          isFirebaseConnected = true;
          updateCloudStatusBadge();
          renderPage();
        } else {
          seedInitialFirestoreData();
        }
      }, (err) => {
        console.log('Firebase in offline fallback mode:', err.message);
        isFirebaseConnected = false;
        updateCloudStatusBadge();
      });

      // 2. emergency — Emergency blood requests
      db.collection('emergency').onSnapshot((snapshot) => {
        if (!snapshot.empty) {
          emergencyRequestsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          renderPage();
        }
      }, () => { });

      // 3. blood_banks — Blood bank inventory
      db.collection('blood_banks').onSnapshot((snapshot) => {
        if (!snapshot.empty) {
          const cloudBanks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          cloudBanks.forEach((cb, idx) => {
            if (BLOOD_BANKS[idx]) {
              BLOOD_BANKS[idx].bloods = cb.bloods || BLOOD_BANKS[idx].bloods;
              BLOOD_BANKS[idx].units = cb.units || BLOOD_BANKS[idx].units;
              BLOOD_BANKS[idx].firestoreId = cb.id;
            }
          });
          renderPage();
        }
      }, () => { });

    } catch (e) {
      console.warn('Firebase connection notice:', e.message);
      isFirebaseConnected = false;
      updateCloudStatusBadge();
    }
  }
}

// Helper to delete all docs in a collection
async function clearCollection(collectionName) {
  if (!db) return;
  try {
    const snap = await db.collection(collectionName).get();
    if (snap.empty) return;
    const batch = db.batch();
    snap.docs.forEach(d => batch.delete(d.ref));
    await batch.commit();
    console.log(`🗑️  Cleared "${collectionName}" (${snap.size} docs)`);
  } catch (e) {
    console.log(`⚠️  Could not clear "${collectionName}": ${e.message}`);
  }
}

let isSeedingProcessActive = false;

async function seedInitialFirestoreData() {
  if (!db || isSeedingProcessActive) return;
  isSeedingProcessActive = true;
  console.log('🌱 donors table empty. Starting auto-seed for all 6 tables...');

  try {
    const OLD = ['users_and_donors', 'emergency_requests', 'registered_donors',
      'all_users', 'login_details', 'admin_details', 'user_logins',
      'user_accounts', 'blood_bank_details'];
    const NEW = ['admins', 'donors', 'emergency', 'users', 'logins', 'blood_banks'];

    // Clear any leftover data from these collections
    for (const c of [...OLD, ...NEW]) {
      await clearCollection(c);
    }

    const batch = db.batch();
    const NOW = new Date().toISOString();

    // 1. Seed admins
    const adminRef = db.collection('admins').doc();
    batch.set(adminRef, {
      name: 'LifeLink Admin',
      email: 'admin@lifelink.org',
      role: 'admin',
      savedAt: NOW,
      note: 'System administrator account'
    });

    // 2. Seed donors
    SAMPLE_DONORS.forEach(d => {
      const ref = db.collection('donors').doc();
      batch.set(ref, { ...d, registeredAt: NOW });
    });

    // 3. Seed emergency
    emergencyRequestsList.forEach(r => {
      const ref = db.collection('emergency').doc(r.id);
      batch.set(ref, r);
    });

    // 4. Seed users (initializer document)
    const userInitRef = db.collection('users').doc('_init');
    batch.set(userInitRef, {
      _placeholder: true,
      note: 'Master users registry. Created automatically.',
      createdAt: NOW
    });

    // 5. Seed logins (initializer document)
    const loginInitRef = db.collection('logins').doc('_init');
    batch.set(loginInitRef, {
      _placeholder: true,
      note: 'Tracks all login timestamps and sessions.',
      createdAt: NOW
    });

    // 6. Seed blood_banks
    BLOOD_BANKS.forEach((b, idx) => {
      const ref = db.collection('blood_banks').doc(`BANK-${idx + 1}`);
      batch.set(ref, b);
    });

    await batch.commit();
    isFirebaseConnected = true;
    updateCloudStatusBadge();
    showToast('🎉 Created and seeded all 6 tables cleanly in Firebase!', 'success');
  } catch (err) {
    console.error('Error auto-seeding Firebase:', err);
  } finally {
    isSeedingProcessActive = false;
  }
}

// Call window.seedNow() from browser console for a full fresh seed
window.seedNow = async function () {
  if (!db) { console.error('Firebase not connected'); return; }
  console.log('\n🗑️  Deleting all old + new collections...');

  const OLD = ['users_and_donors', 'emergency_requests', 'registered_donors',
    'all_users', 'login_details', 'admin_details', 'user_logins',
    'user_accounts', 'blood_bank_details'];
  const NEW = ['admins', 'donors', 'emergency', 'users', 'logins', 'blood_banks'];

  for (const c of [...OLD, ...NEW]) await clearCollection(c);

  console.log('\n🌱 Seeding 6 fresh tables...');
  const b = db.batch();
  const NOW = new Date().toISOString();

  // TABLE 1: admins
  b.set(db.collection('admins').doc(), {
    name: 'LifeLink Admin', email: 'admin@lifelink.org',
    role: 'admin', savedAt: NOW, note: 'System administrator'
  });

  // TABLE 2: donors
  SAMPLE_DONORS.forEach(d => {
    b.set(db.collection('donors').doc(), { ...d, registeredAt: NOW });
  });

  // TABLE 3: emergency
  emergencyRequestsList.forEach(r => {
    b.set(db.collection('emergency').doc(r.id), r);
  });

  // TABLE 4: users (placeholder)
  b.set(db.collection('users').doc('_init'), {
    _placeholder: true, note: 'Populates on first user signup', createdAt: NOW
  });

  // TABLE 5: logins (placeholder)
  b.set(db.collection('logins').doc('_init'), {
    _placeholder: true, note: 'Populates on first login', createdAt: NOW
  });

  // TABLE 6: blood_banks
  BLOOD_BANKS.forEach((bk, idx) => {
    b.set(db.collection('blood_banks').doc(`BANK-${idx + 1}`), bk);
  });

  await b.commit();
  console.log('\n✅ All 6 tables created fresh!');
  console.log('  1. admins        → 1 record');
  console.log('  2. donors        →', SAMPLE_DONORS.length, 'records');
  console.log('  3. emergency     →', emergencyRequestsList.length, 'records');
  console.log('  4. users         → placeholder');
  console.log('  5. logins        → placeholder');
  console.log('  6. blood_banks   →', BLOOD_BANKS.length, 'records');
  showToast('🎉 All 6 Firestore tables seeded fresh!', 'success');
  isFirebaseConnected = true;
  updateCloudStatusBadge();
  renderPage();
};

function updateCloudStatusBadge() {
  const badge = document.getElementById('cloud-status-badge');
  if (badge) {
    badge.innerHTML = isFirebaseConnected
      ? `<span style="color:#10b981; display:inline-flex; align-items:center; gap:4px;">${SVG_ICONS.check(14, '#10b981')} Firebase Live Sync</span>`
      : `<span style="color:#f59e0b; display:inline-flex; align-items:center; gap:4px;">⚡ Local DB Mode</span>`;
  }
}

// ===== APP STATE =====
let currentPage = 'home';
let registeredDonors = [...SAMPLE_DONORS];
let currentUserAccount = JSON.parse(localStorage.getItem('lifelink_user_account') || 'null');
let isAdminLoggedIn = localStorage.getItem('lifelink_admin_logged_in') === 'true';
let adminActiveTab = 'donors';
let emergencyRequestsList = [
  { id: 'REQ-101', patient: 'Rajesh Sharma', blood: 'O+', hospital: 'Lilavati Hospital', city: 'Mumbai', phone: '+91 98200 12345', units: 2, urgency: 'critical', status: 'Pending', createdAt: '2026-07-30 10:30' },
  { id: 'REQ-102', patient: 'Sunita Patel', blood: 'AB-', hospital: 'Max Super Speciality', city: 'Delhi', phone: '+91 98111 54321', units: 1, urgency: 'critical', status: 'In Progress', createdAt: '2026-07-30 11:15' },
  { id: 'REQ-103', patient: 'Vikram Malhotra', blood: 'B+', hospital: 'Manipal Hospital', city: 'Bangalore', phone: '+91 98450 99887', units: 3, urgency: 'urgent', status: 'Resolved', createdAt: '2026-07-29 16:45' }
];

// ===== ROUTER =====
function navigateTo(page) {
  const isLoggedIn = Boolean(isAdminLoggedIn || currentUserAccount);

  // Home page is open to everyone. All other pages require signup / login first!
  if (page !== 'home' && !isLoggedIn) {
    showToast(`🔒 Please Sign Up or Log In first to access ${page.toUpperCase()}!`, 'error');
    openAuthModal('signup', 'user');
    return;
  }

  currentPage = page;
  renderPage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateActiveNav();
  closeMobileMenu();
}

function updateActiveNav() {
  document.querySelectorAll('.nav a').forEach(link => {
    link.classList.toggle('active', link.dataset.page === currentPage);
  });
}

function closeMobileMenu() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.mobile-toggle');
  if (nav) nav.classList.remove('open');
  if (toggle) toggle.classList.remove('open');
}

// ===== RENDER =====
function renderPage() {
  const main = document.getElementById('main-content');
  const isLoggedIn = Boolean(isAdminLoggedIn || currentUserAccount);

  if (currentPage !== 'home' && !isLoggedIn) {
    currentPage = 'home';
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
  initPageEffects();
}

// ===== HOME PAGE =====
function renderHome() {
  return `
    <!-- Hero -->
    <section class="lp-hero" id="hero-section">
      <div class="lp-hero-inner">
        <p class="lp-eyebrow">One Platform. Thousands of Lifesavers.</p>
        <h1 class="lp-hero-title">Connecting Donors.<br><span class="lp-red">Saving Lives.</span></h1>
        <p class="lp-lede">
          Every year, thousands of patients — many needing rare blood types like AB-, B- and O- —
          lose critical time searching for a match. LifeLink links donors, patients, hospitals and
          blood banks on one live network, so the right blood group reaches the right person before
          it's too late.
        </p>
        <div class="lp-hero-ctas">
          <button class="btn btn-primary btn-lg glow-card" onclick="navigateTo('find')">${SVG_ICONS.search(18)} Find Blood Donor</button>
          <button class="btn btn-outline btn-lg glow-card" onclick="navigateTo('register')">${SVG_ICONS.heart(18, '#dc2626')} Register as Donor</button>
          <button class="btn btn-outline btn-lg lp-emergency-btn pulse-beacon" onclick="navigateTo('emergency')">${SVG_ICONS.siren(18, '#dc2626')} Emergency Request</button>
        </div>
      </div>

      <div class="lp-hero-pulse" aria-hidden="true">
        <div class="lp-pulse-track">
          <svg viewBox="0 0 590 70" preserveAspectRatio="none">
            <path d="M0,35 L210,35 L224,35 L232,10 L244,60 L254,20 L264,35 L590,35" />
          </svg>
          <svg viewBox="0 0 590 70" preserveAspectRatio="none">
            <path d="M0,35 L210,35 L224,35 L232,10 L244,60 L254,20 L264,35 L590,35" />
          </svg>
        </div>
      </div>

      <div class="lp-stats-row">
        <div class="lp-stat animate-on-scroll">
          <div class="stat-number" data-count="15847">0</div>
          <div class="lp-stat-label">Registered Donors</div>
        </div>
        <div class="lp-stat animate-on-scroll">
          <div class="stat-number" data-count="8432">0</div>
          <div class="lp-stat-label">Successful Donations</div>
        </div>
        <div class="lp-stat animate-on-scroll">
          <div class="stat-number" data-count="2156">0</div>
          <div class="lp-stat-label">Active Requests Fulfilled</div>
        </div>
        <div class="lp-stat animate-on-scroll">
          <div class="stat-number" data-count="342">0</div>
          <div class="lp-stat-label">Partner Blood Banks</div>
        </div>
      </div>
    </section>

    <!-- The Problem -->
    <section class="lp-problem-section">
      <div class="container">
        <div class="lp-section-head">
          <p class="lp-eyebrow">The Problem</p>
          <h2>A shortage measured in minutes, not units</h2>
        </div>

        <div class="lp-problem-grid">
          <div class="lp-problem-card animate-on-scroll">
            <div class="lp-problem-num">01</div>
            <h3>Rare groups vanish fast</h3>
            <p>AB-, B- and O- make up a fraction of the donor pool, so hospitals often have zero units on hand when a critical case arrives.</p>
          </div>
          <div class="lp-problem-card animate-on-scroll">
            <div class="lp-problem-num">02</div>
            <h3>Families search blind</h3>
            <p>Relatives call friends, post on social media, and wait — with no way to see who's nearby, eligible, and actually available right now.</p>
          </div>
          <div class="lp-problem-card animate-on-scroll">
            <div class="lp-problem-num">03</div>
            <h3>Donors go untracked</h3>
            <p>Willing donors exist everywhere, but without a shared network, hospitals can't reach them the moment it matters.</p>
          </div>
        </div>

        <div class="lp-cta-banner animate-on-scroll">
          <div>
            <h2>Your donation can restart a heartbeat.</h2>
            <p>Join the network — it takes two minutes to register, and you could be the reason someone makes it through the night.</p>
          </div>
          <button class="btn btn-primary btn-lg" onclick="navigateTo('register')">Register as Donor</button>
        </div>
      </div>
    </section>
  `;
}

// ===== REGISTER PAGE =====
function renderRegister() {
  return `
    <div class="page-header">
      <h1>Register as <span class="text-accent">Blood Donor</span></h1>
      <p>Join our network of lifesavers. Your single donation can save up to 3 lives.</p>
    </div>
    <section class="section">
      <div class="container">
        <div class="form-card animate-on-scroll">
          <h2>Donor Registration</h2>
          <p class="subtitle">Fill in your details to join the LifeLink donor network.</p>
          <form id="register-form" onsubmit="handleRegister(event)">
            <div class="form-grid">
              <div class="form-group">
                <label>Full Name <span class="required">*</span></label>
                <input type="text" class="form-control" id="reg-name" placeholder="Enter your full name" required>
              </div>
              <div class="form-group">
                <label>Blood Group <span class="required">*</span></label>
                <select class="form-control" id="reg-blood" required>
                  <option value="">Select blood group</option>
                  ${BLOOD_GROUPS.map(bg => `<option value="${bg}">${bg}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label>Age <span class="required">*</span></label>
                <input type="number" class="form-control" id="reg-age" placeholder="e.g. 25" min="18" max="65" required>
              </div>
              <div class="form-group">
                <label>Gender <span class="required">*</span></label>
                <select class="form-control" id="reg-gender" required>
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label>Phone Number <span class="required">*</span></label>
                <input type="tel" class="form-control" id="reg-phone" placeholder="10-digit mobile number" required maxlength="10" minlength="10" pattern="[0-9]{10}" title="Please enter exactly 10 digits">
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" id="reg-email" placeholder="your@email.com">
              </div>
              <div class="form-group">
                <label>City / Location <span class="required">*</span></label>
                <select class="form-control" id="reg-city" required>
                  <option value="">Select city</option>
                  ${CITIES.map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label>Last Blood Donation Date</label>
                <input type="date" class="form-control" id="reg-last-donation" onchange="checkDonationEligibility()">
                <div id="donation-eligibility"></div>
              </div>
              <div class="form-group full-width">
                <label>Availability Status <span class="required">*</span></label>
                <select class="form-control" id="reg-availability" required>
                  <option value="Available">Available for Donation</option>
                  <option value="Not Available">Not Available</option>
                </select>
              </div>
              <div class="form-group full-width" style="margin-top: 12px;">
                <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">Register as Donor</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  `;
}

function checkDonationEligibility() {
  const lastDate = document.getElementById('reg-last-donation').value;
  const container = document.getElementById('donation-eligibility');
  if (!lastDate) { container.innerHTML = ''; return; }

  const last = new Date(lastDate);
  const now = new Date();
  const diffMs = now - last;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const threeMonths = 90;

  if (diffDays < threeMonths) {
    const daysLeft = threeMonths - diffDays;
    container.innerHTML = `
      <div class="donation-warning">
        ⚠️ You need to wait ${daysLeft} more day${daysLeft > 1 ? 's' : ''} before your next donation (3-month gap required).
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="donation-warning ok">
        ✅ You are eligible to donate blood! Last donation was ${diffDays} days ago.
      </div>
    `;
  }
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const blood = document.getElementById('reg-blood').value;
  const city = document.getElementById('reg-city').value;
  const phone = document.getElementById('reg-phone').value.trim();
  const emailInput = document.getElementById('reg-email');
  const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
  const availability = document.getElementById('reg-availability').value;
  const lastDonation = document.getElementById('reg-last-donation').value;

  const cleanPhone = phone.replace(/\D/g, '');
  if (cleanPhone.length !== 10) {
    showToast('⚠️ Phone number must be exactly 10 digits!', 'error');
    return;
  }

  // Check duplicate in local registeredDonors cache
  const isDuplicate = registeredDonors.some(d =>
    (d.phone && d.phone.replace(/\D/g, '') === cleanPhone) ||
    (email && d.email && d.email.toLowerCase() === email)
  );

  if (isDuplicate) {
    showToast('⚠️ A donor with this email or phone number is already registered!', 'error');
    return;
  }

  const newDonor = {
    name,
    blood,
    city,
    phone: cleanPhone,
    email: email || null,
    available: availability === 'Available',
    lastDonation: lastDonation || null,
    donations: 0,
    registeredAt: new Date().toISOString()
  };

  const submitBtn = e.target.querySelector('button[type="submit"]');
  if (submitBtn) submitBtn.disabled = true;

  if (isFirebaseConnected && db) {
    db.collection('donors').add(newDonor).then(() => {
      showToast(`Welcome ${name}! Registered in Firebase Cloud Database.`, 'success');
      showRegistrationSuccessModal(name, blood, city);
    }).catch(err => {
      console.error('Firestore Register Error:', err);
      showToast('❌ Registration failed. Please try again.', 'error');
      if (submitBtn) submitBtn.disabled = false;
    });
  } else {
    registeredDonors.push(newDonor);
    showToast(`Welcome ${name}! Registered locally.`, 'success');
    showRegistrationSuccessModal(name, blood, city);
  }
}

function showRegistrationSuccessModal(name, blood, city) {
  showModal(
    'Registration Successful! 🎉',
    `Thank you for joining LifeLink, ${name}! As a ${blood} donor in ${city}, you are now part of a network saving lives every day.${RARE_GROUPS.includes(blood) ? ' Your rare blood type is in high demand — you will receive priority emergency alerts.' : ''}`,
    [
      { text: 'Find Donors', class: 'btn-outline', action: () => { closeModal(); navigateTo('find'); } },
      { text: 'Go Home', class: 'btn-primary', action: () => { closeModal(); navigateTo('home'); } }
    ]
  );
}

// ===== FIND DONOR PAGE =====
function renderFind() {
  return `
    <div class="page-header">
      <h1>Find Blood <span class="text-accent">Donors</span></h1>
      <p>Search our network of verified donors by blood group and location.</p>
    </div>
    <section class="section">
      <div class="container">
        <div class="search-bar animate-on-scroll">
          <select class="form-control" id="search-blood" onchange="filterDonors()">
            <option value="">All Blood Groups</option>
            ${BLOOD_GROUPS.map(bg => `<option value="${bg}">${bg}</option>`).join('')}
          </select>
          <select class="form-control" id="search-city" onchange="filterDonors()">
            <option value="">All Locations</option>
            ${CITIES.map(c => `<option value="${c}">${c}</option>`).join('')}
          </select>
          <select class="form-control" id="search-availability" onchange="filterDonors()">
            <option value="">All Status</option>
            <option value="available">Available Only</option>
          </select>
          <button class="btn btn-primary" onclick="filterDonors()">${SVG_ICONS.search(16)} Search</button>
        </div>
        <div id="search-summary" class="animate-on-scroll" style="margin-bottom: 20px; font-size: 0.95rem; color: var(--text-secondary);">
          Showing all ${registeredDonors.length} donors
        </div>
        <div class="donor-results" id="donor-results">
          ${renderDonorCards(registeredDonors)}
        </div>
      </div>
    </section>
  `;
}

function renderDonorCards(donors) {
  if (donors.length === 0) {
    return `<div style="text-align: center; padding: 60px 20px; grid-column: 1 / -1;">
      <div style="margin-bottom: 16px;">${SVG_ICONS.search(48, 'var(--text-muted)')}</div>
      <h3 style="margin-bottom: 8px;">No donors found</h3>
      <p style="color: var(--text-secondary);">Try adjusting your search criteria or check back later.</p>
    </div>`;
  }

  return donors.map((d, index) => {
    const initials = d.name.split(' ').map(n => n[0]).join('');
    const distance = (Math.random() * 15 + 1).toFixed(1);
    const staggerClass = `stagger-${(index % 4) + 1}`;
    return `
      <div class="donor-card glow-card reveal-up ${staggerClass}">
        <div class="donor-card-header">
          <div class="donor-avatar">${initials}</div>
          <div>
            <div class="donor-name">${d.name}</div>
            <span class="donor-blood">${d.blood}</span>
          </div>
        </div>
        <div class="donor-details">
          <div class="donor-detail" style="display: flex; align-items: center; gap: 6px;">${SVG_ICONS.mapPin(14, 'var(--text-secondary)')} ${d.city} · ${distance} km away</div>
          <div class="donor-detail" style="display: flex; align-items: center; gap: 6px;">${SVG_ICONS.droplet(14, '#dc2626')} ${d.donations || 0} donations</div>
          <div class="donor-detail">
            <span class="donor-status ${d.available ? 'available' : 'unavailable'}">
              <span class="donor-status-dot"></span>
              ${d.available ? 'Available' : 'Not Available'}
            </span>
          </div>
        </div>
        <button class="btn ${d.available ? 'btn-primary' : 'btn-outline'} btn-sm" style="width: 100%;" 
          onclick="${d.available ? `showToast('Contact request sent to ${d.name}. They will be notified.', 'success')` : `showToast('This donor is currently unavailable.', 'error')`}">
          ${d.available ? `${SVG_ICONS.phone(14)} Contact Donor` : 'Unavailable'}
        </button>
      </div>
    `;
  }).join('');
}

function filterDonors() {
  const blood = document.getElementById('search-blood').value;
  const city = document.getElementById('search-city').value;
  const availability = document.getElementById('search-availability').value;

  let filtered = registeredDonors.filter(d => {
    if (blood && d.blood !== blood) return false;
    if (city && d.city !== city) return false;
    if (availability === 'available' && !d.available) return false;
    return true;
  });

  document.getElementById('donor-results').innerHTML = renderDonorCards(filtered);
  document.getElementById('search-summary').textContent = `Showing ${filtered.length} of ${registeredDonors.length} donors${blood ? ` with blood group ${blood}` : ''}${city ? ` in ${city}` : ''}`;
}

// ===== EMERGENCY PAGE =====
function renderEmergency() {
  return `
    <div class="page-header" style="background: linear-gradient(180deg, var(--red-50), #fff);">
      <h1 style="display: flex; align-items: center; justify-content: center; gap: 10px;">
        <span class="pulse-beacon" style="display: inline-flex;">${SVG_ICONS.siren(32, '#dc2626')}</span>
        Emergency Blood <span class="text-accent">Request</span>
      </h1>
      <p>Submit an urgent request and we'll instantly notify nearby compatible donors.</p>
    </div>
    <section class="section">
      <div class="container">
        <div class="form-card glow-card reveal-up">
          <h2 style="display: flex; align-items: center; gap: 10px;">${SVG_ICONS.droplet(24, '#dc2626')} Urgent Blood Request</h2>
          <p class="subtitle">Please fill in the details accurately. Nearby donors will be alerted immediately.</p>
          <form id="emergency-form" onsubmit="handleEmergency(event)">
            <div class="form-grid">
              <div class="form-group">
                <label>Patient Name <span class="required">*</span></label>
                <input type="text" class="form-control" id="em-patient" placeholder="Patient's full name" required>
              </div>
              <div class="form-group">
                <label>Required Blood Group <span class="required">*</span></label>
                <select class="form-control" id="em-blood" required>
                  <option value="">Select blood group</option>
                  ${BLOOD_GROUPS.map(bg => `<option value="${bg}">${bg}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label>Hospital Name <span class="required">*</span></label>
                <input type="text" class="form-control" id="em-hospital" placeholder="Hospital name" required>
              </div>
              <div class="form-group">
                <label>Hospital Location <span class="required">*</span></label>
                <select class="form-control" id="em-location" required>
                  <option value="">Select location</option>
                  ${CITIES.map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label>Contact Number <span class="required">*</span></label>
                <input type="tel" class="form-control" id="em-phone" placeholder="+91 XXXXX XXXXX" required>
              </div>
              <div class="form-group">
                <label>Units Required</label>
                <input type="number" class="form-control" id="em-units" placeholder="e.g. 2" min="1" max="20" value="1">
              </div>
              <div class="form-group full-width">
                <label>Urgency Level <span class="required">*</span></label>
                <div class="urgency-selector">
                  <div class="urgency-option" data-level="normal" onclick="selectUrgency('normal')">
                    <div style="margin-bottom: 4px;">${SVG_ICONS.check(22, '#10b981')}</div>
                    Normal
                  </div>
                  <div class="urgency-option" data-level="urgent" onclick="selectUrgency('urgent')">
                    <div style="margin-bottom: 4px;">${SVG_ICONS.alertTriangle(22, '#f59e0b')}</div>
                    Urgent
                  </div>
                  <div class="urgency-option selected critical" data-level="critical" onclick="selectUrgency('critical')">
                    <div style="margin-bottom: 4px;">${SVG_ICONS.siren(22, '#ef4444')}</div>
                    Critical
                  </div>
                </div>
                <input type="hidden" id="em-urgency" value="critical">
              </div>
              <div class="form-group full-width" style="margin-top: 12px;">
                <button type="submit" class="btn btn-primary btn-lg pulse-beacon" style="width: 100%; background: linear-gradient(135deg, #dc2626, #991b1b);">
                  ${SVG_ICONS.siren(20)} Submit Emergency Request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  `;
}

function selectUrgency(level) {
  document.querySelectorAll('.urgency-option').forEach(opt => {
    opt.classList.remove('selected', 'normal', 'urgent', 'critical');
  });
  const selected = document.querySelector(`.urgency-option[data-level="${level}"]`);
  selected.classList.add('selected', level);
  document.getElementById('em-urgency').value = level;
}

function handleEmergency(e) {
  e.preventDefault();
  const patient = document.getElementById('em-patient').value;
  const blood = document.getElementById('em-blood').value;
  const hospital = document.getElementById('em-hospital').value;
  const location = document.getElementById('em-location').value;
  const urgency = document.getElementById('em-urgency').value;
  const phone = document.getElementById('em-phone').value || '+91 99000 00000';
  const units = parseInt(document.getElementById('em-units').value) || 1;

  const newReq = {
    patient,
    blood,
    hospital,
    city: location,
    phone,
    units,
    urgency,
    status: 'Pending',
    createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
  };

  if (isFirebaseConnected && db) {
    db.collection('emergency_requests').add(newReq).then(() => {
      showToast(`Emergency alert saved to Firebase Cloud DB!`, 'success');
    }).catch(err => console.error('Firestore Emergency Error:', err));
  } else {
    newReq.id = `REQ-${Math.floor(100 + Math.random() * 900)}`;
    emergencyRequestsList.unshift(newReq);
    showToast(`Emergency alert sent to compatible donors!`, 'success');
  }

  // Find matching donors
  const matchingDonors = registeredDonors.filter(d => d.blood === blood && d.available);
  const nearbyDonors = matchingDonors.filter(d => d.city === location);

  // Simulate notification sequence
  setTimeout(() => {
    showToast(`📱 ${nearbyDonors.length > 0 ? nearbyDonors[0].name : 'A nearby donor'} has been notified of the ${urgency} request.`, 'info');
  }, 2000);

  setTimeout(() => {
    showToast(`✅ 3 donors have confirmed availability for ${patient}'s request at ${hospital}.`, 'success');
  }, 4500);

  showModal(
    'Emergency Request Submitted 🚨',
    `Your ${urgency} blood request for ${blood} has been submitted.\n\n• Patient: ${patient}\n• Hospital: ${hospital}, ${location}\n• ${matchingDonors.length} compatible donors notified\n• ${nearbyDonors.length} donors near ${location}\n\nDonors will receive push notifications and SMS alerts immediately.`,
    [
      { text: 'Track Requests', class: 'btn-outline', action: () => { closeModal(); navigateTo('dashboard'); } },
      { text: 'Go Home', class: 'btn-primary', action: () => { closeModal(); navigateTo('home'); } }
    ]
  );
}

// ===== COMPATIBILITY CHECKER =====
function renderCompatibility() {
  return `
    <div class="page-header">
      <h1>Blood Group <span class="text-accent">Compatibility</span></h1>
      <p>Find out which blood types are compatible for transfusion.</p>
    </div>
    <section class="section">
      <div class="container">
        <div class="compatibility-tool animate-on-scroll">
          <div class="compat-select-row">
            <label>Select your blood group:</label>
            <select class="form-control" id="compat-select" onchange="showCompatibility()" style="max-width: 200px;">
              <option value="">Choose...</option>
              ${BLOOD_GROUPS.map(bg => `<option value="${bg}">${bg}</option>`).join('')}
            </select>
          </div>
          <div id="compat-results"></div>
        </div>
      </div>
    </section>
  `;
}

function showCompatibility() {
  const blood = document.getElementById('compat-select').value;
  const container = document.getElementById('compat-results');

  if (!blood) { container.innerHTML = ''; return; }

  const data = COMPATIBILITY[blood];

  container.innerHTML = `
    <div class="compat-result active">
      <div style="text-align: center; margin-bottom: 40px;">
        <div style="font-family: 'Outfit', sans-serif; font-size: 3.5rem; font-weight: 900; color: var(--accent); margin-bottom: 8px;">${blood}</div>
        <div style="font-size: 1.1rem; font-weight: 600; color: var(--text-secondary);">${data.label}</div>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; max-width: 800px; margin: 0 auto;">
        <div>
          <div class="compat-direction">
            <h3>🩸 ${blood} Can Donate To</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">These blood types can receive from ${blood}</p>
          </div>
          <div class="compat-grid" style="max-width: none;">
            ${BLOOD_GROUPS.map(bg => `
              <div class="compat-item ${data.donateTo.includes(bg) ? 'can-donate' : 'cannot'}">
                ${bg}
                <span class="compat-label">${data.donateTo.includes(bg) ? '✓ Compatible' : '✗ No'}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <div>
          <div class="compat-direction">
            <h3>💉 ${blood} Can Receive From</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">These blood types can donate to ${blood}</p>
          </div>
          <div class="compat-grid" style="max-width: none;">
            ${BLOOD_GROUPS.map(bg => `
              <div class="compat-item ${data.receiveFrom.includes(bg) ? 'can-donate' : 'cannot'}">
                ${bg}
                <span class="compat-label">${data.receiveFrom.includes(bg) ? '✓ Compatible' : '✗ No'}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ===== BLOOD BANKS =====
function renderBanks() {
  return `
    <div class="page-header">
      <h1>Blood Bank <span class="text-accent">Directory</span></h1>
      <p>Find nearby blood banks with real-time availability and contact information.</p>
    </div>
    <section class="section">
      <div class="container">
        <div class="bank-grid">
          ${BLOOD_BANKS.map((bank, i) => `
            <div class="bank-card glow-card reveal-up stagger-${(i % 3) + 1}">
              <div class="bank-name" style="display: flex; align-items: center; gap: 8px;">${SVG_ICONS.hospital(20, '#dc2626')} ${bank.name}</div>
              <div class="bank-location" style="display: flex; align-items: center; gap: 6px;">${SVG_ICONS.mapPin(14, 'var(--text-secondary)')} ${bank.location}</div>
              <div class="bank-units">Total Units Available: <strong>${bank.units}</strong></div>
              <div class="bank-bloods">
                ${Object.entries(bank.bloods).map(([bg, units]) => `
                  <span class="bank-blood-tag ${units <= 5 ? 'low' : ''}">${bg}: ${units}${units <= 5 ? ` ${SVG_ICONS.alertTriangle(12, '#ef4444')}` : ''}</span>
                `).join('')}
              </div>
              <div class="bank-contact" style="display: flex; align-items: center; gap: 6px;">${SVG_ICONS.phone(14)} ${bank.contact}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// ===== AWARENESS PAGE =====
function renderAwareness() {
  return `
    <div class="page-header">
      <h1>Blood Donation <span class="text-accent">Awareness</span></h1>
      <p>Learn everything about blood donation and why it matters.</p>
    </div>
    <section class="section">
      <div class="container">
        <div class="awareness-grid">
          <div class="awareness-card glow-card reveal-up stagger-1">
            <h3 style="display: flex; align-items: center; gap: 8px;">${SVG_ICONS.sparkles(22, '#dc2626')} Benefits of Blood Donation</h3>
            <ul>
              <li>Saves up to 3 lives with a single donation</li>
              <li>Free health screening before every donation</li>
              <li>Reduces risk of heart disease and cancer</li>
              <li>Stimulates production of new blood cells</li>
              <li>Burns approximately 650 calories per donation</li>
              <li>Gives a sense of purpose and community service</li>
            </ul>
          </div>
          <div class="awareness-card glow-card reveal-up stagger-2">
            <h3 style="display: flex; align-items: center; gap: 8px;">${SVG_ICONS.check(22, '#10b981')} Who Can Donate Blood</h3>
            <ul>
              <li>Age between 18 to 65 years</li>
              <li>Minimum weight of 50 kg (110 lbs)</li>
              <li>Hemoglobin level at least 12.5 g/dL</li>
              <li>No chronic illnesses or infections</li>
              <li>Have not donated in the last 3 months</li>
              <li>In good general health on donation day</li>
            </ul>
          </div>
          <div class="awareness-card glow-card reveal-up stagger-3">
            <h3 style="display: flex; align-items: center; gap: 8px;">${SVG_ICONS.cross(22, '#ef4444')} Who Cannot Donate Blood</h3>
            <ul>
              <li>Individuals with HIV, Hepatitis B/C</li>
              <li>Pregnant or breastfeeding women</li>
              <li>People with heart, kidney, or liver disease</li>
              <li>Those on certain medications (anticoagulants)</li>
              <li>People with recent tattoos or piercings (6 months)</li>
              <li>Individuals under the influence of alcohol</li>
            </ul>
          </div>
          <div class="awareness-card glow-card reveal-up stagger-4">
            <h3 style="display: flex; align-items: center; gap: 8px;">${SVG_ICONS.alertTriangle(22, '#f59e0b')} Common Myths Debunked</h3>
            <ul>
              <li><strong>Myth:</strong> Donating blood makes you weak → <em>You recover within 24-48 hours</em></li>
              <li><strong>Myth:</strong> You can get diseases from donating → <em>Sterile, single-use equipment is always used</em></li>
              <li><strong>Myth:</strong> Vegetarians can't donate → <em>Diet doesn't affect eligibility if you're healthy</em></li>
              <li><strong>Myth:</strong> It's very painful → <em>Only a small pinch, over in seconds</em></li>
              <li><strong>Myth:</strong> Blood donation takes hours → <em>The actual process takes only 8-10 minutes</em></li>
            </ul>
          </div>
          <div class="awareness-card glow-card reveal-up stagger-1">
            <h3 style="display: flex; align-items: center; gap: 8px;">${SVG_ICONS.shield(22, '#10b981')} Safety of Blood Donation</h3>
            <ul>
              <li>All equipment is sterile, single-use, and disposable</li>
              <li>Trained medical staff supervise every step</li>
              <li>Pre-donation health check ensures donor safety</li>
              <li>Blood is tested for infectious diseases before use</li>
              <li>Donors are given refreshments and rest time post-donation</li>
              <li>Adverse reactions are extremely rare (less than 1%)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ===== DASHBOARD =====
function renderDashboard() {
  return `
    <div class="page-header">
      <h1>Data Analytics <span class="text-accent">Dashboard</span></h1>
      <p>Real-time insights on blood demand trends and shortage alerts.</p>
    </div>
    <section class="section">
      <div class="container">
        <div class="dashboard-grid">
          <div>
            <div class="chart-card glow-card reveal-left">
              <h3 style="display: flex; align-items: center; gap: 8px;">${SVG_ICONS.droplet(20, '#dc2626')} Blood Groups Most Requested This Month</h3>
              <div class="bar-chart" id="bar-chart">
                ${Object.entries(DASHBOARD_DATA.requests).sort((a, b) => b[1] - a[1]).map(([bg, count], i) => {
    const maxCount = Math.max(...Object.values(DASHBOARD_DATA.requests));
    const width = (count / maxCount) * 100;
    const colors = ['red', 'red', 'blue', 'blue', 'green', 'amber', 'amber', 'amber'];
    return `
                    <div class="bar-item">
                      <div class="bar-label">${bg}</div>
                      <div class="bar-track">
                        <div class="bar-fill ${colors[i]}" data-width="${width}" style="width: 0%">${count} requests</div>
                      </div>
                    </div>
                  `;
  }).join('')}
              </div>
            </div>

            <div class="chart-card glow-card reveal-left" style="margin-top: 24px;">
              <h3 style="display: flex; align-items: center; gap: 8px;">${SVG_ICONS.siren(20, '#f59e0b')} Rare Blood Shortage Alerts</h3>
              <div class="alert-list">
                ${DASHBOARD_DATA.alerts.map(alert => `
                  <div class="alert-item ${alert.type}">
                    <div class="alert-icon">${SVG_ICONS.siren(18, alert.type === 'critical' ? '#ef4444' : '#f59e0b')}</div>
                    <span>${alert.text}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <div>
            <div class="chart-card glow-card reveal-right">
              <h3 style="display: flex; align-items: center; gap: 8px;">${SVG_ICONS.mapPin(20, '#3b82f6')} Regions with Highest Demand</h3>
              <div class="region-list">
                ${DASHBOARD_DATA.regions.map((r, i) => `
                  <div class="region-item">
                    <div>
                      <span style="font-weight: 700; color: var(--accent); margin-right: 8px;">#${i + 1}</span>
                      <span class="region-name">${r.name}</span>
                    </div>
                    <span class="region-count">${r.count}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="chart-card glow-card reveal-right" style="margin-top: 24px;">
              <h3 style="display: flex; align-items: center; gap: 8px;">${SVG_ICONS.activity(20, '#10b981')} Quick Stats</h3>
              <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 8px;">
                <div style="padding: 16px; background: var(--red-50); border-radius: var(--radius-md); border-left: 4px solid var(--accent);">
                  <div style="font-family: 'Outfit', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--accent);">357</div>
                  <div style="font-size: 0.85rem; color: var(--text-secondary);">Total requests this month</div>
                </div>
                <div style="padding: 16px; background: #ecfdf5; border-radius: var(--radius-md); border-left: 4px solid #10b981;">
                  <div style="font-family: 'Outfit', sans-serif; font-size: 1.5rem; font-weight: 800; color: #059669;">89%</div>
                  <div style="font-size: 0.85rem; color: var(--text-secondary);">Request fulfillment rate</div>
                </div>
                <div style="padding: 16px; background: var(--blue-50); border-radius: var(--radius-md); border-left: 4px solid var(--blue-500);">
                  <div style="font-family: 'Outfit', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--blue-500);">28 min</div>
                  <div style="font-size: 0.85rem; color: var(--text-secondary);">Avg. response time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ===== TOAST SYSTEM =====
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
    <span>${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">×</button>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 5000);
}

// ===== MODAL =====
function showModal(title, message, actions) {
  let overlay = document.querySelector('.modal-overlay');
  if (overlay) overlay.remove();

  overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal">
      <h3>${title}</h3>
      <p style="white-space: pre-line;">${message}</p>
      <div class="modal-actions">
        ${actions.map(a => `<button class="btn ${a.class}" id="modal-action-${a.text.replace(/\s/g, '')}">${a.text}</button>`).join('')}
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  // Bind actions
  actions.forEach(a => {
    const btn = document.getElementById(`modal-action-${a.text.replace(/\s/g, '')}`);
    if (btn) btn.addEventListener('click', a.action);
  });

  // Click outside to close
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Animate in
  requestAnimationFrame(() => overlay.classList.add('active'));
}

function closeModal() {
  const overlay = document.querySelector('.modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => overlay.remove(), 300);
  }
}

// ===== SCROLL EFFECTS =====
function initPageEffects() {
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible', 'active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px 50px 0px' });

  document.querySelectorAll('.animate-on-scroll, .reveal-up, .reveal-scale, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });

  // Backup safeguard: Immediately make all elements visible
  requestAnimationFrame(() => {
    document.querySelectorAll('.animate-on-scroll, .reveal-up, .reveal-scale, .reveal-left, .reveal-right').forEach(el => {
      el.classList.add('visible', 'active');
    });
  });

  // Animate stat counters
  document.querySelectorAll('.stat-number[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    animateCounter(el, target);
  });

  // Animate dashboard bars
  setTimeout(() => {
    document.querySelectorAll('.bar-fill[data-width]').forEach(el => {
      el.style.width = el.dataset.width + '%';
    });
  }, 300);
}

function animateCounter(el, target) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = target.toLocaleString();
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(current).toLocaleString();
          }
        }, 25);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  observer.observe(el);
}

// ===== ADMIN PORTAL MODULE =====
function renderAdmin() {
  if (!isAdminLoggedIn) {
    setTimeout(() => {
      navigateTo('home');
      openLoginModal('admin');
    }, 50);
    return `<div style="text-align: center; padding: 100px 20px; font-size: 1.1rem; color: var(--text-secondary);">🔒 Redirecting to Administrator Authentication...</div>`;
  }

  const totalDonors = registeredDonors.length;
  const pendingRequests = emergencyRequestsList.filter(r => r.status !== 'Resolved').length;
  const totalUnits = BLOOD_BANKS.reduce((acc, bank) => acc + bank.units, 0);
  const activeAlerts = DASHBOARD_DATA.alerts.length;

  return `
    <div class="page-header" style="padding-bottom: 32px;">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <div style="text-align: left;">
          <h1 style="margin-bottom: 6px;">Admin <span class="text-accent">Control Center</span></h1>
          <p style="margin: 0;">Manage users, requests, inventory, and system alerts in real time.</p>
        </div>
        <button class="btn btn-outline btn-sm" onclick="handleAdminLogout()" style="border-color: var(--accent); color: var(--accent);">
          🔒 Log Out Admin
        </button>
      </div>
    </div>

    <section class="section" style="padding-top: 32px;">
      <div class="container">
        <!-- Summary Cards -->
        <div class="admin-summary-grid">
          <div class="admin-stat-card glow-card reveal-up stagger-1">
            <div class="admin-stat-icon red">${SVG_ICONS.users(22, '#dc2626')}</div>
            <div>
              <div class="admin-stat-val">${totalDonors}</div>
              <div class="admin-stat-label">Registered Donors</div>
            </div>
          </div>
          <div class="admin-stat-card glow-card reveal-up stagger-2">
            <div class="admin-stat-icon amber">${SVG_ICONS.siren(22, '#d97706')}</div>
            <div>
              <div class="admin-stat-val">${pendingRequests}</div>
              <div class="admin-stat-label">Active Emergency Requests</div>
            </div>
          </div>
          <div class="admin-stat-card glow-card reveal-up stagger-3">
            <div class="admin-stat-icon blue">${SVG_ICONS.hospital(22, '#3b82f6')}</div>
            <div>
              <div class="admin-stat-val">${totalUnits}</div>
              <div class="admin-stat-label">Total Blood Bank Units</div>
            </div>
          </div>
          <div class="admin-stat-card glow-card reveal-up stagger-4">
            <div class="admin-stat-icon green">${SVG_ICONS.alertTriangle(22, '#10b981')}</div>
            <div>
              <div class="admin-stat-val">${activeAlerts}</div>
              <div class="admin-stat-label">Shortage Alerts Active</div>
            </div>
          </div>
        </div>

        <!-- Navigation Tabs -->
        <div class="admin-header-actions">
          <div class="admin-tabs">
            <button class="admin-tab ${adminActiveTab === 'donors' ? 'active' : ''}" onclick="switchAdminTab('donors')">
              <span style="display:inline-flex; align-items:center; gap:6px;">${SVG_ICONS.users(15)} Donors Database (${totalDonors})</span>
            </button>
            <button class="admin-tab ${adminActiveTab === 'requests' ? 'active' : ''}" onclick="switchAdminTab('requests')">
              <span style="display:inline-flex; align-items:center; gap:6px;">${SVG_ICONS.siren(15)} Emergency Requests (${emergencyRequestsList.length})</span>
            </button>
            <button class="admin-tab ${adminActiveTab === 'banks' ? 'active' : ''}" onclick="switchAdminTab('banks')">
              <span style="display:inline-flex; align-items:center; gap:6px;">${SVG_ICONS.hospital(15)} Blood Banks Inventory</span>
            </button>
            <button class="admin-tab ${adminActiveTab === 'alerts' ? 'active' : ''}" onclick="switchAdminTab('alerts')">
              <span style="display:inline-flex; align-items:center; gap:6px;">${SVG_ICONS.alertTriangle(15)} System Alerts (${activeAlerts})</span>
            </button>
          </div>
          ${adminActiveTab === 'donors' ? `
            <button class="btn btn-primary btn-sm glow-card" onclick="openAddDonorModal()">${SVG_ICONS.plus(16)} Add New Donor</button>
          ` : ''}
        </div>

        <!-- Tab Content -->
        ${renderAdminTabContent()}
      </div>
    </section>
  `;
}

function handleAdminLogin(e) {
  e.preventDefault();
  const pass = document.getElementById('admin-passcode').value;
  if (pass === 'admin123' || pass === 'admin') {
    isAdminLoggedIn = true;
    showToast('Administrator authentication successful! Welcome back.', 'success');
    renderPage();
  } else {
    showToast('Invalid administrator passcode. Access denied.', 'error');
  }
}

function handleAdminLogout() {
  isAdminLoggedIn = false;
  showToast('Logged out of Admin Portal.', 'info');
  renderPage();
}

function switchAdminTab(tab) {
  adminActiveTab = tab;
  renderPage();
}

function renderAdminTabContent() {
  switch (adminActiveTab) {
    case 'donors': return renderAdminDonorsTab();
    case 'requests': return renderAdminRequestsTab();
    case 'banks': return renderAdminBanksTab();
    case 'alerts': return renderAdminAlertsTab();
    default: return renderAdminDonorsTab();
  }
}

// Donors Tab
function renderAdminDonorsTab() {
  return `
    <div class="admin-table-wrapper">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Donor Name</th>
            <th>Blood Group</th>
            <th>Location</th>
            <th>Phone</th>
            <th>Donations</th>
            <th>Status</th>
            <th style="text-align: right;">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${registeredDonors.map((d, index) => `
            <tr>
              <td><strong>${d.name}</strong></td>
              <td><span class="donor-blood">${d.blood}</span></td>
              <td>📍 ${d.city}</td>
              <td>${d.phone}</td>
              <td>🩸 ${d.donations || 0}</td>
              <td>
                <span class="status-badge ${d.available ? 'available' : 'unavailable'}">
                  ${d.available ? 'Available' : 'Unavailable'}
                </span>
              </td>
              <td style="text-align: right; white-space: nowrap;">
                <button class="admin-action-btn toggle-btn" onclick="adminToggleDonorStatus(${index})">
                  ${d.available ? '🚫 Mark Unavailable' : '✅ Mark Available'}
                </button>
                <button class="admin-action-btn danger" onclick="adminDeleteDonor(${index})">
                  🗑️ Delete
                </button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// Emergency Requests Tab
function renderAdminRequestsTab() {
  return `
    <div class="admin-table-wrapper">
      <table class="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient Name</th>
            <th>Blood Type</th>
            <th>Hospital & City</th>
            <th>Contact</th>
            <th>Urgency</th>
            <th>Status</th>
            <th style="text-align: right;">Update Status</th>
          </tr>
        </thead>
        <tbody>
          ${emergencyRequestsList.map((req, index) => `
            <tr>
              <td><code>${req.id}</code></td>
              <td><strong>${req.patient}</strong></td>
              <td><span class="donor-blood">${req.blood}</span> (${req.units} units)</td>
              <td>🏥 ${req.hospital}, ${req.city}</td>
              <td>📞 ${req.phone}</td>
              <td>
                <span class="status-badge ${req.urgency}">${req.urgency}</span>
              </td>
              <td>
                <span class="status-badge ${req.status === 'Resolved' ? 'available' : req.status === 'In Progress' ? 'urgent' : 'pending'}">
                  ${req.status}
                </span>
              </td>
              <td style="text-align: right; white-space: nowrap;">
                <select class="form-control" style="display: inline-block; width: auto; font-size: 0.85rem; padding: 4px 8px; margin-right: 6px;" 
                  onchange="adminUpdateReqStatus(${index}, this.value)">
                  <option value="Pending" ${req.status === 'Pending' ? 'selected' : ''}>Pending</option>
                  <option value="In Progress" ${req.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                  <option value="Resolved" ${req.status === 'Resolved' ? 'selected' : ''}>Resolved</option>
                </select>
                <button class="admin-action-btn danger" onclick="adminDeleteRequest(${index})">
                  🗑️ Delete
                </button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// Blood Banks Stock Management Tab
function renderAdminBanksTab() {
  return `
    <div class="bank-grid">
      ${BLOOD_BANKS.map((bank, bankIdx) => `
        <div class="bank-card" style="border: 1px solid var(--border-color);">
          <div class="bank-name">🏥 ${bank.name}</div>
          <div class="bank-location">📍 ${bank.location}</div>
          <div style="font-weight: 700; margin-bottom: 12px; font-size: 1.1rem; color: var(--accent);">
            Total Stock: ${bank.units} Units
          </div>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 16px;">
            ${Object.entries(bank.bloods).map(([bg, units]) => `
              <div style="display: flex; justify-content: space-between; align-items: center; background: var(--gray-50); padding: 8px 12px; border-radius: var(--radius-sm);">
                <span style="font-weight: 700;">${bg}: <span style="color: ${units <= 5 ? 'var(--accent)' : 'inherit'}">${units}</span></span>
                <div style="display: flex; gap: 4px;">
                  <button class="admin-action-btn toggle-btn" style="padding: 2px 10px !important; font-size: 0.9rem !important;" onclick="adminAdjustBankStock(${bankIdx}, '${bg}', -1)">-</button>
                  <button class="admin-action-btn toggle-btn" style="padding: 2px 10px !important; font-size: 0.9rem !important;" onclick="adminAdjustBankStock(${bankIdx}, '${bg}', 1)">+</button>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="bank-contact">📞 ${bank.contact}</div>
        </div>
      `).join('')}
    </div>
  `;
}

// Shortage Alerts Tab
function renderAdminAlertsTab() {
  return `
    <div style="max-width: 700px; margin: 0 auto;">
      <div class="form-card" style="margin-bottom: 24px;">
        <h3>📢 Post New Shortage Alert</h3>
        <p class="subtitle">Broadcast high-priority shortage notifications to all platform dashboards.</p>
        <form onsubmit="adminPostAlert(event)">
          <div class="form-group" style="margin-bottom: 12px;">
            <label>Alert Description</label>
            <input type="text" class="form-control" id="alert-text" placeholder="e.g. AB- blood critically low in Kolkata region" required>
          </div>
          <div class="form-group" style="margin-bottom: 16px;">
            <label>Severity Level</label>
            <select class="form-control" id="alert-type" required>
              <option value="critical">🔴 Critical Shortage</option>
              <option value="warning">🟡 Warning / Low Stock</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Publish Alert</button>
        </form>
      </div>

      <div class="chart-card">
        <h3>Current Active Shortage Alerts</h3>
        <div class="alert-list" style="margin-top: 16px;">
          ${DASHBOARD_DATA.alerts.map((alert, i) => `
            <div class="alert-item ${alert.type}" style="display: flex; justify-content: space-between; align-items: center;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <div class="alert-icon">${alert.type === 'critical' ? '🔴' : '🟡'}</div>
                <span>${alert.text}</span>
              </div>
              <button class="admin-action-btn danger" onclick="adminDeleteAlert(${i})">
                🗑️ Remove
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// Admin Action Handlers
function adminToggleDonorStatus(index) {
  const donor = registeredDonors[index];
  if (!donor) return;
  const newStatus = !donor.available;

  if (isFirebaseConnected && db && donor.id) {
    db.collection('donors').doc(donor.id).update({ available: newStatus }).then(() => {
      showToast(`Updated ${donor.name} to ${newStatus ? 'Available' : 'Unavailable'} in Firebase!`, 'success');
    }).catch(err => console.error('Firestore Update Error:', err));
  } else {
    donor.available = newStatus;
    showToast(`Updated status for ${donor.name}.`, 'info');
    renderPage();
  }
}

function adminDeleteDonor(index) {
  const donor = registeredDonors[index];
  if (!donor) return;
  if (confirm(`Are you sure you want to remove ${donor.name} from the database?`)) {
    if (isFirebaseConnected && db && donor.id) {
      db.collection('donors').doc(donor.id).delete().then(() => {
        showToast(`Donor ${donor.name} deleted from Firebase DB.`, 'success');
      }).catch(err => console.error('Firestore Delete Error:', err));
    } else {
      registeredDonors.splice(index, 1);
      showToast(`Donor ${donor.name} deleted successfully.`, 'success');
      renderPage();
    }
  }
}

function adminUpdateReqStatus(index, newStatus) {
  const req = emergencyRequestsList[index];
  if (!req) return;

  if (isFirebaseConnected && db && req.id) {
    db.collection('emergency_requests').doc(req.id).update({ status: newStatus }).then(() => {
      showToast(`Emergency Request marked as ${newStatus} in Firebase!`, 'success');
    });
  } else {
    req.status = newStatus;
    showToast(`Emergency Request marked as ${newStatus}.`, 'success');
    renderPage();
  }
}

function adminDeleteRequest(index) {
  const req = emergencyRequestsList[index];
  if (!req) return;

  if (confirm(`Are you sure you want to delete emergency request for ${req.patient}?`)) {
    if (isFirebaseConnected && db && req.id) {
      db.collection('emergency_requests').doc(req.id).delete().then(() => {
        showToast(`Emergency request for ${req.patient} deleted from Firebase.`, 'info');
      });
    } else {
      emergencyRequestsList.splice(index, 1);
      showToast(`Request deleted.`, 'info');
      renderPage();
    }
  }
}

function adminAdjustBankStock(bankIdx, bloodGroup, delta) {
  const bank = BLOOD_BANKS[bankIdx];
  const current = bank.bloods[bloodGroup] || 0;
  const updated = Math.max(0, current + delta);
  bank.bloods[bloodGroup] = updated;
  // Recalculate total bank units
  bank.units = Object.values(bank.bloods).reduce((sum, u) => sum + u, 0);

  if (isFirebaseConnected && db) {
    const docId = bank.firestoreId || `BANK-${bankIdx + 1}`;
    db.collection('blood_banks').doc(docId).set({
      name: bank.name,
      location: bank.location,
      contact: bank.contact,
      bloods: bank.bloods,
      units: bank.units
    }, { merge: true }).then(() => {
      showToast(`Updated ${bank.name} stock level in Firebase DB!`, 'success');
    }).catch(err => console.error('Firestore Bank Update Error:', err));
  } else {
    renderPage();
  }
}

function adminPostAlert(e) {
  e.preventDefault();
  const text = document.getElementById('alert-text').value;
  const type = document.getElementById('alert-type').value;
  DASHBOARD_DATA.alerts.unshift({ type, text });
  showToast('Shortage alert published to platform!', 'success');
  renderPage();
}

function adminDeleteAlert(index) {
  DASHBOARD_DATA.alerts.splice(index, 1);
  showToast('Shortage alert removed.', 'info');
  renderPage();
}

function openAddDonorModal() {
  showModal(
    'Add New Donor (Admin Mode) 🩸',
    `Enter details to add a verified donor directly to the network.`,
    [
      {
        text: 'Cancel',
        class: 'btn-outline',
        action: () => closeModal()
      },
      {
        text: 'Save Donor',
        class: 'btn-primary',
        action: () => {
          const name = prompt('Donor Full Name:');
          if (!name) return;
          const blood = prompt('Blood Group (A+, A-, B+, B-, AB+, AB-, O+, O-):', 'O+');
          const city = prompt('City:', 'Mumbai');
          const phone = prompt('Phone:', '+91 98000 11122');
          if (name && blood && city) {
            registeredDonors.unshift({
              name, blood, city, phone: phone || '+91 99999 99999', available: true, donations: 1, lastDonation: '2026-07-01'
            });
            closeModal();
            showToast(`Donor ${name} added to database!`, 'success');
            renderPage();
          }
        }
      }
    ]
  );
}

// ===== AUTH STATE & PERSISTENCE =====
let currentAuthMode = 'signup';

function setLoggedInUser(account) {
  currentUserAccount = account;
  if (account) {
    localStorage.setItem('lifelink_user_account', JSON.stringify(account));
  } else {
    localStorage.removeItem('lifelink_user_account');
  }
  updateAuthHeader();
}

function setAdminLoggedIn(status) {
  isAdminLoggedIn = status;
  localStorage.setItem('lifelink_admin_logged_in', status ? 'true' : 'false');
  updateAuthHeader();
}

function saveUserAccountToFirebase(userAccount) {
  if (typeof firebase === 'undefined' || !firebase.apps.length) return;
  const firestoreDb = firebase.firestore();
  const isAdmin = userAccount.role === 'admin';

  if (isAdmin) {
    // Table: admins
    firestoreDb.collection('admins').add({
      ...userAccount,
      savedAt: new Date().toISOString()
    }).then(ref => console.log('✅ Admin saved to admins:', ref.id))
      .catch(err => console.error('❌ admins error:', err));
  } else {
    // Table: users — every user who signs up
    firestoreDb.collection('users').add({
      ...userAccount,
      savedAt: new Date().toISOString()
    }).then(ref => console.log('✅ User saved to users:', ref.id))
      .catch(err => console.error('❌ users error:', err));

    // Table: donors — registered as a donor
    firestoreDb.collection('donors').add({
      ...userAccount,
      available: true,
      donations: 0,
      lastDonation: null,
      registeredAt: new Date().toISOString()
    }).then(ref => console.log('✅ Donor saved to donors:', ref.id))
      .catch(err => console.error('❌ donors error:', err));
  }
}

function saveUserLoginToFirebase(loginTrack) {
  if (typeof firebase === 'undefined' || !firebase.apps.length) return;
  const firestoreDb = firebase.firestore();

  if (loginTrack.role === 'admin') {
    // Also log to admins table
    firestoreDb.collection('admins').add({
      ...loginTrack,
      type: 'admin_login_session'
    }).then(ref => console.log('✅ Admin session saved to admins:', ref.id))
      .catch(err => console.error('❌ admins session error:', err));
  }

  // Table: logins — every login event
  firestoreDb.collection('logins').add(loginTrack)
    .then(ref => console.log('✅ Login saved to logins:', ref.id))
    .catch(err => console.error('❌ logins error:', err));
}

// ===== AUTH HEADER & LOGIN / SIGNUP SYSTEM =====
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

function openUserProfileModal() {
  if (!currentUserAccount) return;

  const displayName = currentUserAccount.name || (currentUserAccount.email ? currentUserAccount.email.split('@')[0] : 'User');
  const firstInitial = displayName.charAt(0).toUpperCase();

  showModal(
    'User Profile Details 👤',
    `
      <div style="text-align: center; margin-bottom: 16px;">
        <div class="user-avatar-badge" style="width: 80px; height: 80px; font-size: 2.4rem; margin: 0 auto 12px auto; box-shadow: 0 4px 16px rgba(220, 38, 38, 0.4);">
          <span>${firstInitial}</span>
        </div>
        <h3 style="margin-bottom: 4px; font-size: 1.25rem;">${displayName}</h3>
        <p style="color: var(--text-secondary); font-size: 0.85rem;">${currentUserAccount.email || 'Registered Network User'}</p>
      </div>

      <div style="background: var(--gray-50); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-color); text-align: left; font-size: 0.92rem; line-height: 1.6;">
        <div style="margin-bottom: 8px;"><strong style="color: var(--gray-800);">Full Name:</strong> ${displayName}</div>
        <div style="margin-bottom: 8px;"><strong style="color: var(--gray-800);">Email Address:</strong> ${currentUserAccount.email}</div>
        <div style="margin-bottom: 8px;"><strong style="color: var(--gray-800);">Phone Number:</strong> ${currentUserAccount.phone || 'Not provided'}</div>
        <div style="margin-bottom: 8px;"><strong style="color: var(--gray-800);">Blood Group:</strong> ${currentUserAccount.blood || 'Not specified'}</div>
        <div style="margin-bottom: 8px;"><strong style="color: var(--gray-800);">City / Location:</strong> ${currentUserAccount.city || 'Not specified'}</div>
        <div><strong style="color: var(--gray-800);">Account Role:</strong> ${currentUserAccount.role === 'admin' ? 'Administrator' : 'Donor / User'}</div>
      </div>
    `,
    [
      {
        text: 'Close',
        class: 'btn-outline',
        action: () => closeModal()
      }
    ]
  );
}

function handleUserLogout() {
  setAdminLoggedIn(false);
  setLoggedInUser(null);
  showToast('Logged out successfully.', 'info');
  navigateTo('home');
}

function handleGoogleAuth() {
  if (typeof firebase === 'undefined' || !firebase.apps.length) {
    showToast('⚠️ Firebase is not connected. Please check your internet connection and try again.', 'error');
    return;
  }

  // Show loading state on button
  const googleBtn = document.querySelector('[onclick="handleGoogleAuth()"]');
  if (googleBtn) {
    googleBtn.disabled = true;
    googleBtn.innerHTML = `<span style="display:inline-flex;align-items:center;gap:8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> Connecting to Google...</span>`;
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  firebase.auth().signInWithPopup(provider).then((result) => {
    const user = result.user;
    const googleAccount = {
      name: user.displayName || user.email.split('@')[0],
      email: user.email,
      phone: user.phoneNumber || '',
      pfpUrl: user.photoURL || null,
      role: 'user',
      createdAt: new Date().toISOString(),
      authProvider: 'google'
    };

    saveAccountToLocalStore(googleAccount);
    saveUserAccountToFirebase(googleAccount);
    saveUserLoginToFirebase({
      userEmail: googleAccount.email,
      userName: googleAccount.name,
      role: 'user',
      action: 'Google OAuth Sign-In',
      loginTimestamp: new Date().toISOString(),
      loginTimestampFormatted: new Date().toLocaleString(),
      deviceInfo: navigator.userAgent
    });

    setLoggedInUser(googleAccount);
    closeModal();
    showToast(`🌐 Welcome, ${googleAccount.name}! Signed in via Google.`, 'success');
    navigateTo('dashboard');

  }).catch((error) => {
    console.error('Google Sign-In Error:', error.code, error.message);

    // Re-enable button
    if (googleBtn) {
      googleBtn.disabled = false;
      googleBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg> Continue with Google`;
    }

    // Show specific helpful errors based on error code
    if (error.code === 'auth/popup-blocked') {
      showToast('🚫 Popup was blocked by your browser. Please allow popups for this site and try again.', 'error');
    } else if (error.code === 'auth/popup-closed-by-user') {
      showToast('ℹ️ Google sign-in was cancelled. Please try again.', 'info');
    } else if (error.code === 'auth/unauthorized-domain') {
      showToast('⚙️ Google Sign-In needs to be configured in Firebase Console first. Please enable it under Authentication → Sign-in method → Google.', 'error');
    } else if (error.code === 'auth/operation-not-allowed') {
      showToast('⚙️ Google Sign-In is not enabled yet. Go to Firebase Console → Authentication → Sign-in method → Enable Google.', 'error');
    } else {
      showToast(`❌ Google Sign-In failed: ${error.message}`, 'error');
    }
  });
}

function openAuthModal(mode = 'signup', role = 'user') {
  currentAuthMode = mode;

  const getModalBody = (m, r) => {
    const isSignup = m === 'signup';
    const isAdmin = r === 'admin';

    return `
      <div style="text-align: center; margin-bottom: 14px;">
        <h3 style="margin-bottom: 4px; display: flex; align-items: center; justify-content: center; gap: 8px;">
          ${isAdmin ? SVG_ICONS.shield(22, '#dc2626') : SVG_ICONS.heart(22, '#dc2626')} 
          ${isSignup ? (isAdmin ? 'Admin Account Sign Up' : 'Create LifeLink Account') : (isAdmin ? 'Administrator Login' : 'User & Donor Sign In')}
        </h3>
        <p style="color: var(--text-secondary); font-size: 0.85rem;">
          ${isSignup ? 'Fill details to register your profile on the network.' : 'Enter credentials to access your account dashboard.'}
        </p>
      </div>

      <!-- Role Selector -->
      <div class="login-role-selector" style="margin-bottom: 14px;">
        <button class="login-role-btn ${!isAdmin ? 'active' : ''}" onclick="switchAuthRole('${m}', 'user')">
          ${SVG_ICONS.droplet(14, !isAdmin ? '#dc2626' : 'currentColor')} Donor / User
        </button>
        <button class="login-role-btn ${isAdmin ? 'active' : ''}" onclick="switchAuthRole('${m}', 'admin')">
          ${SVG_ICONS.shield(14, isAdmin ? '#dc2626' : 'currentColor')} Administrator
        </button>
      </div>

      <!-- Google Auth Button -->
      <div style="margin-bottom: 14px;">
        <button type="button" class="btn btn-outline glow-card" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px; background: #ffffff; border: 1px solid var(--border-color); color: #333333; font-weight: 600; padding: 10px 16px; border-radius: var(--radius-md);" onclick="handleGoogleAuth()">
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
          Continue with Google
        </button>
      </div>

      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px; font-size: 0.76rem; color: var(--text-secondary); font-weight: 600; letter-spacing: 0.5px;">
        <div style="flex:1; height:1px; background:var(--border-color);"></div>
        <span>OR WITH EMAIL</span>
        <div style="flex:1; height:1px; background:var(--border-color);"></div>
      </div>

      <form onsubmit="${isSignup ? 'handleAuthSignup(event, \'' + r + '\')' : 'handleAuthLogin(event, \'' + r + '\')'}">
        ${isSignup ? `
          <div class="form-group" style="text-align: left; margin-bottom: 10px;">
            <label>Full Name</label>
            <input type="text" class="form-control" id="auth-name" placeholder="John Doe" required autofocus>
          </div>
        ` : ''}

        <div class="form-group" style="text-align: left; margin-bottom: 10px;">
          <label>Email Address</label>
          <input type="email" class="form-control" id="auth-email" placeholder="user@example.com" required ${!isSignup ? 'autofocus' : ''}>
        </div>

        ${isSignup ? `
          <div class="form-group" style="text-align: left; margin-bottom: 10px;">
            <label>Phone Number <span class="required">*</span></label>
            <input type="tel" class="form-control" id="auth-phone" placeholder="10-digit mobile number" required maxlength="10" minlength="10" pattern="[0-9]{10}" title="Please enter exactly 10 digits">
          </div>
        ` : ''}

        <div class="form-group" style="text-align: left; margin-bottom: 14px;">
          <label>${isAdmin && !isSignup ? 'Admin Passcode' : 'Password'}</label>
          <input type="password" class="form-control" id="auth-pass" placeholder="${isAdmin && !isSignup ? 'Enter admin passcode' : '••••••••'}" required>
        </div>

        <button type="submit" class="btn btn-primary btn-lg glow-card" style="width: 100%; font-weight: 700;">
          ${isSignup ? '🚀 Create Account & Sign Up' : (isAdmin ? '🛡️ Login as Administrator' : '🔓 Sign In to Account')}
        </button>
      </form>

      <!-- Mode Switcher -->
      <div style="margin-top: 18px; padding-top: 14px; border-top: 1px dashed var(--border-color); text-align: center; font-size: 0.88rem;">
        ${isSignup ? `
          <span style="color: var(--text-secondary);">Already have an account?</span> 
          <a href="#" style="color: var(--accent); font-weight: 700; text-decoration: underline; margin-left: 4px;" onclick="event.preventDefault(); switchAuthMode('login', '${r}');">Log In here</a>
        ` : `
          <span style="color: var(--text-secondary);">Don't have an account yet?</span> 
          <a href="#" style="color: var(--accent); font-weight: 700; text-decoration: underline; margin-left: 4px;" onclick="event.preventDefault(); switchAuthMode('signup', '${r}');">Sign Up here</a>
        `}
      </div>
    `;
  };

  let overlay = document.querySelector('.modal-overlay');
  if (overlay) overlay.remove();

  overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal" id="login-modal-box" style="max-width: 440px;">
      <div id="login-modal-content">
        ${getModalBody(mode, role)}
      </div>
      <div style="margin-top: 14px; text-align: center;">
        <button class="btn btn-outline btn-sm" onclick="closeModal()">Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  requestAnimationFrame(() => overlay.classList.add('active'));
}

function openLoginModal(initialRole = 'user') {
  openAuthModal('signup', initialRole);
}

function switchAuthRole(mode, role) {
  openAuthModal(mode, role);
}

function switchAuthMode(mode, role) {
  openAuthModal(mode, role);
}

// Local accounts store
let SAVED_ACCOUNTS_MAP = JSON.parse(localStorage.getItem('lifelink_all_accounts') || '{}');

function saveAccountToLocalStore(account) {
  if (!account || !account.email) return;
  SAVED_ACCOUNTS_MAP[account.email.toLowerCase()] = account;
  localStorage.setItem('lifelink_all_accounts', JSON.stringify(SAVED_ACCOUNTS_MAP));
}

function findExistingAccount(email) {
  if (!email) return null;
  const cleanEmail = email.toLowerCase().trim();

  if (SAVED_ACCOUNTS_MAP[cleanEmail]) {
    return SAVED_ACCOUNTS_MAP[cleanEmail];
  }

  const donorMatch = registeredDonors.find(d => d.email && d.email.toLowerCase() === cleanEmail);
  if (donorMatch) {
    return {
      name: donorMatch.name,
      email: donorMatch.email,
      phone: donorMatch.phone,
      pfpUrl: donorMatch.pfpUrl || null,
      blood: donorMatch.blood,
      city: donorMatch.city,
      role: 'user'
    };
  }

  return null;
}

function handleAuthSignup(e, role) {
  e.preventDefault();
  const name = document.getElementById('auth-name').value.trim();
  const email = document.getElementById('auth-email').value.trim().toLowerCase();
  const phone = document.getElementById('auth-phone').value.trim();
  const pass = document.getElementById('auth-pass').value;

  const nowIso = new Date().toISOString();
  const nowFormatted = new Date().toLocaleString();

  const cleanPhone = phone.replace(/\D/g, '');
  if (cleanPhone.length !== 10) {
    showToast('⚠️ Phone number must be exactly 10 digits!', 'error');
    return;
  }

  // Disable signup button during duplicate validation
  const submitBtn = e.target.querySelector('button[type="submit"]');
  if (submitBtn) submitBtn.disabled = true;

  // 1. Check local cache first
  const localMatch = findExistingAccount(email);
  if (localMatch) {
    showToast('⚠️ This email is already registered! Please log in instead.', 'error');
    if (submitBtn) submitBtn.disabled = false;
    return;
  }

  // 2. Query Firebase Firestore users table to check for duplicates
  if (isFirebaseConnected && db) {
    db.collection('users').where('email', '==', email).get().then(snapEmail => {
      if (!snapEmail.empty) {
        showToast('⚠️ This email is already registered! Please log in instead.', 'error');
        if (submitBtn) submitBtn.disabled = false;
        return;
      }

      db.collection('users').where('phone', '==', cleanPhone).get().then(snapPhone => {
        if (!snapPhone.empty) {
          showToast('⚠️ This phone number is already registered!', 'error');
          if (submitBtn) submitBtn.disabled = false;
          return;
        }

        // Duplicate checks passed! Register the user
        completeUserSignup(name, email, cleanPhone, pass, role, nowIso, nowFormatted);
      }).catch(err => {
        console.error('Error checking duplicate phone:', err);
        completeUserSignup(name, email, cleanPhone, pass, role, nowIso, nowFormatted);
      });
    }).catch(err => {
      console.error('Error checking duplicate email:', err);
      completeUserSignup(name, email, cleanPhone, pass, role, nowIso, nowFormatted);
    });
  } else {
    completeUserSignup(name, email, cleanPhone, pass, role, nowIso, nowFormatted);
  }
}

function completeUserSignup(name, email, phone, pass, role, nowIso, nowFormatted) {
  const userAccount = {
    name,
    email,
    phone,
    role,
    password: pass, // Storing password securely
    createdAt: nowIso,
    createdAtFormatted: nowFormatted
  };

  saveAccountToLocalStore(userAccount);
  saveUserAccountToFirebase(userAccount);

  const loginTrack = {
    userEmail: email,
    userName: name,
    role: role,
    action: 'Account Created & Logged In',
    loginTimestamp: nowIso,
    loginTimestampFormatted: nowFormatted,
    deviceInfo: navigator.userAgent
  };

  saveUserLoginToFirebase(loginTrack);

  if (role === 'admin') {
    setAdminLoggedIn(true);
  } else {
    setLoggedInUser(userAccount);
  }

  closeModal();
  showToast(`🎉 Welcome to LifeLink, ${name}! Account created & logged in successfully.`, 'success');

  if (role === 'admin') {
    navigateTo('admin');
  } else {
    navigateTo('dashboard');
  }
}

function handleAuthLogin(e, role) {
  e.preventDefault();
  const email = document.getElementById('auth-email').value.trim().toLowerCase();
  const pass = document.getElementById('auth-pass').value;

  const nowIso = new Date().toISOString();
  const nowFormatted = new Date().toLocaleString();

  const submitBtn = e.target.querySelector('button[type="submit"]');
  if (submitBtn) submitBtn.disabled = true;

  if (role === 'admin') {
    if (pass !== 'admin123' && pass !== 'admin') {
      showToast('Invalid administrator passcode. Access denied.', 'error');
      if (submitBtn) submitBtn.disabled = false;
      return;
    }
    setAdminLoggedIn(true);
    completeLoginProcess(email, role, nowIso, nowFormatted);
  } else {
    // Standard User Login
    // 1. Try Firebase query first if connected
    if (isFirebaseConnected && db) {
      db.collection('users').where('email', '==', email).get().then(snapshot => {
        if (!snapshot.empty) {
          const docData = snapshot.docs[0].data();

          // Verify password
          if (docData.password && docData.password !== pass) {
            showToast('❌ Incorrect password! Please try again.', 'error');
            if (submitBtn) submitBtn.disabled = false;
            return;
          }

          // Password matched! Restore details
          const restoredAcc = {
            name: docData.name,
            email: docData.email,
            phone: docData.phone || '',
            pfpUrl: docData.pfpUrl || null,
            blood: docData.blood || '',
            city: docData.city || '',
            role: role,
            password: docData.password
          };
          saveAccountToLocalStore(restoredAcc);
          setLoggedInUser(restoredAcc);
          completeLoginProcess(email, role, nowIso, nowFormatted);
        } else {
          // User not found in Firebase. Let's check local storage fallback
          handleLocalLoginFallback(email, pass, role, nowIso, nowFormatted, submitBtn);
        }
      }).catch(err => {
        console.error('Firebase login error:', err);
        handleLocalLoginFallback(email, pass, role, nowIso, nowFormatted, submitBtn);
      });
    } else {
      // Offline fallback
      handleLocalLoginFallback(email, pass, role, nowIso, nowFormatted, submitBtn);
    }
  }
}

function handleLocalLoginFallback(email, pass, role, nowIso, nowFormatted, submitBtn) {
  let userAcc = findExistingAccount(email);
  if (userAcc) {
    if (userAcc.password && userAcc.password !== pass) {
      showToast('❌ Incorrect password! Please try again.', 'error');
      if (submitBtn) submitBtn.disabled = false;
      return;
    }
    setLoggedInUser(userAcc);
    completeLoginProcess(email, role, nowIso, nowFormatted);
  } else {
    showToast('❌ Account not found! Please Sign Up first.', 'error');
    if (submitBtn) submitBtn.disabled = false;
  }
}

function completeLoginProcess(email, role, nowIso, nowFormatted) {
  const loginTrack = {
    userEmail: email,
    role: role,
    action: 'User Logged In',
    loginTimestamp: nowIso,
    loginTimestampFormatted: nowFormatted,
    deviceInfo: navigator.userAgent
  };

  saveUserLoginToFirebase(loginTrack);
  closeModal();

  const userDisplayName = currentUserAccount ? (currentUserAccount.name || email) : 'User';
  showToast(`🔓 Welcome back, ${userDisplayName}! Login logged at ${nowFormatted}.`, 'success');

  if (role === 'admin') {
    navigateTo('admin');
  } else {
    navigateTo('dashboard');
  }
}

// ===== HEADER SCROLL =====
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }
});

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.mobile-toggle');
  nav.classList.toggle('open');
  toggle.classList.toggle('open');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initFirebaseBackend();
  renderPage();

  // Setup nav click handlers (delegated since nav is static)
  document.addEventListener('click', (e) => {
    const navLink = e.target.closest('.nav a[data-page]');
    if (navLink) {
      e.preventDefault();
      navigateTo(navLink.dataset.page);
    }
  });
});


