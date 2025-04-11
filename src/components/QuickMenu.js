import React, { useState } from 'react';

const QuickMenu = ({ onProcessLink, onManualSelect }) => {
  const [link, setLink] = useState('');
  const [activeTab, setActiveTab] = useState('youtube');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await onProcessLink(link, activeTab);
    setIsLoading(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'youtube' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 dark:text-gray-400'}`}
          onClick={() => setActiveTab('youtube')}
        >
          YouTube
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'spotify' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 dark:text-gray-400'}`}
          onClick={() => setActiveTab('spotify')}
        >
          Spotify
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder={`Pega el link de ${activeTab === 'youtube' ? 'YouTube' : 'Spotify'}`}
          className="flex-1 py-3 px-4 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center"
          disabled={isLoading}
        >
          {isLoading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>
    </div>
  );
};

export default QuickMenu;