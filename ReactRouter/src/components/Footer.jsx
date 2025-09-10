import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-4 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyRouterApp. Built for React Router Demo.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

