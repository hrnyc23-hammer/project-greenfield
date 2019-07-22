import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

let QAAddAQuestion = props => {
  return (
    <React.Fragment>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          props.QAAddAQuestionClicked(!props.clickedFlag);
          console.log(props);
        }}
      >
        Add A Question +
      </Button>

      <Modal open={props.clickedFlag}>
        <div>
          <h3>Ask Your Question</h3>
          <input
            placeholder="nickname"
            onChange={e => {
              props.QAQuestionNickname(e.target.value);
            }}
          />
          <input
            placeholder="your email"
            onChange={e => {
              props.QAQuestionEmail(e.target.value);
            }}
          />
          <input
            placeholder="your question"
            onChange={e => {
              props.QAAddQuestionBody(e.target.value);
            }}
          />
          <button onClick={() => {}}>Submit</button>
          <br />
          <button
            onClick={() => {
              props.QAAddAQuestionClicked(!props.clickedFlag);
              console.log(props);
            }}
          >
            exit
          </button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default QAAddAQuestion;
