import React, { createContext, useContext, useState, useRef } from 'react';

interface AudioContextType {
  currentAudio: HTMLAudioElement | null;
  isPlaying: boolean;
  playSound: (url: string) => void;
  stopSound: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = '';
      audioRef.current.remove();
      audioRef.current = null;
      setCurrentAudio(null);
      setIsPlaying(false);
    }
  };

  const playSound = async (url: string) => {
    try {
      // Stop current audio if it exists
      stopSound();
      
      // Create new audio element
      const audio = new Audio();
      audio.src = url;
      audio.volume = 0.7;
      
      // Set up event listeners
      audio.onplay = () => setIsPlaying(true);
      audio.onended = () => {
        setIsPlaying(false);
        if (audioRef.current === audio) {
          stopSound();
        }
      };
      audio.onpause = () => {
        setIsPlaying(false);
        if (audioRef.current === audio) {
          stopSound();
        }
      };
      
      // Store the audio element
      audioRef.current = audio;
      setCurrentAudio(audio);

      // Play the sound
      await audio.play();
    } catch (err) {
      console.error("Error playing sound:", err);
      stopSound();
    }
  };

  return (
    <AudioContext.Provider 
      value={{ 
        currentAudio, 
        isPlaying, 
        playSound,
        stopSound
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};