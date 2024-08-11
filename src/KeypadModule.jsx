import React, { useState } from "react";
import backArrow from "./assets/back-arrow-icon.png";
import "./KeypadModule.css";

function KeypadModule({ heading, onSubmit }) {
  const [amount, setAmount] = useState("");
  const [activeButton, setActiveButton] = useState(null);

  const handleNumberClick = (num) => {
    setAmount(amount + num);
    setActiveButton(num);
  };

  const handleBackspace = () => {
    setAmount(amount.slice(0, -1));
    setActiveButton(null);
  };

  const handleSubmit = () => {
    onSubmit(amount);
  };

  const [showCursor, setShowCursor] = useState(true);

  return (
    <div className="KeypadModule">
      <div className="KeypadModuleheading">{heading}</div>
      <div className="KeypadModule-container">
        <div className="amountSign">£</div>
        <div className="amount">{amount}</div>
        {showCursor && <div className="blinking-cursor">|</div>}
        {/* <input type="text" value={amount} readOnly /> */}
      </div>
      <div className="keypad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => handleNumberClick(num)}
            className={activeButton === num ? "active" : ""}
          >
            {num}
          </button>
        ))}
        <button onClick={handleBackspace}>
          <img src={backArrow} alt="Backspace" />
        </button>
        <button
          onClick={() => handleNumberClick(0)}
          className={activeButton === 0 ? "active" : ""}
        >
          0
        </button>
      </div>
      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={!amount}
      >
        Submit
      </button>
    </div>
  );
}

export default KeypadModule;
