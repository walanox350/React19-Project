import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Theme } from '@radix-ui/themes';
import { AppRouter } from './routes/AppRouter.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <AppRouter />
    </Theme>
  </StrictMode>
);
