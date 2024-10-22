import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './index.css';
import { theme } from '@/styles/theme.js';

const AppWrapper = styled.div`
  min-height: 100dvh;
  max-width: var(--app-max-width, 1024px);
  margin: 0 auto;
  //background-color: pink;
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <RouterProvider router={router} />
      </AppWrapper>
    </ThemeProvider>
  </StrictMode>
);
