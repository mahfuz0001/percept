// Temporary simplified version
"use client";

import React from "react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
            Success Stories
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Loved by Developers Worldwide
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See how developers transformed their careers by escaping tutorial hell
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                S
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Sarah Chen</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Frontend Developer</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              "Percept challenged me to think like a real developer. No more copy-pasting code without understanding!"
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Marcus Johnson</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              "Finally escaped tutorial hell! The struggle-first approach built real confidence in my coding abilities."
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Alex Rodriguez</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">React Developer</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              "Percept taught me to research, problem-solve, and build independently. Game-changer for my career!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}