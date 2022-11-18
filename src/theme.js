import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
export const theme = createTheme({
  colors: {
    text: 'black',
    accent: 'green',
    heading: '#cd5700',
    bgApp: '#79F8F8',
    bgButtonAdd: '#50C878',
    bgButtonDelete: '#ff0000',
    bgButtonHover: '#7FFF00',
    border: '#B0C4DE',
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
