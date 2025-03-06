import { useState, useEffect } from 'react';
import TimerDisplay from './components/timer/TimerDisplay';
import SettingsPanel from './components/settings/SettingsPanel';
import './App.css';
import AchievementDisplay from './components/achievement/AchievementDisplay';

function App() {
  return (
    <>
      <TimerDisplay />
      <SettingsPanel />  
      < AchievementDisplay />
     </>
  )
}

export default App;
