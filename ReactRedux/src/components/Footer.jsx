import React from "react";

function Footer() {
  return (
    <footer className="mt-auto bg-gradient-to-t from-gray-900 via-gray-900 to-gray-800 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Todo Master. All rights reserved.
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-300">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
