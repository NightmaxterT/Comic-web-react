import React from 'react';
import './App.css';
import TopMenu from '../Nav/TopMenu';
import Router from '../Router/Router';
import Footer from '../Footer/Footer';

function App() {
  
  return (  
    <div className="App">
      <div className='wrap'>
      <TopMenu ></TopMenu>
      </div>
      <Router></Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
