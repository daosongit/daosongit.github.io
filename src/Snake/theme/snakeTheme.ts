import { createTheme } from '@mui/material';
import theme from '../../theme/theme';
import './fonts.css';

const snakeTheme = createTheme({
  ...theme,
  typography: {
    fontFamily: `'Press Start 2P', cursive`,
    h1: {
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
    },
    caption: {
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
    },
    body1: {
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
    },
    body2: {
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
    },
  },
});

export default snakeTheme;
