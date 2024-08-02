import { useState } from "react";
import Withdrawal from "./Withdrawal";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      {page === "home" && (
        <div className="container">
          <div className="Appheading">
            Enalyzer <br /> ATM
          </div>
          <div
            className="Appbutton button"
            onClick={() => setPage("withdraw")}
            style={{
              background: page === "withdraw" ? "white" : "",
              color: page === "withdraw" ? "#2bbed3" : "",
            }}
          >
            Withdraw
          </div>
          {/* <div className="button">Deposit</div> */}
        </div>
      )}
      {page === "withdraw" && <Withdrawal goBack={() => setPage("home")} />}
    </div>
  );
}

export default App;
