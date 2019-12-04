import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  let [cart, setCart] = React.useState([]);
  let products = [
    {
      id: 1,
      name: 'tabby',
      imageUrl: 'http://placekitten.com/50/75',
      price: 500
    },
    {
      id: 2,
      name: 'panther',
      imageUrl: 'http://placekitten.com/51/76',
      price: 1000
    },
    {
      id: 3,
      name: 'cheetah',
      imageUrl: 'http://placekitten.com/49/51',
      price: 2560.39
    }
  ];

  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact={true}>
          <Home 
            cart={cart} 
            setCart={setCart} 
            products={products} 
          />
        </Route>
        <Route path="/cart">
          <Cart 
            cart={cart} 
            setCart={setCart}
          /> 
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
