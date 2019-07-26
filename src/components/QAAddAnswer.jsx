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
            width: "600px",
            height: "600px",
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
          <br />
          <Typography variant="subtitle1" gutterBottom>
            {" "}
            Nickname:
          </Typography>
          <TextField
            placeholder="Example: jack543!"
            onChange={e => {
              props.QAAnswerNickname(e.target.value);
            }}
          />
          <p style={{ fontFamily: "roboto", fontSize: "10px" }}>
            “For privacy reasons, do not use your full name or email address”
          </p>
          <br />
          <Typography variant="subtitle1" gutterBottom>
            {" "}
            Email:
          </Typography>
          <TextField
            placeholder="Example: jack@email.com"
            onChange={e => {
              props.QAAnswerEmail(e.target.value);
            }}
          />
          <p style={{ fontFamily: "roboto", fontSize: "10px" }}>
            “For authentication reasons, you will not be emailed”
          </p>
          <br />
          <Typography variant="subtitle1" gutterBottom>
            {" "}
            Upload Photos:
          </Typography>
          <TextField
            placeholder="Photo Url"
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
            Add photos (Up to 5)
          </Button>
          <br />
          <Typography variant="subtitle1" gutterBottom>
            {" "}
            Answer Body:
          </Typography>
          <TextField
            placeholder="Your answer to this question"
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
