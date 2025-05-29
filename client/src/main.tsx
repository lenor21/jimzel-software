import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { PrimeReactProvider } from 'primereact/api';
import router from './routers/router.tsx';
import { RouterProvider } from 'react-router-dom';
import Tailwind from 'primereact/passthrough/tailwind';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </StrictMode>
);
