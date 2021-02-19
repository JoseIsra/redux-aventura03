import React from 'react';
import './App.css';
import { Sidebar, Chat } from './components';
function App() {
  return (
    <div className="app">
      <h1>Prueba de chat con mongodb </h1>
      <div className="app__content">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
