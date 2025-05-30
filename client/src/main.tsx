import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { PrimeReactProvider } from 'primereact/api';
import router from './routers/router.tsx';
import { RouterProvider } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </StrictMode>
  </Provider>
);
