import React, { useState } from 'react';
import QuickMenu from './QuickMenu';
import QuickResult from './QuickResult';

const ExpressMode = ({ onSongSelect }) => {
  const [quickSong, setQuickSong] = useState(null);
  const [possibleSongs, setPossibleSongs] = useState([]);
  const [searchState, setSearchState] = useState('idle');

  const handleProcessLink = async (link, platform) => {
    setSearchState('searching');
    
    // Simulación de búsqueda con delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundSongs = songsData.filter(song => 
      song.title.toLowerCase().includes(link.toLowerCase()) || 
      song.artist.toLowerCase().includes(link.toLowerCase())
    );
    
    if (foundSongs.length === 1) {
      setQuickSong(foundSongs[0]);
      onSongSelect(foundSongs[0]);
      setSearchState('idle');
    } else {
      setPossibleSongs(foundSongs.length > 0 ? foundSongs : songsData.slice(0, 3));
      setSearchState('results');
    }
  };

  const handleSelectSong = (song) => {
    setQuickSong(song);
    onSongSelect(song);
    setSearchState('idle');
  };

  return (
    <div>
      <QuickMenu onProcessLink={handleProcessLink} />
      
      {searchState === 'searching' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2794E3] mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Analizando el enlace...</p>
        </div>
      )}
      
      {searchState === 'results' && (
        <SongSelection songs={possibleSongs} onSelect={handleSelectSong} />
      )}
      
      {quickSong && <QuickResult song={quickSong} />}
    </div>
  );
};

export default ExpressMode;