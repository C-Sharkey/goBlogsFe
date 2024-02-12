import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import App from './App.tsx'
import './index.css'
import '@mantine/core/styles.css';
import { theme } from './theme.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MantineProvider>
  ,
)
