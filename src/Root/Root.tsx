import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Taskbar from './TaskBar/TaskBar';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Outlet />
      <Taskbar />
    </ThemeProvider>
  );
}
