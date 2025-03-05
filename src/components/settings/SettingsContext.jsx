import { useState, useContext, createContext } from "react"; // Import the useState, useContext, and createContext hooks from React

/* Create a new context for the settings
It hold our settings, when it time to use these settings in a component it can look into this context
*/
const SettingsContext = createContext(null); 

// Create a custom hook to use the settings context
const SettingProvider = ({children}) => {
    /* Inside the settingProvider
    audio, theme, volume, and theme value is getting grab from localstorage
    if not found then use default value  
    */
    const [enableAudio, setEnableAudio] = useState(() => localStorage.getItem("enableAudio") === "true");
    const [volume, setVolume] = useState(() => Number(localStorage.getItem("volume")) || 100);  
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
    const [timer, setTimer] = useState(() => Number(localStorage.getItem("timer")) || 1500);

    // localstorage to save the changes
    // Each useEffect listens to its own settings and updates it sepreately
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        localStorage.setItem('volume', volume);
    }, [volume]);

    useEffect(() => {
        localStorage.setItem('enableAudio', enableAudio);
    }, [enableAudio]);

    useEffect(() => {
        localStorage.setItem('timer', timer);
    }, [timer]);

    // Function to toggle theme and audio
    const toggleTheme =() => {
        setTheme(prev => (prev === "blue" ? "dark" : "blue"));
    };

    const toggleAudio =() => {
        setTheme(prev => !prev);
    };

    // Give the context to the child components
    return (
        // Inside the value, lives the settings and function
        <SettingsContext.Provider value={{ enableAudio, setEnableAudio, volume, setVolume, theme, setTheme, timer, setTimer}}>
            {children}
        </SettingsContext.Provider>
    );
};

export { SettingsContext, SettingProvider }; // Export the SettingsContext and settingProvider


