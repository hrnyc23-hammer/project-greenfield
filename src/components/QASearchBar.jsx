import React from "react";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";

let QASearchBar = props => {
  return (
    <div>
      <form>
        <h3>Questions and Answers</h3>
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
          }}
          placeholder={"Have a Question? Search for answers...."}
        />

        <Fab
          onClick={e => {
            e.preventDefault();
            console.log("search!");
          }}
        >
          Go!
        </Fab>
      </form>
    </div>
  );
};

export default QASearchBar;
