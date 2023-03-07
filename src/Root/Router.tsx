import { lazy } from 'react';
import { createHashRouter } from 'react-router-dom';
// import Home from '../Home/Home';
// import Portfolio from '../Portfolio/Portfolio';
// import Snake from '../Snake/Snake';
import Root from './Root';

const Home = lazy(() => import('../Home/Home'));
const Portfolio = lazy(() => import('../Portfolio/Portfolio'));
const Snake = lazy(() => import('../Snake/Snake'));

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/snake',
        element: <Snake />,
      },
    ],
  },
]);

export default router;
