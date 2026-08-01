# 📁 LifeLink Architecture & Project Structure Guide

## 📌 Directory Tree Overview

```
LifeLink/
│
├── assets/                  # Static assets & media resources
│   ├── images/              # UI banners, illustrations & general images
│   ├── icons/               # SVG icon files, favicons, vector assets
│   ├── logos/               # Brand logos & symbol mark assets
│   ├── fonts/               # Custom web font files
│   ├── animations/          # CSS keyframe & Lottie animation files
│   └── videos/              # Promotional & walkthrough video assets
│
├── css/                     # Modular Stylesheets
│   ├── variables.css        # Root color tokens, typography & CSS variables
│   ├── components.css       # Buttons, cards, badges, modals, toast styling
│   ├── forms.css            # Form controls, inputs, selects & validation states
│   ├── dashboard.css        # Stats grids, donor cards, blood bank & admin tables
│   ├── responsive.css       # Mobile & tablet media query breakpoints
│   └── style.css            # Master stylesheet aggregating all modules
│
├── js/                      # Modular JavaScript Codebase
│   ├── app.js               # Main SPA router orchestrator & page views
│   ├── firebase.js          # Cloud Firestore listeners & realtime data sync
│   ├── auth.js              # Authentication state, login/signup & Google OAuth
│   ├── donor.js             # Donor registration & search filter engine
│   ├── receiver.js          # Emergency blood request dispatcher
│   ├── hospital.js          # Blood bank inventory & compatibility calculator
│   ├── admin.js             # Role-restricted Admin Control Center
│   ├── map.js               # Spatial distance & city location utilities
│   ├── notification.js      # Toast notification system
│   ├── ui.js                # SPA navigation router & modal manager
│   ├── utils.js             # Vector SVG icons generator & formatters
│   └── validation.js        # 10-digit mobile number & duplicate validation
│
├── data/                    # Data Storage & Mock Repositories
│   ├── sample-data/         # Donors, blood banks & leaderboard seed data (`donors.js`)
│   └── mock-data/           # Test payloads & mock API mockups
│
├── docs/                    # Architectural & API Documentation
│   ├── API.md               # Data flow & Firebase API integration guide
│   ├── DATABASE.md          # 6 Firestore collection schemas & security policies
│   ├── PROJECT_STRUCTURE.md # Directory map & file responsibility guide
│   └── DEPLOYMENT.md        # Step-by-step local & GitHub Pages deployment guide
│
├── config/                  # Configuration & Credentials
│   ├── firebase-config.js   # Local Firebase web credentials (`window.firebaseConfig`)
│   ├── firebase-config.example.js # Template credentials file for repository users
│   └── constants.js        # System constants (`BLOOD_GROUPS`, `CITIES`, matrices)
│
├── index.html               # Main SPA HTML template shell
├── README.md                # Project README & Hackathon presentation guide
├── LICENSE                  # MIT Open Source License
├── .gitignore               # Excluded files list
├── .env.example             # Environment variable specification template
└── package.json             # NPM package manifest & scripts
```

---

## 🔍 Module Responsibilities Breakdown

### `config/`
* `constants.js`: System-wide immutable arrays (`BLOOD_GROUPS`, `RARE_GROUPS`, `CITIES`), compatibility matrices, and fallback configurations.
* `firebase-config.js`: Initializes `window.firebaseConfig` containing project credentials.

### `data/`
* `sample-data/donors.js`: Contains `SAMPLE_DONORS`, `BLOOD_BANKS`, `LEADERBOARD`, and `DASHBOARD_DATA` for initial auto-seeding.

### `css/`
* `variables.css`: Color tokens (reds, blues, neutrals), fonts (`Inter`, `Outfit`), radii, shadows.
* `components.css`: Buttons (`btn-primary`, `btn-outline`), cards, badges, modal dialogs, toast notifications.
* `forms.css`: Inputs, selects, eligibility badges, validation states.
* `dashboard.css`: Donor cards, emergency feed, blood bank tables, admin control panel.
* `responsive.css`: Tablet and mobile navigation drawer, grid collapse breakpoints.
* `style.css`: Master file assembling all CSS modules via `@import` rules.

### `js/`
* `utils.js`: Vector SVG icons generator (`SVG_ICONS`), formatters.
* `validation.js`: 10-digit phone validator, duplicate checker.
* `notification.js`: Toast notification dispatcher (`showToast`).
* `map.js`: Haversine distance calculator.
* `firebase.js`: Cloud Firestore listeners (`donors`, `emergency`, `blood_banks`), auto-seeder, `window.seedNow()`.
* `ui.js`: Router (`navigateTo`), page renderer, modal manager (`showModal`, `closeModal`).
* `auth.js`: User state (`currentUserAccount`, `isAdminLoggedIn`), login/signup modals, password validation, Google OAuth popup.
* `donor.js`: Registration handler (`handleRegister`), search/filters (`filterDonors`).
* `receiver.js`: Emergency request creation (`handleEmergencyRequest`), feed renderer.
* `hospital.js`: Blood bank inventory views, compatibility calculator.
* `admin.js`: Control panel (`renderAdmin`), stock adjustments, donor availability toggling.
* `app.js`: Application bootstrap, `DOMContentLoaded` listener, hash router.
