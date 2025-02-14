import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../app/components/ui/Card"; // Import the Card, CardContent, CardHeader, and CardTitle components from the ui folder

const TimerDisplay = () => {
  const [time, setTime] = useState(1500); // The initial value (useState) is 0, time is the state variable (0), and setTime is the function to update the state variable.

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
  }, [time]); // The dependency array is [time] so the effect will run whenever time

  // Render the timer display
  return (
    //<div>
    //  <h1>Timer Display</h1>
    //  <h2>Time remaining: {formatTime(time)} </h2>
   // </div>
    <Card className="w-80 mx-auto mt-10"> {/* The Card component is used to style the timer display */}
      <CardHeader>
        <CardTitle>Timer Display</CardTitle> {/* The CardTitle component is used to style the title of the timer display */}
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl">Time remaining: {formatTime(time)}</h2> {/* The formatTime function is used to display the time in MM:SS format */}
   </CardContent>
 </Card>
  );
};

export default TimerDisplay;