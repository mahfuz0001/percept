// components/shared/RecentActivityCard.tsx
import React from "react";

export type Activity = {
  title: string;
  status: "completed" | "in-progress";
  time: string;
  points: number;
};

type RecentActivityCardProps = {
  activities: Activity[];
};

export function RecentActivityCard({ activities }: RecentActivityCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Recent Activity
      </h3>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full ${
                  activity.status === "completed"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {activity.status === "completed" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9.5 13.5a.75.75 0 0 1-1.171.043L3.75 12.5a.75.75 0 0 1 1.06-1.06l5.05 5.05L18.875 5.66a.75.75 0 0 1 1.04-.208Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6l3.245 3.245a.75.75 0 0 0 1.06-1.06L12.75 11.25V6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <div>
                <p className="font-semibold text-gray-800">{activity.title}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                +{activity.points} pts
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
