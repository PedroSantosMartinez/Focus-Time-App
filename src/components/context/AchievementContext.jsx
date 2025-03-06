import { createContext, useState, useEffect } from 'react';

// Create the achievement context
const AchievementContext = createContext(null);

// Achievment list
const AchievementList = [
    {id: 1, name: "First Focus", description: "Focus your first session", unlocked: false, threshold: 1},
    {id: 2, name: "Concentration Novice", description: "Complete 5 focus sessions", unlocked: false, threshold: 5},
    {id: 3, name: "Focus Master", description: "Complete 10 focus sessions", unlocked: false, threshold: 10},
    {id: 4, name: "Focus Addict", description: "Complete 30 focus sessions", unlocked: false, threshold: 30},
]

// Create a custom hook to use the achievement context
const AchievementProvider = ({ children }) => {
    // Get the total finished sessions from local storage or use the default value
    const [totalFinishedSessions, setTotalFinishedSessions] = useState(() => {
        const stored = localStorage.getItem("totalFinishedSessions");
        return stored ? Number(stored) : 0;
    });
    
    // Get the achievements from local storage or use the default list
    const [achievements, setAchievements] = useState(() => {
        const stored = localStorage.getItem("achievements");
        return stored ? JSON.parse(stored) : AchievementList;
    });

    // Update the total finished sessions in local storage
    useEffect(() => {
        localStorage.setItem("achievements", JSON.stringify(achievements));
    }, [achievements]);

    // Update the achievements in local storage
    useEffect(() => {
        localStorage.setItem("totalFinishedSessions", totalFinishedSessions);
    }, [totalFinishedSessions]);

    // Check and update the achievements based on the total finished sessions
    useEffect(() => {
        setAchievements(prev =>
          prev.map(achievement => ({
            ...achievement,
            unlocked: totalFinishedSessions >= achievement.threshold
          }))
        );
      }, [totalFinishedSessions]);

    // Function to increment the total finished sessions and update the achievements
    const incrementTotalFinishedSessions = () => {
        setTotalFinishedSessions(prev => {
          const newCount = prev + 1;
          localStorage.setItem("totalFinishedSessions", newCount);
          return newCount;
        });
      };

    // Function to manually unlock an achievement by id and set it to true 
  const unlockAchievement = (id) => {
    setAchievements(prev =>
      prev.map(achievement =>
        achievement.id === id ? { ...achievement, unlocked: true } : achievement
      )
    );
  };

    // Function to reset the achievements
    const resetAchievements = () => {
        setAchievements(AchievementList);
        setTotalFinishedSessions(0);
        localStorage.removeItem("achievements");
        localStorage.removeItem("totalFinishedSessions");
    };

    return (
        <AchievementContext.Provider value={{achievements, incrementTotalFinishedSessions, unlockAchievement, resetAchievements }}>
            {children}
        </AchievementContext.Provider>
    );
};

export { AchievementContext, AchievementProvider };