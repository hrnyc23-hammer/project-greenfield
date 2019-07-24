import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import { postAnswer } from "../infoFetchers.js";

let QAAddAnswer = props => {
  return (
    <React.Fragment>
      <Modal
        open={props.clickedFlag}
        onClose={() => {
          props.QAAnswerFlagClicked(!props.clickedFlag);
        }}
      >
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
              props.QAAnswerFlagClicked(!props.clickedFlag);
            }}
          >
            x
          </Button>
          <h3>Share Your Answer</h3>
          <TextField
            placeholder="nickname"
            onChange={e => {
              props.QAAnswerNickname(e.target.value);
            }}
          />
          <br />
          <TextField
            placeholder="your email"
            onChange={e => {
              props.QAAnswerEmail(e.target.value);
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
            placeholder="your answer"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={e => {
              props.QAAddAnswerBody(e.target.value);
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
          <Fab
            style={{ float: "right" }}
            onClick={() => {
              postAnswer(
                props.qaCurrentQuestion,
                props.answerBody,
                props.nickname,
                props.email,
                props.photoUrl
              ).catch(err => {
                console.log(err);
              });
              alert("Submitted!");
            }}
          >
            Submit
          </Fab>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default QAAddAnswer;
