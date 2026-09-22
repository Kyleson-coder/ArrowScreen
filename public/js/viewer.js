const socket = io();
const roomId = location.pathname.split('/').filter(Boolean).pop();
const remote = document.getElementById('remote');
const empty = document.getElementById('empty');
let pc = null;
let iceServers = [];
let remoteDescriptionSet = false;
let pendingCandidates = [];

async function loadIceServers() {
  try { const response = await fetch('/api/ice-servers', { cache: 'no-store' }); iceServers = (await response.json()).iceServers || []; }
  catch { iceServers = [{ urls: 'stun:stun.l.google.com:19302' }]; }
}
function makePeer() {
  pc = new RTCPeerConnection({ iceServers });
  pc.ontrack = event => { remote.srcObject = event.streams[0]; empty.classList.add('hidden'); remote.play().catch(() => {}); };
  pc.onicecandidate = event => event.candidate && socket.emit('ice-candidate', event.candidate);
  pc.onconnectionstatechange = () => { if (pc.connectionState === 'connected') empty.classList.add('hidden'); };
}
async function join() { await loadIceServers(); socket.emit('join-room', { roomId, role: 'viewer' }); }
socket.on('connect', join);
socket.on('joined-room', () => socket.emit('request-offer'));
socket.on('participant-ready', data => data.role === 'sender' && socket.emit('request-offer'));
socket.on('offer', async offer => {
  if (!pc) makePeer();
  await pc.setRemoteDescription(offer); remoteDescriptionSet = true;
  for (const candidate of pendingCandidates) await pc.addIceCandidate(candidate);
  pendingCandidates = [];
  const answer = await pc.createAnswer(); await pc.setLocalDescription(answer); socket.emit('answer', answer);
});
socket.on('ice-candidate', candidate => remoteDescriptionSet ? pc?.addIceCandidate(candidate) : pendingCandidates.push(candidate));
socket.on('share-stopped', () => { remote.srcObject = null; empty.textContent = 'Sharing stopped.'; empty.classList.remove('hidden'); });
socket.on('peer-disconnected', () => { remote.srcObject = null; empty.textContent = 'Sender disconnected.'; empty.classList.remove('hidden'); });
socket.on('room-full', () => { empty.textContent = 'This session is already in use.'; empty.classList.remove('hidden'); });
socket.on('app-error', message => { empty.textContent = message; empty.classList.remove('hidden'); });
document.getElementById('full').onclick = () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
