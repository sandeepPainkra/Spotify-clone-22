import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login.js";
import Home from "./Components/Home.js";
import Player from "./Components/Player.js";
import { useDispatch, useSelector } from "react-redux";
import {
  getPlaylists,
  getUser,
  selectPlaylists,
  selectToken,
  selectUser,
  setAccessToken,
} from "./features/musicSlice";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const playlists = useSelector(selectPlaylists);

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

      // for user
      spotify
        .getMe()
        .then((user) => {
          dispatch(
            getUser({
              user: user,
            })
          );
        })
        .catch((error) => console.log(error.message));

      // for playlists
      spotify
        .getUserPlaylists()
        .then((playlists) => {
          console.log(playlists);
          dispatch(
            getPlaylists({
              playlists: playlists,
            })
          );
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // console.log(token);
  // console.log(user);
  console.log(playlists);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
};

export default App;
