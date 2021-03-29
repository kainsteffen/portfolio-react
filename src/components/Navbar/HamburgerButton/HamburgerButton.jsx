import React from "react";
import "./HamburgerButton.css";

function HamburgerButton(props) {
  return (
    <button
      type="button"
      className={
        props.isCollapsed ? "hamburger-button collapsed" : "hamburger-button"
      }
      onClick={props.onClick}
    >
      <div className="hamburger-button-line" />
      <div className="hamburger-button-line" />
      <div className="hamburger-button-line" />
    </button>
  );
}

export default HamburgerButton;
