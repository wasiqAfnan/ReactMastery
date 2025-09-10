import React from "react";

function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-purple-900 border-b border-gray-800 relative">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* App name (left) */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-700 to-indigo-600 flex items-center justify-center shadow-lg">
            {/* simple icon: check mark */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-xl font-semibold tracking-wide">Todo Master</h1>
        </div>

        {/* Center text (made with heart by ...) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <p className="text-sm text-gray-300">
            Made with <span aria-hidden="true">&hearts;</span> by{" "}
            <span className="font-medium">Wasiq Afnan Ansari</span>
          </p>
        </div>

        {/* Empty right area to balance layout */}
        <div className="w-32" />
      </div>
    </header>
  );
}

export default Header;
