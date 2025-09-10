import React from 'react';
import { useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();
  return (
    <div className="space-y-6 text-center">
      <h2 className="text-3xl font-bold text-indigo-400">Our Services</h2>
      <p className="text-gray-300 max-w-2xl mx-auto">
        We offer different services to showcase nested routing in React Router. 
        Click the buttons below to explore individual services.
      </p>

      <div className="flex justify-center gap-4">
        <button 
        onClick={()=>navigate('web')}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
        >
          Web Development
        </button>
        <button 
        onClick={()=>navigate('app')}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
          App Development
        </button>
      </div>
    </div>
  )
}

export default Services