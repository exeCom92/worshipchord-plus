import React from 'react';

const ChordNotation = ({ chord, isDegree, color }) => {
  const colors = {
    'american': ['#2794E3', '#3027E3', '#2759E3', '#27D0E3', '#6E27E3', '#7290E3'],
    'degrees': ['#3027E3', '#6E27E3', '#2759E3', '#27D0E3', '#2794E3', '#7290E3']
  };

  const bgColor = colors[isDegree ? 'degrees' : 'american'][Math.floor(Math.random() * 6)];

  return (
    <span 
      className={`inline-block mx-1 px-2 py-1 rounded-md text-white font-bold`}
      style={{ backgroundColor: color || bgColor }}
    >
      {chord}
    </span>
  );
};

export default ChordNotation;