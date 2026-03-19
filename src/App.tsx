import React from 'react';
import { GeoCompanion } from './components/GeoCompanion';
import './styles/companion.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Geography Learning App</h1>
      </header>
      
      {/* Add the Geo Companion System */}
      <GeoCompanion />
      
      {/* Your other app content */}
    </div>
  );
}

export default App;
