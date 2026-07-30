// LifeLink Firebase Seed Script
// Run: node seed.js
// This will delete OLD collections and create 6 clean fresh tables

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, doc, setDoc, getDocs, deleteDoc, writeBatch } = require('firebase/firestore');

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBxbuH56XgbtdPlMk7I7UESb8rVOWBlpSU",
  authDomain: "lifelink-1a1e8.firebaseapp.com",
  projectId: "lifelink-1a1e8",
  storageBucket: "lifelink-1a1e8.firebasestorage.app",
  messagingSenderId: "475258635754",
  appId: "1:475258635754:web:279e47401fb5ccb5a35e93"
};

const app = initializeApp(FIREBASE_CONFIG);
const db = getFirestore(app);

// ===== DELETE a collection (all documents) =====
async function deleteCollection(collectionName) {
  try {
    const snap = await getDocs(collection(db, collectionName));
    if (snap.empty) { console.log(`  ↳ ${collectionName} already empty`); return; }
    const batch = writeBatch(db);
    snap.docs.forEach(d => batch.delete(d.ref));
    await batch.commit();
    console.log(`  ✅ Deleted ${snap.size} docs from "${collectionName}"`);
  } catch (e) {
    console.log(`  ⚠️  Could not delete "${collectionName}": ${e.message}`);
  }
}

// ===== SEED DATA =====
const NOW = new Date().toISOString();

const SEED_DONORS = [
  { name: 'Aanya Sharma',    email: 'aanya@example.com',  phone: '+91 98200 11111', blood: 'O+',  city: 'Mumbai',    available: true, donations: 4, role: 'user', registeredAt: NOW },
  { name: 'Ravi Kumar',      email: 'ravi@example.com',   phone: '+91 98100 22222', blood: 'A+',  city: 'Delhi',     available: true, donations: 2, role: 'user', registeredAt: NOW },
  { name: 'Priya Singh',     email: 'priya@example.com',  phone: '+91 98300 33333', blood: 'B+',  city: 'Bangalore', available: true, donations: 6, role: 'user', registeredAt: NOW },
  { name: 'Arjun Mehta',     email: 'arjun@example.com',  phone: '+91 97400 44444', blood: 'AB-', city: 'Chennai',   available: false,donations: 1, role: 'user', registeredAt: NOW },
  { name: 'Sunita Patel',    email: 'sunita@example.com', phone: '+91 99500 55555', blood: 'O-',  city: 'Pune',      available: true, donations: 3, role: 'user', registeredAt: NOW },
  { name: 'Kiran Reddy',     email: 'kiran@example.com',  phone: '+91 98600 66666', blood: 'B-',  city: 'Hyderabad', available: true, donations: 0, role: 'user', registeredAt: NOW },
];

const SEED_EMERGENCY = [
  { id: 'REQ-001', patient: 'Rajesh Sharma',    blood: 'O+',  hospital: 'Lilavati Hospital',      city: 'Mumbai',    phone: '+91 98200 12345', units: 2, urgency: 'critical', status: 'Pending',     createdAt: NOW },
  { id: 'REQ-002', patient: 'Sunita Patel',     blood: 'AB-', hospital: 'Max Super Speciality',   city: 'Delhi',     phone: '+91 98111 54321', units: 1, urgency: 'critical', status: 'In Progress', createdAt: NOW },
  { id: 'REQ-003', patient: 'Vikram Malhotra',  blood: 'B+',  hospital: 'Manipal Hospital',       city: 'Bangalore', phone: '+91 98450 99887', units: 3, urgency: 'urgent',   status: 'Resolved',    createdAt: NOW },
];

