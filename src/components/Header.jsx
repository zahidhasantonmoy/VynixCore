import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">VynixCore</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-teal-400">Home</a></li>
          <li><a href="#" className="hover:text-teal-400">About</a></li>
          <li><a href="#" className="hover:text-teal-400">Services</a></li>
          <li><a href="#" className="hover:text-teal-400">Portfolio</a></li>
          <li><a href="#" className="hover:text-teal-400">Blog</a></li>
          <li><a href="#" className="hover:text-teal-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;