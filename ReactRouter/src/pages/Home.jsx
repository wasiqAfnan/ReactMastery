import React from 'react'

function Home() {
  return (
     <div className="text-center space-y-4">
      <h2 className="text-3xl font-bold text-indigo-400">Welcome to MyRouterApp</h2>
      <p className="text-gray-300 max-w-2xl mx-auto">
        This is the home page of our demo app. Use the navigation bar above to explore
        different React Router features like routing, nested routes, and navigation hooks.
      </p>
    </div>
  )
}

export default Home