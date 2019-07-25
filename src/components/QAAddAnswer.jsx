import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import { postAnswer, clickTracker } from "../infoFetchers.js";
import { Typography } from "@material-ui/core";

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
            background: "white",
            margin: "20px",
            padding: "20px"
          }}
        >
          <Button
            style={{ float: "right" }}
            onClick={() => {
              clickTracker("Exit Answer Modal", "QA");
              props.QAAnswerFlagClicked(!props.clickedFlag);
            }}
          >
            x
          </Button>
          <Typography variant="h6" gutterBottom>
            {" "}
            Share Your Answer
          </Typography>
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
              clickTracker("Added a photo to answer modal", "QA");
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
            {props.photoUrl.map((photo, i) => {
              return <img src={photo} width="100" height="60" key={i} />;
            })}
          </React.Fragment>
          <br />
          <Fab
            style={{ float: "right" }}
            onClick={() => {
              clickTracker("Submitted answer form", "QA");
              postAnswer(
                props.qaCurrentQuestion,
                props.answerBody,
                props.nickname,
                props.email,
                props.photoUrl
              ).catch(err => {
                console.error("API request error");
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
