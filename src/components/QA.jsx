import React from "react";
import QASearchBarContainer from "./../containers/QASearchBarContainer";
import QAForumContainer from "./../containers/QAForumContainer";

let QA = props => {
  return (
    <div>
      <QASearchBarContainer />
      <QAForumContainer />
      <br />
    </div>
  );
};

export default QA;
