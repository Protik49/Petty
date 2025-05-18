import React from 'react';
import Header from './components/Header';
import Soundboard from './components/Soundboard';
import { ThemeProvider } from './contexts/ThemeContext';
import { AudioProvider } from './contexts/AudioContext';

function App() {
  return (
    <ThemeProvider>
      <AudioProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container mx-auto py-4 md:py-8">
            <Soundboard />
          </main>
          <footer className="text-center py-4 md:py-6 text-sm text-gray-600 dark:text-gray-400 glass-effect">
            <p>🌍 Petty Sounds - Explore your pet voice</p>
          </footer>
        </div>
      </AudioProvider>
    </ThemeProvider>
  );
}

export default App;