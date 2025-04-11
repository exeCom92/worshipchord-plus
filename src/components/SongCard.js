import React, { useState } from 'react';
import ChordDisplay from './ChordDisplay';
import TabViewer from './TabViewer';
import DownloadButton from './DownloadButton';

const SongCard = ({ song, displayMode, onToggleMode }) => {
  const [showTabs, setShowTabs] = useState(false);
  const chords = displayMode === 'american' ? song.chords.american : song.chords.degrees;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{song.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{song.artist} • {song.year}</p>
          </div>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200">
            {song.key} • {song.bpm} BPM
          </span>
        </div>

        <div className="mb-6">
          {song.lyrics.map((lyric, index) => (
            <div key={index} className="mb-2">
              <div className="flex items-start">
                {lyric.chords.map((chordIndex, i) => (
                  chordIndex !== null && (
                    <div key={i} className="mr-2">
                      <ChordDisplay chord={chords[chordIndex]} isDegree={displayMode === 'degrees'} small />
                    </div>
                  )
                ))}
              </div>
              <p className="text-gray-800 dark:text-gray-200 mt-1">{lyric.line}</p>
            </div>
          ))}
        </div>

        {showTabs && song.tabs && <TabViewer tabs={song.tabs} />}

        <div className="flex justify-between items-center mt-6">
          <div className="flex gap-3">
            <button
              onClick={onToggleMode}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              {displayMode === 'american' ? 'Ver grados' : 'Ver acordes'}
            </button>
            {song.tabs && (
              <button
                onClick={() => setShowTabs(!showTabs)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
              >
                {showTabs ? 'Ocultar tabs' : 'Mostrar tabs'}
              </button>
            )}
          </div>
          <DownloadButton song={song} />
        </div>
      </div>
    </div>
  );
};

export default SongCard;