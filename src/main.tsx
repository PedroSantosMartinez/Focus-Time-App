import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SettingsProvider } from './components/settings/SettingsContext';
import { AchievementProvider } from './components/context/AchievementContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SettingsProvider>
      <AchievementProvider>
      <App />
      </AchievementProvider>
    </SettingsProvider>
  </StrictMode>,
);
