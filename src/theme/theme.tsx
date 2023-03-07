import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e2e0e0',
      dark: 'linear-gradient(186deg, rgba(35,48,48,1) 0%, rgba(41,40,40,1) 49%, rgba(67,51,51,1) 100%)',
    },
    secondary: {
      main: '#90caf9',
      dark: '#42a5f5',
    },
    text: {
      primary: '#e2e0e0',
    },
  },
});

export default theme;
