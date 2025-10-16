
import App from './App.jsx'
import i18n from './i18n/config.js'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <HelmetProvider>
       <App />
    </HelmetProvider>
        
  </StrictMode>
)

