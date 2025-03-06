import React, { useContext } from "react";
import { AchievementContext } from "../context/AchievementContext";
import { Card, CardHeader, CardTitle, CardContent } from "../common/Card";
import { Button } from "../common/Button";

const AchievementDisplay = () => {
    // Get the achievement from the context
    const { achievements, resetAchievements } = useContext(AchievementContext);
    // Log the achievements to the console
    console.log("Achievements: ", achievements);

    return (
        <Card className="w-80 mx-auto mt-10">
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            {achievements.map((achievement) => (
              <div key={achievement.id} className="mb-4 border-b pb-2">
                <h3 className="text-xl font-bold">{achievement.name}</h3>
                <p>{achievement.description}</p>
                <p>
                  {achievement.unlocked ? (
                    <span className="text-green-600 font-semibold">Unlocked</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Locked</span>
                  )}
                </p>
              </div>
            ))}
            <Button className="text-black" onClick={resetAchievements}>Reset Achievements</Button>
          </CardContent>
        </Card>
      );
    };

export default AchievementDisplay;