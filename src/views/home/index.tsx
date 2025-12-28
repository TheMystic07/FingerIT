'use client';

// Next, React
import { FC, useState, useEffect } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import pkg from '../../../package.json';

// ❌ DO NOT EDIT ANYTHING ABOVE THIS LINE

export const HomeView: FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* HEADER – fake Scrolly feed tabs */}
      <header className="flex items-center justify-center border-b border-white/10 py-3">
        <div className="flex items-center gap-2 rounded-full bg-white/5 px-2 py-1 text-[11px]">
          <button className="rounded-full bg-slate-900 px-3 py-1 font-semibold text-white">
            Feed
          </button>
          <button className="rounded-full px-3 py-1 text-slate-400">
            Casino
          </button>
          <button className="rounded-full px-3 py-1 text-slate-400">
            Kids
          </button>
        </div>
      </header>

      {/* MAIN – central game area (phone frame) */}
      <main className="flex flex-1 items-center justify-center px-4 py-3">
        <div className="relative aspect-[9/16] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 shadow-[0_0_40px_rgba(56,189,248,0.35)]">
          {/* Fake "feed card" top bar inside the phone */}
          <div className="flex items-center justify-between px-3 py-2 text-[10px] text-slate-400">
            <span className="rounded-full bg-white/5 px-2 py-1 text-[9px] uppercase tracking-wide">
              Scrolly Game
            </span>
            <span className="text-[9px] opacity-70">#NoCodeJam</span>
          </div>

          {/* The game lives INSIDE this phone frame */}
          <div className="flex h-[calc(100%-26px)] flex-col items-center justify-start px-3 pb-3 pt-1">
            <GameSandbox />
          </div>
        </div>
      </main>

      {/* FOOTER – tiny version text */}
      <footer className="flex h-5 items-center justify-center border-t border-white/10 px-2 text-[9px] text-slate-500">
        <span>Scrolly · v{pkg.version}</span>
      </footer>
    </div>
  );
};

// ✅ THIS IS THE ONLY PART YOU EDIT FOR THE JAM
// Replace this entire GameSandbox component with the one AI generates.
// Keep the name `GameSandbox` and the `FC` type.

const GameSandbox: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [hasError, setHasError] = useState(false);

  // Unity configuration
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: '/unity/Build/Web.loader.js',
    dataUrl: '/unity/Build/Web.data',
    frameworkUrl: '/unity/Build/Web.framework.js',
    codeUrl: '/unity/Build/Web.wasm',
  });

  // Update loading state based on Unity context
  useEffect(() => {
    if (isLoaded) {
      setIsLoading(false);
      setLoadingProgress(100);
    } else {
      setLoadingProgress(Math.round(loadingProgression * 100));
    }
  }, [isLoaded, loadingProgression]);

  // Handle Unity errors
  useEffect(() => {
    if (!isLoaded && loadingProgression === 0 && !isLoading) {
      setHasError(true);
    }
  }, [isLoaded, loadingProgression, isLoading]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg bg-slate-950">
      {/* Loading Screen */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          {/* FINGER IT! Text */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-cyan-400 animate-pulse drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]">
              FINGER IT!
            </h1>
          </div>
          
          {/* Unity Loading Bar */}
          <div className="w-64 overflow-hidden rounded-full bg-slate-800/50 border border-cyan-500/30 shadow-[0_0_20px_rgba(56,189,248,0.4)]">
            <div
              className="h-3 bg-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.8)]"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          
          {/* Progress percentage */}
          <p className="mt-3 text-sm font-semibold text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
            {loadingProgress}%
          </p>
        </div>
      )}

      {/* Error Screen */}
      {hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-red-950/20 to-slate-950">
          <div className="mb-4 flex flex-col items-center gap-2">
            <div className="text-4xl">⚠️</div>
            <p className="text-sm font-semibold text-red-400">Failed to Load Game</p>
            <p className="text-[10px] text-slate-400 text-center px-4">
              Please ensure Unity build files are in /public/unity/Build/
            </p>
          </div>
        </div>
      )}

      {/* Unity Canvas */}
      <Unity
        unityProvider={unityProvider}
        className="h-full w-full"
        style={{
          width: '100%',
          height: '100%',
          visibility: isLoading ? 'hidden' : 'visible',
        }}
      />
    </div>
  );
};

