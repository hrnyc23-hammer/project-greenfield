import React from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import { postQuestion, clickTracker } from "../infoFetchers.js";
import { Typography } from "@material-ui/core";

let QAAddQuestion = props => {
  return (
    <React.Fragment>
      <Modal
        open={props.clickedFlag}
        onClose={() => {
          props.QAQuestionFlagClicked(!props.clickedFlag);
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
              clickTracker("exit question modal", "QA");
              props.QAQuestionFlagClicked(!props.clickedFlag);
            }}
          >
            x
          </Button>
          <Typography variant="h6" gutterBottom>
            {" "}
            Add a Question
          </Typography>

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
          <br />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            placeholder="your question"
            onChange={e => {
              props.QAQuestionBody(e.target.value);
            }}
          />
          <Fab
            style={{ float: "right" }}
            onClick={() => {
              clickTracker("Submit Question", "QA");
              postQuestion(
                props.productId,
                props.body,
                props.nickname,
                props.email
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

export default QAAddQuestion;
