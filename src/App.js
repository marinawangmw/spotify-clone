import React, { useEffect, useState } from 'react';
import Login from './Login';
import SpotifyApi from 'spotify-web-api-js';

import './App.css';
import { getTokenFromResponse } from './spotify';

const spotify = new SpotifyApi()

function App() {

  const [token, setToken] = useState(null); //estado

  // esto me deja correr un codigo cuando algo pase
  // ahora lo estoy dejando para que corra al montar la app
  useEffect(() => {

    const hash = getTokenFromResponse();

    // para que no muestre el token por el url
    window.location.hash = "";
    const _token = hash.access_token; 
    //_ var temporal != estado

    if(_token) {
      setToken(_token);
      //mas seguridad p/ las idas y vueltas
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log('show me the user: ', user);
      })
    }

  },[])

  return (
    <div className="app">
      {
        token ?
          <h1>I am the player</h1>
          : (
            <Login />
          )
      }
    </div>
  );
}

export default App;
