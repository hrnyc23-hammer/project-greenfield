import Redux from "redux";

var QAClickedImageUrlReducer = (state = '', action) => {
  switch (action.type) {
    case "QA_CLICKED_IMAGE_URL":
      return action.clicked;
    default:
      return state;
  }
};

export default QAClickedImageUrlReducer;
