import React from "react";
import store from "./../store/store";
import QAAnswersContainer from "./../containers/QAAnswersContainer";

let QAForum = props => {
  return (
    <div>
      {/* {console.log("WITHIN QAFORUM: ", props)} */}
      <ul>
        {props.qaResultsArr.map(result => {
          return (
            <React.Fragment key={Math.random()}>
              <li key={Math.random()}>Q: {result.question_body}</li>
              <QAAnswersContainer />
            </React.Fragment>
          );
        })}
      </ul>
      <button
        onClick={() => {
          console.log("hi");
        }}
      >
        More Answered Questions
      </button>
    </div>
  );
};

export default QAForum;
