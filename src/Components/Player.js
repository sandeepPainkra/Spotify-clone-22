import React from "react";
import { useSelector } from "react-redux";
import { selectPlaylists } from "../features/musicSlice";

const Player = () => {
  const playlists = useSelector(selectPlaylists);
  return (
    <div>
      <span>player</span>
      {playlists?.items?.map((data) => {
        console.log(data.name);
        return <h1>{data.name}</h1>;
      })}
    </div>
  );
};

export default Player;
