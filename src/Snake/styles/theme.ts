import { createTheme } from '@mui/material';
import './fonts.css';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: `'Press Start 2P', cursive`,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontFamily: `'Press Start 2P', cursive`,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: `'Press Start 2P', cursive`,
        },
      },
    },
  },
});

export default theme;
