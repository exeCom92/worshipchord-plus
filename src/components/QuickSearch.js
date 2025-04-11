import React, { useState } from 'react';

const QuickSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="bg-gradient-to-r from-[#27D0E3] to-[#2794E3] p-6 rounded-xl shadow-lg mb-8">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="text"
          placeholder="Buscar canción, artista o acorde..."
          className="flex-1 py-3 px-4 rounded-lg border border-white bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#6E27E3] text-gray-800"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-[#6E27E3] text-white rounded-lg hover:bg-[#7E37F3] transition-colors font-medium"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default QuickSearch;