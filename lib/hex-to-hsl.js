export function hexToHSL(H) {
  let r = parseInt(H.substring(1, 3), 16) / 255;
  let g = parseInt(H.substring(3, 5), 16) / 255;
  let b = parseInt(H.substring(5, 7), 16) / 255;
  let a = isNaN(parseFloat(H.substring(7, 9)))
    ? 1
    : Math.round((parseFloat(H.substring(7, 9)) / 255) * 10000) / 10000;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);
  if (h < 0) h += 360;
  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);
  return h + ' ' + s + '% ' + l + '%';
}

export function generateColorVariables(colorsToGenerate, shades) {
  const lightTheme = {};
  const darkTheme = {};

  colorsToGenerate.forEach((colorName) => {
    shades.forEach((shade) => {
      lightTheme[
        `--${colorName}-${shade}`
      ] = `var(--light-${colorName}-${shade})`;
      darkTheme[
        `--${colorName}-${shade}`
      ] = `var(--dark-${colorName}-${shade})`;
    });
  });

  return {
    ':root': lightTheme,
    '.dark': darkTheme,
  };
}
