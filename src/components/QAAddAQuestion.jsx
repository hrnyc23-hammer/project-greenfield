import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";

let QAAddAQuestion = props => {
  return (
    <React.Fragment>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          props.QAAddAQuestionClicked(!props.clickedFlag);
        }}
      >
        Add A Question +
      </Button>

      <Modal open={props.clickedFlag}>
        <div
          style={{
            width: "500px",
            height: "500px",
            position: "absolute",
            left: "35%",
            top: "25%",
            background: "white"
          }}
        >
          <Button
            style={{ float: "right" }}
            onClick={() => {
              props.QAAddAQuestionClicked(!props.clickedFlag);
            }}
          >
            x
          </Button>
          <h3>Ask Your Question</h3>
          <TextField
            placeholder="nickname"
            onChange={e => {
              props.QAQuestionNickname(e.target.value);
            }}
          />
          <br />
          <TextField
            placeholder="your email"
            onChange={e => {
              props.QAQuestionEmail(e.target.value);
            }}
          />
          <br />

          <TextField
            placeholder="photo url"
            onChange={e => {
              props.QAUrl(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              if (props.photoUrl.length < 5) {
                props.QAAddPhotos(props.url);
              }
            }}
          >
            add photos (Up to 5)
          </Button>
          <br />
          <TextField
            placeholder="your question"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={e => {
              props.QAAddQuestionBody(e.target.value);
            }}
          />
          <React.Fragment>
            {props.photoUrl.map(photo => {
              return (
                <img src={photo} width="100" height="60" key={Math.random()} />
              );
            })}
          </React.Fragment>
          <br />
          <Fab style={{ float: "right" }} onClick={() => {}}>
            Submit
          </Fab>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default QAAddAQuestion;
