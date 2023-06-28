import React from 'react';
import { Link, Route, Routes } from "react-router-dom"
import './App.css';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  return (
    <div className="App">
      <header>
        <h2 className="title">UBUNTU E SOBRE</h2>
        <ul>
          <li><Link to="/home">filosofia</Link></li>
          <li><Link to="/sobre">Sobre Mim</Link></li>
        </ul>
      </header>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/sobre' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
