
```markdown
<div align="center">

# 📱🕌 ScanFaith
### Eat Pure. Live Pure.

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-2.0+-000000?style=for-the-badge&logo=flask&logoColor=white)
![Status](https://img.shields.io/badge/Status-Beta-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

<br />

**ScanFaith** is a next-generation dietary scanner that helps users instantly identify **Halal, Haram, or Doubtful** products.  
Built with a **high-performance Python backend** and a **Glassmorphism UI**, it runs directly in the browser—no App Store required.

[View Demo](#) · [Report Bug](https://github.com/EmadMS/scanfaith/issues) · [Request Feature](https://github.com/EmadMS/scanfaith/issues)

</div>

---

## 🚀 Features

### 📷 **Smart Scanning**
- **Instant Barcode Recognition:** Uses advanced browser-based camera access.
- **Manual Entry:** Type the barcode if the label is damaged.

### 🧠 **Intelligent Analysis**
- ✅ **Halal Verification:** Checks against known safe ingredients.
- ❌ **Haram Detection:** Automatically flags **Pork, Alcohol, Gelatin, Carmine**, and other non-halal additives.
- ⚠️ **Ingredient Breakdown:** Highlights suspicious ingredients in **Red** for immediate visibility.

### ✨ **Modern Experience**
- **Glassmorphism UI:** Premium dark-mode design with blur effects.
- **Smooth Animations:** Powered by **GSAP** for fluid, app-like transitions.
- **Privacy First:** No data is stored on external servers; history is local.

---

## 🛠️ Tech Stack

This project is built using a modern, lightweight, and fast web stack:

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Backend** | ![Python](https://img.shields.io/badge/-Python-black?logo=python) ![Flask](https://img.shields.io/badge/-Flask-black?logo=flask) | Handles API logic and ingredient filtering. |
| **Frontend** | ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white) | Glassmorphism design system. |
| **Scripting** | ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) | Handles camera stream and async API calls. |
| **Libraries** | **GSAP** / **Html5-Qrcode** | For high-end animations and scanning. |
| **Data** | **Open Food Facts API** | Global database of food products. |

---

## 📦 Data Sources

1.  **Open Food Facts API:** Real-time fetching of product names and ingredient lists.
2.  **ScanFaith Algorithm:** Custom Python logic that filters ingredients against a curated list of Haram keywords (e.g., E-codes, pork derivatives, ethanol).

---

## 🧪 Quick Start Guide

Follow these steps to get **ScanFaith** running on your local machine in minutes.

### 1. Prerequisites
Ensure you have **Python 3** installed.

### 2. Clone & Install
```bash
# Clone the repository
git clone [https://github.com/EmadMS/scanfaith.git](https://github.com/EmadMS/scanfaith.git)

# Navigate to the folder
cd scanfaith

# Install dependencies
pip install flask requests

```

### 3. Run the App

```bash
python app.py

```

### 4. Launch

Open your browser and visit:
👉 **`http://127.0.0.1:5001`**

> **Note for Mobile Testing:** To test the camera on your phone, you must deploy this to a secure server (like Render/Vercel) or use `ngrok` to create an HTTPS tunnel, as mobile browsers block cameras on insecure HTTP connections.

---

## 🔮 Future Roadmap

* [ ] **User Accounts:** Save scan history to the cloud.
* [ ] **Community Reporting:** Users can flag incorrect results.
* [ ] **Multi-Language:** Support for Arabic, French, and Urdu.
* [ ] **Native App:** Convert PWA to iOS/Android using Capacitor.

---

<div align="center">

### Eat Pure. Live Pure.

Created by **EmadMS**

</div>

```

```
