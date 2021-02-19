import React from 'react';
import { userSelector } from 'react-redux';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';


function App() {
  const user = userSelector();
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
