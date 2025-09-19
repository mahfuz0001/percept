// Temporary simplified version
"use client";

import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Escape
          <span className="text-blue-600"> Tutorial Hell</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          Transform from passive learner to confident developer through
          <strong> real-world challenges</strong> that build genuine problem-solving skills.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Your Journey
          </Link>
          <Link
            href="#features"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors border-2 border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500"
          >
            Learn More →
          </Link>
        </div>
        
        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <span className="text-2xl mr-2">⚡</span>
            <span className="font-medium">500+ Challenges</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">👥</span>
            <span className="font-medium">10,000+ Developers</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">🏆</span>
            <span className="font-medium">95% Success Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}