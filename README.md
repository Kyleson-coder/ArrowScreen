# ArrowScreen

ArrowScreen is a one-to-one WebRTC screen-sharing app for:

- Android or iPhone browser → Windows or MacBook
- Windows or MacBook browser → another laptop

## Run
```bash
npm install
npm start
```
Open `http://localhost:3000` and create a session. Open the sender URL on the device being shared and the receiver URL on the laptop.

## Docker
```bash
docker build -t arrowscreen .
docker run --rm -p 3000:3000 arrowscreen
```

## Production
Screen capture requires a secure context: use HTTPS (Render provides this automatically). For users on different networks, configure a TURN server in `ICE_SERVERS`, for example `stun:...,turn:turn.example.com:3478` and add TURN credentials in the server/client configuration as needed.

## Browser limitations
A browser must show a native permission prompt. A link cannot silently grant screen or microphone access, and this app does not request location. `getDisplayMedia` support on iPhone/iPad depends on the current iOS/Safari version; if unavailable, use a supported browser/device or a native app. System audio is browser/OS dependent. This is viewing only; websites cannot remotely control a phone or laptop.
