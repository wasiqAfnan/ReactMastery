import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-200">
      {/* Common Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* Common Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
