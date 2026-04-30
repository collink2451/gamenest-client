# GameNest Client

React frontend for the GameNest multi-game platform. Currently features Battleship — a 2-player real-time game over WebSockets.

## Games

- **Battleship** — 2-player real-time game via WebSockets with ship placement, turn-based firing, and win detection

## Tech Stack

- **Framework:** React (JavaScript)
- **State:** Redux Toolkit
- **Routing:** React Router
- **UI:** React Bootstrap, styled-components
- **Backend:** [gamenest-server](../gamenest-server)

## Setup

### Requirements

- Node.js 18+
- A running [gamenest-server](../gamenest-server) instance

### Installation

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=""
REACT_APP_WEBSOCKET_URL=ws://localhost:5003
```

3. Start the development server:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |

## Deployment

Run `npm run build` and serve the `build/` directory with any static hosting provider or web server.
