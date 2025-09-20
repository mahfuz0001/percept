"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Zap, Target, Users, Star } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "No Hand-Holding",
    description:
      "Minimal guidance forces you to think critically and develop problem-solving skills.",
    color: "blue",
  },
  {
    icon: Target,
    title: "Real Problems",
    description:
      "Face challenges that mirror actual development work. No artificial examples.",
    color: "green",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Join developers who learn by doing, not by following tutorials.",
    color: "purple",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Get Challenge",
    description: "Receive a real-world coding problem",
  },
  {
    step: "2",
    title: "Struggle",
    description: "Research and experiment independently",
  },
  {
    step: "3",
    title: "Breakthrough",
    description: "Experience the joy of solving it yourself",
  },
  {
    step: "4",
    title: "Confidence",
    description: "Build genuine problem-solving skills",
  },
];

const successMetrics = [
  {
    metric: "95%",
    label: "Complete challenges successfully",
  },
  {
    metric: "3x",
    label: "Faster at solving new problems",
  },
  {
    metric: "87%",
    label: "Land their dream job within 6 months",
  },
];

const learningOutcomes = [
  "Independent problem-solving ability",
  "Confidence in tackling unknown challenges",
  "Research and debugging skills",
  "Real-world development experience",
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Independent Learning Platform
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Research, experiment, and solve problems yourself. Build genuine
            confidence through struggle-first learning.
          </p>
        </motion.div>

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="process">Process</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <feature.icon
                          className={`w-8 h-8 text-${feature.color}-600 dark:text-${feature.color}-400`}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="process" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                        {item.step}
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="results" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>Success Metrics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {successMetrics.map((stat, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <span className="text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </span>
                        <span className="font-bold text-lg text-blue-600">
                          {stat.metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Learning Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {learningOutcomes.map((outcome, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {outcome}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
