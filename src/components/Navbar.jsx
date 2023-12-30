import React from "react";
import "../styles/components/_navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <span className="navbar-logo">#VANLIFE</span>
        <div className="navbar-buttons">
          <span class="navbar-button">About</span>
          <span class="navbar-button">Vans</span>
        </div>
      </div>
    </div>
  );
}
