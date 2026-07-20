import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './shared/theme/theme';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/queryClient';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <ThemeProvider theme={theme}>
  <CssBaseline />
  <QueryClientProvider client={queryClient}>
      <App />
  </QueryClientProvider>
  </ThemeProvider>
  </StrictMode>
)
