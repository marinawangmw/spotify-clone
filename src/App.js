import React, { useEffect } from 'react';
import Login from './Login';
import Player from './Player';
import SpotifyApi from 'spotify-web-api-js';
import { useStateValue } from './StateProvider';
import { getTokenFromResponse } from './spotify';

import './App.css';

const spotify = new SpotifyApi()

function App() {

  // { pull a state out } 
  const[{ token },dispatch] = useStateValue();

  // esto me deja correr un codigo cuando algo pase
  // ahora lo estoy dejando para que corra al montar la app
  useEffect(() => {

    const hash = getTokenFromResponse();

    // para que no muestre el token por el url
    window.location.hash = "";
    const _token = hash.access_token; 

    if(_token) {
      // comunicacion segura con el api
      spotify.setAccessToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })


      spotify.getMe().then((user) => {
        dispatch ({
          type: 'SET_USER',
          user
        })
      })
    }

  },[])

  return (
    <div className="app">
      {
        token ?
          <Player spotify={spotify} />
          : (
            <Login />
          )
      }
    </div>
  );
}

export default App;
