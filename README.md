# Scrolly Game Jam - Unity Integration

This project integrates a Unity WebGL game into the Solana dApp Scaffold for the Scrolly No-Code Game Jam.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Place your Unity WebGL build files in `public/unity/Build/`:
   - `[BuildName].loader.js`
   - `[BuildName].data`
   - `[BuildName].wasm`
   - `[BuildName].framework.js`

3. Update the Unity build paths in `src/views/home/index.tsx`:
   - Replace `[BuildName]` with your actual Unity build name in the `useUnityContext` configuration

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Unity Build File Structure

```
public/
└── unity/
    └── Build/
        ├── [BuildName].loader.js
        ├── [BuildName].data
        ├── [BuildName].wasm
        └── [BuildName].framework.js
```

## Project Structure

- `src/views/home/index.tsx` - Contains `HomeView` and `GameSandbox` components
- `src/app/page.tsx` - Main page that renders `HomeView`
- `next.config.js` - Configured for Unity WebGL asset serving
- `public/unity/Build/` - Directory for Unity build files

## Notes

- The `GameSandbox` component uses `react-unity-webgl` to embed the Unity game
- The game is styled to fit within a 9:16 phone frame with dark neon theme
- Loading states and error handling are included
- Only the `GameSandbox` component should be modified per hackathon rules

