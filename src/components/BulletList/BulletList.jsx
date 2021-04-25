import React from "react";
import "./BulletList.scss";

function BulletList(props) {
  return (
    <div className="bullet-list">
      <h4 className="bullet-list-header">{props.title}</h4>
      <ul>
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default BulletList;
