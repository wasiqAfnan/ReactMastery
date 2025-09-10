import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 font-sans">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
