import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 py-16">
      <h1 className="text-6xl font-bold text-indigo-500">404</h1>
      <h2 className="text-2xl font-semibold text-gray-200">Page Not Found</h2>
      <p className="text-gray-400 max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition"
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFound