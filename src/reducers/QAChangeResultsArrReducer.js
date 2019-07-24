import Redux from "redux";

var QAChangeResultsArrReducer = (state = [], action) => {
  let temp;
  let questions;
  switch (action.type) {
    case "CHANGE_RESULTS_ARRAY":
      temp = JSON.parse(JSON.stringify(state[action.entry]));
      temp.answerLimit = 2;

      return [...state];
    case "ADD_ANSWERS":
      questions = [...state];
      questions[action.index].answerLimit += 2;

      return questions;
    case "QA_FILTER_ARR":
      let questions = [...state];

      return questions.filter(question =>
        question.question_body
          .toLowerCase()
          .includes(action.entry.toLowerCase())
      );

    default:
      if (state.length > 0 && state[0].answerLimit === undefined) {
        return state.map(ele => {
          ele.answerLimit = 2;

          return ele;
        });
      } else {
        return state;
      }
  }
};

export default QAChangeResultsArrReducer;
