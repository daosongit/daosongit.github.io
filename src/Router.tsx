import { CssBaseline } from '@mui/material';
import { createHashRouter, Outlet } from 'react-router-dom';
import Home from './Home/Home';

const Root = () => {
  return (
    <>
      <CssBaseline />
      <Home />
      <Outlet />
    </>
  );
};

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [{}],
  },
]);

export default router;
