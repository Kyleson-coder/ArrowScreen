# ArrowScreen

ArrowScreen is a one-to-one WebRTC screen-sharing app for Android/iPhone browsers and Windows/macOS laptops.

## Run locally
```bash
npm install
npm start
```
Open `http://localhost:3000`. Create a session, open the sender link on the device being shared, and open the receiver link on the laptop.

## Docker
```bash
docker build -t arrowscreen .
docker run --rm -p 3000:3000 arrowscreen
```

## Production networking
Screen capture requires HTTPS. Render provides HTTPS automatically. STUN may not connect users behind strict NATs; configure `ICE_SERVERS`, `TURN_USERNAME`, and `TURN_PASSWORD` with a TURN provider for production reliability.

## Browser limitations
A native browser permission prompt is mandatory for screen and microphone capture. A link cannot silently grant those permissions, and ArrowScreen does not request location. System audio is browser/OS dependent. iPhone screen capture support depends on the installed iOS/browser version. This app is viewing-only and cannot remotely control the sender device.
