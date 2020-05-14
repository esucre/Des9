import React from 'react';
import Card from './components/Card/index'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className = 'card-list'>

            <li><Card></Card></li>
            <li><Card></Card></li>
            <li><Card></Card></li>
            <li><Card></Card></li>
            <li><Card></Card></li>
            <li><Card></Card></li>
            <li><Card></Card></li>
            <li><Card></Card></li>
            <li><Card></Card></li>

        </ul>
        
      </header>
    </div>
  );
}

export default App;
