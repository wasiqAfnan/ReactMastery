import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4 mt-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
