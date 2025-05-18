import React from 'react';

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All Pets', icon: '🏠' },
  { id: 'cat', name: 'Cats', icon: '🐱' },
  { id: 'dog', name: 'Dogs', icon: '🐶' },
  { id: 'bird', name: 'Birds', icon: '🦜' },
  { id: 'other', name: 'Wildlife', icon: '🦁' }
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`
            category-button
            ${activeCategory === category.id 
              ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg' 
              : 'glass-effect text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700'}
            group
          `}
        >
          <span className={`
            inline-flex items-center gap-2
            transition-transform duration-300
            group-hover:scale-110
          `}>
            <span className="text-2xl group-hover:animate-float">{category.icon}</span>
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;