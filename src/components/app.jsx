import React from 'react';
import OverviewContainer from '../containers/OverviewContainer.js';
import RelatedContainer from '../containers/RelatedContainer.js';
import ReviewsContainer from '../containers/ReviewsContainer.js';
import QAContainer from "./../containers/QAContainer";


const App = (props) => {
  return (
    <React.Fragment>
      <OverviewContainer />
      <RelatedContainer />
      <QAContainer /> 
      <ReviewsContainer />
    </React.Fragment>
  )
};

export default App;
