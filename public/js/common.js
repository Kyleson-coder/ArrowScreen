const roomId = location.pathname.split('/').filter(Boolean).pop();
const socket = io();
const setStatus = (text, connected = false) => { const el = document.getElementById('status'); if (el) el.textContent = text; const dot = document.getElementById('dot'); if (dot) dot.classList.toggle('ok', connected); };
const showError = message => { const el = document.getElementById('error'); if (el) { el.textContent = message; el.classList.remove('hidden'); } };
const copy = async value => { try { await navigator.clipboard.writeText(value); } catch { const input = document.createElement('input'); input.value = value; document.body.appendChild(input); input.select(); document.execCommand('copy'); input.remove(); } };
