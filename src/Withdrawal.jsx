import React, { useState } from "react";
import KeypadModule from "./KeypadModule";
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
  const [amount, setAmount] = useState("");
  const [breakdown, setBreakdown] = useState(null);

  const handleSubmit = (amount) => {
    setAmount(amount);
    const amountInt = parseInt(amount);
    let remaining = amountInt;
    const result = [];
    moneyTypes.forEach((type) => {
      const count = Math.floor(remaining / type.value);
      if (count > 0) {
        result.push({ ...type, count });
        remaining -= count * type.value;
      }
    });
    setBreakdown(result);
  };
  return (
    <div className="withdrawal">
      {!breakdown ? (
        <KeypadModule heading="Select amount" onSubmit={handleSubmit} />
      ) : (
        <div className="result">
          <div onClick={goBack} className="back-arrow">
            <img src={backArrow} alt="Backspace" />
          </div>
          <div className="heading">Withdrawal</div>
          <div className="amount">£ {amount}</div>
        </div>
      )}
    </div>
  );
}

export default Withdrawal;
