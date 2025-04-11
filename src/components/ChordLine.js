import React from 'react';

const ChordLine = ({ chords }) => {
  return (
    <div className="font-mono text-blue-700 font-bold mb-1 h-6">
      {chords.map((chord, index) => (
        <span key={index} className="inline-block mx-1">
          {chord}
        </span>
      ))}
    </div>
  );
};

export default ChordLine;