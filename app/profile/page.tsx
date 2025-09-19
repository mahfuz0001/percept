import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '@/components/shared/Button';
import { Card, CardContent, CardHeader } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';

export default async function ProfilePage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  // Mock user data - in real app this would come from database
  const userProfile = {
    username: "developer_extraordinaire",
    fullName: "Alex Johnson",
    email: "alex@example.com",
    avatar: "👨‍💻",
    level: 5,
    totalXP: 2450,
    xpToNextLevel: 550,
    currentStreak: 12,
    longestStreak: 28,
    joinedDate: "January 2024",
    location: "San Francisco, CA",
    specialization: "Full Stack Developer",
    isPublic: true,
    bio: "Passionate developer who loves solving complex problems and building amazing user experiences. Always learning something new!",
    skills: ["JavaScript", "React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    socialLinks: {
      github: "https://github.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson",
      twitter: "https://twitter.com/alexjohnson"
    }
  };

  const achievements = [
    {
      id: 1,
      name: "First Steps",
      description: "Complete your first challenge",
      icon: "🎯",
      earned: true,
      earnedDate: "Jan 15, 2024",
      rarity: "Common"
    },
    {
      id: 2,
      name: "Problem Solver",
      description: "Solve 10 challenges without hints",
      icon: "🧠",
      earned: true,
      earnedDate: "Feb 3, 2024",
      rarity: "Uncommon"
    },
    {
      id: 3,
      name: "Speed Demon",
      description: "Complete a challenge in under 30 minutes",
      icon: "⚡",
      earned: true,
      earnedDate: "Feb 12, 2024",
      rarity: "Rare"
    },
    {
      id: 4,
      name: "Streak Master",
      description: "Maintain a 30-day solving streak",
      icon: "🔥",
      earned: false,
      progress: 12,
      total: 30,
      rarity: "Epic"
    },
    {
      id: 5,
      name: "Community Helper",
      description: "Help 50 fellow developers in the community",
      icon: "🤝",
      earned: false,
      progress: 23,
      total: 50,
      rarity: "Rare"
    },
    {
      id: 6,
      name: "JavaScript Master",
      description: "Complete all JavaScript challenges",
      icon: "🏆",
      earned: false,
      progress: 18,
      total: 25,
      rarity: "Legendary"
    }
  ];

  const recentActivity = [
    {
      type: "challenge_completed",
      title: "Completed 'Real-time Chat App'",
      points: 500,
      time: "2 hours ago",
      icon: "✅"
    },
    {
      type: "badge_earned",
      title: "Earned 'Speed Demon' badge",
      time: "1 day ago",
      icon: "🏆"
    },
    {
      type: "community_help",
      title: "Answered question about React hooks",
      time: "2 days ago",
      icon: "💬"
    },
    {
      type: "level_up",
      title: "Reached Level 5!",
      time: "3 days ago",
      icon: "🎉"
    }
  ];

  const favoriteTopics = [
    { name: "React", progress: 85, total: 20, completed: 17 },
    { name: "TypeScript", progress: 60, total: 15, completed: 9 },
    { name: "Node.js", progress: 40, total: 10, completed: 4 },
    { name: "CSS", progress: 90, total: 12, completed: 11 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/dashboard" className="flex items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Anti-Tutorial Hell
                </h1>
                <span className="ml-2 text-sm text-gray-500">Profile</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Dashboard
                </Link>
                <Link href="/challenges" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Challenges
                </Link>
                <Link href="/profile" className="text-blue-600 font-medium">
                  Profile
                </Link>
                <Link href="/analytics" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Analytics
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Share Profile</Button>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10 ring-2 ring-blue-500 hover:ring-blue-600 transition-all duration-300"
                  }
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1">
            {/* Profile Card */}
            <Card className="mb-6">
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4">{userProfile.avatar}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{userProfile.fullName}</h2>
                <p className="text-gray-600 mb-2">@{userProfile.username}</p>
                <Badge variant="purple" className="mb-4">Level {userProfile.level}</Badge>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>XP Progress</span>
                    <span>{userProfile.totalXP} / {userProfile.totalXP + userProfile.xpToNextLevel}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-blue-600 h-3 rounded-full" 
                      style={{ width: `${(userProfile.totalXP / (userProfile.totalXP + userProfile.xpToNextLevel)) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{userProfile.xpToNextLevel} XP to Level {userProfile.level + 1}</p>
                </div>

                <p className="text-gray-700 text-sm mb-4">{userProfile.bio}</p>
                
                <div className="flex justify-center space-x-4 mb-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600">{userProfile.currentStreak}</div>
                    <div className="text-xs text-gray-500">Current Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">{userProfile.longestStreak}</div>
                    <div className="text-xs text-gray-500">Longest Streak</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full">Edit Profile</Button>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <input 
                      type="checkbox" 
                      checked={userProfile.isPublic} 
                      className="rounded border-gray-300"
                      readOnly
                    />
                    <span>Public Profile</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {userProfile.skills.map((skill, index) => (
                    <Badge key={index} variant="info" size="sm">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Achievements Section */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900">Achievements & Badges 🏆</h3>
                  <Badge variant="default">{achievements.filter(a => a.earned).length} / {achievements.length}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement) => (
                    <Card key={achievement.id} className={`p-4 ${
                      achievement.earned 
                        ? 'bg-gradient-to-r from-green-50 to-blue-50 border-green-200' 
                        : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex items-start space-x-3">
                        <div className="text-3xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-gray-900">{achievement.name}</h4>
                            <Badge 
                              variant={
                                achievement.rarity === 'Common' ? 'default' :
                                achievement.rarity === 'Uncommon' ? 'info' :
                                achievement.rarity === 'Rare' ? 'purple' :
                                achievement.rarity === 'Epic' ? 'warning' : 'danger'
                              }
                              size="sm"
                            >
                              {achievement.rarity}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                          
                          {achievement.earned ? (
                            <div className="flex items-center space-x-2">
                              <Badge variant="success" size="sm">✅ Earned</Badge>
                              <span className="text-xs text-gray-500">{achievement.earnedDate}</span>
                            </div>
                          ) : achievement.progress !== undefined ? (
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Progress</span>
                                <span>{achievement.progress} / {achievement.total}</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-blue-600 h-2 rounded-full" 
                                  style={{ width: `${(achievement.progress! / achievement.total!) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          ) : (
                            <Badge variant="default" size="sm">🔒 Locked</Badge>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Progress */}
            <Card className="mb-8">
              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-900">Learning Progress 📈</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {favoriteTopics.map((topic, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-gray-900">{topic.name}</h4>
                        <span className="text-sm text-gray-600">{topic.completed} / {topic.total} challenges</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full" 
                          style={{ width: `${topic.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{topic.progress}% complete</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-900">Recent Activity 📅</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="text-2xl">{activity.icon}</div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.title}</p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                      {activity.points && (
                        <Badge variant="success" size="sm">+{activity.points} XP</Badge>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline">View All Activity</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certificate Section */}
        <Card className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Earn Certificates
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Complete learning paths and demonstrate mastery to earn official certificates that showcase your skills to employers and peers.
            </p>
            <div className="flex justify-center gap-4">
              <Button>View Available Certificates</Button>
              <Button variant="outline">Share Achievements</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
