import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import QAAddAnswerContainer from "./../containers/QAAddAnswerContainer";
import QAAddQuestionContainer from "./../containers/QAAddQuestionContainer";
import Modal from "@material-ui/core/Modal";
import {
  putAnswerReport,
  putAnswerHelpful,
  putQuestionHelpful,
  getQA,
  clickTracker
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
                      fontFamily: "roboto"
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
                    fontFamily: "roboto"
                  }}
                >
                  {" "}
                  <span
                    onClick={() => {
                      clickTracker("Add an answer", "QA");
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
                    fontFamily: "roboto"
                  }}
                >
                  |
                </span>

                <span
                  style={{
                    fontSize: "small",
                    float: "right",
                    paddingLeft: "5px",
                    fontFamily: "roboto"
                  }}
                >
                  {" "}
                  ({question.question_helpfulness}){" "}
                </span>
                <span
                  onClick={() => {
                    clickTracker("upvotes question", "QA");
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
                    fontFamily: "roboto"
                  }}
                >
                  {" "}
                  Yes{" "}
                </span>
                <span
                  style={{
                    fontSize: "small",
                    float: "right",
                    fontFamily: "roboto"
                  }}
                >
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
                            <p style={{ fontFamily: "roboto" }}>
                              A: {answer.body}
                            </p>
                          </ListItem>

                          <ListItem>
                            {answer.photos.map((photo, photoIndex) => {
                              return (
                                <img
                                  key={photoIndex}
                                  onClick={() => {
                                    clickTracker(
                                      "image clicked in answer",
                                      "QA"
                                    );
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
                                fontFamily: "roboto"
                              }}
                            >
                              by: {answer.answerer_name} | date:{" "}
                              {answer.date.split("T")[0]} | Helpful?
                            </span>
                            <span
                              onClick={() => {
                                clickTracker("upvote answer", "QA");
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
                                fontFamily: "roboto"
                              }}
                            >
                              Yes
                            </span>
                            <span
                              style={{
                                fontSize: "small",
                                spanadding: "0px 0px 0px 0px",
                                fontFamily: "roboto"
                              }}
                            >
                              ({answer.helpfulness})
                            </span>
                            <span
                              style={{
                                fontSize: "small",
                                paddingLeft: "20px",
                                paddingRight: "20px",
                                fontFamily: "roboto"
                              }}
                            >
                              |
                            </span>

                            <span
                              onClick={() => {
                                clickTracker("Answer reported", "QA");
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
                                fontFamily: "roboto"
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
                      clickTracker("load more answers", "QA");
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
      </ul>{" "}
      {props.qaCount > 2 ? (
        <img
          src="data:image/png;base64,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"
          width="50"
          height="50"
          style={{ cursor: "pointer" }}
          onClick={() => {
            clickTracker("collapse button", "QA");
            props.QAIncrementer(2 - props.qaCount);
            getQA(props.productId).then(data =>
              props.QAResetResultsArray(data.data.results)
            );
          }}
        />
      ) : (
        <div />
      )}
      <br />
      <span style={{ marginRight: "20px" }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            clickTracker("more answered questions button", "QA");
            if (props.qaCount < props.qaResultsArr.length) {
              props.QAIncrementer(1);
              props.QAChangeResultsArr(props.qaCount);
            }
          }}
        >
          More Answered Questions
        </Button>
      </span>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          clickTracker("add a question", "QA");
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
              clickTracker("exit out of answer image modal", "QA");
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
    </div>
  );
};

export default QAForum;
