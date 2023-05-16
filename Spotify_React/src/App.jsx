import { useState, useEffect } from 'react'
import './App.css'

function App() {
const CLIENT_ID = "7369de991218483caedf489144c030aa";
const REDIRECT_URI = "http://localhost:5173/";
const  AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token"

const [token, setToken] = useState("")

useEffect(()=> {
const hash = window.location.hash
let token = window.localStorage.getItem("token")

// To gain access to just the token 

if(!token && hash){
  token = hash
  .substring(1)
    .split("&")
    .find(elem => elem.startsWith("access_token"))
    .split("=")[1];

  window.location.hash = ""
  window.localStorage.setItem("token",token)
  setToken(token)
}



},[])


  return (
    <>
  
  <h1>Spotify Playlist</h1>

{!token ? (
  <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
    Login to Spotify
  </a>
) : (
  <div>
    <button onClick={handleLogout}>Log Out</button>
  </div>
)}


    </>
  )
}

export default App
