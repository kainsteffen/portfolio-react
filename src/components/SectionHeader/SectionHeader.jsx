import React from "react";
import "./SectionHeader.css";

function SectionHeader(props) {
  return <h3 className="section-header">{props.text}</h3>;
}

export default SectionHeader;
