import React from 'react';

const SoundboardControls: React.FC = () => {
  return (
    <div className="w-full text-center p-8 glass-effect rounded-2xl shadow-xl mb-8">
      <div className="flex items-center justify-center gap-6">
        <span className="text-6xl md:text-7xl animate-float" role="img" aria-label="Lion">🦁</span>
        <div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
            Petty Soundboard
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Experience the symphony of your furry friends
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoundboardControls;