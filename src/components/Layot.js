import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBarMain } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 16px' }}>
      <AppBarMain />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
