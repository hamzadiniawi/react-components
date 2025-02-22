import './App.css';
import * as React from 'react';
import CarouselRatio from './my-components/carousel.js'
import AppBar from './my-components/app-bar.js'
import Card from './my-components/card.js'

export default function App() {
  return (
    <>
      <header>
      <AppBar />
      </header>
      <div className="App">
        <CarouselRatio />
      </div>
      <br/>
      <div>
        <Card/>
      </div>
    </>
  );
}
