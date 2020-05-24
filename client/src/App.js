import React from 'react';
import Merch from './components/Merch/index';
import News from './components/News/index';
import Header from './components/FirstPage/Hero/Hero';

import './App.css';

function App() {
  return (
    <div className="">
      <header className=""></header>

      <div className="container-fluid"></div>
      <Header></Header>
      <News></News>
      <Merch></Merch>
    </div>
  );
}

export default App;
