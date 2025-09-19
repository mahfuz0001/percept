"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BookOpen,
  Trophy,
  Code2,
  ArrowRight,
  Clock,
  Star,
  Zap,
  X,
  Command,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: "course" | "lesson" | "challenge" | "achievement" | "page";
  href: string;
  icon: React.ElementType;
  badge?: string;
  metadata?: {
    duration?: string;
    difficulty?: string;
    xp?: number;
  };
}

const searchData: SearchResult[] = [
  {
    id: "programming-fundamentals",
    title: "Programming Fundamentals",
    description: "Start your coding journey from the very beginning",
    category: "course",
    href: "/learn/programming",
    icon: BookOpen,
    badge: "Free",
    metadata: { duration: "1h", difficulty: "Beginner" },
  },
  {
    id: "html-course",
    title: "HTML Course",
    description: "Learn the foundation of web development",
    category: "course",
    href: "/learn/html",
    icon: Code2,
    metadata: { duration: "8h", difficulty: "Beginner" },
  },
  {
    id: "css-course",
    title: "CSS Course",
    description: "Master styling and layout with modern CSS",
    category: "course",
    href: "/learn/css",
    icon: Code2,
    metadata: { duration: "10h", difficulty: "Beginner" },
  },
  {
    id: "javascript-course",
    title: "JavaScript Course",
    description: "Build interactive web experiences",
    category: "course",
    href: "/learn/javascript",
    icon: Code2,
    metadata: { duration: "15h", difficulty: "Intermediate" },
  },
  {
    id: "what-is-computer",
    title: "What is a Computer?",
    description: "Understanding the basics of computing",
    category: "lesson",
    href: "/learn/programming/what-is-computer",
    icon: BookOpen,
    metadata: { duration: "8 min" },
  },
  {
    id: "challenges",
    title: "Coding Challenges",
    description: "Test your skills with hands-on challenges",
    category: "page",
    href: "/challenges",
    icon: Trophy,
  },
  {
    id: "achievements",
    title: "Achievements",
    description: "Track your progress and earn badges",
    category: "page",
    href: "/achievements",
    icon: Star,
  },
  {
    id: "first-steps",
    title: "First Steps Achievement",
    description: "Complete your first programming lesson",
    category: "achievement",
    href: "/achievements",
    icon: Trophy,
    metadata: { xp: 50 },
  },
  {
    id: "streak-master",
    title: "Streak Master Achievement",
    description: "Maintain a 7-day learning streak",
    category: "achievement",
    href: "/achievements",
    icon: Zap,
    badge: "Gold",
    metadata: { xp: 300 },
  },
];

const categoryConfig = {
  course: {
    label: "Courses",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  },
  lesson: {
    label: "Lessons",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  },
  challenge: {
    label: "Challenges",
    color:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  },
  achievement: {
    label: "Achievements",
    color:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  },
  page: {
    label: "Pages",
    color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
  },
};

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open search with Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }

      // Close with Escape
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        setQuery("");
        setResults([]);
      }

      // Navigate with arrow keys
      if (isOpen && results.length > 0) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % results.length);
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex(
            (prev) => (prev - 1 + results.length) % results.length
          );
        }
        if (e.key === "Enter") {
          e.preventDefault();
          const selectedResult = results[selectedIndex];
          if (selectedResult) {
            window.location.href = selectedResult.href;
            setIsOpen(false);
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  useEffect(() => {
    if (query.length === 0) {
      setResults([]);
      return;
    }

    const filtered = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered.slice(0, 8)); // Limit to 8 results
    setSelectedIndex(0);
  }, [query]);

  const handleOpenSearch = () => {
    setIsOpen(true);
  };

  const handleCloseSearch = () => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
  };

  return (
    <>
      {/* Search Trigger Button */}
      <Button
        variant="outline"
        onClick={handleOpenSearch}
        className="hidden md:flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white min-w-[240px] justify-start"
      >
        <Search className="w-4 h-4" />
        <span className="text-sm">Search courses, lessons...</span>
        <div className="ml-auto flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 rounded border">
            <Command className="w-3 h-3" />
          </kbd>
          <kbd className="px-1.5 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 rounded border">
            K
          </kbd>
        </div>
      </Button>

      {/* Mobile Search Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={handleOpenSearch}
        className="md:hidden p-2"
      >
        <Search className="w-5 h-5" />
      </Button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={handleCloseSearch}
            />

            {/* Search Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[20vh] left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4 z-50"
            >
              <Card className="shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  {/* Search Input */}
                  <div className="flex items-center border-b border-gray-200 dark:border-gray-700 px-4 py-4">
                    <Search className="w-5 h-5 text-gray-400 mr-3" />
                    <input
                      type="text"
                      placeholder="Search courses, lessons, challenges..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="flex-1 bg-transparent border-0 outline-0 text-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      autoFocus
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCloseSearch}
                      className="ml-2 p-1"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Results */}
                  <div className="max-h-96 overflow-y-auto">
                    {query.length === 0 ? (
                      <div className="px-4 py-8 text-center">
                        <Search className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Quick Search
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          Find courses, lessons, challenges, and more
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                          {[
                            "HTML",
                            "CSS",
                            "JavaScript",
                            "Challenges",
                            "Achievements",
                          ].map((term) => (
                            <Button
                              key={term}
                              variant="outline"
                              size="sm"
                              onClick={() => setQuery(term.toLowerCase())}
                              className="text-xs"
                            >
                              {term}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ) : results.length === 0 ? (
                      <div className="px-4 py-8 text-center">
                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <Search className="w-6 h-6 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          No results found
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Try different keywords or browse our courses
                        </p>
                      </div>
                    ) : (
                      <div className="py-2">
                        {results.map((result, index) => (
                          <Link
                            key={result.id}
                            href={result.href}
                            onClick={handleCloseSearch}
                            className={`
                              block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors
                              ${
                                index === selectedIndex
                                  ? "bg-blue-50 dark:bg-blue-900/20 border-r-2 border-blue-500"
                                  : ""
                              }
                            `}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`
                                p-2 rounded-lg
                                ${
                                  index === selectedIndex
                                    ? "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                                }
                              `}
                              >
                                <result.icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-medium text-gray-900 dark:text-white truncate">
                                    {result.title}
                                  </h4>
                                  <Badge
                                    variant="secondary"
                                    className={`text-xs ${
                                      categoryConfig[result.category].color
                                    }`}
                                  >
                                    {categoryConfig[
                                      result.category
                                    ].label.slice(0, -1)}
                                  </Badge>
                                  {result.badge && (
                                    <Badge
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      {result.badge}
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                                  {result.description}
                                </p>
                                {result.metadata && (
                                  <div className="flex items-center gap-3 mt-1 text-xs text-gray-500 dark:text-gray-500">
                                    {result.metadata.duration && (
                                      <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {result.metadata.duration}
                                      </div>
                                    )}
                                    {result.metadata.difficulty && (
                                      <span>{result.metadata.difficulty}</span>
                                    )}
                                    {result.metadata.xp && (
                                      <div className="flex items-center gap-1">
                                        <Star className="w-3 h-3" />
                                        {result.metadata.xp} XP
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  {results.length > 0 && (
                    <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-3 bg-gray-50 dark:bg-gray-800/50">
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-800 rounded border">
                              ↑↓
                            </kbd>
                            <span>Navigate</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-800 rounded border">
                              ↵
                            </kbd>
                            <span>Select</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-800 rounded border">
                              Esc
                            </kbd>
                            <span>Close</span>
                          </div>
                        </div>
                        <span>{results.length} results</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
