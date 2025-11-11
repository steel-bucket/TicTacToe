# Multiplayer Tic-Tac-Toe

A production-ready, real-time multiplayer Tic-Tac-Toe game with server-authoritative architecture using Nakama backend and React frontend with Three.js 3D graphics.

## Quick Start

### 1. Install Dependencies
```bash
cd server && npm install && cd ..
cd client && npm install && cd ..
```

### 2. Build Server Modules
```bash
cd server
docker-compose up -d
npm run build
cd ..
```

### 3. Start Frontend
```bash
cd client
npm run dev
```

Open http://localhost:3000

## Testing Multiplayer

1. Open two browser windows (one incognito)
2. Select same game mode in both
3. Click "Find Match" in both windows
4. Play the game!

## Running Tests
```bash
cd server
npm test
```

## Stop Services
```bash
docker-compose down
```

For complete documentation, see the full README in the project.
