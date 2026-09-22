const test = require('node:test');
const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const http = require('node:http');

function request(path) { return new Promise((resolve, reject) => { const req = http.get(`http://127.0.0.1:3210${path}`, res => { let body = ''; res.on('data', chunk => body += chunk); res.on('end', () => resolve({ status: res.statusCode, body })); }); req.on('error', reject); }); }

test('health and room endpoints respond', async () => {
  const child = spawn(process.execPath, ['server.js'], { env: { ...process.env, PORT: '3210' }, stdio: 'ignore' });
  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    const health = await request('/health');
    assert.equal(health.status, 200);
    assert.equal(JSON.parse(health.body).ok, true);
    const room = await request('/api/room');
    assert.equal(room.status, 200);
    assert.match(JSON.parse(room.body).roomId, /^[A-Za-z0-9_-]{12}$/);
  } finally { child.kill(); }
});
