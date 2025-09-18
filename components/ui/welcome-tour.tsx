"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Sparkles,
  Target,
  Zap,
  Trophy,
  Users,
  BookOpen,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TourStep {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  target?: string;
  action?: {
    text: string;
    href: string;
  };
  highlight?: boolean;
}

const tourSteps: TourStep[] = [
  {
    id: "welcome",
    title: "Welcome to Sense!",
    description:
      "Ready to escape tutorial hell? Let's show you around our revolutionary learning platform.",
    icon: Sparkles,
    highlight: true,
  },
  {
    id: "philosophy",
    title: "Our Anti-Tutorial Philosophy",
    description:
      "We don't spoon-feed you code. Instead, you'll struggle, research, and solve real problems independently.",
    icon: Target,
    target: "#philosophy-section",
  },
  {
    id: "learning",
    title: "Interactive Learning Portal",
    description:
      "Start with programming fundamentals, then progress through HTML, CSS, JavaScript, and beyond.",
    icon: BookOpen,
    action: {
      text: "Explore Learning Portal",
      href: "/learn",
    },
  },
  {
    id: "challenges",
    title: "Real-World Challenges",
    description:
      "Test your skills with hands-on coding challenges that mirror actual development work.",
    icon: Trophy,
    action: {
      text: "View Challenges",
      href: "/challenges",
    },
  },
  {
    id: "community",
    title: "Join the Community",
    description:
      "Connect with thousands of developers who are mastering coding through struggle-first learning.",
    icon: Users,
  },
  {
    id: "start",
    title: "Ready to Begin?",
    description:
      "Your journey to becoming a confident developer starts now. No more passive learning!",
    icon: Zap,
    action: {
      text: "Start Learning",
      href: "/learn/programming",
    },
    highlight: true,
  },
];

export function WelcomeTour() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasSeenTour, setHasSeenTour] = useState(false);

  useEffect(() => {
    // Check if user has seen the tour before
    const tourCompleted = localStorage.getItem("welcome-tour-completed");
    if (!tourCompleted) {
      // Show tour after a brief delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setHasSeenTour(true);
    }
  }, []);

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const closeTour = () => {
    setIsOpen(false);
    localStorage.setItem("welcome-tour-completed", "true");
    setHasSeenTour(true);
  };

  const restartTour = () => {
    setCurrentStep(0);
    setIsOpen(true);
  };

  const currentTourStep = tourSteps[currentStep];
  const progress = ((currentStep + 1) / tourSteps.length) * 100;

  if (hasSeenTour && !isOpen) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 left-6 z-40"
      >
        <Button
          onClick={restartTour}
          variant="outline"
          size="sm"
          className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Tour Guide
        </Button>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={closeTour}
          />

          {/* Tour Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <Card className="shadow-2xl border-0 overflow-hidden">
              {/* Progress Bar */}
              <div className="h-2 bg-gray-100 dark:bg-gray-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>

              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`
                      p-2 rounded-lg ${
                        currentTourStep.highlight
                          ? "bg-gradient-to-r from-blue-500 to-purple-500"
                          : "bg-blue-100 dark:bg-blue-900"
                      }
                    `}
                    >
                      <currentTourStep.icon
                        className={`w-5 h-5 ${
                          currentTourStep.highlight
                            ? "text-white"
                            : "text-blue-600 dark:text-blue-400"
                        }`}
                      />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {currentStep + 1} of {tourSteps.length}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={closeTour}
                    className="h-8 w-8 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                {/* Content */}
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {currentTourStep.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {currentTourStep.description}
                  </p>
                </motion.div>

                {/* Action Button */}
                {currentTourStep.action && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6"
                  >
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <a href={currentTourStep.action.href} onClick={closeTour}>
                        {currentTourStep.action.text}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </motion.div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </Button>

                  <div className="flex gap-1">
                    {tourSteps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStep(index)}
                        className={`
                          w-2 h-2 rounded-full transition-all duration-200
                          ${
                            index === currentStep
                              ? "bg-blue-600 scale-125"
                              : index < currentStep
                              ? "bg-green-500"
                              : "bg-gray-300 dark:bg-gray-600"
                          }
                        `}
                      />
                    ))}
                  </div>

                  {currentStep === tourSteps.length - 1 ? (
                    <Button
                      size="sm"
                      onClick={closeTour}
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Get Started!
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      onClick={nextStep}
                      className="flex items-center gap-2"
                    >
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  )}
                </div>

                {/* Skip Option */}
                <div className="mt-4 text-center">
                  <button
                    onClick={closeTour}
                    className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  >
                    Skip tour
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
