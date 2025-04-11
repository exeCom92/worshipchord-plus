import React, { useState } from 'react';
import SongCard from './SongCard';
import songsData from '../mock/songsData';

const SongList = ({ searchTerm, filter }) => {
  const [displayMode, setDisplayMode] = useState('american');

  const toggleDisplayMode = () => {
    setDisplayMode(prev => prev === 'american' ? 'degrees' : 'american');
  };

  const filteredSongs = songsData.filter(song => {
    const matchesSearch = 
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.key.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'modern' && song.year >= 2000) || 
      (filter === 'classic' && song.year < 2000);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {filteredSongs.length} {filteredSongs.length === 1 ? 'Canción' : 'Canciones'}
        </h2>
        <button 
          onClick={toggleDisplayMode}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          {displayMode === 'american' ? 'Mostrar grados' : 'Mostrar acordes'}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSongs.map(song => (
          <SongCard 
            key={song.id} 
            song={song} 
            displayMode={displayMode}
            onToggleMode={toggleDisplayMode}
          />
        ))}
      </div>

      {filteredSongs.length === 0 && (
        <div className="text-center py-16">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">No encontramos canciones</h3>
          <p className="text-gray-500 dark:text-gray-400">Intenta con otros términos de búsqueda</p>
        </div>
      )}
    </div>
  );
};

export default SongList;