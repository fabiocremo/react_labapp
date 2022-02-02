import React from 'react';
import { Navbar, Slideshow, Search } from './components';

import './App.css';

const App = () => (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Search />
      {/* <Slideshow /> */}
    </div>
  );
  
  

export default App;
