import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function Home() {
  const { userId } = await auth();
  
  // Redirect authenticated users to dashboard
  if (userId) {
    redirect('/dashboard');
  }

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
                href="/sign-in"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
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
                href="/sign-up"
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

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Percept Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our anti-tutorial approach builds the skills you actually need as a developer
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
                  Get problems, not solutions. Learn to research, experiment, and build independently like real developers do.
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
                  Solve actual development problems across HTML, CSS, JavaScript, TypeScript, React, and APIs.
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
                  Get progressive nudges when stuck, without spoiling the solution. Learn to think, not memorize.
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
                { name: 'HTML', color: 'bg-orange-100 text-orange-800 border-orange-200', emoji: '🌐' },
                { name: 'CSS', color: 'bg-blue-100 text-blue-800 border-blue-200', emoji: '🎨' },
                { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800 border-yellow-200', emoji: '⚡' },
                { name: 'TypeScript', color: 'bg-blue-100 text-blue-800 border-blue-200', emoji: '📘' },
                { name: 'React', color: 'bg-cyan-100 text-cyan-800 border-cyan-200', emoji: '⚛️' },
                { name: 'APIs', color: 'bg-green-100 text-green-800 border-green-200', emoji: '🔌' },
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
                  quote: "Finally, a platform that doesn't hold your hand. I learned more in 2 weeks than 6 months of tutorials.",
                  author: "Sarah Chen",
                  role: "Frontend Developer at Google",
                  avatar: "👩‍💻"
                },
                {
                  quote: "The real-world challenges prepared me for actual job interviews. Got hired after 3 months!",
                  author: "Marcus Johnson",
                  role: "Full-Stack Developer",
                  avatar: "👨‍💻"
                },
                {
                  quote: "Percept taught me to think like a developer, not just copy code. Game changer for my career.",
                  author: "Elena Rodriguez",
                  role: "React Developer at Stripe",
                  avatar: "👩‍🚀"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
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
                  answer: "Unlike tutorials that provide step-by-step instructions, Percept gives you real problems to solve independently. You'll learn to research, experiment, and debug like professional developers do."
                },
                {
                  question: "What if I get stuck on a challenge?",
                  answer: "Our AI-powered hint system provides progressive nudges without spoiling the solution. You'll get just enough guidance to keep learning without becoming dependent on hand-holding."
                },
                {
                  question: "Do I need prior coding experience?",
                  answer: "We have challenges for all skill levels, from complete beginners to experienced developers looking to master new technologies. Start where you're comfortable and progress at your own pace."
                },
                {
                  question: "How much time should I dedicate?",
                  answer: "Most challenges take 30-120 minutes. We recommend dedicating at least 1 hour per day for consistent progress. Quality practice matters more than quantity."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">
                    {faq.answer}
                  </p>
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
              Join developers who&apos;ve transformed their skills through real-world problem solving
            </p>
            <Link
              href="/sign-up"
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
            <div className="flex justify-center space-x-6">
              <Link href="/sign-up" className="text-gray-400 hover:text-white transition-colors">
                Get Started
              </Link>
              <Link href="/sign-in" className="text-gray-400 hover:text-white transition-colors">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
