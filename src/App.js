import React from 'react';
import { Navbar, Slideshow, Search, Card } from './components';
import data from "./data";
import './App.css';

const cards = data.map(item => {
  return (
      <Card
          key={item.id}
          {...item}
          
      />
  )
})      

const App = () => (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Search />
      <section>
          <div className="cards-list-title">          
            <h1 >Suggested items...</h1> 
          </div>
          <div className="cards-list">
            {cards}
          </div>
                
      </section>
      {/* <Slideshow /> */}
    </div>
  );
  
  

export default App;
