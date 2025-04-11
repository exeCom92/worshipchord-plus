import React from 'react';
import ChordDisplay from './ChordDisplay';

const QuickResult = ({ song, onRetry }) => {
  if (!song) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{song.title}</h2>
          <p className="text-gray-600 dark:text-gray-300">{song.artist}</p>
        </div>
        <div className="flex gap-4">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
            Tono: {song.key}
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
            BPM: {song.bpm}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Acordes</h3>
        <div className="flex flex-wrap gap-3">
          {song.chords.american.map((chord, index) => (
            <ChordDisplay key={index} chord={chord} />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Letra con acordes</h3>
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
          {song.lyrics.map((line, index) => (
            <div key={index} className="mb-3">
              <div className="flex flex-wrap gap-1 mb-1">
                {line.chords.map((chordIndex, i) => (
                  chordIndex !== null && (
                    <ChordDisplay key={i} chord={song.chords.american[chordIndex]} small />
                  )
                ))}
              </div>
              <p className="text-gray-800 dark:text-gray-200">{line.line}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onRetry}
        className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        Buscar otra canción
      </button>
    </div>
  );
};

export default QuickResult;