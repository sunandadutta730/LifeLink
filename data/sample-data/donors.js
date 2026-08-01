/* ===== LifeLink Sample & Mock Data ===== */

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

const BLOOD_BANKS = [
  { name: 'Red Cross Blood Bank', location: 'Mumbai, Maharashtra', bloods: { 'O+': 45, 'A+': 32, 'B+': 28, 'AB+': 12, 'O-': 5, 'A-': 8, 'B-': 3, 'AB-': 2 }, contact: '+91 22 2345 6789', units: 135 },
  { name: 'Apollo Blood Centre', location: 'Delhi, NCR', bloods: { 'O+': 52, 'A+': 38, 'B+': 22, 'AB+': 15, 'O-': 7, 'A-': 10, 'B-': 4, 'AB-': 3 }, contact: '+91 11 3456 7890', units: 151 },
  { name: 'Fortis Blood Bank', location: 'Bangalore, Karnataka', bloods: { 'O+': 38, 'A+': 25, 'B+': 30, 'AB+': 8, 'O-': 3, 'A-': 6, 'B-': 2, 'AB-': 1 }, contact: '+91 80 4567 8901', units: 113 },
  { name: 'AIIMS Blood Centre', location: 'Hyderabad, Telangana', bloods: { 'O+': 60, 'A+': 42, 'B+': 35, 'AB+': 18, 'O-': 8, 'A-': 12, 'B-': 5, 'AB-': 4 }, contact: '+91 40 5678 9012', units: 184 },
  { name: 'Tata Blood Bank', location: 'Chennai, Tamil Nadu', bloods: { 'O+': 33, 'A+': 20, 'B+': 18, 'AB+': 10, 'O-': 4, 'A-': 5, 'B-': 2, 'AB-': 1 }, contact: '+91 44 6789 0123', units: 93 },
  { name: 'Narayana Blood Centre', location: 'Kolkata, West Bengal', bloods: { 'O+': 40, 'A+': 28, 'B+': 24, 'AB+': 14, 'O-': 6, 'A-': 9, 'B-': 3, 'AB-': 2 }, contact: '+91 33 7890 1234', units: 126 },
];

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
