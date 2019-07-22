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
          <input
            placeholder="photo url"
            onChange={e => {
              props.QAUrl(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (props.photoUrl.length < 5) {
                props.QAAddPhotos(props.url);
              }
            }}
          >
            add photo
          </button>
          <br />
          <React.Fragment>
            {props.photoUrl.map(photo => {
              return (
                <img src={photo} width="100" height="60" key={Math.random()} />
              );
            })}
          </React.Fragment>
          <br />
          <button
            onClick={() => {
              console.log(props);
            }}
          >
            Submit
          </button>
          <button
            onClick={() => {
              props.QAAddAQuestionClicked(!props.clickedFlag);
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
