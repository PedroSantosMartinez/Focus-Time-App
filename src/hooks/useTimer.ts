import { useState, useEffect, useRef, useContext } from "react";
import { SettingsContext } from '../components/settings/SettingsContext';
import { AchievementContext } from '../components/context/AchievementContext';

// The hook to manage the countdown timer
// Set the initial timer (25 min set in seconds)
const useTimer = () => {
  // The current timer remaining (in seconds)
  const { timer, setTimer } = useContext(SettingsContext);

  // Increment the total finished sessions when the timer reaches 0
  const {incrementTotalFinishedSessions} = useContext(AchievementContext);

  // Track whether the timer is running or not
  const [isRunning, setIsRunning] = useState(false);

  const playAudio = () => {
    alarmSound.current.play().catch(error => console.error("Audio play error:", error));
  };
  
  // Ref store the interval ID
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const alarmSound = useRef(new Audio('./alarm.mp3')); 
  
// A function to start countdown for the timer
useEffect(() => {
  // Stop if the timer is not running or timer is 0
  if (!isRunning || timer === 0) return;

  // Set/Create the interval to update the timer every second
  const intervalId = setInterval(() => {
    setTimer(prevTimer => {
      // Decrement the timer by 1 second
      const newTimer = prevTimer - 1;

      // If timer reaches 0, stop the timer and log
      if (newTimer === 0) {
        playAudio(); // Play the alarm sound
        clearInterval(intervalId);  // Stop the interval
        setIsRunning(false);  // Stop the timer
        incrementTotalFinishedSessions(); // Increment the total finished sessions
        return 1500; // Reset the timer to 25 min
      }

      return newTimer;
    });
  }, 1000);

  // Cleanup function to clear the interval when component unmounts or timer changes
  return () => clearInterval(intervalId);
}, [isRunning, timer]); // Dependencies array includes `isRunning` and `timer`

  // A function to start the timer
  const startTimer = () => setIsRunning(true);

  // A function to stop the timer
  const stopTimer = () => setIsRunning(false);

  // A function to reset the timer
  // Reset the timer to the initia l value (25 min) and stops the timer
  const resetTimer = () => {
    clearInterval(intervalRef.current!);
    setTimer(1500);
    setIsRunning(false);
  };

  // Return the timer, the start, stop, and reset functions
  return { timer, startTimer, stopTimer, resetTimer, isRunning, playAudio };
};

// Export the hook
export default useTimer;