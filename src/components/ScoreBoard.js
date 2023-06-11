import React from "react";

import "./ScoreBoard.css";

export const ScoreBoard = ({scores,xPlaying}) => {
    const{xScore,oScore} = scores ;
    return(
        <div className="ScoreBoard">
            <span className={`sr x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
            <span className={`sr o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
        </div>
    )
}