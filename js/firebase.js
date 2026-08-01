/* ===== LifeLink Firebase Backend & Cloud Sync System ===== */

let db = null;
let isFirebaseConnected = false;

function initFirebaseBackend() {
  if (typeof firebase !== 'undefined') {
    try {
      if (!firebase.apps.length) {
        const config = window.firebaseConfig || DEFAULT_FIREBASE_CONFIG;
        firebase.initializeApp(config);
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

    // 4. Seed users
    const userInitRef = db.collection('users').doc('_init');
    batch.set(userInitRef, {
      _placeholder: true,
      note: 'Master users registry. Created automatically.',
      createdAt: NOW
    });

    // 5. Seed logins
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

  // TABLE 4: users
  b.set(db.collection('users').doc('_init'), {
    _placeholder: true, note: 'Populates on first user signup', createdAt: NOW
  });

  // TABLE 5: logins
  b.set(db.collection('logins').doc('_init'), {
    _placeholder: true, note: 'Populates on first login', createdAt: NOW
  });

  // TABLE 6: blood_banks
  BLOOD_BANKS.forEach((bk, idx) => {
    b.set(db.collection('blood_banks').doc(`BANK-${idx + 1}`), bk);
  });

  await b.commit();
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

function saveUserAccountToFirebase(userAccount) {
  if (typeof firebase === 'undefined' || !firebase.apps.length) return;
  const firestoreDb = firebase.firestore();
  const isAdmin = userAccount.role === 'admin';

  if (isAdmin) {
    firestoreDb.collection('admins').add({
      ...userAccount,
      savedAt: new Date().toISOString()
    }).then(ref => console.log('✅ Admin saved to admins:', ref.id))
      .catch(err => console.error('❌ admins error:', err));
  } else {
    firestoreDb.collection('users').add({
      ...userAccount,
      savedAt: new Date().toISOString()
    }).then(ref => console.log('✅ User saved to users:', ref.id))
      .catch(err => console.error('❌ users error:', err));

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
    firestoreDb.collection('admins').add({
      ...loginTrack,
      type: 'admin_login_session'
    }).then(ref => console.log('✅ Admin session saved to admins:', ref.id))
      .catch(err => console.error('❌ admins session error:', err));
  }

  firestoreDb.collection('logins').add(loginTrack)
    .then(ref => console.log('✅ Login saved to logins:', ref.id))
    .catch(err => console.error('❌ logins error:', err));
}
