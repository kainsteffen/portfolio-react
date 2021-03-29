import React from "react";
import "./TagsList.css";

function TagsList(props) {
  return (
    <div className="tags-list">
      <h4>{props.title}</h4>
      <ul>
        {props.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default TagsList;
