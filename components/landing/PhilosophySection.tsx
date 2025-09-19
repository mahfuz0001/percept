"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Target, XCircle } from "lucide-react";

export function PhilosophySection() {
  const challenges = [
    "Responsive Three-Column Grid",
    "TypeScript Form Validation",
    "React State Management",
    "API Integration & Caching",
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Philosophy
            </h2>
            <div className="space-y-6">
              <Card className="border-red-200 dark:border-red-800">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Traditional tutorials create passive learners
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        You follow steps, copy code, and feel like you
                        understand—until you face a real problem alone.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 dark:border-green-800">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Our challenges force active learning
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        You&apos;ll struggle, research, experiment, and
                        eventually solve problems independently.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700">
                <CardContent className="p-6">
                  <p className="text-blue-900 dark:text-blue-200 font-medium">
                    This struggle is not a bug—it&apos;s the feature that builds
                    genuine developer confidence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                Real Problems
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Face challenges that mirror actual development work. No
                artificial examples.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                  >
                    <Target className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {challenge}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
