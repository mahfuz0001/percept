import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/shared/Button';
import { Card, CardContent, CardHeader } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';

export default async function LeaderboardPage() {
  const { userId } = await auth();

  // Mock leaderboard data - in real app this would come from database
  const leaderboardData = [
    {
      id: 1,
      rank: 1,
      username: "CodeMaster2024",
      fullName: "Sarah Chen",
      avatar: "👩‍💻",
      totalXP: 15420,
      level: 12,
      challengesCompleted: 89,
      streakDays: 47,
      badges: ["Problem Solver", "Speed Demon", "Consistency King"],
      specialization: "Full Stack",
      joinedDate: "2024-01-15",
      isPublic: true
    },
    {
      id: 2,
      rank: 2,
      username: "ReactNinja",
      fullName: "Marcus Rodriguez",
      avatar: "⚛️",
      totalXP: 14850,
      level: 11,
      challengesCompleted: 76,
      streakDays: 23,
      badges: ["React Master", "Component Wizard", "Hook Master"],
      specialization: "Frontend",
      joinedDate: "2023-12-10",
      isPublic: true
    },
    {
      id: 3,
      rank: 3,
      username: "APIArchitect",
      fullName: "Priya Patel",
      avatar: "🏗️",
      totalXP: 13960,
      level: 10,
      challengesCompleted: 68,
      streakDays: 35,
      badges: ["Backend Beast", "Database Guru", "API Master"],
      specialization: "Backend",
      joinedDate: "2024-02-20",
      isPublic: true
    },
    {
      id: 4,
      rank: 4,
      username: "CSSArtist",
      fullName: "Elena Rodriguez",
      avatar: "🎨",
      totalXP: 12780,
      level: 9,
      challengesCompleted: 82,
      streakDays: 19,
      badges: ["Design Master", "Animation Expert", "CSS Wizard"],
      specialization: "Frontend",
      joinedDate: "2023-11-05",
      isPublic: true
    },
    {
      id: 5,
      rank: 5,
      username: "TypeScriptTitan",
      fullName: "David Kim",
      avatar: "📘",
      totalXP: 11940,
      level: 9,
      challengesCompleted: 71,
      streakDays: 31,
      badges: ["Type Safety Hero", "Generic Master", "Clean Code"],
      specialization: "TypeScript",
      joinedDate: "2024-01-03",
      isPublic: true
    },
    {
      id: 6,
      rank: 6,
      username: "FullStackPhoenix",
      fullName: "Jessica Wang",
      avatar: "🔥",
      totalXP: 11205,
      level: 8,
      challengesCompleted: 64,
      streakDays: 28,
      badges: ["Full Stack", "Database Pro", "DevOps Rookie"],
      specialization: "Full Stack",
      joinedDate: "2023-10-12",
      isPublic: true
    },
    {
      id: 7,
      rank: 7,
      username: "AlgoWarrior",
      fullName: "Anonymous User",
      avatar: "🥷",
      totalXP: 10850,
      level: 8,
      challengesCompleted: 55,
      streakDays: 12,
      badges: ["Algorithm Expert", "Problem Solver"],
      specialization: "Computer Science",
      joinedDate: "2024-03-01",
      isPublic: false
    },
    {
      id: 8,
      rank: 8,
      username: "ModernWebDev",
      fullName: "Alex Thompson",
      avatar: "🌐",
      totalXP: 9750,
      level: 7,
      challengesCompleted: 48,
      streakDays: 15,
      badges: ["Web Fundamentals", "Modern Stack", "Performance Optimizer"],
      specialization: "Frontend",
      joinedDate: "2024-02-14",
      isPublic: true
    }
  ];

  const timeFilters = ["All Time", "This Month", "This Week", "Today"];
  const categoryFilters = ["All", "Frontend", "Backend", "Full Stack", "DevOps", "AI/ML"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/dashboard" className="flex items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Percept
                </h1>
                <span className="ml-2 text-sm text-muted-foreground">Leaderboard</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/dashboard" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
                  Dashboard
                </Link>
                <Link href="/challenges" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
                  Challenges
                </Link>
                <Link href="/learning-portal" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
                  Learning Portal
                </Link>
                <Link href="/leaderboard" className="text-blue-600 font-medium">
                  Leaderboard
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              {userId && (
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10 ring-2 ring-blue-500 hover:ring-blue-600 transition-all duration-300"
                    }
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Global Leaderboard 🏆
          </h2>
          <p className="text-lg text-muted-foreground">
            See how you stack up against developers worldwide. Climb the ranks by completing challenges and earning XP!
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-card-foreground mb-2">
                Time Period
              </label>
              <select className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {timeFilters.map(filter => (
                  <option key={filter} value={filter}>{filter}</option>
                ))}
              </select>
            </div>
            
            <div className="flex-1">
              <label className="block text-sm font-medium text-card-foreground mb-2">
                Specialization
              </label>
              <select className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {categoryFilters.map(filter => (
                  <option key={filter} value={filter}>{filter}</option>
                ))}
              </select>
            </div>
            
            <div className="flex-1">
              <label className="block text-sm font-medium text-card-foreground mb-2">
                Search Users
              </label>
              <input 
                type="text" 
                placeholder="Search by username..."
                className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">🥇 Hall of Fame 🥇</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {leaderboardData.slice(0, 3).map((user, index) => (
              <Card key={user.id} className={`relative text-center ${
                index === 0 ? 'bg-gradient-to-b from-yellow-50 to-yellow-100 border-yellow-300 transform scale-105' :
                index === 1 ? 'bg-gradient-to-b from-gray-50 to-gray-100 border-border' :
                'bg-gradient-to-b from-orange-50 to-orange-100 border-orange-300'
              }`}>
                <CardContent className="p-6">
                  <div className="text-4xl mb-2">
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                  </div>
                  <div className="text-3xl mb-2">{user.avatar}</div>
                  <h4 className="font-bold text-lg mb-1">
                    {user.isPublic ? user.fullName : user.username}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">@{user.username}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">XP:</span>
                      <span className="font-bold text-blue-600">{user.totalXP.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Level:</span>
                      <span className="font-bold text-purple-600">{user.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Challenges:</span>
                      <span className="font-bold text-green-600">{user.challengesCompleted}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Badge variant="info" size="sm">{user.specialization}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Full Leaderboard */}
        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold text-foreground">Complete Rankings</h3>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-card-foreground">Rank</th>
                    <th className="text-left py-3 px-4 font-semibold text-card-foreground">User</th>
                    <th className="text-left py-3 px-4 font-semibold text-card-foreground">XP</th>
                    <th className="text-left py-3 px-4 font-semibold text-card-foreground">Level</th>
                    <th className="text-left py-3 px-4 font-semibold text-card-foreground">Challenges</th>
                    <th className="text-left py-3 px-4 font-semibold text-card-foreground">Streak</th>
                    <th className="text-left py-3 px-4 font-semibold text-card-foreground">Specialization</th>
                    <th className="text-left py-3 px-4 font-semibold text-card-foreground">Top Badges</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((user) => (
                    <tr key={user.id} className="border-b border-gray-100 hover:bg-background transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <span className="font-bold text-lg">#{user.rank}</span>
                          {user.rank <= 3 && (
                            <span className="ml-2">
                              {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <div className="text-2xl mr-3">{user.avatar}</div>
                          <div>
                            <div className="font-semibold">
                              {user.isPublic ? (
                                <Link href={`/users/${user.username}`} className="text-blue-600 hover:text-blue-800">
                                  {user.fullName}
                                </Link>
                              ) : (
                                <span className="text-muted-foreground">Anonymous User</span>
                              )}
                            </div>
                            <div className="text-sm text-muted-foreground">@{user.username}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-bold text-blue-600">{user.totalXP.toLocaleString()}</span>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="purple">{user.level}</Badge>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-green-600">{user.challengesCompleted}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <span className="mr-1">🔥</span>
                          <span className="font-semibold">{user.streakDays}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="info" size="sm">{user.specialization}</Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1">
                          {user.badges.slice(0, 2).map((badge, index) => (
                            <Badge key={index} variant="success" size="sm">{badge}</Badge>
                          ))}
                          {user.badges.length > 2 && (
                            <Badge variant="default" size="sm">+{user.badges.length - 2}</Badge>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Your Position */}
        {userId && (
          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-lg text-blue-900">Your Current Position</h4>
                  <p className="text-blue-700">Keep grinding to climb higher! 💪</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">#47</div>
                  <div className="text-sm text-blue-600">2,450 XP • Level 5</div>
                </div>
              </div>
              <div className="mt-4 flex gap-4">
                <Button href="/challenges" size="sm">Complete More Challenges</Button>
                <Button href="/profile" variant="outline" size="sm">Update Profile Visibility</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}