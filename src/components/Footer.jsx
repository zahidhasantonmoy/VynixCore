import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 VynixCore. All rights reserved.</p>
        <nav aria-label="Social media links"> {/* Added nav and aria-label */}
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-teal-400">X</a>
            <a href="#" className="hover:text-teal-400">LinkedIn</a>
            <a href="#" className="hover:text-teal-400">Instagram</a>
          </div>
        </nav>
        <nav aria-label="Legal links"> {/* Added nav and aria-label */}
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-teal-400">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400">Terms of Service</a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;