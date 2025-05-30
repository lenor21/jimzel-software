import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import RootEmployee from '../pages/master-table/employee/RootEmployee';
import Add from '../pages/master-table/employee/Add';
import Counter from '../pages/master-table/employee/Counter';
import RootMasterTable from '../pages/master-table/RootMasterTable';
import List from '../pages/master-table/employee/List';
import Employee from '../pages/master-table/employee/Employee';
import Update from '../pages/master-table/employee/Update';

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
                element: <Add />,
              },
              {
                path: '/master-table/employees/update/:id',
                element: <Update />,
              },
              {
                path: '/master-table/employees/:id',
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
