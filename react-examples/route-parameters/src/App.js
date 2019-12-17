import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  let products = [
    {
      id: 'pants',
      name: 'Pants',
      price: 25,
      description: 'lorem ipsum dolor.....',
    },
    {
      id: 'shorts',
      name: 'Shorts',
      price: 10,
      description: 'lorem ipsum dolor.....',
    },
    {
      id: 'shirts',
      name: 'Shirts',
      price: 50,
      description: 'lorem ipsum dolor.....',
    },
    {
      id: 'shoes',
      name: 'Shoes',
      price: 100,
      description: 'blah blah',
    },
    {
      id: 'belts',
      name: 'Belts',
      price: 20,
      description: 'i am a belt'
    }
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route path="/" exact={true}>
            <Home products={products} />
          </Route>
          
          <Route path="/products/:id">
            <Product products={products} />
          </Route>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
