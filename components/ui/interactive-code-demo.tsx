"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, Code2, Eye, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const codeExamples = [
  {
    id: "html",
    title: "HTML Basics",
    description: "Create your first webpage",
    code: `<div class="welcome-card">
  <h1>Hello, World!</h1>
  <p>Welcome to coding!</p>
  <button>Get Started</button>
</div>`,
    preview: `<div style="
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 2rem;
      border-radius: 12px;
      color: white;
      text-align: center;
      font-family: system-ui;
    ">
      <h1 style="margin: 0 0 1rem 0; font-size: 2rem;">Hello, World!</h1>
      <p style="margin: 0 0 1.5rem 0; opacity: 0.9;">Welcome to coding!</p>
      <button style="
        background: white;
        color: #667eea;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
      ">Get Started</button>
    </div>`,
  },
  {
    id: "css",
    title: "CSS Animation",
    description: "Make things move",
    code: `.bouncing-ball {
  width: 50px;
  height: 50px;
  background: #ff6b6b;
  border-radius: 50%;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
}`,
    preview: `<div style="padding: 2rem; background: #f8f9fa; border-radius: 12px; text-align: center;">
      <div style="
        width: 50px;
        height: 50px;
        background: #ff6b6b;
        border-radius: 50%;
        margin: 0 auto;
        animation: bounce 2s infinite;
      "></div>
      <style>
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
      </style>
    </div>`,
  },
  {
    id: "javascript",
    title: "JavaScript Magic",
    description: "Add interactivity",
    code: `function createConfetti() {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24'];
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.style.cssText = \`
      position: fixed;
      width: 10px;
      height: 10px;
      background: \${colors[Math.floor(Math.random() * colors.length)]};
      top: -10px;
      left: \${Math.random() * 100}%;
      animation: fall 3s linear forwards;
      border-radius: 50%;
    \`;
    document.body.appendChild(confetti);
  }
}`,
    preview: `<div style="padding: 2rem; background: #2d3748; color: white; border-radius: 12px; text-align: center;">
      <button onclick="createConfetti()" style="
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
        font-size: 1.1rem;
      ">🎉 Create Confetti!</button>
      <script>
        function createConfetti() {
          const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24'];
          for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = \`
              position: fixed;
              width: 8px;
              height: 8px;
              background: \${colors[Math.floor(Math.random() * colors.length)]};
              top: -10px;
              left: \${Math.random() * 100}%;
              animation: fall 2s linear forwards;
              border-radius: 50%;
              z-index: 1000;
            \`;
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 2000);
          }
        }
      </script>
      <style>
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      </style>
    </div>`,
  },
];

export function InteractiveCodeDemo() {
  const [currentExample, setCurrentExample] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [typedCode, setTypedCode] = useState("");
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const example = codeExamples[currentExample];

  useEffect(() => {
    setTypedCode("");
    setShowPreview(false);
    setIsPlaying(false);
  }, [currentExample]);

  const typeCode = async () => {
    setIsPlaying(true);
    setTypedCode("");

    const code = example.code;
    for (let i = 0; i <= code.length; i++) {
      setTypedCode(code.slice(0, i));
      await new Promise((resolve) => setTimeout(resolve, 30));
    }

    setIsPlaying(false);
    setShowPreview(true);

    // Mark step as completed
    if (!completedSteps.includes(currentExample)) {
      setCompletedSteps((prev) => [...prev, currentExample]);
    }
  };

  const resetDemo = () => {
    setTypedCode("");
    setShowPreview(false);
    setIsPlaying(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-6 h-6 text-purple-500" />
          <h3 className="text-2xl font-bold">Try it Yourself!</h3>
          <Sparkles className="w-6 h-6 text-blue-500" />
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          Watch code come to life as you type it
        </p>
      </motion.div>

      {/* Example Selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {codeExamples.map((ex, index) => (
          <Button
            key={ex.id}
            variant={currentExample === index ? "default" : "outline"}
            onClick={() => setCurrentExample(index)}
            className="relative"
            size="sm"
          >
            {completedSteps.includes(index) && (
              <Check className="w-4 h-4 mr-1 text-green-500" />
            )}
            {ex.title}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Code Editor */}
        <Card className="relative overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">{example.title}</CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {example.description}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={typeCode}
                  disabled={isPlaying}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Play className="w-4 h-4 mr-1" />
                  {isPlaying ? "Typing..." : "Run"}
                </Button>
                <Button size="sm" variant="outline" onClick={resetDemo}>
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <pre className="text-green-400 whitespace-pre-wrap overflow-hidden">
                  {typedCode}
                  {isPlaying && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="bg-green-400 inline-block w-2 h-5 ml-1"
                    />
                  )}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preview */}
        <Card className="relative overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              <CardTitle className="text-lg">Live Preview</CardTitle>
              {showPreview && (
                <Badge variant="secondary" className="text-xs">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Live
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode="wait">
              {showPreview ? (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="border rounded-lg overflow-hidden bg-white dark:bg-gray-800"
                  dangerouslySetInnerHTML={{ __html: example.preview }}
                />
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400"
                >
                  <div className="text-center">
                    <Code2 className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Run the code to see the magic!</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>

      {/* Progress indicator */}
      {completedSteps.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 rounded-full text-green-800 dark:text-green-200">
            <Check className="w-4 h-4" />
            <span className="text-sm font-medium">
              {completedSteps.length} of {codeExamples.length} examples
              completed!
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
