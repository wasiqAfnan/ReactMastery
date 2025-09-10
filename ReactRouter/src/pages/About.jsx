import React from "react";

function About() {
  return (
    <div className="space-y-4 text-center">
      <h2 className="text-3xl font-bold text-indigo-400">About Us</h2>
      <p className="text-gray-300 max-w-2xl mx-auto">
        This application is built to demonstrate the concepts of React Router in
        a simple and practical way. You’ll see examples of normal routing,
        NavLink, useNavigate, and nested routes all in one place.
      </p>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Our goal is to help learners understand how routing works in React step
        by step.
      </p>
    </div>
  );
}

export default About;
