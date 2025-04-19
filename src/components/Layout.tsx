
// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Important for rendering child routes
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-gray-800">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* Child route components (HomePage, QuotePage) will render here */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;