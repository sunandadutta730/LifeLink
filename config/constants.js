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
  apiKey: "AIzaSyCrKfs49UrCQ-FBU-jOOrE5iEq9X2XDyVY",
  authDomain: "lifeline-2026.firebaseapp.com",
  projectId: "lifeline-2026",
  storageBucket: "lifeline-2026.firebasestorage.app",
  messagingSenderId: "888679569417",
  appId: "1:888679569417:web:756be3939a005cc129c0d8",
  measurementId: "G-JLGKZHSEWK"
};
