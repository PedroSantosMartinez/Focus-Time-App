import React from 'react';
import TimerDisplay from './components/views/TimerDisplay';
import SettingsPanel from './components/settings/SettingsPanel';
import './App.css';
import AchievementDisplay from './components/achievement/AchievementDisplay';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router> {/* Add the Router component to the App component */}
        <nav className="navbar">
          <Link to ="/" className="link"></Link> {/* Add the Link component to the nav element */}
          <Link to ="/settings" className="link"></Link> {/* Add the Link component to the nav element */}
          <Link to ="/achievements" className="link"></Link> {/* Add the Link component to the nav element */}
        </nav>

          <Routes> {/* Add the Routes component to the App component */}  
            <Route path="/" element={<TimerDisplay />} /> {/* Add the TimerDisplay component to the Routes component */}
            <Route path="/settings" element={<SettingsPanel />} /> {/* Add the SettingsPanel component to the Routes component */}
            <Route path="/achievements" element={<AchievementDisplay />} />
          </Routes>
      </Router>
    </>
  )
}

export default App;
