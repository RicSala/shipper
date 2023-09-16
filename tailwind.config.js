import colors from "tailwindcss/colors"
import { generateColorVariables, hexToHSL } from "./lib/hex-to-hsl.js";
import { config } from "./shipper.config.js";


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
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary: function () {
        //   let customPrimaryColors = {};
        //   let shades = ['foreground', '', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
        //   shades.forEach((shade) => {
        //     if (shade === '') {
        //       customPrimaryColors.DEFAULT = `hsl(var(--primary))`;
        //       return;
        //     }
        //     if (shade === 'foreground') {
        //       customPrimaryColors.foreground = `hsl(var(--primary-foreground))`;
        //       return;
        //     }
        //     customPrimaryColors[shade] = `hsl(var(--primary-${shade}))`;
        //   });

        //   return customPrimaryColors;
        // }(),
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        // accent: function () {
        //   let customAccentColors = {};
        //   let shades = ['', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
        //   shades.forEach((shade) => {
        //     if (shade === '') {
        //       customAccentColors.DEFAULT = `hsl(var(--accent))`;
        //       return;
        //     }
        //     customAccentColors[shade] = `hsl(var(--accent-${shade}))`;
        //   });

        //   return customAccentColors;
        // }(),
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--primary-900) /0.1)",
          foreground: "hsl(var(--primary))",
        },
        ...generateColors(['primary', 'secondary', 'destructive', 'muted']),
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
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
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "anime": "anime 16s linear infinite"
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

    function ({ addBase, theme }) {
      let colorsToGenerate = [
        { name: 'primary', lightDefaultShade: '900', darkDefaultShade: '100', foregroundDefaultShade: '100' },
        { name: 'secondary', lightDefaultShade: '500', darkDefaultShade: '500', foregroundDefaultShade: '100' },
        // { name: 'accent', lightDefaultShade: '500',darkDefaultShade: '300', foregroundDefaultShade: '100' },
        { name: 'destructive', lightDefaultShade: '500', darkDefaultShade: '500', foregroundDefaultShade: '50' }];
      let shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

      let lightTheme = {};
      let darkTheme = {};

      colorsToGenerate.forEach(({ name, lightDefaultShade, darkDefaultShade, foregroundDefaultShade }) => {
        shades.forEach((shade) => {

          // Generate hsl from give tailwind colors
          let lightColor = hexToHSL(colors[`${config.colors[name + 'Light']}`][shade]);
          let darkColor = hexToHSL(colors[`${config.colors[name + 'Dark']}`][shade]);
          console.log("HERE!!!", lightColor)

          // Generate the color shades
          lightTheme[`--${name}-${shade}`] = lightColor;
          darkTheme[`--${name}-${shade}`] = darkColor;

          // Asign the variable to the color shade
          theme('colors')[name][shade] = `hsl(var(--${name}-${shade}))`;

          // Adding defaults
          lightTheme[`--${name}`] = hexToHSL(colors[config.colors[`${name}Light`]][lightDefaultShade]);
          darkTheme[`--${name}`] = hexToHSL(colors[config.colors[`${name}Dark`]][darkDefaultShade]);
          lightTheme[`--${name}-foreground`] = hexToHSL(colors[config.colors[`${name}Light`]][foregroundDefaultShade])
          darkTheme[`--${name}-foreground`] = hexToHSL(colors[config.colors[`${name}Dark`]][foregroundDefaultShade])

          theme('colors')[name].DEFAULT = `hsl(var(--${name}))`;
        });

        lightTheme[`--background`] = hexToHSL(colors[config.colors[`primaryLight`]]['50']);
        darkTheme[`--background`] = hexToHSL(colors[config.colors[`primaryDark`]]['900']);
        theme('colors')['background'] = `hsl(var(--background))`;
      });

      // // adding defaults
      // lightTheme[`--primary`] = hexToHSL(colors[config.colors.primaryLight][500])
      // darkTheme[`--primary`] = hexToHSL(colors[config.colors.primaryDark][100])
      // theme('colors')['primary'] = `hsl(var(--primary))`;

      // lightTheme[`--primary-foreground`] = hexToHSL(colors[config.colors.primaryLight][500])
      // darkTheme[`--primary-foreground`] = hexToHSL(colors[config.colors.primaryDark][500])
      // theme('colors')['primary-foreground'] = `hsl(var(--primary-foreground))`;

      // lightTheme[`--secondary`] = hexToHSL(colors[config.colors.secondaryLight][500])
      // darkTheme[`--secondary`] = hexToHSL(colors[config.colors.secondaryDark][100])
      // theme('colors')['secondary'] = `hsl(var(--secondary))`;

      // lightTheme[`--accent`] = hexToHSL(colors[config.colors.accentLight][500])
      // darkTheme[`--accent`] = hexToHSL(colors[config.colors.accentDark][500])
      // theme('colors')['accent'] = `hsl(var(--accent))`;

      // lightTheme[`--destructive`] = hexToHSL(colors[config.colors.destructiveLight][500])
      // darkTheme[`--destructive`] = hexToHSL(colors[config.colors.destructiveDark][500])
      // theme('colors')['destructive'] = `hsl(var(--destructive))`;

      // lightTheme[`--destructive-foreground`] = hexToHSL(colors[config.colors.destructiveLight][100])
      // darkTheme[`--destructive-foreground`] = hexToHSL(colors[config.colors.destructiveDark][100])
      // theme('colors')['destructive'] = `hsl(var(--destructive))`;

      addBase({
        ':root': lightTheme,
        '.dark': darkTheme
      });
    }
  ],
}


function generateColors(colorNames) {
  const result = {};

  colorNames.forEach(colorName => {
    const customColors = {};
    const shades = ['foreground', '', '0', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

    shades.forEach(shade => {
      if (shade === '') {
        customColors.DEFAULT = `hsl(var(--${colorName}))`;
        return;
      }
      if (shade === 'foreground') {
        customColors.foreground = `hsl(var(--${colorName}-foreground))`;
        return;
      }
      if (shade === '0') {
        customColors['0'] = `hsl(var(--${colorName}-${shade}))`;
        return;
      }
      customColors[shade] = `hsl(var(--${colorName}-${shade}))`;
    }
    );

    result[colorName] = customColors;
  });

  return result;
}