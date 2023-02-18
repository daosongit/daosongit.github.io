import { CssBaseline } from '@mui/material';
import { createHashRouter, Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import Taskbar from './TaskBar';

const Root = () => {
  return (
    <>
      <CssBaseline />
      <Outlet />
      <Taskbar />
    </>
  );
};

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export default router;
