import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex

const App = () => {
  return (
    <div className='min-h-screen'>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;
