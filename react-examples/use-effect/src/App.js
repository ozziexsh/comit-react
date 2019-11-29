import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Fruits from './pages/Fruits';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/fruits" component={Fruits} />
      </div>
    </BrowserRouter>
  )
}

export default App;
