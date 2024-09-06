import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-500 p-3 text-white fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2024 ScholarEU. All rights reserved.</p>
        <a href="#" className="text-white hover:text-gray-300 transition duration-300 ease-in-out text-sm">
          Back to Top
        </a>
      </div>
    </footer>
  );
}

export default Footer;
