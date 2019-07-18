import React from "react";
import store from "./../store/store";

let QASearchBar = props => {
  return (
    <div>
      <form>
        <p>Questions and Answers</p>
        <input onChange={(e) => {props.QAHandleSearchEntry(e.target.value)}} placeholder={"Have a Question? Search for answers...."} />
        <button onClick={(e) => {
          e.preventDefault()
          console.log('search!')}}
          >search</button>
      </form>
    </div>
  );
};

export default QASearchBar;