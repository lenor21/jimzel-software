import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import RootEmployee from '../pages/master-table/employee/RootEmployee';
import Employee from '../pages/master-table/employee/Employee';
import Counter from '../pages/master-table/employee/Counter';
import RootMasterTable from '../pages/master-table/RootMasterTable';
import List from '../pages/master-table/employee/List';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/master-table',
        element: <RootMasterTable />,
        children: [
          {
            element: <RootEmployee />,
            children: [
              {
                path: '/master-table/employees',
                element: <List />,
              },
              {
                path: '/master-table/employees/add',
                element: <Employee />,
              },
              {
                path: '/master-table/employees/count',
                element: <Counter />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
