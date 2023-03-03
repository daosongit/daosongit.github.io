import { createHashRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Snake from '../Snake/Snake';
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
      {
        path: '/snake',
        element: <Snake />,
      },
    ],
  },
]);

export default router;
