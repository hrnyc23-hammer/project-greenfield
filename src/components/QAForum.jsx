import React from "react";
import store from "./../store/store";
import QAAnswersContainer from "./../containers/QAAnswersContainer";

let QAForum = props => {
  return (
    <div>
      {console.log(props)}

      <ul>
        {props.qaResultsArr.map((result, i) => {
          return (
            <React.Fragment key={i}>
              <p key={i}>Q: {result.question_body}</p>
              <ul>
                {Object.values(result.answers).slice(0, result.answerLimit).map(answer => {
                  return <li>{answer.body}</li>;
                })}
              </ul>
              <button
                onClick={() => {
                  props.QAAddAnswers(i);
                }}
              >
                load more answers
              </button>
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
