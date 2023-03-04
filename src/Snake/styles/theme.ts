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

theme.typography.h1 = theme.typography.caption = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '17px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '25px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '40px',
  },
};

theme.typography.body1 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '15px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '19px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '27px',
  },
};

theme.typography.body2 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '7px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '10px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '20px',
  },
};

export default theme;
