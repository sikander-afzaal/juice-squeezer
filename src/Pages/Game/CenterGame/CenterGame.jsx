import React from "react";
import "./CenterGame.css";
import img from "../../../Assets/juicer.jpeg";
function CenterGame() {
  return (
    <div className="center-game">
      <img src={img} alt="" />
      <div className="graph">graph</div>
      <div className="prize-div">
        <h1 className="heading">Prize Pools</h1>
        <div className="prize-row">
          <div className="left-prize-row">
            <h2>Daily</h2>
            <p>Round #1</p>
          </div>
          <h1>5,000 $BY</h1>
        </div>
        <div className="prize-row">
          <div className="left-prize-row">
            <h2>Weekly</h2>
            <p>Round #1</p>
          </div>
          <h1>25,000 $BY</h1>
        </div>
        <div className="prize-row">
          <div className="left-prize-row">
            <h2>Monthly</h2>
            <p>Round #1</p>
          </div>
          <h1>65,000 $BY</h1>
        </div>
        <div className="prize-row">
          <h2>Yearly</h2>

          <h1>456,000 $BY</h1>
        </div>
      </div>
    </div>
  );
}

export default CenterGame;
