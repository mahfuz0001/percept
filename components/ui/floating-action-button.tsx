// Temporary simplified version
"use client";

import React from "react";

export function FloatingActionButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
        <span className="text-xl">💬</span>
      </button>
    </div>
  );
}