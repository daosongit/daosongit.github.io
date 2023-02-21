import { createHashRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Root from './Root';

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
    ],
  },
]);

export default router;
