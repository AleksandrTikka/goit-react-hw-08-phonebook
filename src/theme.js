import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
export const theme = createTheme({
  colors: {
    text: 'black',
    nav: 'green',
    hover: '#f51a8d',
    heading: '#cd5700',
    bgApp: '#90EE90',
    bgButtonAdd: '#50C878',
    bgButtonDelete: '#ff0000',
    bgButtonHover: '#7FFF00',
    border: '#B0C4DE',
    white: '#FFFFFF',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'roboto, sans-serif',
    heading: 'roboto, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    l: 32,
    xl: 64,
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  shadows: {
    header: '0 5px 7px rgba(0, 0, 0, 0.4)',
    cardHover:
      '0 10px 20px rgba(0, 0, 0, 0.25), 0 7px 10px rgba(0, 0, 0, 0.15)',
  },
  transition: {
    transform: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    bgColor: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  borders: {
    none: 'none',
    normal: '1px solid',
    bold: '2px solid',
    dashed: '2px dashed',
  },
  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    round: '50%',
  },
});
