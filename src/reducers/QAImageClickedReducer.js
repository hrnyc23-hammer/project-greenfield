import Redux from "redux";

var QAImageClickedReducer = (state = false, action) => {
  switch (action.type) {
    case "QA_IMAGE_CLICKED":
      return action.clicked;
    default:
      return state;
  }
};

export default QAImageClickedReducer;
