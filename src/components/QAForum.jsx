import React from "react";
import store from "./../store/store";

let QAForum = props => {
  return (
    <div>
      {props.qa.results.map(result => {
        return <h3>{result.question_body}</h3>;
      })}
    </div>
  );
};

export default QAForum;
