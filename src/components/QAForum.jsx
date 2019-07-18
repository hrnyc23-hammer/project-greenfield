import React from "react";
import store from "./../store/store";
import QAAnswersContainer from "./../containers/QAAnswersContainer";

let QAForum = props => {
  return (
    <div>
      {/* {console.log("QAForum.jsx's props: ", props)} */}
      <ul>
        {props.qaResultsArr.map((result, i) => {
          return (
            <React.Fragment key={i}>
              <li key={i}>Q: {result.question_body}</li>
              <QAAnswersContainer />
            </React.Fragment>
          );
        })}
      </ul>
      <button
        onClick={() => {
          if (props.qaCount < props.qa.results.length) {
            props.QAIncrementer(1);
            props.QAChangeResultsArr(props.qaCount);
          }
        }}
      >
        More Answered Questions
      </button>
    </div>
  );
};

export default QAForum;
