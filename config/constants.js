/* ===== LifeLink Constants ===== */

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
