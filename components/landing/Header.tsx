"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GlobalSearch } from "@/components/ui/global-search";
import { ThemeToggle } from "../theme-toggle";
import Image from "next/image";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <TooltipProvider>
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg">
                <Image src="/logo.png" height={30} width={30} alt="logo" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Percept
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <GlobalSearch />

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/learn"
                    className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Learning Portal
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Access comprehensive programming tutorials</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/challenges"
                    className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Challenges
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Test your skills with coding challenges</p>
                </TooltipContent>
              </Tooltip>
              <ThemeToggle />
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <Link href="/app">Get Started</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <GlobalSearch />
              <ThemeToggle />
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col space-y-2">
                <Link
                  href="/learn"
                  className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Learning Portal
                </Link>
                <Link
                  href="/challenges"
                  className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Challenges
                </Link>
                <Link
                  href="/app"
                  className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Button
                  asChild
                  className="mx-4 bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  <Link href="/app" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </TooltipProvider>
  );
}
