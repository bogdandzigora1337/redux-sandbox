import React from "react";
import photo from "../../image/serf-foto.jpg";

import "../App/App.css";

import Likes from "../Likes/Likes";
import Title from "../Title/Title";
import Comments from "../Comments/Comments";

export default function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src={photo} alt="Image" />
            <Title></Title>
            <Likes />
          </div>
          <Comments></Comments>
        </div>
      </div>
    </div>
  );
}
