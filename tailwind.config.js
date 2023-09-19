

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    "./stories/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {

    // used to customize the default container class provided by Tailwind CSS
    // used to center and constrain the width of content in the layout.
    container: {
      center: true, // will center the container horizontally setting margin-left and margin-right to auto
      padding: "2rem",
      screens: {
        "2xl": "1400px", // sets the max-width of the container to 1400px on 2xl screens and up
      },
    },

    extend: {
      // All colors are using vars, so they have to be changed in global.css
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          focus: "var(--primary-focus)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
          focus: "var(--destructive-focus)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        saccent: {
          DEFAULT: "var(--saccent)",
          foreground: "var(--saccent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },

      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
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
  ],
}