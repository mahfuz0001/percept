import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/shared/Button';
import { Card, CardContent, CardHeader } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';

export default async function LearningPortalPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  const learningPaths = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Master HTML, CSS, and JavaScript from scratch",
      level: "Beginner",
      duration: "8 weeks",
      challenges: 24,
      progress: 65,
      technologies: ["HTML", "CSS", "JavaScript"],
      enrolled: 1240
    },
    {
      id: 2,
      title: "React Mastery Path",
      description: "Build modern web applications with React and its ecosystem",
      level: "Intermediate",
      duration: "12 weeks",
      challenges: 32,
      progress: 20,
      technologies: ["React", "TypeScript", "Next.js"],
      enrolled: 890
    },
    {
      id: 3,
      title: "Full-Stack Developer Journey",
      description: "Complete full-stack development with modern technologies",
      level: "Advanced",
      duration: "16 weeks",
      challenges: 48,
      progress: 0,
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      enrolled: 567
    }
  ];

  const featuredCourses = [
    {
      title: "API Integration Masterclass",
      instructor: "Sarah Chen",
      rating: 4.9,
      students: 2340,
      duration: "4h 30m",
      level: "Intermediate"
    },
    {
      title: "TypeScript for React Developers",
      instructor: "Marcus Johnson",
      rating: 4.8,
      students: 1890,
      duration: "6h 15m",
      level: "Intermediate"
    },
    {
      title: "Database Design Fundamentals",
      instructor: "Elena Rodriguez",
      rating: 4.9,
      students: 3210,
      duration: "8h 45m",
      level: "Beginner"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/dashboard" className="flex items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Anti-Tutorial Hell
                </h1>
                <span className="ml-2 text-sm text-gray-500">Learning Portal</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Dashboard
                </Link>
                <Link href="/challenges" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Challenges
                </Link>
                <Link href="/learning-portal" className="text-blue-600 font-medium">
                  Learning Portal
                </Link>
                <Link href="/community" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Community
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
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Learning Portal 🎓
          </h2>
          <p className="text-lg text-gray-600">
            Structured learning paths designed to build real-world skills progressively
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">3</div>
              <div className="text-sm text-gray-600">Active Paths</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">48</div>
              <div className="text-sm text-gray-600">Completed Challenges</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">2,450</div>
              <div className="text-sm text-gray-600">Total XP</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">Level 5</div>
              <div className="text-sm text-gray-600">Current Level</div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Paths */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Your Learning Paths</h3>
            <Button variant="outline">Browse All Paths</Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map((path) => (
              <Card key={path.id} hover className="relative">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={path.level === 'Beginner' ? 'success' : path.level === 'Intermediate' ? 'info' : 'purple'}>
                      {path.level}
                    </Badge>
                    <span className="text-sm text-gray-500">{path.duration}</span>
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{path.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{path.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {path.technologies.map((tech, index) => (
                      <Badge key={index} variant="default" size="sm">{tech}</Badge>
                    ))}
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{path.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${path.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{path.challenges} challenges</span>
                    <span>{path.enrolled} enrolled</span>
                  </div>
                  
                  <Button href={`/learning-portal/paths/${path.id}`} className="w-full">
                    Continue Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Courses */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Featured Courses</h3>
            <Button variant="outline">View All Courses</Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course, index) => (
              <Card key={index} hover>
                <CardContent>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{course.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">by {course.instructor}</p>
                  
                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">⭐</span>
                      <span className="font-medium">{course.rating}</span>
                    </div>
                    <span className="text-gray-600">{course.students} students</span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <Badge variant="info" size="sm">{course.level}</Badge>
                    <span className="text-gray-600">{course.duration}</span>
                  </div>
                  
                  <Button href={`/courses/${index + 1}`} className="w-full" variant="outline">
                    View Course
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* AI Recommendations */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Recommendations</h3>
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Recommended Next Steps
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Based on your progress in React Mastery Path, we recommend diving deeper into state management patterns and API integration.
                  </p>
                  <div className="flex gap-3">
                    <Button size="sm">Advanced React Patterns</Button>
                    <Button variant="outline" size="sm">Redux Toolkit Challenge</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}