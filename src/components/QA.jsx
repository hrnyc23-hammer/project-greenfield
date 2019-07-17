import React from "react";
import store from "./../store/store";
import QASearchBarContainer from './../containers/QASearchBarContainer'

let QA = props => {
  return (
    <div>
      {console.log('WITHIN MAIN QA: (STORE): ', store.getState())}
      {console.log('WITHIN MAIN QA: (PROPS.QA): ', props.qa)}
    <QASearchBarContainer />
    </div>
  );
};

export default QA;
