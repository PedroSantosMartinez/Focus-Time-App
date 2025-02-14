import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../app/components/ui/Card"; // Import the Card, CardContent, CardHeader, and CardTitle components from the ui folder
import TimerControl from "./TimerControl"; // Import the TimerControl component

const TimerDisplay = () => {
  const [time, setTime] = useState(1500); // The initial value (useState) is 0, time is the state variable (0), and setTime is the function to update the state variable.
  const [isRunning, setIsRunning] = useState(false); // Track if the timer is running or not

  // A function to format time to MM:SS
  const formatTime = (seconds) => {
    // Convert seconds to minutes and seconds
    const minutes = Math.floor(seconds / 60);
    // Get the remaining seconds
    const secondsRemaining = seconds % 60;

    return `${minutes.toString().padStart(2, "0")}:${secondsRemaining
      .toString()
      .padStart(2, "0")}`;
  };

  // A function to start countdown for the timer
  useEffect(() => {
    // Stop if the timer is not running or time is 0
    if (!isRunning || time === 0) return;

    // Create a new interval to update the state every second
    const intervalId = setInterval(() => {

      // Decrement the time by 1 second
      setTime(time - 1);

      // If the time reaches 0, stop the interval and alert the user
      if (time === 0) {
        clearInterval(intervalId);
        alert("Time's up!");
      }
    }, 1000);
    // Return a function to clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [isRunning, time]); // The dependency array is [time] so the effect will run whenever time

  // Function to start the timer
  const handleStart = (start) => {
    setIsRunning(start);
  };

  // Function to reset the timer
  const handleReset = () => {
    setTime(1500); // Reset the time to 1500 seconds (25 minutes)
    setIsRunning(false); // Stop the timer
  };

  // Render the timer display
  return (
    <Card className="w-80 mx-auto mt-10"> {/* The Card component is used to style the timer display */}
      <CardHeader>
        <CardTitle>Timer Display</CardTitle> {/* The CardTitle component is used to style the title of the timer display */}
      </CardHeader>
      <CardContent>
        <h2 className="text-4xl font-bold">Time remaining: {formatTime(time)}</h2> {/* The formatTime function is used to display the time in MM:SS format */}
        <TimerControl
          onStart={handleStart}
          onReset={handleReset}
          isRunning={isRunning}
          sessionDuration={Math.floor(time / 60)} // Convert seconds to minutes
        />
   </CardContent>
 </Card>
  );
};

export default TimerDisplay;