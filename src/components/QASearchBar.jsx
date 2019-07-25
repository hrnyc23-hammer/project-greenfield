import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { getQA } from "../infoFetchers.js";

let QASearchBar = props => {
  return (
    <React.Fragment>
      <div>
        <br />
        <br />

        <Typography variant="h4">Questions and Answers</Typography>
        <br />
        <TextField
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          onChange={e => {
            props.QAHandleSearchEntry(e.target.value);
            if (props.qaSearchEntry.length >= 3) {
              props.QAFilterResultsArr(e.target.value);
            } else if (props.qaSearchEntry.length === 2) {
              props.QAIncrementer(2 - props.qaCount);
              getQA(props.productId).then(data =>
                props.QAResetResultsArray(data.data.results)
              );
            }
          }}
          placeholder={"Have a Question? Search for answers...."}
        />
      </div>
    </React.Fragment>
  );
};

export default QASearchBar;
