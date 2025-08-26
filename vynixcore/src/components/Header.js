import React from 'react';

function Header() {
  return (
    <header className="bg-neutral-gray-dark text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-accent-teal">
          VynixCore
        </div>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-accent-teal transition-colors duration-300">Home</a></li>
          <li><a href="#" className="hover:text-accent-teal transition-colors duration-300">Services</a></li>
          <li><a href="#" className="hover:text-accent-teal transition-colors duration-300">Portfolio</a></li>
          <li><a href="#" className="hover:text-accent-teal transition-colors duration-300">Blog</a></li>
          <li><a href="#" className="hover:text-accent-teal transition-colors duration-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
