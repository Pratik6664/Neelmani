import React from 'react';
import './App.css';

import Home from './Components/Home/Home';
import Decoration from './Components/Decoration/Decoration';
import Event from './Components/Event/Event';
import Gallery from './Components/Gallery/Gallery';
import Package from './Components/Package/Package';

import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    
  <>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/deoration" element={<Decoration/>}/>
    <Route path="/event" element={<Event/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/package" element={<Package/>}/>
  </Routes>
  </BrowserRouter>
 
     </>
  );
}

export default App;
