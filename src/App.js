import React from 'react';
import { userSelector } from 'react-redux';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { selectUser } from './features/userSlice';


function App() {
  const user = userSelector(selectUser);
  return (
    <div className="app">
      {user? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <h2>You need to login!</h2>
      )}
    </div>
  );
}

export default App;
