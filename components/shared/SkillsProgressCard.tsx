// components/shared/SkillsProgressCard.tsx
import React from "react";

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
    <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6 mb-8 transform transition-all duration-300 hover:scale-[1.01]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          Skills Progress
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-indigo-500"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.59 1.59a.75.75 0 0 0 1.06 1.06l1.59-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM16.345 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.59a.75.75 0 1 0-1.06 1.06l1.59 1.59ZM12 18.75a.75.75 0 0 1 .75.75V22.5a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75ZM7.5 12a.75.75 0 0 0-.75.75v2.25a.75.75 0 0 0 1.5 0v-2.25A.75.75 0 0 0 7.5 12Z"
              clipRule="evenodd"
            />
          </svg>
        </h3>
        <a
          href="#"
          className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
        >
          View Details
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
          >
            <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
              {skill.emoji}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-gray-800 text-lg">
                  {skill.name}
                </span>
                <span className="text-md font-bold text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`${skill.color} h-2 rounded-full transform transition-all duration-500`}
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
