import { lazy } from 'react';
import { createHashRouter } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Root from './Root';

const Home = lazy(() => import('../Home/Home'));
const Portfolio = lazy(() => import('../Portfolio/Portfolio'));
const Snake = lazy(() => import('../Snake/Snake'));
const CurrencyConverter = lazy(() => import('../CurrencyConverter/Converter'));

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorBoundary />,
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
      {
        path: '/converter',
        element: <CurrencyConverter />,
      },
    ],
  },
]);

export default router;
