import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login.js";
import Home from "./Components/Home.js";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, setAccessToken } from "./features/musicSlice";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const _token = hash.substring(1).split("&")[0].split("=")[1];

      // for adding token in redux reducer
      dispatch(
        setAccessToken({
          token: _token,
        })
      );

      // spotify web api
      spotify.setAccessToken(_token);
      spotify
        .getMe()
        .then((user) => {
          console.log(user);
        })
        .catch((error) => console.log(error.message));
    }
  }, []);

  console.log(token);

  return (
    <div className="app">{token ? <h1>i am loged in</h1> : <Login />}</div>
  );
};

export default App;
