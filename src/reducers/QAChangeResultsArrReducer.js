import Redux from "redux";

var QAChangeResultsArrReducer = (state = [], action) => {
  let temp;
  let questions;
  switch (action.type) {
    case "CHANGE_RESULTS_ARRAY":
      temp = JSON.parse(JSON.stringify(state[action.entry]));
      temp.answerLimit = 2;
      [...state].forEach(question => {
        if (question.question_id !== temp.question_id) return [...state, temp];
      });
      return [...state];
    case "ADD_ANSWERS":
      questions = [...state];
      questions[action.index].answerLimit += 2;

      return questions;
    case "QA_FILTER_ARR":
      let questions = [...state];
      let filteredQuestions = questions.filter(question =>
        question.question_body.includes(action.entry)
      );

      return filteredQuestions;
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
