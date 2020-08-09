//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#:~:text=read%20them%20carefully.-,Introduction,dig%20into%20the%20reference%20documentation.

export const authEndpoint = "https://accounts.spotify.com/authorize";
//el usuario toca el boton y lo manda a este link para que el api atienda su autenticacion


const redirectUri = "http://localhost:3000/";
// Es el url que complete en el dashboard de spotify
// Habria que cambiarlo despues cuando lo deployara; 

const clientID = "1f81d880fb5344a3ab302f236a1a988d";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

// grabs the token when we receive the response
export const getTokenFromResponse = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        },{});
}

// getting the request url
export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;