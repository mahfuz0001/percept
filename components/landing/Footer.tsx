"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
  Code2,
  BookOpen,
  Trophy,
  Users,
  Zap,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  platform: [
    { name: "Learning Portal", href: "/learn" },
    { name: "Challenges", href: "/challenges" },
    { name: "Community", href: "/community" },
    { name: "Analytics", href: "/analytics" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Support", href: "/support" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
  ],
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/mahfuz0001" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/mahfuz0001" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/mahfuz0001" },
  { name: "Email", icon: Mail, href: "mailto:contact@percept.dev" },
];

const stats = [
  { icon: Users, value: "10,000+", label: "Active Learners" },
  { icon: Trophy, value: "50,000+", label: "Challenges Solved" },
  { icon: Code2, value: "100+", label: "Programming Topics" },
  { icon: Zap, value: "95%", label: "Success Rate" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Escape Tutorial Hell?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Join thousands of developers who are building real skills through
                challenge-based learning. No more passive watching, time for active coding.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 p-8 rounded-2xl"
            >
              <div className="text-center mb-6">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Start Your Journey Today
                </h4>
                <p className="text-muted-foreground">
                  Get weekly coding challenges and progress updates
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 whitespace-nowrap">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-3 text-center">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Percept
              </h2>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The anti-tutorial hell platform for confident developers. 
              Master coding through real challenges, not passive tutorials.
            </p>

            <div className="flex items-center text-muted-foreground mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Built with ❤️ for developers worldwide</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-foreground font-semibold mb-6 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center group"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 Percept. All rights reserved. Escape tutorial hell, build real skills.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
              <div className="flex items-center text-muted-foreground">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Mahfuz
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}