import { globalCss, theme } from '../stitches.config';

const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
  },
  'html, body': {
    margin: 0,
    padding: 0,
    fontFamily: 'Helvetica Neue, sans-serif',
    letterSpacing: '-0.27px',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  h1: {
    fontWeight: '400',
    color: theme.colors.darkGrey,
  },
  'p, label': {
    fontSize: '0.875rem',
    color: theme.colors.lightGrey,
  },
  input: {
    padding: '4px 2px',
  },
  '&::placeholder': {
    color: 'red',
  },
  '&.wrap': {
    width: '100%',
    maxWidth: '1200px',
    padding: '0 20px',
    margin: '0 auto',
    background: 'blue',
  },
  '&.screen-reader-text': {
    border: '0',
    clip: 'rect(1px, 1px, 1px, 1px)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    width: '1px',
    wordWrap: 'normal !important',
  },
});

export default globalStyles;
