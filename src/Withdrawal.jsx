import React, { useState } from "react";
import KeypadModule from "./KeypadModule";
import backArrow from "./assets/back-arrow-icon.png";
import "./Withdrawal.css";
import bill from "./assets/500-bill.png";

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
          <div className="breakdown">
            <div className="column">
              {breakdown
                .filter((item) => item.type === "note")
                .map((item, index) => (
                  <div className="box">
                    <div className="billImage">
                      <img src={bill}></img>
                    </div>
                    <div key={index} className="boxtext">
                      {item.count} x {item.value}
                    </div>
                  </div>
                ))}
            </div>
            <div className="column">
              {breakdown
                .filter((item) => item.type === "coin" && item.diameter > 20)
                .map((item, index) => (
                  <div className="box">
                    <div className="coinCircle"></div>
                    <div key={index} className="boxtext">
                      {item.count} x {item.value}
                    </div>
                  </div>
                  // <div key={index} className="box">{item.count} x £{item.value}</div>
                ))}
            </div>
            <div className="column">
              {breakdown
                .filter((item) => item.type === "coin" && item.diameter <= 20)
                .map((item, index) => (
                  <div className="box">
                    <div className="coinCircle"></div>
                    <div key={index} className="boxtext">
                      {item.count} x {item.value}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="footer">
            Thank you for using <br /> Enalyzer ATM
          </div>
        </div>
      )}
    </div>
  );
}

export default Withdrawal;
