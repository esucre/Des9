import React from 'react';
import CardList from './components/CardList/index';
import FBI from './components/FBI';
import './App.css';

function App() {
  return (
    <div className="App">
      <FBI />
      <header className="App-header">
        <CardList></CardList>
      </header>
    </div>
  );
}

export default App;
