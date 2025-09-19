import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Percept - Anti-Tutorial Hell Platform",
  description: "Transform passive learners into confident, skilled developers through challenge-based learning",
  keywords: ["coding", "programming", "tutorials", "challenges", "web development", "JavaScript", "React"],
  authors: [{ name: "Percept Team" }],
  openGraph: {
    title: "Percept - Escape Tutorial Hall",
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

export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}