/* Premium UI styling for ArrowScreen */
:root {
  --bg: #07111f;
  --bg-soft: #0d1d31;
  --panel: rgba(10, 23, 39, 0.8);
  --panel-strong: rgba(13, 28, 48, 0.96);
  --line: rgba(145, 177, 210, 0.22);
  --text: #edf5ff;
  --muted: #a9bfd8;
  --primary: #2d8cff;
  --primary-strong: #4157ef;
  --success: #52e2a4;
  --warning: #f9bb4d;
  --danger: #ff6a7a;
  --shadow: rgba(0, 0, 0, 0.35);
}

* { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
body {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(39, 105, 220, 0.42), transparent 28%),
    radial-gradient(circle at bottom right, rgba(91, 78, 255, 0.18), transparent 25%),
    var(--bg);
}
button, input { font: inherit; }
button { cursor: pointer; }

.ambient {
  position: fixed;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.18;
  pointer-events: none;
}
.ambient-one {
  top: -120px;
  left: -80px;
  background: #1c6ef2;
}
.ambient-two {
  right: -100px;
  bottom: -130px;
  background: #8a62ff;
}

.shell {
  width: min(900px, 100%);
  margin: 0 auto;
  padding: 32px 18px;
}

.card {
  position: relative;
  background: linear-gradient(180deg, rgba(15, 30, 51, 0.92), rgba(8, 17, 31, 0.96));
  border: 1px solid var(--line);
  border-radius: 28px;
  box-shadow: 0 28px 90px var(--shadow);
  overflow: hidden;
}

.hero-card {
  padding: 28px 28px 22px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.compact { margin-bottom: 12px; }

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: 0.02em;
  color: #dcecff;
}

.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), #7867ff);
  color: white;
  box-shadow: 0 10px 25px rgba(64, 120, 255, 0.42);
}

.status-pill {
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 0 10px;
  border-radius: 999px;
  background: rgba(116, 240, 190, 0.12);
  border: 1px solid rgba(117, 233, 188, 0.28);
  color: #aaf4d2;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 16px;
  font-size: 0.74rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #9fc1e9;
  font-weight: 800;
}

.hero-copy {
  padding: 18px 0 8px;
}

h1, h2 {
  margin: 0;
  letter-spacing: -0.06em;
  line-height: 0.96;
}

h1 {
  font-size: clamp(2.7rem, 7vw, 5rem);
  max-width: 620px;
}

h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-top: 8px;
}

.lead {
  max-width: 640px;
  font-size: 1.08rem;
  margin-top: 18px;
}

.muted, .hint {
  color: var(--muted);
  line-height: 1.7;
}

.mode-switcher {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin: 30px 0 24px;
}

.choice {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  min-height: 92px;
  padding: 18px 18px;
  text-align: left;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: rgba(17, 33, 52, 0.76);
  color: var(--text);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.choice:hover, .choice.selected {
  transform: translateY(-2px);
  border-color: rgba(94, 158, 255, 0.7);
  box-shadow: 0 12px 24px rgba(20, 86, 194, 0.18);
}

.choice strong, .choice small {
  display: block;
}

.choice small {
  margin-top: 6px;
  color: var(--muted);
  font-size: 0.8rem;
}

.choice-icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(44, 125, 255, 0.25), rgba(100, 87, 255, 0.18));
  font-size: 1.5rem;
}

.primary-btn, .secondary-btn, .mini-btn {
  border: 0;
  border-radius: 14px;
  font-weight: 700;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.primary-btn:hover, .secondary-btn:hover, .mini-btn:hover {
  transform: translateY(-1px);
}

.primary-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 58px;
  padding: 0 18px;
  color: white;
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  box-shadow: 0 18px 30px rgba(39, 105, 220, 0.26);
}

.secondary-btn {
  min-height: 50px;
  padding: 0 18px;
  color: var(--text);
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--line);
}

.mini-btn {
  min-width: 88px;
  min-height: 44px;
  padding: 0 12px;
  color: var(--text);
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--line);
}

.link-box {
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid var(--line);
}

.success-badge {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid rgba(82, 226, 164, 0.3);
  border-radius: 999px;
  background: rgba(82, 226, 164, 0.1);
  color: #addfc7;
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.field-group {
  margin-top: 16px;
}

.field-group label {
  display: block;
  margin-bottom: 8px;
  color: #b7cfe8;
  font-size: 0.82rem;
}

.copy-row {
  display: flex;
  gap: 10px;
}

.copy-row input {
  flex: 1;
  min-width: 0;
  min-height: 48px;
  padding: 0 14px;
  border-radius: 12px;
  border: 1px solid rgba(145, 177, 210, 0.25);
  background: rgba(7, 18, 30, 0.8);
  color: var(--text);
}

.hint {
  margin-top: 18px;
  font-size: 0.9rem;
}

.feature-row {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 26px;
  color: #90b1d3;
  font-size: 0.82rem;
}

.share-card {
  padding: 22px 22px 28px;
}

.status-inline {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #d4e5ff;
  font-size: 0.92rem;
}

.status-inline i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--warning);
  box-shadow: 0 0 12px rgba(249, 187, 77, 0.6);
}

.status-inline i.ok {
  background: var(--success);
  box-shadow: 0 0 14px rgba(82, 226, 164, 0.6);
}

.share-body {
  margin-top: 8px;
}

.title-wrap {
  margin-top: 10px;
}

.share-text {
  margin-top: 14px;
  max-width: 560px;
}

.permission-box {
  margin-top: 20px;
  padding: 16px 18px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(16, 27, 42, 0.84);
}

.permission-box ul {
  margin: 12px 0 0;
  padding-left: 20px;
  color: var(--muted);
  line-height: 1.8;
}

.toggle-group {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 22px;
}

.toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text);
}

.toggle input {
  accent-color: var(--primary);
}

.action-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
}

.action-row .primary-btn,
.action-row .secondary-btn {
  width: auto;
  flex: 1;
  min-width: 180px;
}

video {
  display: block;
  width: 100%;
  max-height: 60vh;
  object-fit: contain;
  margin-top: 24px;
  border-radius: 16px;
  background: #000;
  border: 1px solid rgba(145, 177, 210, 0.14);
}

.error {
  margin-top: 16px;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(255, 106, 122, 0.1);
  border: 1px solid rgba(255, 106, 122, 0.26);
  color: #ffd1d6;
}

.ghost-link {
  display: inline-block;
  margin-top: 18px;
  color: #9cc6ff;
  text-decoration: none;
}

.viewer-page {
  background: #02070d;
}

.viewer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 22px;
  background: rgba(8, 17, 31, 0.9);
  border-bottom: 1px solid var(--line);
}

.viewer-stage {
  position: relative;
  height: calc(100vh - 74px);
  display: grid;
  place-items: center;
  overflow: hidden;
  background: #000;
}

#remote {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #000;
}

.viewer-empty {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: var(--muted);
  font-size: 1.1rem;
  background: linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.5));
}

.hidden { display: none !important; }

@media (max-width: 720px) {
  .mode-switcher { grid-template-columns: 1fr; }
  .copy-row { flex-direction: column; }
  .action-row { flex-direction: column; }
  .action-row .primary-btn,
  .action-row .secondary-btn { width: 100%; }
  .topbar { flex-wrap: wrap; }
}
