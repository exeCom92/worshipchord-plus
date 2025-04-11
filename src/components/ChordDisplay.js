import React from 'react';

const ChordDisplay = ({ chord, isDegree }) => {
  const getChordColor = (chord) => {
    const chordMap = {
      'C': 'bg-blue-100 text-blue-800',
      'G': 'bg-green-100 text-green-800',
      'D': 'bg-yellow-100 text-yellow-800',
      'A': 'bg-red-100 text-red-800',
      'E': 'bg-purple-100 text-purple-800',
      'I': 'bg-blue-100 text-blue-800',
      'V': 'bg-green-100 text-green-800',
      'vi': 'bg-yellow-100 text-yellow-800',
      'IV': 'bg-purple-100 text-purple-800'
    };
    return chordMap[chord] || 'bg-gray-100 text-gray-800';
  };

  return (
    <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-lg font-bold ${getChordColor(chord)}`}>
      {chord}
    </span>
  );
};

export default ChordDisplay;