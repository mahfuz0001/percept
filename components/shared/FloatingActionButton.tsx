"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  X,
  BookOpen,
  Trophy,
  User,
  Search,
  Zap,
  MessageCircle,
  Settings,
  Home,
  Code2,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface QuickAction {
  id: string;
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
  color: string;
  description: string;
}

const quickActions: QuickAction[] = [
  {
    id: "learn",
    label: "Learn",
    href: "/learn",
    icon: BookOpen,
    color: "bg-blue-500 hover:bg-blue-600",
    description: "Start learning with interactive tutorials",
  },
  {
    id: "challenges",
    label: "Challenges",
    href: "/challenges",
    icon: Trophy,
    badge: "New",
    color: "bg-orange-500 hover:bg-orange-600",
    description: "Test your skills with coding challenges",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/app",
    icon: User,
    color: "bg-purple-500 hover:bg-purple-600",
    description: "View your progress and achievements",
  },
  {
    id: "quickstart",
    label: "Quick Start",
    href: "/learn/programming",
    icon: Rocket,
    badge: "Popular",
    color: "bg-green-500 hover:bg-green-600",
    description: "Jump right into programming fundamentals",
  },
];

const moreActions: QuickAction[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: Home,
    color: "bg-gray-500 hover:bg-gray-600",
    description: "Back to homepage",
  },
  {
    id: "community",
    label: "Community",
    href: "#",
    icon: MessageCircle,
    badge: "Soon",
    color: "bg-pink-500 hover:bg-pink-600",
    description: "Connect with other learners",
  },
];

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide FAB when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <TooltipProvider>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Action Items */}
              <AnimatePresence>
                {isOpen && (
                  <div className="mb-4 space-y-3">
                    {/* Primary Actions */}
                    {quickActions.map((action, index) => (
                      <motion.div
                        key={action.id}
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 50 }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.05,
                          type: "spring",
                          stiffness: 400,
                        }}
                      >
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href={action.href}>
                              <Button
                                size="lg"
                                className={`
                                  relative h-14 w-14 rounded-full shadow-lg
                                  ${action.color}
                                  text-white transition-all duration-200
                                  hover:shadow-xl hover:scale-110
                                  border-2 border-white/20
                                `}
                                onClick={() => setIsOpen(false)}
                              >
                                <action.icon className="w-6 h-6" />
                                {action.badge && (
                                  <Badge
                                    variant="secondary"
                                    className="absolute -top-2 -right-2 text-xs px-1.5 py-0.5 bg-red-500 text-white border-white"
                                  >
                                    {action.badge}
                                  </Badge>
                                )}
                              </Button>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="max-w-xs">
                            <div className="text-center">
                              <p className="font-medium">{action.label}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                {action.description}
                              </p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </motion.div>
                    ))}

                    {/* Separator */}
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: quickActions.length * 0.05,
                      }}
                      className="h-px bg-gray-300 dark:bg-gray-600 my-2"
                    />

                    {/* Secondary Actions */}
                    {moreActions.map((action, index) => (
                      <motion.div
                        key={action.id}
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 50 }}
                        transition={{
                          duration: 0.2,
                          delay: (quickActions.length + index + 1) * 0.05,
                          type: "spring",
                          stiffness: 400,
                        }}
                      >
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href={action.href}>
                              <Button
                                size="lg"
                                variant="outline"
                                className={`
                                  relative h-12 w-12 rounded-full shadow-lg
                                  bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700
                                  border-2 border-gray-200 dark:border-gray-600
                                  transition-all duration-200 hover:shadow-xl hover:scale-110
                                `}
                                onClick={() => setIsOpen(false)}
                              >
                                <action.icon className="w-5 h-5" />
                                {action.badge && (
                                  <Badge
                                    variant="secondary"
                                    className="absolute -top-2 -right-2 text-xs px-1.5 py-0.5 bg-yellow-500 text-white border-white"
                                  >
                                    {action.badge}
                                  </Badge>
                                )}
                              </Button>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="max-w-xs">
                            <div className="text-center">
                              <p className="font-medium">{action.label}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                {action.description}
                              </p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>

              {/* Main FAB Button */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="lg"
                    onClick={toggleMenu}
                    className={`
                      h-16 w-16 rounded-full shadow-xl
                      bg-gradient-to-r from-blue-600 to-purple-600
                      hover:from-blue-700 hover:to-purple-700
                      text-white transition-all duration-300
                      hover:shadow-2xl hover:scale-110
                      border-4 border-white/20
                      ${isOpen ? "rotate-45" : "rotate-0"}
                    `}
                  >
                    {isOpen ? (
                      <X className="w-8 h-8" />
                    ) : (
                      <div className="relative">
                        <Plus className="w-8 h-8" />
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 bg-white/20 rounded-full"
                        />
                      </div>
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <div className="text-center">
                    <p className="font-medium">Quick Actions</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {isOpen ? "Close menu" : "Access learning tools"}
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </TooltipProvider>
  );
}
