import React, { useState } from "react";
import backArrow from "./assets/back-arrow-icon.png";
import "./Withdrawal.css";

const moneyTypes = [
  { type: "note", value: 1000 },
  { type: "note", value: 500 },
  { type: "note", value: 200 },
  { type: "note", value: 100 },
  { type: "note", value: 50 },
  { type: "coin", value: 20, diameter: 40 },
  { type: "coin", value: 10, diameter: 20 },
  { type: "coin", value: 5, diameter: 50 },
  { type: "coin", value: 2, diameter: 30 },
  { type: "coin", value: 1, diameter: 10 },
];

function Withdrawal({ goBack }) {
  return (
    <div className="withdrawal">
      <div className="result">
        <div onClick={goBack} className="back-arrow">
          <img src={backArrow} alt="Backspace" />
        </div>
        <div className="heading">Withdrawal</div>
      </div>
    </div>
  );
}

export default Withdrawal;
