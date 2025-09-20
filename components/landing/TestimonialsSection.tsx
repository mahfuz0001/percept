"use client";

import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Developer",
    company: "Google",
    content:
      "Percept changed how I learn. Instead of copying code, I now solve real problems and understand the why behind every solution.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b5c4?w=64&h=64&fit=crop&crop=face",
  },
  {
    name: "Marcus Rodriguez",
    role: "Full Stack Engineer",
    company: "Microsoft",
    content:
      "The struggle-first approach built my confidence. Now I tackle any coding challenge without fear of getting stuck.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
  },
  {
    name: "Priya Patel",
    role: "Software Engineer",
    company: "Meta",
    content:
      "From tutorial hell to problem-solving master in 3 months. The best investment in my coding journey.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-card dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Success Stories
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Loved by Developers Worldwide
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See how developers transformed their careers by escaping tutorial
            hell
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <p className="italic text-gray-700 dark:text-gray-300 mb-6">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
