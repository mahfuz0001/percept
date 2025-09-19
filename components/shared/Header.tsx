// components/shared/Header.tsx
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center group mr-8">
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transform transition-transform duration-300 group-hover:scale-105">
                Percept
              </h1>
            </Link>
          </div>
          <nav className="flex-grow hidden md:flex space-x-2 justify-center">
            <Link
              href="/challenges"
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium transition-all duration-300 rounded-full"
            >
              <span className="text-xl">🚀</span>
              <span>Challenges</span>
            </Link>
            <Link
              href="/profile"
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 font-medium transition-all duration-300 rounded-full"
            >
              <span className="text-xl">👤</span>
              <span>Profile</span>
            </Link>
            <Link
              href="/analytics"
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-purple-700 hover:bg-purple-50 font-medium transition-all duration-300 rounded-full"
            >
              <span className="text-xl">📊</span>
              <span>Analytics</span>
            </Link>
            <Link
              href="/"
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-orange-700 hover:bg-orange-50 font-medium transition-all duration-300 rounded-full"
            >
              <span className="text-xl">🏠</span>
              <span>Home</span>
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full shadow-inner transition-all duration-300 hover:shadow-md">
              <span className="text-sm font-semibold text-gray-800">
                🏆 Level 5 • 2,450 XP
              </span>
            </div>
            <UserButton
              appearance={{
                elements: {
                  avatarBox:
                    "w-10 h-10 ring-2 ring-blue-500 hover:ring-blue-600 transition-all duration-300",
                  userButtonPopoverCard:
                    "shadow-2xl border border-gray-100 rounded-lg",
                  userButtonPopoverActions: "border-t border-gray-200",
                },
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
