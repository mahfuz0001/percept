// Temporary simplified version
"use client";

import React from "react";

export default function InteractiveCodeDemoSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🚀 Enhanced UI Showcase
          </h2>
          <p className="text-lg text-blue-600 dark:text-blue-400 mb-6">
            Professional UI improvements for the Percept platform
          </p>
          <div className="bg-white/10 rounded-lg p-6 text-left max-w-2xl mx-auto">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              ✅ Implemented Features:
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
              <li>• Fixed authentication 404 errors</li>
              <li>• Enhanced landing page design</li>
              <li>• Added error handling & rate limiting</li>
              <li>• Created rich dashboard</li>
              <li>• Built challenges & profile pages</li>
              <li>• Added analytics & progress tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}