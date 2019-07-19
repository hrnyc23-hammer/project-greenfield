import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

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
          .map((question, i) => {
            return (
              <React.Fragment key={Math.random()}>
                <strong>
                  <span
                    key={Math.random()}
                    style={{
                      fontSize: "large",
                      padding: "0px 0px 0px 55px"
                    }}
                  >
                    Q: {question.question_body}
                  </span>
                </strong>

                <span
                  style={{
                    fontSize: "small",
                    float: "right",
                    textDecoration: "underline"
                  }}
                >
                  Add Answer
                </span>

                <span
                  style={{
                    fontSize: "small",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    float: "right"
                  }}
                >
                  |
                </span>

                <span
                  style={{
                    fontSize: "small",
                    float: "right",
                    paddingLeft: "5px"
                  }}
                >
                  {" "}
                  ({question.question_helpfulness}){" "}
                </span>
                <span
                  style={{
                    fontSize: "small",
                    float: "right",
                    textDecoration: "underline",

                    paddingLeft: "5px"
                  }}
                >
                  {" "}
                  Yes{" "}
                </span>
                <span style={{ fontSize: "small", float: "right" }}>
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
                    .map(answer => {
                      return (
                        <List key={Math.random()}>
                          <ListItem alignItems="flex-start" key={Math.random()}>
                            <p key={Math.random()}>A: {answer.body}</p>
                          </ListItem>

                          <ListItem key={Math.random()}>
                            {answer.photos.map(photo => {
                              return (
                                <img
                                  onClick={() => {
                                    console.log("need to add modal");
                                  }}
                                  src={photo}
                                  width="100"
                                  height="60"
                                  key={Math.random()}
                                />
                              );
                            })}
                          </ListItem>

                          <ListItem key={Math.random()}>
                            <span
                              key={Math.random()}
                              style={{
                                fontSize: "small",
                                spanadding: "0px 0px 0px 0px",

                                paddingRight: "5px"
                              }}
                            >
                              by: {answer.answerer_name} | date:{" "}
                              {answer.date.split("T")[0]} | Helpful?
                            </span>
                            <span
                              style={{
                                fontSize: "small",
                                textDecoration: "underline",
                                paddingRight: "5px"
                              }}
                            >
                              Yes
                            </span>
                            <span
                              style={{
                                fontSize: "small",
                                spanadding: "0px 0px 0px 0px"
                              }}
                            >
                              ({answer.helpfulness})
                            </span>
                            <span
                              style={{
                                fontSize: "small",
                                paddingLeft: "20px",
                                paddingRight: "20px"
                              }}
                            >
                              |
                            </span>
                            <span
                              style={{
                                fontSize: "small",
                                textDecoration: "underline"
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
                      props.QAAddAnswers(i);
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
          if (props.qaCount < props.qa.results.length) {
            props.QAIncrementer(1);
            props.QAChangeResultsArr(props.qaCount);
          }
        }}
      >
        More Answered Questions
      </Button>
    </div>
  );
};

export default QAForum;
