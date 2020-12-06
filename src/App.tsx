import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  }}>
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
