export interface SoundData {
  id: string;
  name: string;
  icon: string;
  color: string;
  url: string;
  category: 'cat' | 'dog' | 'bird' | 'other';
}

export type ThemeMode = 'light' | 'dark';