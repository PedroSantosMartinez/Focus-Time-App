import React, { useEffect, useState, useContext} from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../common/Card"; // Import the Card, CardContent, CardHeader, and CardTitle components from the ui folder
import TimerControl from "./TimerControl"; // Import the TimerControl component
import useTimer from "../../hooks/useTimer"; // Import the useTimer custom hook
import { SettingsContext } from '../settings/SettingsContext'; // Import the SettingsContext

const TimerDisplay = () => {
  const { timer } = useContext(SettingsContext);
  const { isRunning, startTimer, stopTimer, resetTimer } = useTimer(1500); // Set the initial time to 25 minutes


  // A function to format time to MM:SS
  const formatTime = (seconds) => {
    // Convert seconds to minutes and seconds
    const minutes = Math.floor(seconds / 60);
    // Get the remaining seconds
    const secondsRemaining = seconds % 60;
    // Return the formatted time
    return `${minutes.toString().padStart(2, "0")}:${secondsRemaining
      .toString()
      .padStart(2, "0")}`;
  };

  // Function to toggle between start and pause
  const handleStart = () => {
    isRunning ? stopTimer() : startTimer();
  };

  // Render the timer display
  return (
    <Card className="w-80 mx-auto mt-10"> {/* The Card component is used to style the timer display */}
      <CardHeader>
        <CardTitle>Timer Display</CardTitle> {/* The CardTitle component is used to style the title of the timer display */}
      </CardHeader>
      <CardContent>
        <h2 className="text-4xl font-bold">Time remaining: {formatTime(timer)}</h2> {/* The formatTime function is used to display the time in MM:SS format */}
        <TimerControl
          onStart={handleStart}
          onReset={resetTimer}
          isRunning={isRunning}
          sessionDuration={Math.floor(timer / 60)} // Convert seconds to minutes
        />
   </CardContent>
 </Card>
  );
};

export default TimerDisplay;