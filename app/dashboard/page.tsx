import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/dashboard" className="flex items-center group">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Percept
                </h1>
                <span className="ml-3 px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">
                  Dashboard
                </span>
              </Link>
              <nav className="hidden md:flex space-x-1">
                <Link 
                  href="/challenges" 
                  className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 rounded-lg group"
                >
                  <span className="flex items-center">
                    🚀 Challenges
                  </span>
                </Link>
                <Link 
                  href="/profile" 
                  className="px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 font-medium transition-all duration-200 rounded-lg group"
                >
                  <span className="flex items-center">
                    👤 Profile
                  </span>
                </Link>
                <Link 
                  href="/analytics" 
                  className="px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-200 rounded-lg group"
                >
                  <span className="flex items-center">
                    📊 Analytics
                  </span>
                </Link>
                <Link 
                  href="/" 
                  className="px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 font-medium transition-all duration-200 rounded-lg group"
                >
                  <span className="flex items-center">
                    🏠 Home
                  </span>
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center px-3 py-1 bg-gradient-to-r from-green-100 to-blue-100 rounded-full">
                <span className="text-sm font-medium text-gray-700">
                  🏆 Level 5 • 2,450 XP
                </span>
              </div>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10 ring-2 ring-blue-200 hover:ring-blue-300 transition-all",
                    userButtonPopoverCard: "shadow-xl border-0",
                    userButtonPopoverActions: "border-t border-gray-100"
                  }
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back! 👋
          </h2>
          <p className="text-lg text-gray-600">
            Ready to level up your development skills? Let&apos;s see your progress and find your next challenge.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-2xl">🎯</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Challenges Completed</p>
                <p className="text-3xl font-bold text-gray-900">12</p>
                <p className="text-xs text-green-600 font-medium">+3 this week</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-2xl">⭐</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Points</p>
                <p className="text-3xl font-bold text-gray-900">2,450</p>
                <p className="text-xs text-green-600 font-medium">+350 this week</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                  <span className="text-purple-600 font-semibold text-2xl">🏆</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Current Streak</p>
                <p className="text-3xl font-bold text-gray-900">7 days</p>
                <p className="text-xs text-purple-600 font-medium">Personal best!</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
                  <span className="text-orange-600 font-semibold text-2xl">⚡</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Skills Mastered</p>
                <p className="text-3xl font-bold text-gray-900">5</p>
                <p className="text-xs text-orange-600 font-medium">JavaScript, CSS, React...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { title: "React Component Challenge", status: "completed", time: "2 hours ago", points: 150 },
                { title: "API Integration Task", status: "in-progress", time: "1 day ago", points: 200 },
                { title: "CSS Grid Layout", status: "completed", time: "3 days ago", points: 100 },
                { title: "TypeScript Interfaces", status: "completed", time: "5 days ago", points: 120 }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      activity.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></div>
                    <div>
                      <p className="font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-blue-600">+{activity.points} pts</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-4">
              <Link
                href="/challenges"
                className="block p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">Start New Challenge</h4>
                  <p className="text-sm text-gray-600">Browse available challenges and start solving</p>
                </div>
              </Link>
              
              <Link
                href="/profile"
                className="block p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors group"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">⚙️</div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600">Update Profile</h4>
                  <p className="text-sm text-gray-600">Customize your learning preferences</p>
                </div>
              </Link>

              <Link
                href="/analytics"
                className="block p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors group"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">View Analytics</h4>
                  <p className="text-sm text-gray-600">Track your learning progress</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Skills Progress */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Skills Progress</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'JavaScript', level: 85, color: 'bg-yellow-500', emoji: '⚡' },
              { name: 'React', level: 70, color: 'bg-cyan-500', emoji: '⚛️' },
              { name: 'CSS', level: 90, color: 'bg-blue-500', emoji: '🎨' },
              { name: 'TypeScript', level: 60, color: 'bg-blue-600', emoji: '📘' },
              { name: 'Node.js', level: 45, color: 'bg-green-500', emoji: '🚀' },
              { name: 'APIs', level: 55, color: 'bg-purple-500', emoji: '🔌' }
            ].map((skill) => (
              <div key={skill.name} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{skill.emoji}</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${skill.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Challenges */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Recommended for You</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Build a Weather App",
                difficulty: "Intermediate",
                tech: ["React", "API"],
                points: 250,
                time: "2-3 hours",
                color: "border-blue-500"
              },
              {
                title: "Create a Todo App",
                difficulty: "Beginner",
                tech: ["JavaScript", "DOM"],
                points: 150,
                time: "1-2 hours",
                color: "border-green-500"
              },
              {
                title: "Authentication System",
                difficulty: "Advanced",
                tech: ["Node.js", "JWT"],
                points: 400,
                time: "4-5 hours",
                color: "border-red-500"
              }
            ].map((challenge, index) => (
              <div key={index} className={`border-2 ${challenge.color} rounded-lg p-4 hover:shadow-md transition-shadow`}>
                <h4 className="font-semibold text-gray-900 mb-2">{challenge.title}</h4>
                <div className="flex items-center mb-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    challenge.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    challenge.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {challenge.difficulty}
                  </span>
                  <span className="text-sm text-gray-600 ml-2">{challenge.time}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {challenge.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-blue-600">{challenge.points} points</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
                    Start Challenge
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}