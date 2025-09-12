// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       keyframes: {
//         // For the main title and text
//         "fade-in": {
//           "0%": { opacity: "0" },
//           "100%": { opacity: "1" },
//         },
//         "scrollbar-hide;": {
//           "-webkit-overflow-scrolling": "touch",
//           "-webkit-scrollbar": "display: none",
//           "scrollbar-width": "none",
//           "ms-overflow-style": "none",
//         },
//         "scrollbar-hide::-webkit-scrollbar": {
//           display: "none",
//         },
//         "tab-transition": {
//           transition: "all 0.3s ease",
//         },
//         // For the section content


//         "fade-in-up": {
//           "0%": {
//             opacity: "0",
//             transform: "translateY(20px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//         // For the subtle image spin
//         "spin-slow": {
//           "0%": { transform: "rotate(0deg)" },
//           "100%": { transform: "rotate(360deg)" },
//         },
//         // A slightly different spin for variation
//         "spin-slow-alt": {
//           "0%": { transform: "rotate(0deg) scale(1)" },
//           "50%": { transform: "rotate(180deg) scale(1.05)" },
//           "100%": { transform: "rotate(360deg) scale(1)" },
//         },
//         // For the glowing effect
//         "pulse-slow": {
//           "0%, 100%": { opacity: "0.4" },
//           "50%": { opacity: "0.8" },
//         },
//       },
//       animation: {
//         "fade-in-up": "fade-in-up 0.8s ease-out forwards",
//         "spin-slow": "spin-slow 20s linear infinite",
//         "spin-slow-alt": "spin-slow-alt 25s linear infinite",
//         "pulse-slow": "pulse-slow 3s ease-in-out infinite",
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // Fade in animation
        "fadeIn": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Existing fade-in-up animation
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Slow spin
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-slow-alt": {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.05)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        // Pulse glow
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.7' },
        },
        'pulse-slow-reverse': {
          '0%, 100%': { transform: 'scale(1.2)', opacity: '0.7' },
          '50%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "spin-slow": "spin-slow 20s linear infinite",
        "spin-slow-alt": "spin-slow-alt 25s linear infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        'pulse-slow': 'pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow-reverse': 'pulse-slow-reverse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [
    // Plugin for scrollbar-hide
    function ({ addUtilities }) {
      addUtilities(
        {
          ".scrollbar-hide": {
            "-ms-overflow-style": "none", /* IE and Edge */
            "scrollbar-width": "none", /* Firefox */
          },
          ".scrollbar-hide::-webkit-scrollbar": {
            display: "none", /* Chrome, Safari */
          },
        },
        ["responsive"]
      );
    },
  ],
};
