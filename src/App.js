import React from 'react';
import './App.css';

import Home from './Components/Home/Home';
import Decoration from './Components/Decoration/Decoration';
import Event from './Components/Event/Event';
import Gallery from './Components/Gallery/Gallery';
import Package from './Components/Package/Package';
import Listbusiness from './Components/Listbusiness/listbusiness'
import Navcontact from './Components/Navcontact/Navcontact';
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
    <Route path="/listbusiness" element={<Listbusiness/>}/>
    <Route path="/navcontact" element={<Navcontact/>}/>
  </Routes>
  </BrowserRouter>
 
     </>
  );
}

export default App;
