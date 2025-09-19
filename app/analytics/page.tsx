import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default async function AnalyticsPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/dashboard" className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">Percept</h1>
                <span className="ml-2 text-sm text-gray-500">Analytics</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Dashboard
                </Link>
                <Link href="/challenges" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Challenges
                </Link>
                <Link href="/profile" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Profile
                </Link>
                <Link href="/analytics" className="text-blue-600 font-medium">
                  Analytics
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10"
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
            Learning Analytics 📊
          </h2>
          <p className="text-lg text-gray-600">
            Track your progress, identify patterns, and optimize your learning journey.
          </p>
        </div>

        {/* Time Period Selector */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Time Period</h3>
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>All time</option>
            </select>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Study Time</p>
                <p className="text-2xl font-bold text-gray-900">42 hours</p>
                <p className="text-sm text-green-600">+8% from last week</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⏱️</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Session</p>
                <p className="text-2xl font-bold text-gray-900">1.5 hrs</p>
                <p className="text-sm text-green-600">+12% improvement</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Success Rate</p>
                <p className="text-2xl font-bold text-gray-900">85%</p>
                <p className="text-sm text-red-600">-3% from last week</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Hints Used</p>
                <p className="text-2xl font-bold text-gray-900">23</p>
                <p className="text-sm text-green-600">-15% independence gain</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Progress Chart */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Progress</h3>
            <div className="h-64 flex items-end justify-between space-x-2">
              {[
                { day: 'Mon', challenges: 2, time: 120 },
                { day: 'Tue', challenges: 1, time: 90 },
                { day: 'Wed', challenges: 3, time: 180 },
                { day: 'Thu', challenges: 0, time: 0 },
                { day: 'Fri', challenges: 2, time: 150 },
                { day: 'Sat', challenges: 4, time: 240 },
                { day: 'Sun', challenges: 1, time: 60 }
              ].map((data, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="w-full bg-blue-100 rounded-t-lg relative mb-2" style={{ height: `${Math.max(data.time / 2.4, 10)}px` }}>
                    <div className="absolute inset-0 bg-blue-600 rounded-t-lg" style={{ height: `${data.challenges * 20}%` }}></div>
                  </div>
                  <span className="text-xs text-gray-600">{data.day}</span>
                  <span className="text-xs text-gray-500">{data.challenges}ch</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded mr-2"></div>
                <span className="text-gray-600">Challenges Completed</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-100 rounded mr-2"></div>
                <span className="text-gray-600">Study Time (minutes)</span>
              </div>
            </div>
          </div>

          {/* Skill Distribution */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Skill Distribution</h3>
            <div className="space-y-4">
              {[
                { skill: 'JavaScript', percentage: 85, color: 'bg-yellow-500' },
                { skill: 'React', percentage: 70, color: 'bg-cyan-500' },
                { skill: 'CSS', percentage: 90, color: 'bg-blue-500' },
                { skill: 'TypeScript', percentage: 60, color: 'bg-blue-600' },
                { skill: 'Node.js', percentage: 45, color: 'bg-green-500' },
                { skill: 'APIs', percentage: 55, color: 'bg-purple-500' }
              ].map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-20 text-sm font-medium text-gray-700">{skill.skill}</div>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`${skill.color} h-3 rounded-full transition-all duration-300`}
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-12 text-sm text-gray-600 text-right">{skill.percentage}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Learning Patterns */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Patterns</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-1">Peak Performance Time</h4>
                <p className="text-blue-700 text-sm">You perform best between 2 PM - 4 PM with 92% success rate</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-medium text-green-900 mb-1">Strongest Technology</h4>
                <p className="text-green-700 text-sm">CSS - 90% mastery level with consistent improvement</p>
              </div>
              
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-medium text-yellow-900 mb-1">Growth Opportunity</h4>
                <p className="text-yellow-700 text-sm">Node.js challenges show the most potential for skill development</p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-1">Learning Style</h4>
                <p className="text-purple-700 text-sm">You prefer intermediate challenges and use hints strategically</p>
              </div>
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h3>
            <div className="space-y-4">
              {[
                {
                  date: 'Dec 20, 2024',
                  achievement: 'JavaScript Ninja',
                  description: 'Completed 5 JavaScript challenges',
                  points: 250,
                  icon: '⚡'
                },
                {
                  date: 'Dec 18, 2024',
                  achievement: 'Streak Master',
                  description: 'Maintained 7-day learning streak',
                  points: 100,
                  icon: '🔥'
                },
                {
                  date: 'Dec 15, 2024',
                  achievement: 'First Steps',
                  description: 'Completed your first challenge',
                  points: 50,
                  icon: '🎯'
                }
              ].map((achievement, index) => (
                <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl mr-3">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-green-900">{achievement.achievement}</h4>
                    <p className="text-sm text-green-700">{achievement.description}</p>
                    <p className="text-xs text-green-600">{achievement.date}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-green-600">+{achievement.points} XP</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Goal Setting */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Goals</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border-2 border-dashed border-blue-300 rounded-lg text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold text-gray-900 mb-1">Weekly Goal</h4>
              <p className="text-sm text-gray-600 mb-3">Complete 5 challenges this week</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-xs text-gray-600">3 of 5 completed</p>
            </div>

            <div className="p-4 border-2 border-dashed border-green-300 rounded-lg text-center">
              <div className="text-3xl mb-2">📈</div>
              <h4 className="font-semibold text-gray-900 mb-1">Skill Goal</h4>
              <p className="text-sm text-gray-600 mb-3">Reach 70% in TypeScript</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '86%' }}></div>
              </div>
              <p className="text-xs text-gray-600">60% of 70% target</p>
            </div>

            <div className="p-4 border-2 border-dashed border-purple-300 rounded-lg text-center">
              <div className="text-3xl mb-2">🏆</div>
              <h4 className="font-semibold text-gray-900 mb-1">Achievement Goal</h4>
              <p className="text-sm text-gray-600 mb-3">Earn "Problem Solver" badge</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
              <p className="text-xs text-gray-600">7 of 10 challenges without hints</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}