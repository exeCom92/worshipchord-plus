import React from 'react';

const DownloadButton = ({ song }) => {
  const handleDownload = () => {
    // Simulación de generación de PDF
    alert(`Preparando PDF para ${song.title}`);
  };

  return (
    <button 
      onClick={handleDownload}
      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Descargar PDF
    </button>
  );
};

export default DownloadButton;