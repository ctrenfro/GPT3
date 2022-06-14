import React from "react";

import "./ResponseItem.css";
function ResponseItem(props) {
  return (
    <div className="repItem">
      <h3>Question</h3>
      <p>{props.question}</p>
      <h3>Answer</h3>
      <p>{props.answer}</p>
      <h3>Model</h3>
      <p>{props.model}</p>
    </div>
  );
}

export default ResponseItem;
