import React, { useState } from 'react';

const SearchFilters = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-sm mb-8">
      <form onSubmit={handleSearch} className="mb-6">
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Buscar por canción, artista o acorde..."
            className="w-full py-3 px-5 pr-12 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </form>

      <div className="flex flex-wrap justify-center gap-4">
        <button 
          onClick={() => onFilterChange('all')}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium"
        >
          Todas
        </button>
        <button 
          onClick={() => onFilterChange('modern')}
          className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium"
        >
          Modernas
        </button>
        <button 
          onClick={() => onFilterChange('classic')}
          className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium"
        >
          Clásicas
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;