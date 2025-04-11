import React, { useState } from 'react';
import ChordNotation from './ChordNotation';

const SongEditor = ({ song }) => {
  const [notation, setNotation] = useState('american');
  const [editMode, setEditMode] = useState(false);

  if (!song) return null;

  const chords = notation === 'american' ? song.chords.american : song.chords.degrees;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{song.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{song.artist}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setNotation('american')}
              className={`px-4 py-2 rounded-lg ${notation === 'american' ? 'bg-[#2794E3] text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
            >
              Acordes
            </button>
            <button
              onClick={() => setNotation('degrees')}
              className={`px-4 py-2 rounded-lg ${notation === 'degrees' ? 'bg-[#6E27E3] text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
            >
              Grados
            </button>
          </div>
        </div>

        <div className="mb-6 flex gap-4">
          <div className="bg-[#27D0E3] bg-opacity-20 px-4 py-2 rounded-lg text-[#27D0E3] font-medium">
            Tono: {song.key}
          </div>
          <div className="bg-[#2759E3] bg-opacity-20 px-4 py-2 rounded-lg text-[#2759E3] font-medium">
            BPM: {song.bpm}
          </div>
          <button 
            onClick={() => setEditMode(!editMode)}
            className="ml-auto px-4 py-2 bg-[#3027E3] text-white rounded-lg hover:bg-[#3A30F5] transition-colors"
          >
            {editMode ? 'Guardar' : 'Editar'}
          </button>
        </div>

        <div className="space-y-6">
          {song.lyrics.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
              <h3 className="text-xl font-semibold text-[#6E27E3] dark:text-[#9D6EFF] mb-4">
                {section.sectionName}
              </h3>
              
              {section.lines.map((line, lineIndex) => (
                <div key={lineIndex} className="mb-4">
                  <div className="font-mono text-[#2759E3] dark:text-[#7290E3] font-bold mb-1">
                    {line.chords.map((chordIndex, i) => (
                      chordIndex !== null ? (
                        <ChordNotation 
                          key={i} 
                          chord={chords[chordIndex]} 
                          isDegree={notation === 'degrees'}
                        />
                      ) : (
                        <span key={i} className="inline-block w-4"></span>
                      )
                    ))}
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 text-lg">
                    {line.text}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SongEditor;