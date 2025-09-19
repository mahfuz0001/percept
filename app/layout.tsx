import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";

export const metadata: Metadata = {
  title: "Percept - Anti-Tutorial Hell Platform",
  description: "Transform passive learners into confident, skilled developers through challenge-based learning",
  keywords: ["coding", "programming", "tutorials", "challenges", "web development", "JavaScript", "React"],
  authors: [{ name: "Percept Team" }],
  openGraph: {
    title: "Percept - Escape Tutorial Hell",
    description: "Real challenges for real developers. No hand-holding, just problem-solving.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Percept - Anti-Tutorial Hell Platform",
    description: "Transform from passive learner to confident developer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 
            "bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors",
          card: "shadow-xl border-0 rounded-2xl bg-white",
          headerTitle: "text-2xl font-semibold text-gray-900",
          headerSubtitle: "text-gray-600",
          socialButtonsBlockButton: 
            "border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors",
          formFieldInput: 
            "border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          footerActionLink: "text-blue-600 hover:text-blue-700 font-medium",
          dividerLine: "bg-gray-200",
          dividerText: "text-gray-500",
          formFieldLabel: "text-gray-700 font-medium",
          identityPreviewText: "text-gray-600",
          identityPreviewEditButton: "text-blue-600 hover:text-blue-700"
        }
      }}
    >
      <html lang="en">
        <body className="antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
