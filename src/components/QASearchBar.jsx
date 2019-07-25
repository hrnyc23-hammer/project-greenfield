import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";


let QASearchBar = props => {
  return (
    <React.Fragment>
      <div>
        <Typography variant='h4'>
         Questions and Answers
        </Typography>

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
            }
          }}
          placeholder={"Have a Question? Search for answers...."}
        />
      </div>
    </React.Fragment>
  );
};

export default QASearchBar;
