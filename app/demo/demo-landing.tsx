import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function DemoLandingPage() {
  // For demo purposes, simulate unauthenticated state
  const isDemo = process.env.DEMO_MODE === 'true';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Percept</h1>
              {isDemo && (
                <span className="ml-3 bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Demo Mode
                </span>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/demo/dashboard"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                View Dashboard
              </Link>
              <Link
                href="/demo/challenges"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Try Challenges
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Escape
              <span className="text-blue-600"> Tutorial Hell</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform from passive learner to confident developer through 
              <strong> real-world challenges</strong> that build genuine problem-solving skills.
            </p>
            
            {/* Demo Banner */}
            <div className="bg-blue-100 border border-blue-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">🚀 Live Demo Available!</h3>
              <p className="text-blue-800 mb-4">
                Experience the full platform features including Monaco Code Editor, AI-powered hints, and real-time code analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/demo/challenges"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  🧑‍💻 Try Code Editor
                </Link>
                <Link
                  href="/demo/challenges/1"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  ⚡ Interactive Challenge
                </Link>
              </div>
            </div>
            
            {/* Features Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Monaco Editor</h3>
                <p className="text-sm text-gray-600">Professional VS Code editor with IntelliSense</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Hints</h3>
                <p className="text-sm text-gray-600">Gemini-powered progressive guidance</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Code Analysis</h3>
                <p className="text-sm text-gray-600">Real-time feedback and suggestions</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Progress Tracking</h3>
                <p className="text-sm text-gray-600">Comprehensive analytics dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}