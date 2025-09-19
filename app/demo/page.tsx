import Link from 'next/link';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Percept</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="#demo"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="#demo"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Get Started
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="#demo"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Journey
              </Link>
              <Link
                href="#features"
                className="text-gray-700 hover:text-gray-900 font-semibold py-4 px-8 rounded-lg text-lg transition-colors border-2 border-gray-300 hover:border-gray-400"
              >
                Learn More →
              </Link>
            </div>
            
            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
              <div className="flex items-center">
                <span className="text-2xl mr-2">⚡</span>
                <span className="font-medium">500+ Challenges</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">👥</span>
                <span className="font-medium">10,000+ Developers</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🏆</span>
                <span className="font-medium">95% Success Rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Alert */}
        <section className="py-12 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              🚀 Enhanced UI Showcase
            </h2>
            <p className="text-lg text-blue-100 mb-6">
              Professional UI improvements for the Percept platform
            </p>
            <div className="bg-white/10 rounded-lg p-6 text-left max-w-2xl mx-auto">
              <h3 className="font-semibold text-white mb-3">✅ Implemented Features:</h3>
              <ul className="text-blue-100 space-y-1 text-sm">
                <li>• Fixed authentication 404 errors</li>
                <li>• Enhanced landing page design</li>
                <li>• Added error handling & rate limiting</li>
                <li>• Created rich dashboard</li>
                <li>• Built challenges & profile pages</li>
                <li>• Added analytics & progress tracking</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Percept Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our anti-tutorial approach builds real developer skills
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No Hand-Holding
                </h3>
                <p className="text-gray-600">
                  Get problems, not solutions. Learn to research and build independently.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Real Challenges
                </h3>
                <p className="text-gray-600">
                  Solve actual problems across HTML, CSS, JavaScript, React, and APIs.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  AI-Powered Hints
                </h3>
                <p className="text-gray-600">
                  Get progressive nudges without spoiling solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Break Free from Tutorial Hell?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join developers transforming their skills through real problem solving
            </p>
            <Link
              href="#demo"
              className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl inline-block"
            >
              Start Solving Real Problems
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Percept</h3>
            <p className="text-gray-400 mb-4">
              The anti-tutorial hell platform for confident developers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}