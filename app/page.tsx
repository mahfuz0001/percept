import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "@/components/shared/Button";
import { Card, CardContent } from "@/components/shared/Card";
import { Badge } from "@/components/shared/Badge";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { PhilosophySection } from "@/components/landing/PhilosophySection";
import { InteractiveCodeDemo } from "@/components/ui/interactive-code-demo";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CTASection } from "@/components/landing/cta";
import { FloatingActionButton } from "@/components/shared/FloatingActionButton";
import { WelcomeTour } from "@/components/landing/welcome-tour";

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveCodeDemo />
        </div>
      </section>
      <FeaturesSection />
      <TestimonialsSection />
      {/* <CTASection
        title="Ready to get started?"
        description="Join thousands of creators and developers building the future."
        action={
          userId ? (
            <Button asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          ) : (
            <Button asChild>
              <Link href="/sign-up">Sign up now</Link>
            </Button>
          )
        }
      /> */}
      <FloatingActionButton />
      <WelcomeTour />
    </div>
  );
}
