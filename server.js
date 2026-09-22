const path = require('path');
const http = require('http');
const crypto = require('crypto');
const express = require('express');
const { Server } = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: true, credentials: true } });
const PORT = Number(process.env.PORT || 3000);
const publicDir = path.join(__dirname, 'public');
const rooms = new Map();

app.use(express.json());
app.use(express.static(publicDir));
app.get('/health', (_req, res) => res.json({ ok: true, service: 'ArrowScreen' }));

app.get('/api/ice-servers', (_req, res) => {
  let urls = (process.env.ICE_SERVERS || 'stun:stun.l.google.com:19302')
    .split(',').map(value => value.trim()).filter(Boolean);
  let iceServers = urls.map(url => ({ urls: url }));
  if (process.env.TURN_USERNAME && process.env.TURN_PASSWORD) {
    iceServers = iceServers.map(server => server.urls.startsWith('turn:') || server.urls.startsWith('turns:')
      ? { ...server, username: process.env.TURN_USERNAME, credential: process.env.TURN_PASSWORD }
      : server);
  }
  res.set('Cache-Control', 'no-store').json({ iceServers });
});

app.get('/api/room', (req, res) => {
  const roomId = crypto.randomBytes(9).toString('base64url');
  const base = `${req.protocol}://${req.get('host')}`;
  res.json({ roomId, shareUrl: `${base}/share/${roomId}`, viewUrl: `${base}/view/${roomId}` });
});
app.get('/share/:roomId', (_req, res) => res.sendFile(path.join(publicDir, 'share.html')));
app.get('/view/:roomId', (_req, res) => res.sendFile(path.join(publicDir, 'viewer.html')));
app.get('*', (_req, res) => res.sendFile(path.join(publicDir, 'index.html')));

function validRoom(roomId) { return typeof roomId === 'string' && /^[A-Za-z0-9_-]{8,64}$/.test(roomId); }
function relay(socket, event, payload) { if (socket.data.roomId) socket.to(socket.data.roomId).emit(event, payload); }

io.on('connection', socket => {
  socket.on('join-room', ({ roomId, role, mode } = {}) => {
    if (!validRoom(roomId) || !['sender', 'viewer'].includes(role)) return socket.emit('app-error', 'Invalid session link.');
    let room = rooms.get(roomId);
    if (!room) { room = { sender: null, viewer: null }; rooms.set(roomId, room); }
    if (room[role] && room[role] !== socket.id) return socket.emit('room-full');
    room[role] = socket.id;
    socket.data.roomId = roomId; socket.data.role = role; socket.join(roomId);
    socket.emit('joined-room', { roomId, role, mode });
    socket.to(roomId).emit('participant-ready', { role });
  });
  socket.on('request-offer', () => relay(socket, 'viewer-requested-offer'));
  socket.on('offer', offer => relay(socket, 'offer', offer));
  socket.on('answer', answer => relay(socket, 'answer', answer));
  socket.on('ice-candidate', candidate => relay(socket, 'ice-candidate', candidate));
  socket.on('share-stopped', () => relay(socket, 'share-stopped'));
  socket.on('disconnect', () => {
    const { roomId, role } = socket.data; const room = rooms.get(roomId);
    if (!room) return;
    if (room[role] === socket.id) room[role] = null;
    socket.to(roomId).emit('peer-disconnected', { role });
    if (!room.sender && !room.viewer) rooms.delete(roomId);
  });
});

server.listen(PORT, () => console.log(`ArrowScreen listening on port ${PORT}`));
