import React from 'react';
import CardList from './components/CardList/index'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className = 'card-list'>

            <li><CardList></CardList></li>
            <li><CardList></CardList></li>
            <li><CardList></CardList></li>


        </ul>
        
      </header>
    </div>
  );
}

export default App;
