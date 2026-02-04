import React from "react";
import { Rnd } from "react-rnd";
import "./macWindow.scss";

const MacWindow = ({children,width="40vw",height="50vh"}) => {
  return (
    <Rnd default={{
      height:height,
      width:width,
      x:200,
      y:200
    }}>
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>akshat__sisodia -- zsh</p>
          </div>
        </div>
        <div className="main-content">
          {children}
        </div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
