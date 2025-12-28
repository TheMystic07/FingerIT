# 🎮 FingerIT

A nostalgic recreation of the classic MMM Fingers game, built with Unity and integrated into a modern React/Next.js web application. Navigate your finger through increasingly difficult obstacles in this addictive endless runner!



## 🎯 About the Game

**FingerIT** is a faithful replica of the beloved MMM Fingers game from childhood. In this game, **your finger is the player** - you must skillfully maneuver it between obstacles that appear on screen. The game gets progressively harder every second, testing your reflexes and precision.

### Gameplay

- **Control**: Use your mouse or touch to move your finger
- **Objective**: Navigate between obstacles without colliding
- **Difficulty**: Increases every second - can you survive?
- **Endless**: See how far you can go!

## 🚀 Live Demo

Check out the live game at: [GitHub Pages / Your Deploy URL]

## 📸 Screenshots & Video

<div align="center">
  <img src="public/ss (1).png" alt="Game Screenshot 1" width="300"/>
  <img src="public/ss (2).png" alt="Game Screenshot 2" width="300"/>
  <img src="public/ss (3).png" alt="Game Screenshot 3" width="300"/>
</div>

**Watch the gameplay video**: 
https://github.com/user-attachments/assets/c4240054-23aa-44fb-87b5-daf7c0c1036e


> **Note**: Screenshots and video are located in the `public/` folder. Click the links above to view them.

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Game Engine**: Unity (WebGL build)
- **Styling**: Tailwind CSS
- **Unity Integration**: react-unity-webgl
- **Version Control**: Git LFS (for Unity build files)

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm
- Git
- Git LFS (for cloning Unity build files)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/TheMystic07/FingerIT.git
   cd FingerIT
   ```

2. **Install Git LFS** (if not already installed)
   ```bash
   git lfs install
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 How to Play

1. **Start the game** - The Unity game will load automatically
2. **Move your finger** - Use your mouse cursor or touch to control your finger
3. **Avoid obstacles** - Navigate through the gaps between obstacles
4. **Survive as long as possible** - The game gets faster and harder over time!

## 🏗️ Project Structure

```
FingerIT/
├── public/
│   ├── unity/
│   │   └── Build/          # Unity WebGL build files (Git LFS)
│   │       ├── Web.loader.js
│   │       ├── Web.data
│   │       ├── Web.framework.js
│   │       └── Web.wasm
│   ├── ScreenRecording.mp4 # Gameplay video
│   └── ss (1-3).png       # Screenshots
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Main page
│   │   └── globals.css     # Global styles
│   └── views/
│       └── home/
│           └── index.tsx   # HomeView & GameSandbox components
├── next.config.js          # Next.js configuration
├── package.json
└── README.md
```

## 🔧 Development

### Key Components

- **HomeView**: Main container with Scrolly-style phone frame UI
- **GameSandbox**: Unity game integration component with loading states
- **Unity Integration**: Uses `react-unity-webgl` for seamless Unity embedding

### Unity Build Files

The Unity WebGL build files are tracked with Git LFS due to their large size:
- `Web.wasm` - WebAssembly binary
- `Web.data` - Game data assets
- `Web.loader.js` - Unity loader script
- `Web.framework.js` - Unity framework

### Customization

The game is styled with a dark, futuristic neon theme:
- Dark background with cyan/blue accents
- "FINGER IT!" loading screen text
- Smooth Unity loading progress bar
- Responsive 9:16 phone frame layout

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

## 🎨 Features

- ✅ Unity WebGL game integration
- ✅ Responsive design (mobile-friendly)
- ✅ Dark neon theme UI
- ✅ Loading states with progress indicator
- ✅ Error handling for failed loads
- ✅ Git LFS for large file management
- ✅ TypeScript for type safety

## 🐛 Troubleshooting

### Unity game not loading?

1. Check that all Unity build files are in `public/unity/Build/`
2. Verify file names match the configuration in `src/views/home/index.tsx`
3. Check browser console for errors
4. Ensure Git LFS files are properly downloaded: `git lfs pull`

### Build errors?

1. Clear Next.js cache: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check Node.js version (requires 18+)

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built for the **Scrolly No-Code Game Jam**
- Inspired by the classic **MMM Fingers** game
- Unity WebGL integration powered by [react-unity-webgl](https://github.com/jeffreylanters/react-unity-webgl)

## 📧 Contact

- **GitHub**: [@TheMystic07](https://github.com/TheMystic07)
- **Repository**: [FingerIT](https://github.com/TheMystic07/FingerIT)

---

<div align="center">
  <p>Made with ❤️ and Unity</p>
  <p>🎮 FingerIT - Navigate. Survive. Conquer.</p>
</div>
