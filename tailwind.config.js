const { generateBreakpoints } = require('./lib/dev-utils/twbreaks-plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    "./stories/**/*.{js,ts,jsx,tsx}",

  ],
  // daisyUI config (optional)

  daisyui: {
    // Themes available. You can modify AND extend them: https://v2.daisyui.com/docs/themes/
    themes: ["dark",
      {
        cupcake: {
          ...require("daisyui/src/theming/themes")["[data-theme=cupcake]"],
          "primary-content": "white"

        },
      }
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
  theme: {

    extend: {

      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        bricolage: ['var(--font-bricolage)'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "anime": {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': {
            backgroundPosition: '100% 50%'

          },
          '100%':
            { backgroundPosition: '0% 50%' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "anime": "anime 16s linear infinite",
        "wiggle": 'wiggle 1s ease-in-out infinite',

      },

      // CUSTOM
      backgroundImage: theme => ({
        'custom-gradient': 'var(--gradient-colors)'
      }),

      transitionDuration: {
        'stop': '9999000ms',
      }

    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("daisyui"),
    ({ addBase, theme }) => generateBreakpoints({ addBase, theme })
  ],
}