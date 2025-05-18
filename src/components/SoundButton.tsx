import React, { useState, useEffect } from 'react';
import { useAudio } from '../contexts/AudioContext';
import { SoundData } from '../types';

interface SoundButtonProps {
  sound: SoundData;
}

const SoundButton: React.FC<SoundButtonProps> = ({ sound }) => {
  const { playSound, stopSound, isPlaying, currentAudio } = useAudio();
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const isThisPlaying = isPlaying && currentAudio?.src === sound.url;
  
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.sound-button')) {
        stopSound();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [stopSound]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isThisPlaying) {
      stopSound();
    } else {
      playSound(sound.url);
    }
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);
  };
  
  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        sound-button ${sound.color}
        ${isPressed ? 'scale-95' : 'scale-100'}
        ${isThisPlaying ? 'ring-4 ring-indigo-400 dark:ring-indigo-300' : ''}
      `}
      aria-label={`Play ${sound.name} sound`}
    >
      <div className={`
        flex flex-col items-center gap-3
        transition-transform duration-300
        ${isHovered ? 'scale-110' : 'scale-100'}
      `}>
        <span className={`
          text-5xl transition-transform duration-300
          ${isHovered ? 'animate-float' : ''}
        `} role="img" aria-hidden="true">
          {sound.icon}
        </span>
        <span className="text-lg font-semibold tracking-wide">
          {sound.name}
        </span>
      </div>
      
      {isThisPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-10 rounded-2xl"></div>
          <div className="relative flex space-x-1">
            <div className="sound-wave">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="animate-soundwave"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </button>
  );
};

export default SoundButton;