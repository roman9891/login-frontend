import {LoginContainer} from './LoginContainer'
import {Provider} from './appContext'
import { useState } from 'react';
// import './App.css';

function App() {
  const [user, setUser] = useState(null)

  return (
    <Provider value={{user, setUser}}>
      <div className="App">
        <LoginContainer/>
      </div>
    </Provider>
  );
}

export default App;