const SEED_BLOOD_BANKS = [
  { id: 'BANK-1', name: 'Lilavati Hospital Blood Bank',      city: 'Mumbai',    phone: '+91 22 2675 1000', bloods: ['O+','A+','B+','O-','AB+'], units: { 'O+': 45, 'A+': 32, 'B+': 28, 'O-': 12, 'AB+': 8 }, operational: true },
  { id: 'BANK-2', name: 'AIIMS Blood Bank',                  city: 'Delhi',     phone: '+91 11 2658 8500', bloods: ['A+','B+','O+','AB-','A-'], units: { 'A+': 60, 'B+': 41, 'O+': 55, 'AB-': 5,  'A-': 9  }, operational: true },
  { id: 'BANK-3', name: 'Manipal Hospital Blood Centre',     city: 'Bangalore', phone: '+91 80 2502 4444', bloods: ['B+','O+','A-','B-','AB+'], units: { 'B+': 38, 'O+': 49, 'A-': 7,  'B-': 4,  'AB+': 11}, operational: true },
  { id: 'BANK-4', name: 'Apollo Hospitals Blood Bank',       city: 'Chennai',   phone: '+91 44 2829 3333', bloods: ['O+','A+','O-','B+','AB-'], units: { 'O+': 30, 'A+': 25, 'O-': 14, 'B+': 22, 'AB-': 3 }, operational: true },
  { id: 'BANK-5', name: 'Ruby Hall Clinic Blood Bank',       city: 'Pune',      phone: '+91 20 6645 5555', bloods: ['A+','B+','O+','AB+','A-'], units: { 'A+': 20, 'B+': 15, 'O+': 35, 'AB+': 6,  'A-': 8  }, operational: true },
  { id: 'BANK-6', name: 'KIMS Hospital Blood Bank',          city: 'Hyderabad', phone: '+91 40 4488 5000', bloods: ['O+','A+','B+','O-','B-'],  units: { 'O+': 42, 'A+': 29, 'B+': 18, 'O-': 10, 'B-': 5  }, operational: true },
];

const SEED_ADMINS = [
  { name: 'LifeLink Admin', email: 'admin@lifelink.org', role: 'admin', savedAt: NOW, note: 'System administrator account' }
];

async function seedFresh() {
  console.log('\n🗑️  STEP 1: Deleting old collections...');
  await deleteCollection('users_and_donors');
  await deleteCollection('emergency_requests');
  await deleteCollection('blood_banks');
  await deleteCollection('donors');
  await deleteCollection('emergency');
  await deleteCollection('users');
  await deleteCollection('logins');
  await deleteCollection('admins');

  console.log('\n🌱 STEP 2: Seeding 6 fresh tables...\n');

  // TABLE 1: admins
  for (const admin of SEED_ADMINS) {
    await addDoc(collection(db, 'admins'), admin);
  }
  console.log('✅ Table 1: admins — seeded');

  // TABLE 2: donors
  for (const donor of SEED_DONORS) {
    await addDoc(collection(db, 'donors'), donor);
  }
  console.log('✅ Table 2: donors — seeded', SEED_DONORS.length, 'donors');

  // TABLE 3: emergency
  for (const req of SEED_EMERGENCY) {
    await setDoc(doc(db, 'emergency', req.id), req);
  }
  console.log('✅ Table 3: emergency — seeded', SEED_EMERGENCY.length, 'requests');

  // TABLE 4: users (empty - created on first signup)
  await addDoc(collection(db, 'users'), {
    _placeholder: true,
    note: 'This table stores all signed-up users. Will populate on first signup.',
    createdAt: NOW
  });
  console.log('✅ Table 4: users — initialized (ready for signups)');

  // TABLE 5: logins (empty - created on first login)
  await addDoc(collection(db, 'logins'), {
    _placeholder: true,
    note: 'This table tracks all login events. Will populate on first login.',
    createdAt: NOW
  });
  console.log('✅ Table 5: logins — initialized (ready for login tracking)');

  // TABLE 6: blood_banks
  for (const bank of SEED_BLOOD_BANKS) {
    await setDoc(doc(db, 'blood_banks', bank.id), bank);
  }
  console.log('✅ Table 6: blood_banks — seeded', SEED_BLOOD_BANKS.length, 'banks\n');

  console.log('🎉 All 6 tables created fresh in Firebase Firestore!');
  console.log('\n📋 Summary:');
  console.log('  1. admins        →', SEED_ADMINS.length, 'record');
  console.log('  2. donors        →', SEED_DONORS.length, 'records');
  console.log('  3. emergency     →', SEED_EMERGENCY.length, 'records');
  console.log('  4. users         → placeholder (populates on signup)');
  console.log('  5. logins        → placeholder (populates on login)');
  console.log('  6. blood_banks   →', SEED_BLOOD_BANKS.length, 'records');
  process.exit(0);
}

seedFresh().catch(e => { console.error('❌ Seed failed:', e); process.exit(1); });
