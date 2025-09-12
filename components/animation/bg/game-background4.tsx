import React, { useEffect, useState } from 'react';

interface GameBackgroundProps {
  gameTitle?: string;
  className?: string;
}

interface GridCell {
  id: string;
  row: number;
  col: number;
  delay: number;
  duration: number;
}

const generateGridCells = (gridSize: number, cellSize: number): GridCell[] => {
  const cells: GridCell[] = [];
  const rows = Math.floor(gridSize / cellSize);
  const cols = Math.floor(gridSize / cellSize);

  for (let r = 0; r <= rows; r++) { // Include extra row/col for full coverage
    for (let c = 0; c <= cols; c++) {
      cells.push({
        id: `cell-${r}-${c}`,
        row: r,
        col: c,
        delay: Math.random() * 5, // Random delay up to 5 seconds
        duration: Math.random() * 2 + 1, // Random duration between 1 and 3 seconds
      });
    }
  }
  return cells;
};

const GameBackground4: React.FC<GameBackgroundProps> = ({ 
  gameTitle = "QUANTUM NEXUS", 
  className = "" 
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [gridCells, setGridCells] = useState<GridCell[]>([]);

  // Define grid dimensions
  const GRID_CELL_SIZE = 50; // Size of each square grid cell in pixels
  const GRID_CONTAINER_WIDTH_VW = 98; // Width of the main grid in viewport units
  const GRID_CONTAINER_HEIGHT_VH = 98; // Height of the main grid in viewport units

  useEffect(() => {
    setIsMounted(true);
    // Calculate the actual pixel width/height of the grid container once mounted
    // This is approximate for initial cell generation, will be precise with CSS positioning
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const gridPxWidth = (GRID_CONTAINER_WIDTH_VW / 100) * viewportWidth;
    const gridPxHeight = (GRID_CONTAINER_HEIGHT_VH / 100) * viewportHeight;

    setGridCells(generateGridCells(Math.max(gridPxWidth, gridPxHeight), GRID_CELL_SIZE));
  }, []);

  return (
    <div className={`relative w-[340px] h-[480px] overflow-hidden flex items-center justify-center font-['Orbitron'] bg-[#01010a] ${className}`}>
      
      {/* Background Gradient for Depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#00051a] via-[#05001a] to-[#0a002a]"></div>

      {/* Main Square Grid Container - Still big */}
      <div 
        className="main-grid-container relative border-2 border-purple-800/50 rounded-lg z-10 animate-grid-pulse"
        style={{ width: `${GRID_CONTAINER_WIDTH_VW}vw`, height: `${GRID_CONTAINER_HEIGHT_VH}vh` }}
      >
        {/* Inner Grid Pattern - simulated with repeating gradients */}
        <div className="absolute inset-0 grid-pattern"></div>

        {/* Animated grid cell shines */}
        {isMounted && gridCells.map(cell => (
          <div
            key={cell.id}
            className="animated-grid-shine absolute rounded-full bg-transparent"
            style={{
              left: `calc(${(cell.col * GRID_CELL_SIZE) / (GRID_CONTAINER_WIDTH_VW / 100 * window.innerWidth) * 100}% - 2px)`, /* Adjusted for absolute position within grid */
              top: `calc(${(cell.row * GRID_CELL_SIZE) / (GRID_CONTAINER_HEIGHT_VH / 100 * window.innerHeight) * 100}% - 2px)`,
              animationDelay: `${cell.delay}s`,
              animationDuration: `${cell.duration}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Game Title Animation */}
      <div className="absolute z-20 text-center select-none pointer-events-none">
        <h1 className="game-title text-white text-7xl font-bold uppercase tracking-widest leading-none">
          {gameTitle.split('').map((char, index) => (
            <span key={index} className="inline-block animate-title-char-reveal" style={{ animationDelay: `${0.1 * index}s` }}>
              {char === ' ' ? '\u00A0' : char} {/* Non-breaking space for actual space */}
            </span>
          ))}
        </h1>
        <p className="game-subtitle text-purple-400 text-lg mt-4 animate-fade-in" style={{ animationDelay: `${0.1 * gameTitle.length + 0.5}s` }}>
          PRESS START TO BEGIN
        </p>
      </div>

      <style jsx global>{`
        /* --- Font Import --- */
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');
        
        /* --- CSS Variables --- */
        :root {
          --grid-color: rgba(99, 102, 241, 0.2); /* Indigo-400 */
          --shine-color-1: #c084fc; /* Purple-400 */
          --shine-color-2: #38bdf8; /* Sky-400 */
        }

        /* --- Keyframe Animations --- */
        @keyframes grid-pulse {
          0%, 100% {
            box-shadow: 0 0 15px var(--shine-color-1), 0 0 30px rgba(var(--shine-color-1), 0.5);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 25px var(--shine-color-2), 0 0 50px rgba(var(--shine-color-2), 0.7);
            transform: scale(1.005);
          }
        }

        @keyframes grid-shine-effect {
          0% {
            opacity: 0;
            transform: scale(0.5);
            background-color: transparent;
            box-shadow: none;
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
            background-color: var(--shine-color-1);
            box-shadow: 0 0 8px var(--shine-color-1), 0 0 16px var(--shine-color-2);
          }
          100% {
            opacity: 0;
            transform: scale(0.5);
            background-color: transparent;
            box-shadow: none;
          }
        }

        @keyframes title-char-reveal {
            0% { opacity: 0; transform: translateY(20px) scale(0.8); filter: blur(5px); }
            100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }

        @keyframes fade-in {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
        }

        /* --- Component Specific Styles --- */
        .main-grid-container {
          background-color: rgba(0, 0, 0, 0.2);
          position: absolute;
          box-sizing: border-box;
          /* Setting dimensions via style prop directly for dynamic calculation */
        }

        .grid-pattern {
          background-image: 
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px);
          background-size: ${GRID_CELL_SIZE}px ${GRID_CELL_SIZE}px; /* Use JS variable for consistent cell size */
          filter: blur(0.5px);
          animation: grid-movement 60s linear infinite;
        }

        @keyframes grid-movement {
            from { background-position: 0 0; }
            to { background-position: ${2 * GRID_CELL_SIZE}px ${2 * GRID_CELL_SIZE}px; } /* Moves the grid pattern */
        }

        .animated-grid-shine {
          width: 4px; /* Size of the glow point */
          height: 4px; /* Size of the glow point */
          margin-left: -2px; /* Center the glow point on the grid line */
          margin-top: -2px; /* Center the glow point on the grid line */
          animation: grid-shine-effect var(--duration) ease-out infinite;
          animation-fill-mode: backwards; /* Hide before animation starts */
        }

        .game-title span {
            animation-fill-mode: backwards;
        }
        
        .game-subtitle {
            animation: fade-in 1s ease-out forwards;
            animation-fill-mode: backwards;
            filter: drop-shadow(0 0 5px var(--shine-color-1));
        }
      `}</style>
    </div>
  );
};

export default GameBackground4;