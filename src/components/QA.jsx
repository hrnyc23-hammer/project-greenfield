import React from "react";
import store from "./../store/store";

let QA = props => {
  return (
    <div>
      {console.log(props)}
      <form>
        <p>Questions and Answers</p>
        <input placeholder={"Have a Question? Search for answers...."} />
        <button>search</button>
      </form>
    </div>
  );
};

export default QA;
