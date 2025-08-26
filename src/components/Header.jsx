import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navLinkClass = ({ isActive }) =>
    isActive ? "text-teal-400 font-bold" : "hover:text-teal-400";

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">VynixCore</div>
        <ul className="flex space-x-4">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
          <li><NavLink to="/services" className={navLinkClass}>Services</NavLink></li>
          <li><NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink></li>
          <li><NavLink to="/blog" className={navLinkClass}>Blog</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;