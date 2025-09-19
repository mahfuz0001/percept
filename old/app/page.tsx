// app/page.tsx
import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InteractiveCodeDemoSection from "@/components/sections/InteractiveCodeDemoSection";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { WelcomeTour } from "@/components/ui/welcome-tour";

export default async function Home() {
  const { userId } = await auth();
  
  if (userId) {
    redirect('/dashboard');
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-x-hidden">
        <Navbar />
        <main>
          <HeroSection />
          <PhilosophySection />
          <InteractiveCodeDemoSection />
          <FeaturesSection />
          <TestimonialsSection />
        </main>
        <FloatingActionButton />
        <WelcomeTour />
      </div>
    </TooltipProvider>
  );
}