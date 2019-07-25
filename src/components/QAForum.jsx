import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import QAAddAnswerContainer from "./../containers/QAAddAnswerContainer";
import QAAddQuestionContainer from "./../containers/QAAddQuestionContainer";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import {
  putAnswerReport,
  putAnswerHelpful,
  putQuestionHelpful,
  getQA
} from "../infoFetchers.js";

let QAForum = props => {
  return (
    <div>
      <ul>
        {props.qaResultsArr
          .sort((a, b) =>
            a.helpfulness < b.helpfulness
              ? 1
              : b.helpfulness < a.helpfulness
              ? -1
              : 0
          )
          .slice(0, props.qaCount)
          .map((question, questionIndex) => {
            return (
              <React.Fragment key={questionIndex}>
                <strong>
                  {" "}
                  <span
                    style={{
                      fontSize: "large",
                      padding: "0px 0px 0px 55px",
                      fontFamily: 'roboto'
                    }}
                  >
                    Q: {question.question_body}
                  </span>
                </strong>

                <span
                  style={{
                    textDecoration: "underline",
                    fontSize: "small",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    float: "right",
                    cursor: "pointer",
                    fontFamily: 'roboto'
                  }}
                >
                  {" "}
                  <span
                    onClick={() => {
                      props.QACurrentQuestion(question.question_id);
                      props.QAAnswerFlagClicked(!props.answerClickedFlag);
                    }}
                  >
                    Add An Answer
                  </span>
                  <QAAddAnswerContainer />
                </span>

                <span
                  style={{
                    fontSize: "small",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    float: "right",
                    fontFamily: 'roboto'
                  }}
                >
                  |
                </span>

                <span
                  style={{
                    fontSize: "small",
                    float: "right",
                    paddingLeft: "5px",
                    fontFamily: 'roboto'
                  }}
                >
                  {" "}
                  ({question.question_helpfulness}){" "}
                </span>
                <span
                  onClick={() => {
                    putQuestionHelpful(question.question_id).catch(err => {
                      console.error("API request error");
                    });
                    alert("Thank you for your feedback!");
                  }}
                  style={{
                    fontSize: "small",
                    float: "right",
                    textDecoration: "underline",
                    paddingLeft: "5px",
                    cursor: "pointer",
                    fontFamily: 'roboto'
                  }}
                >
                  {" "}
                  Yes{" "}
                </span>
                <span style={{ fontSize: "small", float: "right", fontFamily: 'roboto'}}>
                  {" "}
                  helpful?{" "}
                </span>

                <ul>
                  {Object.values(question.answers)
                    .sort((a, b) =>
                      a.helpfulness < b.helpfulness
                        ? 1
                        : b.helpfulness < a.helpfulness
                        ? -1
                        : 0
                    )
                    .slice(0, question.answerLimit)
                    .map((answer, answerIndex) => {
                      return (
                        <List key={answerIndex}>
                          <ListItem alignItems="flex-start">
                            <p style={{fontFamily: 'roboto'}}>A: {answer.body}</p>
                          </ListItem>

                          <ListItem>
                            {answer.photos.map((photo, photoIndex) => {
                              return (
                                <img
                                  key={photoIndex}
                                  onClick={() => {
                                    props.QAClickedImageUrl(photo);
                                    props.QAImageClicked(!props.qaImageClicked);
                                  }}
                                  src={photo}
                                  width="100"
                                  height="60"
                                  style={{ cursor: "pointer" }}
                                />
                              );
                            })}
                          </ListItem>

                          <ListItem>
                            <span
                              style={{
                                fontSize: "small",
                                spanadding: "0px 0px 0px 0px",
                                paddingRight: "5px",
                                fontFamily: 'roboto'
                              }}
                            >
                              by: {answer.answerer_name} | date:{" "}
                              {answer.date.split("T")[0]} | Helpful?
                            </span>
                            <span
                              onClick={() => {
                                putAnswerHelpful(answer.id).catch(err => {
                                  console.error("API request error");
                                });
                                alert("Thank you for your feedback!");
                              }}
                              style={{
                                fontSize: "small",
                                textDecoration: "underline",
                                paddingRight: "5px",
                                cursor: "pointer",
                                fontFamily: 'roboto'
                              }}
                            >
                              Yes
                            </span>
                            <span
                              style={{
                                fontSize: "small",
                                spanadding: "0px 0px 0px 0px",
                                fontFamily: 'roboto'
                              }}
                            >
                              ({answer.helpfulness})
                            </span>
                            <span
                              style={{
                                fontSize: "small",
                                paddingLeft: "20px",
                                paddingRight: "20px",
                                fontFamily: 'roboto'
                              }}
                            >
                              |
                            </span>

                            <span
                              onClick={() => {
                                putAnswerReport(answer.id).catch(err => {
                                  console.error("API request error");
                                });
                                alert(
                                  "Answer reported. It will no longer show up on future page loads."
                                );
                              }}
                              style={{
                                fontSize: "small",
                                textDecoration: "underline",
                                cursor: "pointer",
                                fontFamily: 'roboto'
                              }}
                            >
                              Report
                            </span>
                          </ListItem>

                          <Divider />
                        </List>
                      );
                    })}
                </ul>
                {question.answerLimit >=
                Object.keys(question.answers).length ? (
                  <div />
                ) : (
                  <Button
                    size="small"
                    style={{ marginRight: "20px" }}
                    onClick={() => {
                      props.QAAddAnswers(questionIndex);
                    }}
                  >
                    load more answers
                  </Button>
                )}
                <br />
                <br />
              </React.Fragment>
            );
          })}
      </ul>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          if (props.qaCount < props.qaResultsArr.length) {
            props.QAIncrementer(1);
            props.QAChangeResultsArr(props.qaCount);
          }
        }}
      >
        More Answered Questions
      </Button>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          props.QAQuestionFlagClicked(!props.questionClickedFlag);
        }}
      >
        Add A Question
      </Button>
      <QAAddQuestionContainer />
      <Modal
        open={props.qaImageClicked}
        onClose={() => {
          props.QAImageClicked(!props.qaImageClicked);
        }}
      >
        <React.Fragment>
          <Button
            style={{ float: "right" }}
            onClick={() => {
              props.QAImageClicked(!props.qaImageClicked);
            }}
          >
            x
          </Button>
          <img
            src={props.qaImageUrl}
            style={{
              maxWidth: "800px",
              maxHeight: "800px",
              position: "absolute",
              left: "25%",
              top: "25%"
            }}
          />
        </React.Fragment>
      </Modal>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          console.log(props);
          getQA(props.productId);
        }}
      >
        Reset
      </Button>
    </div>
  );
};

export default QAForum;
