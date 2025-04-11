import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#2794E3] to-[#3027E3] py-6 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">WorshipHarmony Pro</h1>
          <p className="text-white opacity-90 mt-1">Tu editor de acordes profesional</p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;