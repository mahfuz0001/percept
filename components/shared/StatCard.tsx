// components/shared/StatCard.tsx
import React from "react";

// Declare the types for the props here
export type StatCardProps = {
  title: string;
  value: string;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
  subtext: string;
  subtextColor: string;
};

export function StatCard({
  title,
  value,
  icon,
  gradientFrom,
  gradientTo,
  subtext,
  subtextColor,
}: StatCardProps) {
  return (
    <div
      className={`relative p-6 rounded-xl shadow-md overflow-hidden bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
    >
      <div className="absolute top-4 right-4 text-3xl opacity-30">{icon}</div>
      <h3 className="text-sm font-medium text-gray-700">{title}</h3>
      <p className="mt-1 text-3xl font-bold text-gray-900">{value}</p>
      <p className={`mt-2 text-sm font-semibold ${subtextColor}`}>{subtext}</p>
    </div>
  );
}
