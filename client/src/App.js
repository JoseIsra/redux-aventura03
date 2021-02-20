import React from 'react';
import './App.css';
import { Sidebar, Chat } from './components';
function App() {
  return (
    <div className="app">
      <div className="app_title">
      <h1>Prueba de chat con mongodb </h1>
      </div>
    
        <Sidebar />
        <Chat />
      
    </div>
  );
}

export default App;
