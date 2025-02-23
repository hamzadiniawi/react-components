import './App.css';
import * as React from 'react';
import CarouselRatio from './my-components/carousel.js'
import AppBar from './my-components/app-bar.js'
import ProductCard from './my-components/card.js'

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
      <div style={{ display: 'flex' }}>
        <ProductCard value="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286" />
        <ProductCard value="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dCVDMyVBOWwlQzMlQTlwaG9uZSUyMHBvcnRhYmxlfGVufDB8fDB8fHww" />
        <ProductCard value="https://media.istockphoto.com/id/1023428598/fr/photo/illustration-3d-que-portable-isol%C3%A9-sur-fond-blanc-ordinateur-portable-avec-un-espace-vide.jpg?s=612x612&w=0&k=20&c=2ni1fP7xVS6JXoZsUMBKp0Amm5cb5pbSO-YADpxBdVA=" />
        <ProductCard value="https://images.unsplash.com/photo-1670535788315-6b7d64aa020c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbmV0dGUlMjBwczV8ZW58MHx8MHx8fDA%3D" />
      </div>
    </>
  );
}
