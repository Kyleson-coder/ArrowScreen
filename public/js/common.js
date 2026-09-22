function setStatus(text, connected = false) { const statusText = document.getElementById('status'); const dot = document.getElementById('dot'); if (statusText) statusText.textContent = text; if (dot) dot.classList.toggle('ok', connected); }
function showError(message) { const error = document.getElementById('error'); if (error) { error.textContent = message; error.classList.remove('hidden'); } }
function getRoomIdFromPath() { const parts = location.pathname.split('/').filter(Boolean); return parts[parts.length - 1] || null; }
