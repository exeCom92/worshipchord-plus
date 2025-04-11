import React, { useState } from 'react';
import Header from './components/Header';
import MainTabs from './components/MainTabs';
import ExpressMode from './components/ExpressMode';
import SongEditor from './components/SongEditor';
import QuickSearch from './components/QuickSearch';
import songsData from './mock/songsData';

const App = () => {
  const [currentSong, setCurrentSong] = useState(songsData[0]);
  const [activeTab, setActiveTab] = useState('express');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main className="max-w-5xl mx-auto py-8 px-4">
        <MainTabs onTabChange={setActiveTab} />
        
        {activeTab === 'express' ? (
          <ExpressMode onSongSelect={setCurrentSong} />
        ) : (
          <>
            <QuickSearch onSearch={(term) => {
              const foundSong = songsData.find(song => 
                song.title.toLowerCase().includes(term.toLowerCase()) || 
                song.artist.toLowerCase().includes(term.toLowerCase())
              );
              if (foundSong) {
                setCurrentSong(foundSong);
                setActiveTab('editor');
              }
            }} />
            <SongEditor song={currentSong} />
          </>
        )}
      </main>
    </div>
  );
};

export default App;

// DONE