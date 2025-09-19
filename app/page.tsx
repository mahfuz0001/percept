import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "@/components/shared/Button";
import { Card, CardContent } from "@/components/shared/Card";
import { Badge } from "@/components/shared/Badge";

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="relative z-10 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Anti-Tutorial Hell
              </h1>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/learning-portal" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Learning Portal
              </Link>
              <Link href="/challenges" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Challenges
              </Link>
              {userId ? (
                <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Dashboard
                </Link>
              ) : (
                <Link href="/sign-in" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Sign In
                </Link>
              )}
            </nav>

            {/* Search and Actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search courses, lessons..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                  />
                  <div className="absolute left-3 top-2.5">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <kbd className="absolute right-3 top-2.5 text-xs text-gray-400 bg-gray-100 px-1 rounded">K</kbd>
                </div>
              </div>
              
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-sm">🌙</span>
              </button>
              
              {userId ? (
                <Button href="/dashboard">Dashboard</Button>
              ) : (
                <Button href="/sign-up">Get Started</Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Join 10,000+ developers who escaped tutorial hell
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Escape <span className="text-blue-600">Tutorial Hell</span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
              Build Real Skills
            </h3>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Stop following step-by-step tutorials. Start solving real problems. Build the confidence to tackle any coding challenge independently with our struggle-first learning approach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="xl" className="shadow-2xl">
                Start Building Real Skills
              </Button>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">Challenges Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5,000+</div>
                <div className="text-gray-600">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Community Support</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Philosophy Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Philosophy
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="p-8 bg-red-50 border-red-200">
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  Traditional tutorials create passive learners
                </h3>
                <p className="text-red-700 text-lg">
                  You follow steps, copy code, and feel like you understand—until you face a real problem alone.
                </p>
              </Card>
              
              <Card className="p-8 bg-green-50 border-green-200">
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  Our challenges force active learning
                </h3>
                <p className="text-green-700 text-lg">
                  You&apos;ll struggle, research, experiment, and eventually solve problems independently.
                </p>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Card className="p-8 bg-blue-50 border-blue-200 max-w-4xl mx-auto">
                <p className="text-xl text-blue-800">
                  <strong>This struggle is not a bug—it&apos;s the feature</strong> that builds genuine developer confidence.
                </p>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Real Problems Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Real Problems
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Face challenges that mirror actual development work. No artificial examples.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card hover className="text-center">
                <CardContent>
                  <h3 className="font-bold text-lg mb-2">Responsive Three-Column Grid</h3>
                  <Badge variant="info">CSS</Badge>
                </CardContent>
              </Card>
              
              <Card hover className="text-center">
                <CardContent>
                  <h3 className="font-bold text-lg mb-2">TypeScript Form Validation</h3>
                  <Badge variant="purple">TypeScript</Badge>
                </CardContent>
              </Card>
              
              <Card hover className="text-center">
                <CardContent>
                  <h3 className="font-bold text-lg mb-2">React State Management</h3>
                  <Badge variant="success">React</Badge>
                </CardContent>
              </Card>
              
              <Card hover className="text-center">
                <CardContent>
                  <h3 className="font-bold text-lg mb-2">API Integration & Caching</h3>
                  <Badge variant="warning">APIs</Badge>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg">
                Try it Yourself!
              </Button>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Watch code come to life as you type it
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-2">HTML Basics</h3>
                <p className="text-gray-600 mb-4">Create your first webpage</p>
                <Button variant="outline" size="sm">Run</Button>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-2">CSS Animation</h3>
                <p className="text-gray-600 mb-4">Bring designs to life</p>
                <Button variant="outline" size="sm">Run</Button>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">JavaScript Magic</h3>
                <p className="text-gray-600 mb-4">Add interactivity</p>
                <Button variant="outline" size="sm">Run</Button>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50">
                <h3 className="text-2xl font-bold mb-4">Live Preview</h3>
                <p className="text-lg text-gray-700 mb-4">Run the code to see the magic!</p>
                <Button>Try Interactive Demo</Button>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Independent Learning Platform
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Research, experiment, and solve problems yourself. Build genuine confidence through struggle-first learning.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Features</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">No Hand-Holding</h4>
                    <p className="text-sm text-gray-600">Minimal guidance forces you to think critically and develop problem-solving skills.</p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Real Problems</h4>
                    <p className="text-sm text-gray-600">Face challenges that mirror actual development work. No artificial examples.</p>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Community Driven</h4>
                    <p className="text-sm text-gray-600">Join developers who learn by doing, not by following tutorials.</p>
                  </Card>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Process</h3>
                <div className="space-y-4">
                  <Card className="p-4 bg-blue-50">
                    <div className="text-2xl mb-2">1️⃣</div>
                    <h4 className="font-semibold mb-2">Get Challenge</h4>
                    <p className="text-sm text-gray-600">Receive a real-world problem without step-by-step instructions.</p>
                  </Card>
                  <Card className="p-4 bg-green-50">
                    <div className="text-2xl mb-2">2️⃣</div>
                    <h4 className="font-semibold mb-2">Struggle & Research</h4>
                    <p className="text-sm text-gray-600">Use documentation, forums, and your problem-solving skills.</p>
                  </Card>
                  <Card className="p-4 bg-purple-50">
                    <div className="text-2xl mb-2">3️⃣</div>
                    <h4 className="font-semibold mb-2">Build Solution</h4>
                    <p className="text-sm text-gray-600">Create working code that solves the actual problem.</p>
                  </Card>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Results</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="text-3xl text-green-600 font-bold mb-2">95%</div>
                    <h4 className="font-semibold mb-2">Success Rate</h4>
                    <p className="text-sm text-gray-600">Developers who complete our program successfully transition to professional roles.</p>
                  </Card>
                  <Card className="p-4">
                    <div className="text-3xl text-blue-600 font-bold mb-2">3x</div>
                    <h4 className="font-semibold mb-2">Faster Learning</h4>
                    <p className="text-sm text-gray-600">Build real skills 3x faster than traditional tutorial-based learning.</p>
                  </Card>
                  <Card className="p-4">
                    <div className="text-3xl text-purple-600 font-bold mb-2">∞</div>
                    <h4 className="font-semibold mb-2">Lasting Confidence</h4>
                    <p className="text-sm text-gray-600">Gain unshakeable confidence in your ability to solve any coding problem.</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                Loved by Developers Worldwide
              </p>
              <p className="text-lg text-gray-600 mt-2">
                See how developers transformed their careers by escaping tutorial hell
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-3">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p className="text-gray-700 italic">
                    &quot;Anti-Tutorial Hell changed how I learn. Instead of copying code, I now solve real problems and understand the why behind every solution.&quot;
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">SC</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Chen</div>
                    <div className="text-sm text-gray-600">Frontend Developer at Google</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-3">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p className="text-gray-700 italic">
                    &quot;The struggle-first approach built my confidence. Now I tackle any coding challenge without fear of getting stuck.&quot;
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">MR</span>
                  </div>
                  <div>
                    <div className="font-semibold">Marcus Rodriguez</div>
                    <div className="text-sm text-gray-600">Full Stack Engineer at Microsoft</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-3">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p className="text-gray-700 italic">
                    &quot;From tutorial hell to problem-solving master in 3 months. The best investment in my coding journey.&quot;
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">PP</span>
                  </div>
                  <div>
                    <div className="font-semibold">Priya Patel</div>
                    <div className="text-sm text-gray-600">Software Engineer at Meta</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                FAQ
              </h2>
              <p className="text-xl text-gray-600">
                Frequently Asked Questions
              </p>
              <p className="text-lg text-gray-600 mt-2">
                Everything you need to know about Anti-Tutorial Hell
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How is this different from other coding platforms?
                </h3>
                <p className="text-gray-700">
                  Unlike traditional platforms that provide step-by-step instructions, we give you real problems without hand-holding. You&apos;ll research, struggle, and discover solutions independently, building genuine problem-solving skills.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is this suitable for complete beginners?
                </h3>
                <p className="text-gray-700">
                  Yes! We start with beginner-friendly challenges but expect you to research and learn. This approach builds stronger foundations than following tutorials. Our hint system provides guidance when you&apos;re truly stuck.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What technologies can I learn?
                </h3>
                <p className="text-gray-700">
                  We cover HTML/CSS, JavaScript, TypeScript, React, Node.js, databases, and more. Each challenge mirrors real-world development scenarios you&apos;ll encounter in your career.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How long does it take to see results?
                </h3>
                <p className="text-gray-700">
                  Most developers notice improved confidence within 2-3 weeks. The struggle-first approach accelerates learning because you&apos;re forced to understand concepts deeply rather than memorizing steps.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is there community support?
                </h3>
                <p className="text-gray-700">
                  Yes! Our community helps each other without giving away solutions. You&apos;ll get hints, guidance, and encouragement while maintaining the challenge&apos;s learning value.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Ready to Escape Tutorial Hell CTA */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Escape Tutorial Hell?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of developers who chose struggle-first learning and built unshakeable coding confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              {userId ? (
                <Button href="/dashboard" size="xl" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Your Journey Free
                </Button>
              ) : (
                <Button href="/sign-up" size="xl" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Your Journey Free
                </Button>
              )}
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-blue-600">
                Watch Success Stories
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">10,000+</div>
                <div className="text-blue-100">Developers Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">95%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-blue-100">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">∞</div>
                <div className="text-blue-100">Confidence</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Start Learning CTA */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <h3 className="text-2xl font-bold text-gray-300 mb-4">
              Transform Your Coding Skills Today
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers who are mastering modern web development with our interactive tutorials and real-world challenges.
            </p>
            
            {userId ? (
              <Button href="/learning-portal" size="xl" className="shadow-2xl">
                Start Learning Now
              </Button>
            ) : (
              <Button href="/sign-up" size="xl" className="shadow-2xl">
                Start Learning Now
              </Button>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Anti-Tutorial Hell
            </h3>
            <p className="text-gray-600 mb-8">
              © 2024 Anti-Tutorial Hell. Learn by Doing, Not Following.
            </p>
            
            <div className="flex justify-center space-x-8 mb-8">
              <Link href="/learning-portal" className="text-gray-600 hover:text-blue-600 transition-colors">
                Learning Portal
              </Link>
              <Link href="/challenges" className="text-gray-600 hover:text-blue-600 transition-colors">
                Challenges
              </Link>
              <Link href="/community" className="text-gray-600 hover:text-blue-600 transition-colors">
                Community
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </Link>
            </div>
            
            <div className="text-sm text-gray-500">
              <span className="mr-4">🏆 Tour Guide</span>
              <span>Helping developers escape tutorial hell since 2024</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
