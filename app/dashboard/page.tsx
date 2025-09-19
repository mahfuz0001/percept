// app/dashboard/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Header } from "@/components/shared/Header";
import { StatCard } from "@/components/shared/StatCard";
import {
  RecentActivityCard,
  type Activity,
} from "@/components/shared/RecentActivityCard";
import { QuickActions } from "@/components/shared/QuickActions";
import {
  SkillsProgressCard,
  type Skill,
} from "@/components/shared/SkillsProgressCard";
import {
  RecommendedChallengeCard,
  type Challenge,
} from "@/components/shared/RecommendedChallengeCard";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // Define and apply the type for statData
  type Stat = {
    title: string;
    value: string;
    icon: string;
    gradientFrom: string;
    gradientTo: string;
    subtext: string;
    subtextColor: string;
  };
  const statData: Stat[] = [
    {
      title: "Challenges Completed",
      value: "12",
      icon: "🎯",
      gradientFrom: "from-blue-100",
      gradientTo: "to-blue-200",
      subtext: "+3 this week",
      subtextColor: "text-green-600",
    },
    {
      title: "Total Points",
      value: "2,450",
      icon: "⭐",
      gradientFrom: "from-green-100",
      gradientTo: "to-green-200",
      subtext: "+350 this week",
      subtextColor: "text-green-600",
    },
    {
      title: "Current Streak",
      value: "7 days",
      icon: "🏆",
      gradientFrom: "from-purple-100",
      gradientTo: "to-purple-200",
      subtext: "Personal best!",
      subtextColor: "text-purple-600",
    },
    {
      title: "Skills Mastered",
      value: "5",
      icon: "⚡",
      gradientFrom: "from-orange-100",
      gradientTo: "to-orange-200",
      subtext: "JavaScript, CSS, React...",
      subtextColor: "text-orange-600",
    },
  ];

  const activityData: Activity[] = [
    {
      title: "React Component Challenge",
      status: "completed",
      time: "2 hours ago",
      points: 150,
    },
    {
      title: "API Integration Task",
      status: "in-progress",
      time: "1 day ago",
      points: 200,
    },
    {
      title: "CSS Grid Layout",
      status: "completed",
      time: "3 days ago",
      points: 100,
    },
    {
      title: "TypeScript Interfaces",
      status: "completed",
      time: "5 days ago",
      points: 120,
    },
  ];

  // Define and apply the type for skillsData
  const skillsData: Skill[] = [
    { name: "JavaScript", level: 85, color: "bg-yellow-500", emoji: "⚡" },
    { name: "React", level: 70, color: "bg-orange-500", emoji: "⚛️" },
    { name: "CSS", level: 90, color: "bg-blue-500", emoji: "🎨" },
    { name: "TypeScript", level: 60, color: "bg-red-500", emoji: "📘" },
    { name: "Node.js", level: 45, color: "bg-green-500", emoji: "🚀" },
    { name: "APIs", level: 55, color: "bg-purple-500", emoji: "🔌" },
  ];

  const challengeData: Challenge[] = [
    {
      title: "Build a Weather App",
      difficulty: "Intermediate",
      tech: ["React", "API"],
      points: 250,
      time: "2-3 hours",
      color: "border-blue-500",
    },
    {
      title: "Create a Todo App",
      difficulty: "Beginner",
      tech: ["JavaScript", "DOM"],
      points: 150,
      time: "1-2 hours",
      color: "border-green-500",
    },
    {
      title: "Authentication System",
      difficulty: "Advanced",
      tech: ["Node.js", "JWT"],
      points: 400,
      time: "4-5 hours",
      color: "border-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back! 👋
          </h2>
          <p className="text-lg text-gray-600">
            Ready to level up your development skills? Let&apos;s see your
            progress and find your next challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {statData.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              gradientFrom={stat.gradientFrom}
              gradientTo={stat.gradientTo}
              subtext={stat.subtext}
              subtextColor={stat.subtextColor}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <RecentActivityCard activities={activityData} />
          <QuickActions />
        </div>

        <SkillsProgressCard skills={skillsData} />

        <RecommendedChallengeCard challenges={challengeData} />
      </main>
    </div>
  );
}
