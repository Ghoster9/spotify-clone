import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login/Login';
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null);
  
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
    }

    console.log("I Have a token: ", token);
  }, []);

  return (
    <div className="App">
      {
        token ? (
          <h1>i am logged in</h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
