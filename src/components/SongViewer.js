import React, { useState } from 'react';
import ChordLine from './ChordLine';
import LyricLine from './LyricLine';

const SongViewer = ({ song }) => {
  const [notation, setNotation] = useState('american');

  if (!song) return null;

  const chords = notation === 'american' ? song.chords.american : song.chords.degrees;

  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{song.title}</h2>
          <p className="text-gray-600">{song.artist}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setNotation('american')}
            className={`px-3 py-1 rounded ${notation === 'american' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Acordes
          </button>
          <button
            onClick={() => setNotation('degrees')}
            className={`px-3 py-1 rounded ${notation === 'degrees' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Grados
          </button>
        </div>
      </div>

      <div className="mb-4 flex gap-4">
        <div className="bg-gray-100 px-3 py-1 rounded text-gray-700">
          Tono: <span className="font-bold">{song.key}</span>
        </div>
        <div className="bg-gray-100 px-3 py-1 rounded text-gray-700">
          BPM: <span className="font-bold">{song.bpm}</span>
        </div>
      </div>

      <div className="font-mono">
        {song.lyrics.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">{section.sectionName}</h3>
            {section.lines.map((line, lineIndex) => (
              <div key={lineIndex}>
                {line.chords && line.chords.some(c => c !== null) && (
                  <ChordLine chords={line.chords.map(c => c !== null ? chords[c] : ' ')} />
                )}
                <LyricLine line={line.text} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongViewer;