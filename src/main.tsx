import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SettingProvider } from './components/settings/SettingsContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingProvider>
      <App />
    </SettingProvider>
  </StrictMode>,
)
