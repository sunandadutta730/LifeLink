/* ===== LifeLink Constants ===== */

const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const COMPATIBILITY = {
  'O-': { donateTo: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'], receiveFrom: ['O-'], label: 'Universal Donor' },
  'O+': { donateTo: ['O+', 'A+', 'B+', 'AB+'], receiveFrom: ['O-', 'O+'], label: 'Most Common' },
  'A-': { donateTo: ['A-', 'A+', 'AB-', 'AB+'], receiveFrom: ['O-', 'A-'], label: 'Rare Type' },
  'A+': { donateTo: ['A+', 'AB+'], receiveFrom: ['O-', 'O+', 'A-', 'A+'], label: 'Common Type' },
  'B-': { donateTo: ['B-', 'B+', 'AB-', 'AB+'], receiveFrom: ['O-', 'B-'], label: 'Rare Type' },
  'B+': { donateTo: ['B+', 'AB+'], receiveFrom: ['O-', 'O+'], label: 'Common Type' },
  'AB-': { donateTo: ['AB-', 'AB+'], receiveFrom: ['O-', 'A-', 'B-', 'AB-'], label: 'Rarest Type' },
  'AB+': { donateTo: ['AB+'], receiveFrom: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'], label: 'Universal Receiver' }
};

const RARE_GROUPS = ['AB-', 'B-', 'O-'];

const CITIES = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'];

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyDFo4VEfCCgA3J0svmFmQHdLpNnLw4VUcc",
  authDomain: "lifelink-1a1e8.firebaseapp.com",
  projectId: "lifelink-1a1e8",
  storageBucket: "lifelink-1a1e8.firebasestorage.app",
  messagingSenderId: "475258635754",
  appId: "1:475258635754:web:e9ad4cda03a57962a35e93",
  measurementId: "G-3635LX3LDL"
};
