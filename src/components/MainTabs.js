import React, { useState } from 'react';

const MainTabs = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('express');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
      <div className="flex">
        <button
          className={`py-3 px-6 font-medium ${activeTab === 'express' ? 'text-[#2794E3] border-b-2 border-[#2794E3]' : 'text-gray-500 dark:text-gray-400'}`}
          onClick={() => handleTabChange('express')}
        >
          Modo Express
        </button>
        <button
          className={`py-3 px-6 font-medium ${activeTab === 'editor' ? 'text-[#6E27E3] border-b-2 border-[#6E27E3]' : 'text-gray-500 dark:text-gray-400'}`}
          onClick={() => handleTabChange('editor')}
        >
          Editor Completo
        </button>
      </div>
    </div>
  );
};

export default MainTabs;