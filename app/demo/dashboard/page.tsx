import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function DemoDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/demo" className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">Percept</h1>
                <span className="ml-2 text-sm text-gray-500">Demo Dashboard</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/demo/challenges" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Challenges
                </Link>
                <Link href="/demo/profile" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Profile
                </Link>
                <Link href="/demo/analytics" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Analytics
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">DU</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to the Demo! 👋
          </h2>
          <p className="text-lg text-gray-600">
            Explore the Percept platform with full Monaco Editor integration and AI-powered features.
          </p>
        </div>

        {/* Demo Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="text-2xl">ℹ️</span>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-blue-900">Demo Mode Active</h3>
              <p className="text-blue-800 mt-1">
                This is a fully functional demo showcasing the complete Percept platform. All core features are working including:
              </p>
              <ul className="mt-2 text-blue-800 list-disc list-inside">
                <li>Monaco Code Editor with syntax highlighting</li>
                <li>AI-powered hint system (Gemini API integration)</li>
                <li>Real-time code analysis and feedback</li>
                <li>Interactive challenge environment</li>
                <li>Progress tracking and analytics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-xl">🎯</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Challenges Completed</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-xl">⭐</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Points</p>
                <p className="text-2xl font-bold text-gray-900">750</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-semibold text-xl">🏆</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Current Streak</p>
                <p className="text-2xl font-bold text-gray-900">5 days</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-semibold text-xl">⚡</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Skills Mastered</p>
                <p className="text-2xl font-bold text-gray-900">4</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-4">
              <Link
                href="/demo/challenges"
                className="block p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">Browse Challenges</h4>
                  <p className="text-sm text-gray-600">Explore available coding challenges</p>
                </div>
              </Link>
              
              <Link
                href="/demo/challenges/1"
                className="block p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors group"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">💻</div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600">Try Interactive Challenge</h4>
                  <p className="text-sm text-gray-600">Experience the Monaco Editor and AI hints</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Platform Features</h3>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-2xl mr-3">💻</span>
                <div>
                  <p className="font-medium text-gray-900">Monaco Code Editor</p>
                  <p className="text-sm text-gray-600">VS Code-like editing experience</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-2xl mr-3">🤖</span>
                <div>
                  <p className="font-medium text-gray-900">AI-Powered Hints</p>
                  <p className="text-sm text-gray-600">Gemini API integration for smart assistance</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-2xl mr-3">🔍</span>
                <div>
                  <p className="font-medium text-gray-900">Code Analysis</p>
                  <p className="text-sm text-gray-600">Real-time feedback and suggestions</p>
                </div>
              </div>

              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-2xl mr-3">📊</span>
                <div>
                  <p className="font-medium text-gray-900">Progress Tracking</p>
                  <p className="text-sm text-gray-600">Comprehensive analytics and achievements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}