/* eslint-disable no-unused-vars */
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Deal from './Pages/Deal';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/deal" element={<Deal/>} />
      </Routes>
    </>
  )
}

export default App;
