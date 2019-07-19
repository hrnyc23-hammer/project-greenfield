import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

let QAForum = props => {
  return (
    <div>
      <ul>
        {props.qaResultsArr.map((result, i) => {
          return (
            <React.Fragment key={Math.random()}>
              <p key={Math.random()}>Q: {result.question_body}</p>
              <ul>
                {Object.values(result.answers)
                  .slice(0, result.answerLimit)
                  .map((answer, i) => {
                    return (
                      <List key={Math.random()}>
                        <ListItem alignItems="flex-start" key={Math.random()}>
                          <p key={Math.random()}>A: {answer.body}</p>
                        </ListItem>
                        <ListItem key={Math.random()}>
                          <p key={Math.random()}>
                            by: {answer.answerer_name} | date:{" "}
                            {answer.date.split("T")[0]}
                          </p>
                        </ListItem>
                        <ListItem key={Math.random()}>
                          {answer.photos.map((photo, i) => {
                            return (
                              <img
                                src={photo}
                                width="100"
                                height="60"
                                key={Math.random()}
                              />
                            );
                          })}
                        </ListItem>
                        <Divider
                          variant="inset"
                          component="li"
                          key={Math.random()}
                        />
                      </List>
                    );
                  })}
              </ul>
              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  props.QAAddAnswers(i);
                }}
              >
                load more answers
              </Button>
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
