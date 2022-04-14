import { createStitches, defaultThemeMap } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
  },
  theme: {
    colors: {
      lightGrey: '#6b6b6b',
      darkGrey: '#5D5D5D',
      blue: '#5B85BC',
      white: '#fff',
      black: '#000',
    },
    fontSizes: {
      1: '18px',
      2: '24px',
      3: '30px',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 800px)',
    bp3: '(max-width: 800px)',
  },
});
