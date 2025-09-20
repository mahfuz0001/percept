// components/shared/OnboardingPage.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CookieConfetti } from "@/components/shared/CookieConfetti";

interface OnboardingData {
  experience: string;
  goals: string[];
  interests: string[];
  timeCommitment: string;
  learningStyle: string;
  preferredTechnologies: string[];
  careerGoal: string;
}

// Remove the module declaration since we're now using UI components
// declare module "@/components/shared/Card" {
//   export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
//     onClick?: () => void;
//   }
// }

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [formData, setFormData] = useState<OnboardingData>({
    experience: "",
    goals: [],
    interests: [],
    timeCommitment: "",
    learningStyle: "",
    preferredTechnologies: [],
    careerGoal: "",
  });

  const totalSteps = 6;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowConfetti(true);
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 3000);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (
    field: keyof OnboardingData,
    value: string | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayValue = (field: keyof OnboardingData, value: string) => {
    const currentArray = formData[field] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter((item) => item !== value)
      : [...currentArray, value];
    updateFormData(field, newArray);
  };

  const steps = [
    {
      title: "Welcome to Percept! 🎉",
      subtitle: "Let's personalize your learning journey",
      component: (
        <div className="text-center">
          <div className="text-6xl mb-6">🚀</div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to escape tutorial hell?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We&apos;ll ask you a few questions to create a personalized learning
            experience that matches your goals, interests, and current skill
            level.
          </p>
          <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg max-w-lg mx-auto">
            <h4 className="font-semibold text-blue-900 mb-2">
              What makes us different:
            </h4>
            <ul className="text-left text-blue-800 space-y-1">
              <li>• No step-by-step hand-holding</li>
              <li>• Real-world problem solving</li>
              <li>• Build genuine confidence</li>
              <li>• Learn by struggling and discovering</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "What's your coding experience?",
      subtitle: "Help us understand your current level",
      component: (
        <div className="space-y-4">
          {[
            {
              value: "complete-beginner",
              label: "Complete Beginner",
              desc: "I&apos;ve never written code before",
            },
            {
              value: "some-experience",
              label: "Some Experience",
              desc: "I&apos;ve done tutorials and basic projects",
            },
            {
              value: "intermediate",
              label: "Intermediate",
              desc: "I can build projects but want to improve",
            },
            {
              value: "advanced",
              label: "Advanced",
              desc: "I&apos;m experienced but want new challenges",
            },
          ].map((option) => (
            <div
              key={option.value}
              className="cursor-pointer transition-all duration-200"
              onClick={() => updateFormData("experience", option.value)}
            >
              <Card
                className={`${
                  formData.experience === option.value
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                    : "hover:border-border"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div
                      className={`w-4 h-4 rounded-full border-2 mr-4 ${
                        formData.experience === option.value
                          ? "bg-blue-500 border-blue-500"
                          : "border-border"
                      }`}
                    ></div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {option.label}
                      </h4>
                      <p className="text-muted-foreground text-sm">{option.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "What are your learning goals?",
      subtitle: "Select all that apply",
      component: (
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { value: "get-job", label: "Get a Developer Job", icon: "💼" },
            { value: "switch-career", label: "Switch Careers", icon: "🔄" },
            {
              value: "build-projects",
              label: "Build Personal Projects",
              icon: "🛠️",
            },
            {
              value: "improve-skills",
              label: "Improve Current Skills",
              icon: "📈",
            },
            {
              value: "start-business",
              label: "Start a Tech Business",
              icon: "🚀",
            },
            { value: "learn-hobby", label: "Learn as a Hobby", icon: "🎨" },
          ].map((goal) => (
            <div
              key={goal.value}
              className="cursor-pointer transition-all duration-200"
              onClick={() => toggleArrayValue("goals", goal.value)}
            >
              <Card
                className={`${
                  formData.goals.includes(goal.value)
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                    : "hover:border-border"
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">{goal.icon}</div>
                  <h4 className="font-semibold text-foreground">{goal.label}</h4>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Which technologies interest you most?",
      subtitle: "Choose your focus areas",
      component: (
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              value: "html-css",
              label: "HTML & CSS",
              icon: "🌐",
              desc: "Web fundamentals",
            },
            {
              value: "javascript",
              label: "JavaScript",
              icon: "⚡",
              desc: "Core programming",
            },
            {
              value: "react",
              label: "React",
              icon: "⚛️",
              desc: "Frontend framework",
            },
            {
              value: "typescript",
              label: "TypeScript",
              icon: "📘",
              desc: "Type-safe JS",
            },
            {
              value: "nodejs",
              label: "Node.js",
              icon: "🟢",
              desc: "Backend development",
            },
            {
              value: "python",
              label: "Python",
              icon: "🐍",
              desc: "General purpose",
            },
            {
              value: "databases",
              label: "Databases",
              icon: "🗄️",
              desc: "Data management",
            },
            {
              value: "devops",
              label: "DevOps",
              icon: "⚙️",
              desc: "Deployment & tools",
            },
            {
              value: "mobile",
              label: "Mobile Dev",
              icon: "📱",
              desc: "App development",
            },
          ].map((tech) => (
            <div
              key={tech.value}
              className="cursor-pointer transition-all duration-200"
              onClick={() =>
                toggleArrayValue("preferredTechnologies", tech.value)
              }
            >
              <Card
                className={`${
                  formData.preferredTechnologies.includes(tech.value)
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                    : "hover:border-border"
                }`}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <h4 className="font-semibold text-foreground text-sm">
                    {tech.label}
                  </h4>
                  <p className="text-xs text-muted-foreground">{tech.desc}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "How much time can you dedicate?",
      subtitle: "Be realistic about your availability",
      component: (
        <div className="space-y-4">
          {[
            {
              value: "30-min",
              label: "30 minutes per day",
              desc: "Perfect for building consistent habits",
            },
            {
              value: "1-hour",
              label: "1 hour per day",
              desc: "Great for steady progress",
            },
            {
              value: "2-hours",
              label: "2+ hours per day",
              desc: "Accelerated learning pace",
            },
            {
              value: "weekends",
              label: "Weekends only",
              desc: "Intensive weekend sessions",
            },
            {
              value: "flexible",
              label: "Flexible schedule",
              desc: "I&apos;ll learn when I can",
            },
          ].map((option) => (
            <div
              key={option.value}
              className="cursor-pointer transition-all duration-200"
              onClick={() => updateFormData("timeCommitment", option.value)}
            >
              <Card
                className={`${
                  formData.timeCommitment === option.value
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                    : "hover:border-border"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div
                      className={`w-4 h-4 rounded-full border-2 mr-4 ${
                        formData.timeCommitment === option.value
                          ? "bg-blue-500 border-blue-500"
                          : "border-border"
                      }`}
                    ></div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {option.label}
                      </h4>
                      <p className="text-muted-foreground text-sm">{option.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "You're all set! 🎉",
      subtitle: "Your personalized learning journey awaits",
      component: (
        <div className="text-center">
          <div className="text-6xl mb-6">🎯</div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Welcome to your coding journey!
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Based on your preferences, we&apos;ve curated a personalized
            learning path. You&apos;ll start with challenges that match your
            experience level and interests.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg max-w-2xl mx-auto mb-8">
            <h4 className="font-semibold text-foreground mb-4">
              Your Personalized Plan:
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <h5 className="font-medium text-card-foreground mb-2">
                  Experience Level:
                </h5>
                <Badge variant="info">
                  {formData.experience.replace("-", " ")}
                </Badge>
              </div>
              <div>
                <h5 className="font-medium text-card-foreground mb-2">
                  Time Commitment:
                </h5>
                <Badge variant="success">{formData.timeCommitment}</Badge>
              </div>
              <div>
                <h5 className="font-medium text-card-foreground mb-2">
                  Primary Goals:
                </h5>
                <div className="flex flex-wrap gap-1">
                  {formData.goals.slice(0, 2).map((goal, index) => (
                    <Badge key={index} variant="warning" size="sm">
                      {goal.replace("-", " ")}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="font-medium text-card-foreground mb-2">
                  Focus Technologies:
                </h5>
                <div className="flex flex-wrap gap-1">
                  {formData.preferredTechnologies
                    .slice(0, 3)
                    .map((tech, index) => (
                      <Badge key={index} variant="purple" size="sm">
                        {tech.replace("-", " ")}
                      </Badge>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg max-w-lg mx-auto">
            <p className="text-yellow-800 font-medium">
              🍪 Get ready for some celebration confetti when you complete
              challenges!
            </p>
          </div>
        </div>
      ),
    },
  ];

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-background dark:via-background dark:to-purple-900/20">
      <CookieConfetti isActive={showConfetti} />

      {/* Header */}
      <header className="bg-card/90 backdrop-blur-md shadow-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Percept
              </h1>
            </div>
            <div className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {totalSteps}
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {currentStepData.title}
          </h2>
          <p className="text-xl text-muted-foreground">{currentStepData.subtitle}</p>
        </div>

        <Card className="max-w-4xl mx-auto mb-8">
          <CardContent className="p-8">{currentStepData.component}</CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between max-w-4xl mx-auto">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Previous
          </Button>

          <Button
            onClick={handleNext}
            className={
              currentStep === totalSteps - 1
                ? "bg-green-600 hover:bg-green-700"
                : ""
            }
          >
            {currentStep === totalSteps - 1 ? "Start Learning!" : "Next"}
          </Button>
        </div>
      </main>
    </div>
  );
}
