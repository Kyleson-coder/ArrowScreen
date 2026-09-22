# ArrowScreen deployment

## Render
1. Push this repository to GitHub.
2. In Render, choose **New → Blueprint** and select the repository, or create a Node web service.
3. Use `npm install` as the build command and `npm start` as the start command.
4. Set `ICE_SERVERS` to a comma-separated list. Keep at least one STUN server; add a TURN URL for difficult networks.
5. Set `TURN_USERNAME` and `TURN_PASSWORD` as secret environment variables when your TURN provider requires them.
6. Use the generated `https://` URL for phone testing.

## TURN example
```env
ICE_SERVERS=stun:stun.l.google.com:19302,turn:turn.example.com:3478
TURN_USERNAME=provided-user
TURN_PASSWORD=provided-password
```

The current server applies the same credentials to `turn:` and `turns:` URLs. Never commit credentials to `.env` or source control.

## Docker
```bash
docker build -t arrowscreen .
docker run --rm -p 3000:3000 --env-file .env arrowscreen
```

Put Docker behind HTTPS with a reverse proxy for production. Screen capture requires a secure context. Render supplies TLS automatically.
