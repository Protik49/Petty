import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="sticky top-0 z-10 w-full px-4 py-4 md:py-6 glass-effect shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <span className="text-3xl md:text-4xl animate-float">🦁</span>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Petty Sounds
            </h1>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
              Discover the sounds of your pets
            </p>
          </div>
        </div>
        
        <button
          onClick={toggleTheme}
          className="p-2 md:p-3 rounded-full glass-effect text-gray-800 dark:text-gray-100 
                   transition-all duration-300 hover:scale-110 active:scale-95
                   shadow-md hover:shadow-lg"
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;