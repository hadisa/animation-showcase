import React from 'react';

// The App component defines a full-screen, animated background.
// It uses Tailwind CSS for layout and styling, and inline CSS for custom keyframe animations.
function SimpleBg() {
  return (
    <div className="relative w-full h-full py-16 lg:py-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 font-sans">

      {/*
        Define custom keyframe animations using a <style> tag.
        This is necessary because we cannot extend tailwind.config.js in this environment
        to add custom keyframes. These animations will be applied to elements below.
      */}
      <style>
        {`
        /* Animation for a shifting background gradient */
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Animation for fading in and out (used for mist/light layers) */
        @keyframes fadeInOut {
          0% { opacity: 0.2; }
          50% { opacity: 0.6; }
          100% { opacity: 0.2; }
        }

        /* Animation for particles moving upwards and fading out */
        @keyframes moveUp {
            0% { transform: translateY(100vh) scale(0.5); opacity: 0; }
            50% { opacity: 0.7; }
            100% { transform: translateY(-100vh) scale(1.5); opacity: 0; }
        }

        /* Class to apply the gradientShift animation */
        .animated-gradient {
            background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
        }

        /* Class to apply the fadeInOut animation */
        .animated-mist {
            animation: fadeInOut 10s ease-in-out infinite;
        }

        /* Class to apply the moveUp animation for particles */
        .animated-particle {
            animation: moveUp 15s linear infinite;
        }
        `}
      </style>

      {/*
        Layer 1: Base Animated Gradient.
        This layer provides a dynamic, color-shifting background, reminiscent of a magical sky or distant landscape.
        It covers the entire screen.
      */}
      <div className="absolute inset-0 animated-gradient"></div>

      {/*
        Layer 2: Middleground Gradient.
        This semi-transparent layer uses a diagonal gradient and the fadeInOut animation to create
        a subtle, misty or atmospheric effect, suggesting closer mountains or a magical haze.
      */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-700/30 to-blue-700/30 animated-mist"></div>

      {/*
        Layer 3: Foreground Mist/Light Effect.
        A bottom-to-top gradient with the fadeInOut animation, slightly delayed to create
        a layered, undulating mist effect at the bottom of the screen.
      */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/50 animated-mist"
        style={{ animationDelay: '2s' }} // Delay this layer's animation for variation
      ></div>

      {/*
        Floating Particles:
        Creates 20 small, white, rounded "particles" that randomly appear, move upwards, and fade out.
        Each particle has random positioning, size, animation duration, and delay for a natural, shimmering effect.
      */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i} // Unique key for each particle
          className="animated-particle absolute bg-white rounded-full opacity-0" // Start transparent
          style={{
            left: `${Math.random() * 100}vw`, // Random horizontal position
            width: `${Math.random() * 5 + 2}px`, // Random size (2-7px)
            height: `${Math.random() * 5 + 2}px`, // Matches width for roundness
            animationDuration: `${10 + Math.random() * 10}s`, // Random animation duration (10-20s)
            animationDelay: `${Math.random() * 10}s`, // Random delay before animation starts (0-10s)
          }}
        ></div>
      ))}

      {/*
        Content Overlay:
        This div is positioned on top of all background layers (z-10) and centers any content.
        You can place your game UI elements, titles, or other components here.
        It uses text with shadow for better readability against the dynamic background.
      */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-white">
        <h1 className="text-5xl font-bold text-center drop-shadow-lg md:text-7xl lg:text-8xl">
          Welcome to the Realm
        </h1>
        <p className="mt-4 text-xl text-center md:text-2xl lg:text-3xl drop-shadow-md max-w-2xl">
          A world of magic and adventure awaits you. Prepare to embark on an epic journey!
        </p>
      </div>
    </div>
  );
}

export default SimpleBg;
