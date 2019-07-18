import React from "react";
import store from "./../store/store";
import QASearchBarContainer from "./../containers/QASearchBarContainer";
import QAForumContainer from "./../containers/QAForumContainer";

let QA = props => {
  return (
    <div>
      {/* {console.log('WITHIN MAIN QA: (STORE): ', store.getState())} */}
      {/* {console.log('QA.jsx\'s props: ', props)} */}
      <QASearchBarContainer />
      <QAForumContainer />
    </div>
  );
};

export default QA;
