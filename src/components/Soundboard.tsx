import React, { useState } from 'react';
import SoundButton from './SoundButton';
import SoundboardControls from './SoundboardControls';
import CategoryFilter from './CategoryFilter';
import { SOUNDS } from '../data/soundData';

const Soundboard: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredSounds = activeCategory === 'all' 
    ? SOUNDS 
    : SOUNDS.filter(sound => sound.category === activeCategory);
  
  return (
    <div className="w-full px-2 sm:px-4">
      <SoundboardControls />
      
      <div className="my-4 md:my-8">
        <CategoryFilter 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {filteredSounds.map((sound) => (
            <SoundButton key={sound.id} sound={sound} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Soundboard;