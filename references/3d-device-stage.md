# 3D Hero Device / Single-Take Macro Loop Stage (Three.js + Remotion)

Use this recipe when the product is a **menu-bar utility, desktop companion, widget, or mobile app** whose visual impact shines best inside a continuous, single-take 3D studio hardware showcase (18–28 s, 1920×1080 @ 60 fps, seamless autoplay loop for X/Twitter or README hero).

## 1. Renderer Architecture (Deterministic & Fast)

- **Use `three` directly on a `<canvas>` ref inside Remotion** rather than React Three Fiber (`@react-three/fiber`) when targeting React 19 + Remotion 4.0.530. It avoids peer-dependency friction and guarantees synchronous, deterministic frame rendering:
  ```ts
  const renderer = new THREE.WebGLRenderer({
    canvas: glCanvas,
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true, // required so Remotion captures every frame reliably
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.04;
  ```
- Drive the entire 3D pose, screen texture, and camera strictly as pure functions of `t = frame / fps` inside `useEffect(() => { ... renderer.render(scene, camera); }, [frame])`.
- On macOS, render with `--gl=angle` (Apple Metal hardware acceleration: ~200–350 ms/frame at 1080p vs. software WebGL). On headless Linux, use `--gl=swangle`.

## 2. Real Binary Capture > Hand-Redrawn UI

Whenever the real desktop/mobile app can launch in an isolated sandbox:

1. **Capture 2× Retina PNGs straight from the compiled binary** for every state shown in the film (e.g., initial state, post-action state, detail panels, settings, light/dark modes).
2. Preload all captured PNGs before frame 0 using `delayRender()` / `continueRender()` and `staticFile('ui/<state>.png')`.
3. Composite those exact real screenshots onto a high-resolution screen `CanvasTexture` (`2560×1664`, `anisotropy = 16`, `toneMapped = false` on the display plane so UI colours remain calibrated and razor-sharp).
4. **Overlay ONLY live 60 fps elements** on top of the real screenshot: animated status orbs/indicators inside exact dark sockets, native OS cursor gliding on a Fritsch-Carlson Hermite track, and subtle click press/ripple feedback.
5. **Why:** Hand-redrawing an app on 2D Canvas almost always drifts by 10–20% (missing buttons, invented settings layouts, wrong item counts). Real binary capture gives 100.0% product fidelity with half the code.

## 3. Hardware PBR Materials (Anti-Chrome Rule)

Default shiny metal settings (`metalness: 0.85+`, `roughness: 0.25`) paired with bright `PMREMGenerator` planes turn anodized aluminum laptops into **fake chrome toys**. Use realistic bead-blasted photography values:

| Part | `metalness` | `roughness` | `envMapIntensity` | Notes |
| :--- | :---: | :---: | :---: | :--- |
| Anodized chassis (Space Black / Gray) | `0.35–0.42` | `0.54–0.62` | `0.42–0.55` | Bead-blasted satin sheen, zero mirror streaks |
| Display lid outer rim | `0.20–0.28` | `0.65–0.75` | `0.20–0.32` | Rear-only bevel; flat front so NO silver glare bar sits above the screen |
| Display glass bezel | `0.04–0.06` | `0.22–0.28` | `0.15–0.22` | Edge-to-edge jet-black anti-reflective glass + matte rubber gasket |
| Matte keycaps | `0.05–0.08` | `0.46–0.58` | `0.25–0.32` | Subtle `emissiveMap` (`0.30–0.38`) for white backlit legends |
| Rubber feet & display gasket | `0.00` | `0.90–0.94` | `0.10` | Deep matte charcoal |

Keep `PMREMGenerator` softbox planes diffused (`multiplyScalar(0.85–1.15)`) and `sigmaRadians <= 0.04`.

## 4. Real Hardware Micro-Details Checklist

Viewers spot toy CG hardware within 0.5 seconds if the silhouette or deck lacks real physical anatomy. For a modern MacBook Pro 14"/16" (adapt similarly for iPhone / Windows laptops):

- [ ] **Two-tier sculpted lower hull:** Flat upper side wall curving smoothly into a recessed lower undercut (never a sharp rectangular brick).
- [ ] **79-key US-ANSI backlit keyboard (not blank black squares):** Full-height Function row (`esc`, `F1–F12`), circular recessed **Touch ID** sensor ring in top-right, laser-etched SF Pro legends mapped via a `2048×820` UV atlas, and **half-height Inverted-T arrows** sitting in a continuous jet-black anodized keyboard well.
- [ ] **Laser-drilled micro-dot speaker grilles:** Hundreds of crisp dark micro-perforations flanking left & right of the keyboard well (never solid gray slabs).
- [ ] **Color-matched etched Force Touch trackpad:** Nearly identical luminance to the palm rest with a hairline recessed perimeter groove.
- [ ] **Precision CNC side ports:** Left wall (MagSafe, 2× USB-C, 3.5 mm); right wall (HDMI, USB-C, SDXC) + front thumb scoop.
- [ ] **Underside detail (for flip/fold hooks):** 4 low-profile matte rubber feet in recessed rings + subtle debossed model mark.
- [ ] **Authentic OS chrome:** Recognizable Menu Bar (real OS mark, notch cutout, Wi-Fi, battery, Spotlight, Control Center) and crisp vector Dock icons.

## 5. Macro-Safe Wallpaper & Dark Studio Cyclorama

- **Studio backdrop:** A smooth dark-slate radial studio cyclorama (`#161b22` edges → `#54606e` center) is appropriate for 3D studio hardware photography (distinct from dark terminal AI slop) provided there are no neon glows, floating buzzword cards, or fake glass gradients.
- **Desktop wallpaper under 2× macro zoom:** Avoid simple blurry linear stripe gradients — they look out-of-focus when zoomed in. Use crisp overlapping sculpted shapes with sharp `2–3 px` edge highlights, subtle cast shadows between layers, and an optional fine micro-dot grid.

## 6. Seamless Single-Take Loop & Click-Frame Audit

- **Seamless autoplay loop:** Match `t = 0` and `t = duration` to the exact same hardware pose (e.g., tilted underside silhouette with display top + notch peeking behind), fade audio edges cleanly (`100–120 ms`), and keep total runtime punchy (**18–24 s**).
- **Continuous camera travel:** Even during UI reading holds, keep a gentle sinusoidal orbital micro-drift (`±0.025` world units) so the shot feels alive and passes optical-flow hold gates.
- **Mandatory Click-Frame Audit (replaces DOM `data-box` audit for WebGL `<canvas>`):**
  1. Render a full-res review still at `frame = Math.round(clickTime * fps)` for **every** interaction click and verify visually that the cursor tip lands dead-center on the real button.
  2. Never leave a phantom click after a state transition that hides the button.
  3. Inspect a side-by-side comparison of extracted MP4 frames against the real app's screenshots before final delivery.
