import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bg1 from "../images/bg1.jpg";
import bg3 from "../images/bg3.jpg";
import bg5 from "../images/bg5.jpg";
import "./Login.css";
import Header from "./Header.js";
import { Button } from "@material-ui/core";
import { accessUrl, loginUrl } from "./musicStream";

const Login = () => {
  return (
    <div className="login">
      <div className="login_container">
        <h1>Welcome to my music Streaming app</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint sed
          enim, eligendi hic excepturi natus velit modi omnis similique. Numquam
          libero rem adipisci? Aliquam quos necessitatibus temporibus ab non
          repellat.
        </p>
        <a href={accessUrl}>
          <Button className="my_btn" variant="outlined" color="secondary">
            Login With Spotify
          </Button>
        </a>
      </div>
      <Carousel
        infiniteLoop={true}
        interval={5000}
        autoPlay={true}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        <div>
          <img src={bg1} />
        </div>
        <div>
          <img src={bg3} />
        </div>
        <div>
          <img src={bg5} />
        </div>
      </Carousel>
    </div>
  );
};

export default Login;
