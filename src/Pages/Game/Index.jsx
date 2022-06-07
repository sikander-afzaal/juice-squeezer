import React from "react";
import "./Index.css";
import LeftGame from "./LeftGame/LeftGame";
import RightGame from "./RightGame/RightGame";
import CenterGame from "./CenterGame/CenterGame";
function Index() {
  return (
    <div className="game">
      <LeftGame />
      <CenterGame />
      <RightGame />
    </div>
  );
}

export default Index;
