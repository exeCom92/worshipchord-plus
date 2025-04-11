import React from 'react';

const TabViewer = ({ tabs }) => {
  return (
    <div className="mt-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg font-mono whitespace-pre">
      {tabs.map((tab, i) => (
        <div key={i} className="text-gray-800 dark:text-gray-200">{tab}</div>
      ))}
    </div>
  );
};

export default TabViewer;