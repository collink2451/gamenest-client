# GameNest

React/TypeScript frontend for the GameNest multi-game platform. Supports multiple games with GitHub OAuth login and a shared leaderboard.

## Games

- **Battleship** — 2-player real-time game via WebSockets
- **Wordle** — Word guessing game
- **Dots and Boxes** — Classic grid game
- **Blackjack** — Card game

## Tech Stack

- **Framework:** React (TypeScript)
- **State:** Redux Toolkit
- **Routing:** React Router
- **UI:** React Bootstrap, styled-components
- **Auth:** GitHub OAuth (via [GameNestServer](../GameNestServer))
- **Deployment:** Azure Static Web Apps

## Setup

### Requirements

- Node.js 18+
- A running [GameNestServer](../GameNestServer) instance

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

> By default the app connects to the production backend. To point it at a local GameNestServer, update the API base URL in the source before starting.

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |

## Deployment

Deploy to **Azure Static Web Apps** using the included `staticwebapp.config.json`. Connect the GitHub repository in the Azure portal to enable automatic deployments on push.
