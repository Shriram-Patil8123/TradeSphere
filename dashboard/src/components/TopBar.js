import React from "react";
import Menu from "./Menu";

const params = new URLSearchParams(window.location.search);
const name = params.get("name");

const TopBar = () => {
  // const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>

        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

    
<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }}
>
  <span
    style={{
      fontSize: "14px",
      fontWeight: "500",
      color: "#424242",
    }}
  >
    Hi, { name || "User" }
  </span>

  <button
    onClick={() => {
      localStorage.clear();
      window.location.href = "http://localhost:3000/login";
    }}
    style={{
      border: "none",
      background: "none",
      color: "#387ed1",
      cursor: "pointer",
      fontSize: "14px",
    }}
  >
    Logout
  </button>

  <Menu />
</div>
      </div>
  );
};

export default TopBar;