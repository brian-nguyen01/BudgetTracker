import { createTheme } from '@mui/material/styles';
import './assets/fonts.scss';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    button: {
      fontFamily: 'Medium',
      fontSize: '16px',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    button: {
      fontFamily: 'Medium',
      fontSize: '16px',
    },
  },
});
