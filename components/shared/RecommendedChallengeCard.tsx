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
  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-blue-100 text-blue-800",
    Advanced: "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Recommended Challenges ✨
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <div
            key={challenge.title} // Use a unique value for the key
            className={`flex flex-col h-full rounded-lg border-l-4 p-6 shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${challenge.color}`}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className={`text-sm font-semibold rounded-full px-3 py-1 ${
                  difficultyColors[challenge.difficulty]
                }`}
              >
                {challenge.difficulty}
              </span>
              <span className="text-md font-bold text-gray-700">
                +{challenge.points} pts
              </span>
            </div>
            <h4 className="font-extrabold text-xl text-gray-900 mb-2 leading-tight">
              {challenge.title}
            </h4>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {challenge.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium bg-gray-100 text-gray-600 rounded-full px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-auto text-sm text-gray-500">
              <span className="font-semibold text-gray-600">Time:</span>{" "}
              {challenge.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
