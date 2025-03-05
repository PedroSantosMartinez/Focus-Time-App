import React, {useContext} from "react";
import { SettingsContext } from "./SettingsContext";
import { Card, CardHeader, CardTitle, CardContent } from "../common/Card";
import { Button } from "../common/Button";

// Create function to use the settings context
const SettingsPanel = () => {
    const { theme , toggleTheme, volume, setVolume, timer, setTimer, enableAudio, toggleAudio } = useContext(SettingsContext);

    // The settings components
    return (
        <Card className="w-80 mx-auto mt-10">
            <CardHeader>
                <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent>
                {/* Theme Section */}
                <div className="mb-4">
                    <label className="flex items-center justify-between">
                        <span>Theme:</span>
                        <Button onClick={toggleTheme}>
                            Switch to {theme === "blue" ? "Dark" : "Blue"} Mode
                        </Button>
                    </label>
                </div>
                
                {/* Volume Section */}
                <div className="mb-4">
                    <label className="flex flex-col">
                        <span>Volume: {volume}</span>
                        {/* Range sliders for volume control */}
                        <input 
                            type="range"
                            max="100"
                            value={volume}
                            onChange={(e) => setVolume(Number(e.target.value))}
                        />
                    </label>
                </div>
        
                {/* Timer Section */}
                <div className="mb-4">
                    <label className="flex flex-col">
                        <span>Timer (in seconds):</span>
                        {/* Number input to set timer value */}
                        <input
                            type="number"
                            value={timer}
                            onChange={(e) => setTimer(Number(e.target.value))}
                        />
                    </label>
                </div>
        
                {/* Enable Sounds Section */}
                <div>
                    <label className="flex items-center">
                        <span>Enable Sounds:</span>
                        {/* Checkbox to toggle sound on/off */}
                        <input
                            type="checkbox"
                            checked={enableAudio}
                            onChange={toggleAudio}
                            className="ml-2"
                        />
                    </label>
                </div>
            </CardContent>
        </Card>
    );
};
          
export default SettingsPanel;