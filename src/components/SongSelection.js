import React from 'react';

const SongSelection = ({ songs, onSelect }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Selecciona la canción correcta:</h3>
      <div className="space-y-3">
        {songs.map((song) => (
          <div 
            key={song.id}
            onClick={() => onSelect(song)}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
          >
            <h4 className="font-medium text-gray-900 dark:text-white">{song.title}</h4>
            <p className="text-gray-600 dark:text-gray-300">{song.artist} • {song.key} • {song.bpm} BPM</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongSelection;