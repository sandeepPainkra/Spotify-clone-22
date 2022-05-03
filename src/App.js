import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login.js";
import Home from "./Components/Home.js";

const App = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      console.log(token);
    }
  }, []);

  return (
    <div className="app">
      <Login />
      <Home />
    </div>
  );
};

export default App;
