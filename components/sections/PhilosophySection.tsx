// Temporary simplified version
"use client";

import React from "react";

export default function PhilosophySection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Philosophy
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">❌</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    No More Tutorial Hell
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Stop following step-by-step guides that leave you helpless when faced with real problems.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">✅</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Struggle-First Learning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Embrace the struggle. Build confidence through overcoming real challenges independently.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Traditional Learning vs Percept
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Hand-holding</span>
                  <span className="text-red-500">❌</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Independent Research</span>
                  <span className="text-green-500">✅</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Real Problem Solving</span>
                  <span className="text-green-500">✅</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}