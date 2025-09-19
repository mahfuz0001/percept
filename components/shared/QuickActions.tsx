// components/shared/QuickActions.tsx
import Link from "next/link";

export function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Quick Actions
      </h3>
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          href="/challenges"
          className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group flex-1"
        >
          <div className="text-center">
            <div className="text-2xl mb-2">🚀</div>
            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
              Start New Challenge
            </h4>
            <p className="text-sm text-gray-600">
              Browse available challenges and start solving
            </p>
          </div>
        </Link>
        <Link
          href="/profile"
          className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors group flex-1"
        >
          <div className="text-center">
            <div className="text-2xl mb-2">⚙️</div>
            <h4 className="font-semibold text-gray-900 group-hover:text-green-600">
              Update Profile
            </h4>
            <p className="text-sm text-gray-600">
              Customize your learning preferences
            </p>
          </div>
        </Link>
        <Link
          href="/analytics"
          className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors group flex-1"
        >
          <div className="text-center">
            <div className="text-2xl mb-2">📊</div>
            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">
              View Analytics
            </h4>
            <p className="text-sm text-gray-600">
              Track your learning progress
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
