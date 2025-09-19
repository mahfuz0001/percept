import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default async function ChallengesPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  const challenges = [
    {
      id: 1,
      title: "Build a Todo App",
      description: "Create a functional todo application with add, delete, and mark complete features",
      difficulty: "Beginner",
      technologies: ["HTML", "CSS", "JavaScript"],
      points: 150,
      time: "1-2 hours",
      completed: true,
      category: "Web Fundamentals"
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "Build a weather app that fetches data from an API and displays current conditions",
      difficulty: "Intermediate",
      technologies: ["React", "API", "CSS"],
      points: 250,
      time: "2-3 hours",
      completed: false,
      category: "React & APIs"
    },
    {
      id: 3,
      title: "E-commerce Cart",
      description: "Implement a shopping cart with add/remove items, quantity management, and total calculation",
      difficulty: "Intermediate",
      technologies: ["React", "State Management"],
      points: 300,
      time: "3-4 hours",
      completed: false,
      category: "React Advanced"
    },
    {
      id: 4,
      title: "Authentication System",
      description: "Build a complete auth system with login, signup, and protected routes",
      difficulty: "Advanced",
      technologies: ["Node.js", "JWT", "Database"],
      points: 400,
      time: "4-5 hours",
      completed: false,
      category: "Backend"
    },
    {
      id: 5,
      title: "Real-time Chat App",
      description: "Create a real-time chat application with multiple rooms and user presence",
      difficulty: "Advanced",
      technologies: ["WebSockets", "Node.js", "React"],
      points: 500,
      time: "6-8 hours",
      completed: false,
      category: "Full Stack"
    },
    {
      id: 6,
      title: "CSS Grid Gallery",
      description: "Design a responsive image gallery using CSS Grid with hover effects",
      difficulty: "Beginner",
      technologies: ["HTML", "CSS", "Grid"],
      points: 100,
      time: "1 hour",
      completed: true,
      category: "CSS Mastery"
    }
  ];

  const categories = ["All", "Web Fundamentals", "React & APIs", "React Advanced", "Backend", "Full Stack", "CSS Mastery"];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/dashboard" className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">Percept</h1>
                <span className="ml-2 text-sm text-gray-500">Challenges</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Dashboard
                </Link>
                <Link href="/challenges" className="text-blue-600 font-medium">
                  Challenges
                </Link>
                <Link href="/profile" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Coding Challenges 🚀
          </h2>
          <p className="text-lg text-gray-600">
            Choose your challenge and start building real skills. No hand-holding, just problem-solving.
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{challenges.filter(c => c.completed).length}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{challenges.length - challenges.filter(c => c.completed).length}</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{challenges.filter(c => c.completed).reduce((sum, c) => sum + c.points, 0)}</div>
              <div className="text-sm text-gray-600">Points Earned</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{challenges.length}</div>
              <div className="text-sm text-gray-600">Total Challenges</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Challenges</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <div 
              key={challenge.id} 
              className={`bg-white rounded-lg shadow-sm border-2 p-6 hover:shadow-md transition-all duration-300 ${
                challenge.completed ? 'border-green-200 bg-green-50' : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{challenge.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{challenge.category}</p>
                </div>
                {challenge.completed && (
                  <div className="flex-shrink-0">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      ✓ Completed
                    </span>
                  </div>
                )}
              </div>

              <p className="text-gray-700 mb-4 text-sm">{challenge.description}</p>

              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  challenge.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                  challenge.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {challenge.difficulty}
                </span>
                <span className="text-sm text-gray-600">{challenge.time}</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {challenge.technologies.map((tech, index) => (
                  <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-600">{challenge.points} points</span>
                {challenge.completed ? (
                  <span className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-600 cursor-not-allowed">
                    Completed
                  </span>
                ) : (
                  <Link
                    href={`/challenges/${challenge.id}`}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Start Challenge
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">More Challenges Coming Soon! 🎯</h3>
          <p className="text-gray-600 mb-6">
            We&apos;re constantly adding new challenges across different technologies and difficulty levels.
            Want to see a specific challenge? Let us know!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Request a Challenge
          </button>
        </div>
      </main>
    </div>
  );
}