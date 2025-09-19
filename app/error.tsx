'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to your error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-8xl mb-4">⚠️</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Something went wrong</h1>
          <p className="text-lg text-gray-600 mb-8">
            An unexpected error occurred. Our team has been notified.
          </p>
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4 p-4 bg-red-100 rounded-lg text-left text-sm">
              <summary className="cursor-pointer font-medium text-red-800">
                Error Details (Development)
              </summary>
              <pre className="mt-2 text-red-700 whitespace-pre-wrap">
                {error.message}
              </pre>
            </details>
          )}
        </div>
        
        <div className="space-y-4">
          <button
            onClick={reset}
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="block text-gray-700 hover:text-gray-900 font-medium py-3 px-6 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}