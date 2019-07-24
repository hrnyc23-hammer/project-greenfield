import React from "react";
import Modal from "@material-ui/core/Modal";

let QAAddQuestion = props => {
  return (
    <React.Fragment>
      <Modal
        open={props.clickedFlag}
        onClose={() => {
          props.QAQuestionFlagClicked(!props.clickedFlag);
        }}
      >
        <div>
          <p>hi</p>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default QAAddQuestion;
