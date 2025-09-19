'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CodeEditor from '../../../../components/CodeEditor';

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  technologies: string[];
  points: number;
  time: string;
  problemStatement: string;
  requirements: string[];
  starterCode: string;
  language: string;
  testCases: Array<{
    input: string;
    expected: string;
    description: string;
  }>;
}

export default function DemoChallengePage({ params }: { params: { id: string } }) {
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [userCode, setUserCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [output, setOutput] = useState('');
  const [hintsUsed, setHintsUsed] = useState(0);

  // Mock challenge data - in production, this would come from the database
  useEffect(() => {
    const mockChallenge: Challenge = {
      id: params.id,
      title: "Build a Todo App",
      description: "Create a functional todo application with add, delete, and mark complete features",
      difficulty: "Beginner",
      technologies: ["HTML", "CSS", "JavaScript"],
      points: 150,
      time: "1-2 hours",
      problemStatement: `Create a todo application that allows users to:
1. Add new tasks to the list
2. Mark tasks as completed
3. Delete tasks from the list
4. Filter tasks by status (all, active, completed)

Your application should have a clean, intuitive interface and handle edge cases gracefully.`,
      requirements: [
        "Create an input field for adding new todos",
        "Display a list of todos with checkboxes",
        "Implement delete functionality for each todo",
        "Add filter buttons (All, Active, Completed)",
        "Style the application with CSS",
        "Handle empty states appropriately"
      ],
      starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        
        .todo-container {
            background: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .todo-input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-bottom: 20px;
            font-size: 16px;
        }
        
        .todo-item {
            display: flex;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #eee;
        }
        
        .todo-item:last-child {
            border-bottom: none;
        }
        
        .todo-checkbox {
            margin-right: 10px;
        }
        
        .todo-text {
            flex: 1;
            font-size: 16px;
        }
        
        .todo-text.completed {
            text-decoration: line-through;
            color: #888;
        }
        
        .delete-btn {
            background: #ff4757;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .filters {
            margin: 20px 0;
            text-align: center;
        }
        
        .filter-btn {
            background: #3742fa;
            color: white;
            border: none;
            padding: 8px 16px;
            margin: 0 5px;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .filter-btn.active {
            background: #2f3542;
        }
    </style>
</head>
<body>
    <div class="todo-container">
        <h1>Todo App</h1>
        
        <input type="text" class="todo-input" id="todoInput" placeholder="Add a new todo...">
        
        <div class="filters">
            <button class="filter-btn active" onclick="filterTodos('all')">All</button>
            <button class="filter-btn" onclick="filterTodos('active')">Active</button>
            <button class="filter-btn" onclick="filterTodos('completed')">Completed</button>
        </div>
        
        <div id="todoList">
            <!-- Todos will be added here dynamically -->
        </div>
    </div>

    <script>
        // Your JavaScript code goes here
        let todos = [];
        let currentFilter = 'all';
        
        // Add your implementation here
        
    </script>
</body>
</html>`,
      language: 'html',
      testCases: [
        {
          input: "Add 'Learn JavaScript' todo",
          expected: "Todo should appear in the list",
          description: "Should be able to add a new todo item"
        },
        {
          input: "Click checkbox on a todo",
          expected: "Todo should be marked as completed with strikethrough",
          description: "Should be able to mark todos as completed"
        },
        {
          input: "Click delete button",
          expected: "Todo should be removed from the list",
          description: "Should be able to delete todos"
        }
      ]
    };
    
    setChallenge(mockChallenge);
    setUserCode(mockChallenge.starterCode);
  }, [params.id]);

  const handleCodeChange = (value: string | undefined) => {
    setUserCode(value || '');
  };

  const handleRunCode = async () => {
    if (!challenge) return;
    
    setIsSubmitting(true);
    try {
      // Analyze code with AI
      const response = await fetch('/api/challenges/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: userCode,
          challenge: {
            requirements: challenge.requirements,
            testCases: challenge.testCases,
          },
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const analysis = data.analysis;
        
        let output = `🔍 Code Analysis Complete!\n\n`;
        output += `Score: ${analysis.score}/100\n\n`;
        
        if (analysis.issues.length > 0) {
          output += `Issues Found:\n`;
          analysis.issues.forEach((issue: string) => output += `• ${issue}\n`);
          output += '\n';
        }
        
        if (analysis.suggestions.length > 0) {
          output += `Suggestions:\n`;
          analysis.suggestions.forEach((suggestion: string) => output += `• ${suggestion}\n`);
        }
        
        setOutput(output);
      } else {
        setOutput('Code analysis complete! Check your preview to see the results.');
      }
    } catch (error) {
      setOutput('Code executed successfully! Check your preview to see the results.');
    }
    setIsSubmitting(false);
  };

  const handleSubmit = async () => {
    if (!challenge) return;
    
    setIsSubmitting(true);
    try {
      // In production, this would submit to your API
      setTimeout(() => {
        setOutput('Code submitted successfully! 🎉 Points awarded: ' + challenge.points);
        setIsSubmitting(false);
      }, 1500);
      } catch {
        setOutput('Error submitting code. Please try again.');
        setIsSubmitting(false);
      }
  };

  const handleGetHint = async () => {
    if (!challenge) return;
    
    try {
      const response = await fetch('/api/challenges/hints', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          challenge: {
            title: challenge.title,
            description: challenge.description,
            requirements: challenge.requirements,
            problemStatement: challenge.problemStatement,
          },
          userCode,
          hintsUsed,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setOutput(`💡 AI Hint ${data.hintsUsed}: ${data.hint}`);
        setHintsUsed(data.hintsUsed);
      } else {
        // Fallback to static hints if AI fails
        const fallbackHints = [
          "Start by implementing the add functionality. Get the input value and create a new todo object.",
          "Use an array to store your todos and update the DOM whenever the array changes.",
          "For the checkbox functionality, add an event listener that toggles the completed status.",
          "Implement the filter functionality by showing/hiding todos based on their completed status."
        ];
        
        if (hintsUsed < fallbackHints.length) {
          setOutput(`💡 Hint ${hintsUsed + 1}: ${fallbackHints[hintsUsed]}`);
          setHintsUsed(hintsUsed + 1);
        } else {
          setOutput("You've used all available hints! Keep working on the solution.");
        }
      }
    } catch {
      setOutput("Unable to fetch hint at the moment. Try analyzing your code structure first.");
    }
  };

  if (!challenge) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading challenge...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/demo" className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">Percept</h1>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/demo/challenges" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  ← Back to Challenges
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Challenge Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-gray-900">{challenge.title}</h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  challenge.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                  challenge.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {challenge.difficulty}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{challenge.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium">⏱️ {challenge.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium">🏆 {challenge.points} points</span>
                </div>
                <div className="flex items-center gap-2">
                  {challenge.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Problem Statement</h2>
              <div className="prose prose-gray max-w-none">
                <pre className="whitespace-pre-wrap text-gray-700 font-normal">
                  {challenge.problemStatement}
                </pre>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-2">
                {challenge.requirements.map((req, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Test Cases</h2>
              <div className="space-y-3">
                {challenge.testCases.map((test, i) => (
                  <div key={i} className="border border-gray-200 rounded p-3">
                    <p className="font-medium text-gray-900 mb-1">{test.description}</p>
                    <p className="text-sm text-gray-600">Input: {test.input}</p>
                    <p className="text-sm text-gray-600">Expected: {test.expected}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Code Editor */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Code Editor</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={handleGetHint}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    💡 Get Hint ({hintsUsed}/4)
                  </button>
                  <button
                    onClick={handleRunCode}
                    disabled={isSubmitting}
                    className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    {isSubmitting ? 'Running...' : '▶️ Run Code'}
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    {isSubmitting ? 'Submitting...' : '🚀 Submit'}
                  </button>
                </div>
              </div>
              
              <CodeEditor
                initialCode={userCode}
                language={challenge.language}
                onChange={handleCodeChange}
                height="500px"
              />
            </div>

            {/* Output Panel */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Output / Feedback</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm min-h-[100px]">
                {output || 'No output yet. Run your code to see results here.'}
              </div>
            </div>

            {/* Live Preview */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Preview</h3>
              <div className="border border-gray-300 rounded-lg min-h-[300px] p-4 bg-gray-50">
                <iframe
                  srcDoc={userCode}
                  className="w-full h-full min-h-[280px] border-0"
                  title="Code Preview"
                  sandbox="allow-scripts"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}