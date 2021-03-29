import React from "react";
import "./CustomButton.css";

function CustomButton(props) {
  return (
    <button type="button" className="custom-button" onClick={props.onPress}>
      {props.leadingIcon && <img src={props.leadingIcon} alt="Button icon" />}
      {/* <label>{props.label}</label> */}
      <div>{props.label}</div>
    </button>
  );
}

export default CustomButton;
