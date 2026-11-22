# ASCII Knight ⚔️

An atmospheric, real-time procedural ASCII art knight rendered on HTML5 Canvas, accompanied by physics-driven cape and grass animations, particle embers, and a precision momentum odometer clock.

**Live Demo**: [https://asciiart-knight.vercel.app](https://asciiart-knight.vercel.app)

---

## ✨ Features

- **Procedural Canvas ASCII Engine**:
  - Pixel-level buffer rasterization rendered via direct 32-bit `Uint32Array` on `ImageData`.
  - Multi-pass downsampled bloom / glow diffusion filter.
  - Multi-frequency wind simulation with depth-sorted procedural grass blades (`|`, `/`, `\`, `'`, `,`, `.`) dynamically leaning with wind force.
  - Multi-strand Bézier cloth physics for the wind-swept red cape with realistic tattering and drifting embers.
  - Knight breathing and swaying cycles synchronized to ambient wind.
- **Dynamic Momentum Odometer Clock**:
  - Smooth rolling digit transitions that slide vertically like a physical odometer wheel as seconds and minutes change.
  - Geometric typography featuring Google Fonts Geist (`font-weight: 700`, `tabular-nums`) with snug colon and zero glyph clipping across all digit combinations (`0`–`9`).
  - Pulsing colon synchronized at 1.0s (1 Hz) to real-world seconds.
  - Integrated header with Day of the Week (`// SUNDAY`), full Date, and Year.
  - **12h / 24h Toggle**: Click anywhere on the clock to instantly switch between 12-hour and 24-hour formats with persistent `localStorage` preference.
- **Zero Dependencies**: Self-contained single-page application with no external build step or runtime libraries required.

---

## 🚀 Getting Started

### 1. Direct in Browser (No Server Required)
Simply double-click `index.html` or open it directly in any modern browser (Chrome, Edge, Firefox, Safari).

### 2. Local Development Server
Using Node.js:
```bash
npx serve .
```

Using Python:
```bash
python -m http.server 3000
```
Then navigate to `http://localhost:3000`.

---

## 🖥️ Using as a Windows Live Wallpaper

You can use ASCII Knight as an animated desktop wallpaper using free open-source tools:

### Method 1: Lively Wallpaper (Recommended)
1. Download and install **Lively Wallpaper** from the [Microsoft Store](https://apps.microsoft.com/detail/9ntm2qc6qws7) or [GitHub Releases](https://github.com/rocksdanister/lively/releases).
2. Open Lively Wallpaper and click **Add Wallpaper (+)**.
3. Choose either:
   - **URL**: Paste `https://asciiart-knight.vercel.app`
   - **File**: Browse and select `index.html` from this folder.
4. Click **OK** to set it as your active desktop wallpaper.

### Method 2: Wallpaper Engine (Steam)
1. Open Wallpaper Engine and click **Wallpaper Editor** -> **Create Wallpaper**.
2. Select **Web Wallpaper** and point to `index.html` or enter the URL `https://asciiart-knight.vercel.app`.
3. Save and apply.

---

## 📦 Deployment to Vercel

To deploy your own instance to Vercel:
```bash
npx vercel
```
Or connect this repository directly in the [Vercel Dashboard](https://vercel.com).

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
