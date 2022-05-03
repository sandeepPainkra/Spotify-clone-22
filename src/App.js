import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login.js";
import Home from "./Components/Home.js";
import { getTokenForUrl } from "./Components/musicStream";

const App = () => {
  return (
    <div className="app">
      <Login />
      <Home />
    </div>
  );
};

export default App;
