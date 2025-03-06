import React, { useState } from "react";
import { Button } from "../common/Button"; // Import the Button component from the ui folder

const TimerControl = ({ onStart, onReset, sessionDuration }) => {
    const [isRunning, setIsRunning] = useState(false); // Keep track if the timer is running or not

    // Function to start the timer / Start button click handler
    const handleStartTimer = () => {
        setIsRunning((prev) => !prev); // Toggle the isRunning state
        onStart(!isRunning); // Call the onStart function to start the timer
    };

    // Render the timer control
    return (
        <div className="mt-6 text-center">
            {/* Session duration display */}
            <h2 className="text-lg font-semibold mb-4">
                Current Session: {sessionDuration} minutes
            </h2>

            {/* Start/Pause button */}
            <Button
                onClick={handleStartTimer}
                className="mr-2 text-white"
            >
                {isRunning ? "Pause Focus Session" : "Start Focus Session"} {/* Change the button text based on the isRunning state */}
            </Button>

            {/* Reset button */}
            <Button
                variant="outlined"
                onClick={onReset}   
                className="text-white"
            >
                Reset
            </Button>
        </div>
    );
};

export default TimerControl;