import React from "react";
import QASearchBarContainer from "./../containers/QASearchBarContainer";
import QAForumContainer from "./../containers/QAForumContainer";

let QA = props => {
  return (
    <div>
      {console.log("QA search entry: ", props.QASearchEntry)}
      <QASearchBarContainer />
      <QAForumContainer />
    </div>
  );
};

export default QA;
