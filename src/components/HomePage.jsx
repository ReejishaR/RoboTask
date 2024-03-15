import React from 'react';
import Cards from './Cards';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Robot from './Robot';

function HomePage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/user/:firstName/:email" element={<Robot />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default HomePage;
