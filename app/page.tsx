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

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Percept Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our anti-tutorial approach builds the skills you actually need
                as a developer
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No Step-by-Step Guidance
                </h3>
                <p className="text-gray-600">
                  Get problems, not solutions. Learn to research, experiment,
                  and build independently like real developers do.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Real-World Challenges
                </h3>
                <p className="text-gray-600">
                  Solve actual development problems across HTML, CSS,
                  JavaScript, TypeScript, React, and APIs.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  AI-Powered Hints
                </h3>
                <p className="text-gray-600">
                  Get progressive nudges when stuck, without spoiling the
                  solution. Learn to think, not memorize.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Master Essential Technologies
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Build real skills across the full spectrum of web development
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                {
                  name: "HTML",
                  color: "bg-orange-100 text-orange-800 border-orange-200",
                  emoji: "🌐",
                },
                {
                  name: "CSS",
                  color: "bg-blue-100 text-blue-800 border-blue-200",
                  emoji: "🎨",
                },
                {
                  name: "JavaScript",
                  color: "bg-yellow-100 text-yellow-800 border-yellow-200",
                  emoji: "⚡",
                },
                {
                  name: "TypeScript",
                  color: "bg-blue-100 text-blue-800 border-blue-200",
                  emoji: "📘",
                },
                {
                  name: "React",
                  color: "bg-cyan-100 text-cyan-800 border-cyan-200",
                  emoji: "⚛️",
                },
                {
                  name: "APIs",
                  color: "bg-green-100 text-green-800 border-green-200",
                  emoji: "🔌",
                },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className={`${tech.color} border-2 rounded-xl p-6 text-center hover:shadow-lg transition-shadow`}
                >
                  <div className="text-3xl mb-3">{tech.emoji}</div>
                  <div className="font-semibold">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Developers Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real feedback from developers who broke free from tutorial hell
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Finally, a platform that doesn't hold your hand. I learned more in 2 weeks than 6 months of tutorials.",
                  author: "Sarah Chen",
                  role: "Frontend Developer at Google",
                  avatar: "👩‍💻",
                },
                {
                  quote:
                    "The real-world challenges prepared me for actual job interviews. Got hired after 3 months!",
                  author: "Marcus Johnson",
                  role: "Full-Stack Developer",
                  avatar: "👨‍💻",
                },
                {
                  quote:
                    "Percept taught me to think like a developer, not just copy code. Game changer for my career.",
                  author: "Elena Rodriguez",
                  role: "React Developer at Stripe",
                  avatar: "👩‍🚀",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How is this different from coding tutorials?",
                  answer:
                    "Unlike tutorials that provide step-by-step instructions, Percept gives you real problems to solve independently. You'll learn to research, experiment, and debug like professional developers do.",
                },
                {
                  question: "What if I get stuck on a challenge?",
                  answer:
                    "Our AI-powered hint system provides progressive nudges without spoiling the solution. You'll get just enough guidance to keep learning without becoming dependent on hand-holding.",
                },
                {
                  question: "Do I need prior coding experience?",
                  answer:
                    "We have challenges for all skill levels, from complete beginners to experienced developers looking to master new technologies. Start where you're comfortable and progress at your own pace.",
                },
                {
                  question: "How much time should I dedicate?",
                  answer:
                    "Most challenges take 30-120 minutes. We recommend dedicating at least 1 hour per day for consistent progress. Quality practice matters more than quantity.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
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
              Join developers who&apos;ve transformed their skills through
              real-world problem solving
            </p>
            {userId ? (
              <Link
                href="/dashboard"
                className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl inline-block"
              >
                Go to Your Dashboard
              </Link>
            ) : (
              <Link
                href="/sign-up"
                className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl inline-block"
              >
                Start Solving Real Problems
              </Link>
            )}
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
            <div className="flex justify-center space-x-6">
              {userId ? (
                <>
                  <Link
                    href="/dashboard"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/challenges"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Challenges
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/sign-up"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/sign-in"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
