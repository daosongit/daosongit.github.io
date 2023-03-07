import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
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
      <Suspense>
        <CssBaseline />
        <Outlet />
        <Taskbar />
      </Suspense>
    </ThemeProvider>
  );
}
