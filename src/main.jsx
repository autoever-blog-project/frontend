import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import styled, { ThemeProvider } from 'styled-components';
import './index.css';
import { theme } from '@/styles/theme.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const AppWrapper = styled.div`
  min-height: 100dvh;
  max-width: var(--app-max-width, 1024px);
  margin: 0 auto;
  border: 1px dotted pink;
`;

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <App />
        </AppWrapper>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
