import React from "react";
import store from "./../store/store";
import QAAnswersContainer from "./../containers/QAAnswersContainer";

let QAForum = props => {
  return (
    <div>
      <ul>
        {props.qaResultsArr.map((result, i) => {
          return (
            <React.Fragment key={i}>
              {console.log(
                "results within map: ",
                Object.values(result.answers)
              )}

              <p key={i}>Q: {result.question_body}</p>
              <ul>
                {Object.values(result.answers).map(answer => {
                  return <li>{answer.body}</li>;
                })}
              </ul>
              <button>more answers</button>
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
