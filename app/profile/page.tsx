import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default async function ProfilePage() {
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Your Profile ⚙️
          </h2>
          <p className="text-lg text-gray-600">
            Customize your learning experience and track your development journey.
          </p>
        </div>

        {/* Profile Overview */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-3xl">👨‍💻</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">Developer Profile</h3>
              <p className="text-gray-600 mb-2">Member since December 2024</p>
              <div className="flex items-center space-x-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  Level 3 Developer
                </span>
                <span className="text-sm text-gray-600">1,420 XP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
            <div className="text-gray-600">Challenges Completed</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">7</div>
            <div className="text-gray-600">Day Streak</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
            <div className="text-gray-600">Skills Mastered</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Learning Preferences */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Preferences</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Difficulty Level
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Beginner</option>
                  <option selected>Intermediate</option>
                  <option>Advanced</option>
                  <option>Mixed</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Focus Areas
                </label>
                <div className="space-y-2">
                  {[
                    { name: 'Frontend Development', checked: true },
                    { name: 'Backend Development', checked: false },
                    { name: 'Full Stack', checked: true },
                    { name: 'Mobile Development', checked: false }
                  ].map((area, index) => (
                    <label key={index} className="flex items-center">
                      <input 
                        type="checkbox" 
                        checked={area.checked}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                      />
                      <span className="ml-2 text-sm text-gray-700">{area.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Daily Learning Goal
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>30 minutes</option>
                  <option selected>1 hour</option>
                  <option>2 hours</option>
                  <option>3+ hours</option>
                </select>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements 🏆</h3>
            <div className="space-y-4">
              {[
                { 
                  title: "First Steps", 
                  description: "Completed your first challenge", 
                  earned: true,
                  icon: "🎯",
                  date: "Dec 15, 2024"
                },
                { 
                  title: "Streak Master", 
                  description: "Maintained a 7-day learning streak", 
                  earned: true,
                  icon: "🔥",
                  date: "Dec 18, 2024"
                },
                { 
                  title: "JavaScript Ninja", 
                  description: "Completed 5 JavaScript challenges", 
                  earned: true,
                  icon: "⚡",
                  date: "Dec 20, 2024"
                },
                { 
                  title: "Problem Solver", 
                  description: "Solved 10 challenges without hints", 
                  earned: false,
                  icon: "🧠",
                  date: null
                },
                { 
                  title: "Full Stack Explorer", 
                  description: "Complete challenges in frontend and backend", 
                  earned: false,
                  icon: "🌟",
                  date: null
                }
              ].map((achievement, index) => (
                <div key={index} className={`flex items-center p-3 rounded-lg border-2 ${
                  achievement.earned ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="text-2xl mr-3">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className={`font-medium ${achievement.earned ? 'text-green-900' : 'text-gray-500'}`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-sm ${achievement.earned ? 'text-green-700' : 'text-gray-500'}`}>
                      {achievement.description}
                    </p>
                    {achievement.date && (
                      <p className="text-xs text-green-600 mt-1">Earned on {achievement.date}</p>
                    )}
                  </div>
                  {achievement.earned && (
                    <div className="text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Settings</h3>
          <div className="space-y-4">
            {[
              { name: 'Daily learning reminders', description: 'Get reminded to practice coding daily', enabled: true },
              { name: 'New challenge notifications', description: 'Be notified when new challenges are added', enabled: true },
              { name: 'Achievement celebrations', description: 'Celebrate when you earn new achievements', enabled: true },
              { name: 'Weekly progress reports', description: 'Receive weekly summaries of your progress', enabled: false },
              { name: 'Community updates', description: 'Updates about new features and community events', enabled: false }
            ].map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{setting.name}</h4>
                  <p className="text-sm text-gray-600">{setting.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={setting.enabled} />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Actions</h3>
          <div className="space-y-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
              Save Changes
            </button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors">
              Export Progress Data
            </button>
            <button className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-medium py-3 px-4 rounded-lg transition-colors">
              Reset All Progress
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}