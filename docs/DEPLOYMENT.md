# 🚀 LifeLink Deployment Guide

This guide provides instructions for running LifeLink locally and deploying to production web hosts like **GitHub Pages**.

---

## 💻 1. Local Setup

### Step 1: Clone Repository
```bash
git clone https://github.com/sunandadutta730/LifeLink.git
cd LifeLink
```

### Step 2: Configure Firebase Credentials (Optional)
If running locally, copy `config/firebase-config.example.js` to `config/firebase-config.js` and insert your Firebase Web API credentials:
```javascript
window.firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```
*(Note: If `config/firebase-config.js` is absent, the system automatically falls back to `DEFAULT_FIREBASE_CONFIG` in `config/constants.js` so the application runs seamlessly out of the box).*

### Step 3: Launch Local HTTP Server
Using Python (pre-installed on Windows/macOS/Linux):
```bash
python -m http.server 8080
```
Or using Node `http-server` / VS Code Live Server:
```bash
npx http-server -p 8080
```

### Step 4: Access Application
Open your browser and navigate to `http://localhost:8080`.

---

## 🌐 2. GitHub Pages Deployment

1. Commit and push all code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Deploy LifeLink refactored architecture"
   git push origin main
   ```
2. Navigate to your repository on GitHub: `github.com/sunandadutta730/LifeLink`.
3. Go to **Settings** ➔ **Pages** (under Code and automation).
4. Under **Build and deployment** ➔ **Source**, select **Deploy from a branch**.
5. Select Branch: `main` / Folder: `/ (root)` ➔ Click **Save**.
6. Your live site will be published at: **`https://sunandadutta730.github.io/LifeLink/`**

---

## 🔒 3. Google OAuth & Firebase Domain Authorization

To enable Google Sign-In on your live domain:
1. Open [console.firebase.google.com](https://console.firebase.google.com).
2. Select project `lifelink-1a1e8` ➔ **Authentication** ➔ **Settings** ➔ **Authorized Domains**.
3. Add your custom domain or `sunandadutta730.github.io` to the authorized domains list.
