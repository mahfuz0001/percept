import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/shared/Button';
import { Card, CardContent, CardHeader } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';

export default async function CommunityPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  // Mock community data - in real app this would come from database
  const discussions = [
    {
      id: 1,
      title: "How to handle async operations in React without useEffect?",
      content: "I've been struggling with managing async data fetching in React components. I know useEffect can work, but I've heard there are better patterns...",
      author: {
        username: "ReactLearner123",
        avatar: "👨‍💻",
        level: 3,
        reputation: 245
      },
      tags: ["React", "Async", "Best Practices"],
      votes: 15,
      answers: 7,
      views: 342,
      createdAt: "2 hours ago",
      hasAcceptedAnswer: true,
      aiSuggested: true
    },
    {
      id: 2,
      title: "TypeScript generic constraints: When and how to use them?",
      content: "I'm working on a TypeScript project and keep seeing generic constraints like `T extends SomeType`. Can someone explain when and why I should use them?",
      author: {
        username: "TypeScriptNovice",
        avatar: "📘",
        level: 2,
        reputation: 123
      },
      tags: ["TypeScript", "Generics", "Type Safety"],
      votes: 8,
      answers: 3,
      views: 156,
      createdAt: "4 hours ago",
      hasAcceptedAnswer: false,
      aiSuggested: false
    },
    {
      id: 3,
      title: "Database design for scalable chat application",
      content: "Building a chat app and wondering about the best database schema design. Should I use SQL or NoSQL? How to handle message threading and user relationships?",
      author: {
        username: "FullStackBuilder",
        avatar: "🏗️",
        level: 6,
        reputation: 567
      },
      tags: ["Database", "Architecture", "Chat App", "Scalability"],
      votes: 23,
      answers: 12,
      views: 891,
      createdAt: "1 day ago",
      hasAcceptedAnswer: true,
      aiSuggested: true
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox: Which one for responsive layouts?",
      content: "I'm always confused about when to use CSS Grid versus Flexbox. Can someone share practical examples of when each one is the better choice?",
      author: {
        username: "CSSConfused",
        avatar: "🎨",
        level: 4,
        reputation: 321
      },
      tags: ["CSS", "Layout", "Responsive Design"],
      votes: 12,
      answers: 5,
      views: 267,
      createdAt: "6 hours ago",
      hasAcceptedAnswer: false,
      aiSuggested: false
    },
    {
      id: 5,
      title: "Best practices for API error handling in frontend apps",
      content: "What's the standard way to handle API errors in modern frontend applications? Should I use try-catch everywhere or implement a global error handler?",
      author: {
        username: "APIExplorer",
        avatar: "🔌",
        level: 5,
        reputation: 434
      },
      tags: ["API", "Error Handling", "Frontend", "Best Practices"],
      votes: 19,
      answers: 9,
      views: 523,
      createdAt: "3 hours ago",
      hasAcceptedAnswer: false,
      aiSuggested: true
    }
  ];

  const categories = [
    { name: "All Questions", count: 1247, icon: "💬" },
    { name: "React", count: 389, icon: "⚛️" },
    { name: "JavaScript", count: 456, icon: "⚡" },
    { name: "TypeScript", count: 234, icon: "📘" },
    { name: "CSS", count: 198, icon: "🎨" },
    { name: "Node.js", count: 167, icon: "🟢" },
    { name: "Database", count: 145, icon: "🗄️" },
    { name: "DevOps", count: 89, icon: "⚙️" }
  ];

  const topContributors = [
    { username: "CodeMentor", avatar: "🧙‍♂️", reputation: 2847, answers: 156 },
    { username: "ReactGuru", avatar: "⚛️", reputation: 2234, answers: 134 },
    { username: "TypeScriptMaster", avatar: "📘", reputation: 1987, answers: 98 },
    { username: "CSSWizard", avatar: "🎨", reputation: 1654, answers: 87 }
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
                <span className="ml-2 text-sm text-gray-500">Community</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Dashboard
                </Link>
                <Link href="/challenges" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Challenges
                </Link>
                <Link href="/learning-portal" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Learning Portal
                </Link>
                <Link href="/community" className="text-blue-600 font-medium">
                  Community
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button href="/community/ask">Ask Question</Button>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10 ring-2 ring-blue-500 hover:ring-blue-600 transition-all duration-300"
                  }
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <Card className="mb-6">
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <Link 
                      key={index}
                      href={`/community?category=${category.name.toLowerCase()}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="text-lg mr-2">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <Badge variant="default" size="sm">{category.count}</Badge>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900">Top Contributors</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topContributors.map((contributor, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-xl mr-2">{contributor.avatar}</span>
                        <div>
                          <div className="font-medium text-sm">{contributor.username}</div>
                          <div className="text-xs text-gray-500">{contributor.reputation} rep</div>
                        </div>
                      </div>
                      <Badge variant="success" size="sm">{contributor.answers}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  Community Q&A 💬
                </h2>
                <Button href="/community/ask">Ask Question</Button>
              </div>
              <p className="text-lg text-gray-600">
                Get help from the community and help others learn. Share knowledge, not just solutions.
              </p>
            </div>

            {/* Search and Filters */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <input 
                      type="text" 
                      placeholder="Search questions, answers, or users..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Latest</option>
                      <option>Most Voted</option>
                      <option>Most Answered</option>
                      <option>Unanswered</option>
                    </select>
                    <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Tags</option>
                      <option>React</option>
                      <option>JavaScript</option>
                      <option>TypeScript</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Questions List */}
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} hover>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      {/* Vote and Stats */}
                      <div className="flex flex-col items-center space-y-2 min-w-[80px]">
                        <div className="text-center">
                          <div className="text-xl font-bold text-gray-700">{discussion.votes}</div>
                          <div className="text-xs text-gray-500">votes</div>
                        </div>
                        <div className={`text-center px-2 py-1 rounded ${
                          discussion.hasAcceptedAnswer 
                            ? 'bg-green-100 text-green-800' 
                            : discussion.answers > 0 
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          <div className="text-sm font-bold">{discussion.answers}</div>
                          <div className="text-xs">answers</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-gray-600">{discussion.views}</div>
                          <div className="text-xs text-gray-500">views</div>
                        </div>
                      </div>

                      {/* Question Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <Link 
                            href={`/community/questions/${discussion.id}`}
                            className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            {discussion.title}
                          </Link>
                          {discussion.aiSuggested && (
                            <Badge variant="purple" size="sm" icon="🤖">AI Suggested</Badge>
                          )}
                        </div>
                        
                        <p className="text-gray-700 mb-3 line-clamp-2">
                          {discussion.content}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {discussion.tags.map((tag, index) => (
                            <Badge key={index} variant="default" size="sm">{tag}</Badge>
                          ))}
                        </div>
                        
                        {/* Author and Meta */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-lg mr-2">{discussion.author.avatar}</span>
                            <div>
                              <Link 
                                href={`/users/${discussion.author.username}`}
                                className="font-medium text-blue-600 hover:text-blue-800"
                              >
                                {discussion.author.username}
                              </Link>
                              <div className="text-sm text-gray-500">
                                Level {discussion.author.level} • {discussion.author.reputation} rep
                              </div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">
                            {discussion.createdAt}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>
        </div>

        {/* AI Assistant Banner */}
        <Card className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI-Powered Community Assistant
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Our AI analyzes community discussions and provides helpful suggestions, identifies similar questions, and offers initial guidance while maintaining the collaborative learning experience.
              </p>
              <div className="flex justify-center gap-4">
                <Button>Learn More</Button>
                <Button variant="outline">View AI Suggestions</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}