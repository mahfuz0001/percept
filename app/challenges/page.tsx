import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/shared/Button";
import { Card, CardContent, CardHeader } from "@/components/shared/Card";
import { Badge } from "@/components/shared/Badge";
import { Header } from "@/components/shared/Header";

export default async function ChallengesPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const challenges = [
    // Web Fundamentals
    {
      id: 1,
      title: "Build a Todo App",
      description:
        "Create a functional todo application with add, delete, and mark complete features",
      difficulty: "Beginner",
      technologies: ["HTML", "CSS", "JavaScript"],
      points: 150,
      time: "1-2 hours",
      completed: true,
      category: "Web Fundamentals",
    },
    {
      id: 2,
      title: "Responsive Portfolio",
      description:
        "Design and build a responsive portfolio website showcasing your projects",
      difficulty: "Beginner",
      technologies: ["HTML", "CSS", "Flexbox", "Grid"],
      points: 200,
      time: "2-3 hours",
      completed: true,
      category: "Web Fundamentals",
    },
    {
      id: 3,
      title: "Interactive Calculator",
      description:
        "Build a fully functional calculator with keyboard support and memory functions",
      difficulty: "Beginner",
      technologies: ["HTML", "CSS", "JavaScript"],
      points: 175,
      time: "2-3 hours",
      completed: false,
      category: "Web Fundamentals",
    },

    // React & APIs
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "Build a weather app that fetches data from an API and displays current conditions",
      difficulty: "Intermediate",
      technologies: ["React", "API", "CSS"],
      points: 250,
      time: "2-3 hours",
      completed: false,
      category: "React & APIs",
    },
    {
      id: 5,
      title: "Movie Search Engine",
      description:
        "Create a movie search app using TMDB API with filters and detailed views",
      difficulty: "Intermediate",
      technologies: ["React", "API", "Routing"],
      points: 300,
      time: "3-4 hours",
      completed: false,
      category: "React & APIs",
    },
    {
      id: 6,
      title: "Cryptocurrency Tracker",
      description:
        "Build a real-time crypto price tracker with charts and portfolio tracking",
      difficulty: "Intermediate",
      technologies: ["React", "WebSocket", "Charts"],
      points: 350,
      time: "4-5 hours",
      completed: false,
      category: "React & APIs",
    },

    // React Advanced
    {
      id: 7,
      title: "E-commerce Cart",
      description:
        "Implement a shopping cart with add/remove items, quantity management, and total calculation",
      difficulty: "Intermediate",
      technologies: ["React", "State Management", "Context"],
      points: 300,
      time: "3-4 hours",
      completed: false,
      category: "React Advanced",
    },
    {
      id: 8,
      title: "Real-time Chat App",
      description:
        "Build a real-time chat application with multiple rooms and user authentication",
      difficulty: "Advanced",
      technologies: ["React", "Socket.io", "Node.js"],
      points: 500,
      time: "6-8 hours",
      completed: false,
      category: "React Advanced",
    },
    {
      id: 9,
      title: "Task Management Board",
      description:
        "Create a Kanban-style task board with drag & drop functionality",
      difficulty: "Advanced",
      technologies: ["React", "DnD", "Local Storage"],
      points: 450,
      time: "5-6 hours",
      completed: false,
      category: "React Advanced",
    },

    // Backend Challenges
    {
      id: 10,
      title: "REST API with Authentication",
      description:
        "Build a complete REST API with JWT authentication and database integration",
      difficulty: "Intermediate",
      technologies: ["Node.js", "Express", "JWT", "MongoDB"],
      points: 400,
      time: "4-5 hours",
      completed: false,
      category: "Backend",
    },
    {
      id: 11,
      title: "GraphQL Server",
      description:
        "Create a GraphQL server with resolvers, mutations, and subscriptions",
      difficulty: "Advanced",
      technologies: ["GraphQL", "Node.js", "Apollo"],
      points: 550,
      time: "6-7 hours",
      completed: false,
      category: "Backend",
    },
    {
      id: 12,
      title: "Microservices Architecture",
      description:
        "Design and implement a microservices system with API gateway",
      difficulty: "Advanced",
      technologies: ["Docker", "Node.js", "API Gateway"],
      points: 700,
      time: "8-10 hours",
      completed: false,
      category: "Backend",
    },

    // Full Stack
    {
      id: 13,
      title: "Blog Platform",
      description:
        "Build a complete blog platform with CMS, user authentication, and SEO optimization",
      difficulty: "Advanced",
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
      points: 600,
      time: "8-10 hours",
      completed: false,
      category: "Full Stack",
    },
    {
      id: 14,
      title: "Social Media Clone",
      description:
        "Create a social media app with posts, comments, likes, and real-time notifications",
      difficulty: "Advanced",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      points: 800,
      time: "10-12 hours",
      completed: false,
      category: "Full Stack",
    },
    {
      id: 15,
      title: "E-learning Platform",
      description:
        "Build a complete e-learning platform with video streaming, progress tracking, and payments",
      difficulty: "Expert",
      technologies: ["Next.js", "Stripe", "AWS", "PostgreSQL"],
      points: 1000,
      time: "15-20 hours",
      completed: false,
      category: "Full Stack",
    },

    // CSS Mastery
    {
      id: 16,
      title: "CSS Grid Gallery",
      description:
        "Design a responsive image gallery using CSS Grid with hover effects",
      difficulty: "Beginner",
      technologies: ["HTML", "CSS", "Grid"],
      points: 100,
      time: "1 hour",
      completed: true,
      category: "CSS Mastery",
    },
    {
      id: 17,
      title: "3D CSS Animations",
      description:
        "Create impressive 3D animations and transformations using pure CSS",
      difficulty: "Intermediate",
      technologies: ["CSS", "Animations", "3D Transforms"],
      points: 275,
      time: "3-4 hours",
      completed: false,
      category: "CSS Mastery",
    },
    {
      id: 18,
      title: "CSS Framework",
      description:
        "Build your own mini CSS framework with utilities and components",
      difficulty: "Advanced",
      technologies: ["CSS", "SASS", "Design Systems"],
      points: 500,
      time: "6-8 hours",
      completed: false,
      category: "CSS Mastery",
    },

    // TypeScript
    {
      id: 19,
      title: "Type-Safe API Client",
      description:
        "Build a fully type-safe API client with TypeScript generics and error handling",
      difficulty: "Intermediate",
      technologies: ["TypeScript", "Generics", "API"],
      points: 350,
      time: "3-4 hours",
      completed: false,
      category: "TypeScript",
    },
    {
      id: 20,
      title: "Advanced Type Utilities",
      description:
        "Create complex TypeScript utility types and conditional types",
      difficulty: "Advanced",
      technologies: ["TypeScript", "Utility Types", "Conditional Types"],
      points: 450,
      time: "4-5 hours",
      completed: false,
      category: "TypeScript",
    },

    // DevOps & Deployment
    {
      id: 21,
      title: "CI/CD Pipeline",
      description:
        "Set up automated testing, building, and deployment pipeline",
      difficulty: "Intermediate",
      technologies: ["GitHub Actions", "Docker", "AWS"],
      points: 400,
      time: "4-5 hours",
      completed: false,
      category: "DevOps",
    },
    {
      id: 22,
      title: "Kubernetes Deployment",
      description:
        "Deploy and manage applications using Kubernetes orchestration",
      difficulty: "Advanced",
      technologies: ["Kubernetes", "Docker", "Helm"],
      points: 600,
      time: "6-8 hours",
      completed: false,
      category: "DevOps",
    },

    // AI & Machine Learning
    {
      id: 23,
      title: "AI Chatbot",
      description:
        "Build an intelligent chatbot using OpenAI API with conversation memory",
      difficulty: "Intermediate",
      technologies: ["JavaScript", "OpenAI API", "NLP"],
      points: 400,
      time: "4-5 hours",
      completed: false,
      category: "AI/ML",
    },
    {
      id: 24,
      title: "Image Classification App",
      description: "Create an image classification app using TensorFlow.js",
      difficulty: "Advanced",
      technologies: ["TensorFlow.js", "React", "Machine Learning"],
      points: 550,
      time: "6-7 hours",
      completed: false,
      category: "AI/ML",
    },
  ];

  const categories = [
    "All",
    "Web Fundamentals",
    "React & APIs",
    "React Advanced",
    "Backend",
    "Full Stack",
    "CSS Mastery",
    "TypeScript",
    "DevOps",
    "AI/ML",
  ];

  const difficulties = [
    "All",
    "Beginner",
    "Intermediate",
    "Advanced",
    "Expert",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Coding Challenges 🚀
          </h2>
          <p className="text-lg text-gray-600">
            Choose your challenge and start building real skills. No
            hand-holding, just problem-solving.
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">24</div>
              <div className="text-sm text-gray-600">Total Challenges</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">3</div>
              <div className="text-sm text-gray-600">Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">650</div>
              <div className="text-sm text-gray-600">Points Earned</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">21</div>
              <div className="text-sm text-gray-600">In Progress</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <input
                type="text"
                placeholder="Search challenges..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-end">
              <Button>AI Suggest Challenge</Button>
            </div>
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <Card key={challenge.id} hover className="relative">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    variant={
                      challenge.difficulty === "Beginner"
                        ? "success"
                        : challenge.difficulty === "Intermediate"
                        ? "info"
                        : challenge.difficulty === "Advanced"
                        ? "purple"
                        : "danger"
                    }
                  >
                    {challenge.difficulty}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-1">⏱️</span>
                    {challenge.time}
                  </div>
                </div>

                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {challenge.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3">
                  {challenge.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-1 mb-3">
                  {challenge.technologies.map((tech, index) => (
                    <Badge key={index} variant="default" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-1">⭐</span>
                    <span className="font-semibold">
                      {challenge.points} pts
                    </span>
                  </div>
                  <Badge variant="default" size="sm">
                    {challenge.category}
                  </Badge>
                </div>

                {challenge.completed ? (
                  <div className="flex items-center justify-between">
                    <Badge variant="success" icon="✅">
                      Completed
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      href={`/challenges/${challenge.id}`}
                    >
                      View Solution
                    </Button>
                  </div>
                ) : (
                  <Button
                    href={`/challenges/${challenge.id}`}
                    className="w-full"
                  >
                    Start Challenge
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Challenge Generator */}
        <section className="mt-12">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  AI Challenge Generator
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Can&apos;t find the perfect challenge? Describe what you want
                  to build, and our AI will generate a custom challenge tailored
                  to your skill level and interests.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                  <input
                    type="text"
                    placeholder="E.g., 'Build a music player with React and Spotify API'"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Generate Challenge
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
