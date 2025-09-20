import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  fallback: ["system-ui", "arial"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "Percept - The anti-tutorial hell platform for confident developers",
  description:
    "Transform passive learners into confident, skilled developers through challenge-based learning",
  keywords: [
    "coding",
    "programming",
    "tutorials",
    "challenges",
    "web development",
    "JavaScript",
    "React",
  ],
  authors: [{ name: "Percept Team" }],
  openGraph: {
    title: "Percept - Escape Tutorial Hell",
    description:
      "Real challenges for real developers. No hand-holding, just problem-solving.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Percept -  The anti-tutorial hell platform for confident developers",
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
          card: "shadow-xl border-0 rounded-2xl bg-card dark:bg-card",
          headerTitle: "text-2xl font-semibold text-foreground",
          headerSubtitle: "text-muted-foreground",
          socialButtonsBlockButton:
            "border border-border hover:bg-muted text-card-foreground font-medium rounded-lg transition-colors",
          formFieldInput:
            "border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground",
          footerActionLink: "text-blue-600 hover:text-blue-700 font-medium",
          dividerLine: "bg-border",
          dividerText: "text-muted-foreground",
          formFieldLabel: "text-card-foreground font-medium",
          identityPreviewText: "text-muted-foreground",
          identityPreviewEditButton: "text-blue-600 hover:text-blue-700",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`min-h-screen bg-background font-sans antialiased ${inter.variable} ${jetbrainsMono.variable}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: "hsl(var(--card))",
                  color: "hsl(var(--card-foreground))",
                  border: "1px solid hsl(var(--border))",
                },
              }}
            />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
