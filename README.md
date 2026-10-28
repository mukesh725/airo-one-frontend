# AIRO ONE™ — Unified Health & Wellness Ecosystem

> Premium digital storefront and clinical care web application for the **AIRO ONE™** integrated healthcare ecosystem, bridging organic groceries, compounding pharmacy, walk-in minute clinics, digital membership, and diagnostic pods.

---

## 📁 Repository Structure

```
airooone front end/
│
├── 📄 index.html                # Main Ecosystem Hub & Landing Page
├── 📄 essentials.html           # AIRO Essentials — Clean Grocery & Nutrition
├── 📄 pharmacy.html             # Pharmacy & Compounding Portal (Catalog & Rx)
├── 📄 membership.html           # AIRO ONE™ Membership Portal & Digital Card
│
├── 📂 css/                      # Stylesheets & Design System
│   ├── styles.css               # Global Design System, Grid Header, Typography & Components
│   └── membership.css           # AIRO ONE Membership Portal Specific Layout & Cards
│
├── 📂 js/                       # Client-Side Application Logic
│   ├── app.js                   # Ecosystem Controller (Cart, Search, Drawers, Toast Notifications)
│   └── membership.js            # Membership Lookup Modal, Tab Controller & Digital ID Card
│
├── 📂 assets/                   # Static Media, Leaflets & Marketing Material
│   ├── leaflet-pages/           # AIRO ONE Membership Leaflet Preview Slides (1–4)
│   ├── Leaf-Let-membership.pdf  # Downloadable High-Res Membership Brochure
│   └── ...                      # UI icons, category vectors & product imagery
│
├── 📂 public/                   # Public Static Assets & Imagery
│   ├── airo-1-logo.png          # Master AIRO Brand Emblem
│   ├── categories/              # High-definition Category Photography
│   ├── curated/                 # Featured Curated Products Photography
│   ├── care/                    # Telehealth & Specialty Consultation Imagery
│   └── wellbeing/               # Clinical Wellness & Preventive Health Imagery
│
├── 📂 docs/                     # Project Reference & Technical Guides
│   ├── design/                  # Design Benchmarks & Style Guides
│   │   ├── apple-design.md      # Apple Human Interface & Quiet Luxury Principles
│   │   └── erewhon-design.md    # Erewhon Digital Experience Computed Metrics
│   └── security/                # Frontend Security Audits & Best Practices
│       ├── 20-security-holes-murphmaxxing.pdf
│       └── secure-vibe-coding.pdf
│
└── 📄 README.md                 # Project Architecture Documentation
```

---

## 🏛️ Ecosystem Portals

| Portal | File | Purpose |
| :--- | :--- | :--- |
| **Ecosystem Home** | [`index.html`](file:///Users/mukesh/Desktop/airooone%20front%20end%20/index.html) | Hub connecting all 5 pillars of the AIRO healthcare network. |
| **AIRO Essentials** | [`essentials.html`](file:///Users/mukesh/Desktop/airooone%20front%20end%20/essentials.html) | Curated grocery, regenerative organic staples, cold-pressed juices & supplements. |
| **Pharmacy & Compounding** | [`pharmacy.html`](file:///Users/mukesh/Desktop/airooone%20front%20end%20/pharmacy.html) | Prescription upload, compound custom meds, standard OTC drugs & delivery. |
| **AIRO ONE™ Membership** | [`membership.html`](file:///Users/mukesh/Desktop/airooone%20front%20end%20/membership.html) | Tier benefits, status verification modal, interactive digital card & leaflet viewer. |

---

## 🎨 Design System & Aesthetics

- **Typography**: Apple SF Pro (`-apple-system`, `BlinkMacSystemFont`, `SF Pro Display` for headings, `SF Pro Text` for UI and body text).
- **Header Architecture**: Mathematically balanced 3-column CSS Grid (`1fr auto 1fr`):
  - **Left**: Brand logo anchor (`justify-self: start`)
  - **Center**: Translucent capsule navigation pill bar (`justify-self: center; margin: 0 auto;`)
  - **Right**: Frosted glass circular icon action buttons (`Deliver`, `Search`, `Account/Login`, `Cart` with live counter badge)
- **Palette**:
  - Primary Brand Green: `#006537` / `#0E7046`
  - Accent Gold: `#D4AF37`
  - Charcoal Dark Mode / Ink: `#111813` / `#1F2937`
  - Translucent Glassmorphism: `rgba(255, 255, 255, 0.88)` with `backdrop-filter: blur(20px)`

---

## 🚀 Local Development

To run the project locally with live reloading:

```bash
# Using five-server or live-server
npx -y five-server --port=5500 .
```

Navigate to:
- Homepage: `http://localhost:5500/`
- Essentials: `http://localhost:5500/essentials.html`
- Pharmacy: `http://localhost:5500/pharmacy.html`
- Membership: `http://localhost:5500/membership.html`
