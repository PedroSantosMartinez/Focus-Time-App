import { useState, useEffect, useRef } from "react";

// The hook to manage the countdown timer
// Set the initial time (25 min set in seconds)
const useTimer = () => {
  // The current time remaining (in seconds)
  const [time, setTime] = useState(1500);

  // Track whether the timer is running or not
  const [isRunning, setIsRunning] = useState(false);

  // Ref store the interval ID
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // A function to start countdown for the timer
  useEffect(() => {
    // Stop if the timer is not running or time is 0
    if (!isRunning || time === 0) return;

    // Set/Create the interval to update the time every second
    const intervalId = setInterval(() => {
      // Decrement the time by 1 second
      setTime(time - 1);

      // If the timer reaches 0, stop the timer
      if (time === 0) {
        clearInterval(intervalId);
        alert("Time's up!");
      }
    }, 1000);
    // Return a function to clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [isRunning, time]); // The dependencies array is [time] so the effect runs when the time changes

  // A function to start the timer
  const startTimer = () => setIsRunning(true);

  // A function to stop the timer
  const stopTimer = () => setIsRunning(false);

  // A function to reset the timer
  // Reset the time to the initia l value (25 min) and stops the timer
  const resetTimer = () => {
    clearInterval(intervalRef.current!);
    setTime(1500);
    setIsRunning(false);
  };

  // Return the time, the start, stop, and reset functions
  return { time, startTimer, stopTimer, resetTimer, isRunning };
};

// Export the hook
export default useTimer;