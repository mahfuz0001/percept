// components/shared/SkillsProgressCard.tsx
import React from "react";

// Declare the types for the props here
export type Skill = {
  name: string;
  level: number;
  color: string;
  emoji: string;
};

type SkillsProgressCardProps = {
  skills: Skill[];
};

export function SkillsProgressCard({ skills }: SkillsProgressCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Skills Progress
      </h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="text-2xl">{skill.emoji}</div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`${skill.color} h-2 rounded-full`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
