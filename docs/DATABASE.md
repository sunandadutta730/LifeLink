# 🗄️ LifeLink Firestore Database Documentation

LifeLink uses **Google Cloud Firestore** to sync real-time data across all clients using 6 clean collections.

---

## 📋 The 6 Firestore Collections

| # | Collection Name | Purpose | Key Fields |
|---|---|---|---|
| 1 | **`admins`** | Admin credentials and login audit sessions | `name`, `email`, `role`, `savedAt`, `note` |
| 2 | **`donors`** | Registered blood donors database | `name`, `blood`, `city`, `phone`, `available`, `donations`, `lastDonation`, `registeredAt` |
| 3 | **`emergency`** | Live emergency blood requests | `id`, `patient`, `blood`, `hospital`, `city`, `phone`, `units`, `urgency`, `status`, `createdAt` |
| 4 | **`users`** | Registered user account master registry | `name`, `email`, `phone`, `role`, `signedUpAt` |
| 5 | **`logins`** | User login event audit trail | `name`, `email`, `role`, `timestamp` |
| 6 | **`blood_banks`** | Regional blood bank inventory & stock levels | `id`, `name`, `location`, `phone`, `bloods` (map), `units` |

---

## ⚡ Realtime Listeners Architecture

In `js/firebase.js`, three live `onSnapshot` listeners maintain bi-directional cloud synchronization:

1. **`db.collection('donors').onSnapshot(...)`**: Updates local `registeredDonors` array instantly whenever a donor signs up or updates availability.
2. **`db.collection('emergency').onSnapshot(...)`**: Updates emergency requests live across patient & hospital feeds.
3. **`db.collection('blood_banks').onSnapshot(...)`**: Updates inventory counts for all blood banks dynamically.

---

## 🛠️ Auto-Seeding & Reset

If the database is detected as empty:
- `seedInitialFirestoreData()` in `js/firebase.js` automatically populates default sample records into all 6 collections.
- Developers can execute `window.seedNow()` in the browser console at any time to clear stale data and re-seed clean records.
