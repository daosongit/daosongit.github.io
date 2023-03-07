import { CssBaseline, ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import theme from '../theme/theme';
import Taskbar from './TaskBar/TaskBar';
import GlobalCss from '../styles/GlobalStyles';

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense>
        <CssBaseline />
        <GlobalCss />
        <Outlet />
        <Taskbar />
      </Suspense>
    </ThemeProvider>
  );
}
