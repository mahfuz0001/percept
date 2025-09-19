// components/shared/RecommendedChallengeCard.tsx
import React from "react";

// Declare the types for the props here
export type Challenge = {
  title: string;
  difficulty: "Intermediate" | "Beginner" | "Advanced";
  tech: string[];
  points: number;
  time: string;
  color: string;
};

type RecommendedChallengeCardProps = {
  challenges: Challenge[];
};

export function RecommendedChallengeCard({
  challenges,
}: RecommendedChallengeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Recommended Challenges
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg border-l-4 p-5 shadow-sm hover:shadow-md transition-all duration-200 ${challenge.color}`}
          >
            <div className="flex items-center justify-between mb-2">
              <span
                className={`text-sm font-semibold rounded-full px-3 py-1 ${
                  challenge.difficulty === "Beginner"
                    ? "bg-green-100 text-green-800"
                    : challenge.difficulty === "Intermediate"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {challenge.difficulty}
              </span>
              <span className="text-sm font-bold text-gray-600">
                +{challenge.points} pts
              </span>
            </div>
            <h4 className="font-bold text-lg text-gray-900 mb-2">
              {challenge.title}
            </h4>
            <div className="flex flex-wrap gap-2 mb-3">
              {challenge.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs bg-gray-100 text-gray-600 rounded-full px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Time:</span> {challenge.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
