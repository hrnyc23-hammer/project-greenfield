import React from 'react';
import OverviewContainer from '../containers/OverviewContainer.js';
import RelatedContainer from '../containers/RelatedContainer.js';
import ReviewsContainer from '../containers/ReviewsContainer.js';
import QAContainer from "./../containers/QAContainer";
import OutfitsContainer from '../containers/OutfitsContainer';


const App = (props) => {
  return (
    <React.Fragment>
      <OverviewContainer />
      <RelatedContainer />
      <OutfitsContainer />
      <QAContainer /> 
      <ReviewsContainer />
    </React.Fragment>
  )
};

export default App;
