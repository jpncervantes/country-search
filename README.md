# WanderPedia

A simple, single-page React application for searching countries using the REST Countries API.

## Features

- 🔍 Search for countries by name
- 🌍 View country details (flag, capital, currency, driving side, coat of arms)
- ⚡ Fast, responsive UI with instant feedback
- 🗂️ Built with React, Shadcn, Tailwind, Redux Toolkit, RTK Query, and Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/country-search.git
   cd country-search
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Create a `.env` file in the root directory and place this value:
   ```env
   VITE_API_BASE_URL=https://restcountries.com/v3.1/
   ```

### Running the App

```sh
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

```

## Environment Variables

- `VITE_API_BASE_URL`: Base URL for the REST Countries API (default: `https://restcountries.com/v3.1/`)

## Scripts

- `dev`: Start the development server
- `build`: Build for production
- `preview`: Preview the production build

> **Note:** Do not commit your `.env` file to version control. It is already included in `.gitignore`.
```
