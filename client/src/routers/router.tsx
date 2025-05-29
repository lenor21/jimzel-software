import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Root from '../pages/master-table/Root';
import Employee from '../pages/master-table/Employee';
import Index from '../pages/master-table/Index';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        element: <Root />,
        children: [
          {
            path: '/master-table',
            element: <Index />,
          },
          {
            path: '/master-table/employees',
            element: <Employee />,
          },
        ],
      },
    ],
  },
]);

export default router;
