import React from 'react';
import { 
  BrowserRouter,
  Route,
} from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  let [username, setUsername] = React.useState('');

  return (
    <BrowserRouter>
      <div>
        <Route path={'/login'}>
          <Login 
            username={username} 
            setUsername={setUsername} 
          />
        </Route>
        <Route path={'/home'}>
          <Home username={username} />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
