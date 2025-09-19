// components/shared/OnboardingPage.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/shared/Button";
import { Card, CardContent, CardProps } from "@/components/shared/Card";
import { Badge } from "@/components/shared/Badge";
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

// Add the onClick prop to the Card component's type definition
// Note: This assumes you can edit the Card component file. If not, you must wrap the Card in a div
// and apply the onClick handler there.
declare module "@/components/shared/Card" {
  export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    onClick?: () => void;
  }
}

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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to escape tutorial hell?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We&apos;ll ask you a few questions to create a personalized learning
            experience that matches your goals, interests, and current skill
            level.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg max-w-lg mx-auto">
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
            <Card
              key={option.value}
              className={`cursor-pointer transition-all duration-200 ${
                formData.experience === option.value
                  ? "border-blue-500 bg-blue-50"
                  : "hover:border-gray-300"
              }`}
              onClick={() => updateFormData("experience", option.value)}
            >
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 mr-4 ${
                      formData.experience === option.value
                        ? "bg-blue-500 border-blue-500"
                        : "border-gray-300"
                    }`}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {option.label}
                    </h4>
                    <p className="text-gray-600 text-sm">{option.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
            <Card
              key={goal.value}
              className={`cursor-pointer transition-all duration-200 ${
                formData.goals.includes(goal.value)
                  ? "border-blue-500 bg-blue-50"
                  : "hover:border-gray-300"
              }`}
              onClick={() => toggleArrayValue("goals", goal.value)}
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">{goal.icon}</div>
                <h4 className="font-semibold text-gray-900">{goal.label}</h4>
              </CardContent>
            </Card>
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
            <Card
              key={tech.value}
              className={`cursor-pointer transition-all duration-200 ${
                formData.preferredTechnologies.includes(tech.value)
                  ? "border-blue-500 bg-blue-50"
                  : "hover:border-gray-300"
              }`}
              onClick={() =>
                toggleArrayValue("preferredTechnologies", tech.value)
              }
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{tech.icon}</div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {tech.label}
                </h4>
                <p className="text-xs text-gray-600">{tech.desc}</p>
              </CardContent>
            </Card>
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
            <Card
              key={option.value}
              className={`cursor-pointer transition-all duration-200 ${
                formData.timeCommitment === option.value
                  ? "border-blue-500 bg-blue-50"
                  : "hover:border-gray-300"
              }`}
              onClick={() => updateFormData("timeCommitment", option.value)}
            >
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 mr-4 ${
                      formData.timeCommitment === option.value
                        ? "bg-blue-500 border-blue-500"
                        : "border-gray-300"
                    }`}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {option.label}
                    </h4>
                    <p className="text-gray-600 text-sm">{option.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome to your coding journey!
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Based on your preferences, we&apos;ve curated a personalized
            learning path. You&apos;ll start with challenges that match your
            experience level and interests.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg max-w-2xl mx-auto mb-8">
            <h4 className="font-semibold text-gray-900 mb-4">
              Your Personalized Plan:
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">
                  Experience Level:
                </h5>
                <Badge variant="info">
                  {formData.experience.replace("-", " ")}
                </Badge>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-2">
                  Time Commitment:
                </h5>
                <Badge variant="success">{formData.timeCommitment}</Badge>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-2">
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
                <h5 className="font-medium text-gray-800 mb-2">
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

          <div className="bg-yellow-50 p-4 rounded-lg max-w-lg mx-auto">
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <CookieConfetti isActive={showConfetti} />

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Percept
              </h1>
            </div>
            <div className="text-sm text-gray-600">
              Step {currentStep + 1} of {totalSteps}
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentStepData.title}
          </h2>
          <p className="text-xl text-gray-600">{currentStepData.subtitle}</p>
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
