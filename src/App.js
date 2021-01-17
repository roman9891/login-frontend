import {LoginContainer} from './LoginContainer'
import {Provider} from './appContext'
import { useState } from 'react';
import {Login} from './Login'
import './App.css';

function App() {
  const [user, setUser] = useState(null)

  return (
    <Provider value={{user, setUser}}>
      <div className="App">
        <Login/>
      </div>
    </Provider>
  );
}

export default App;
