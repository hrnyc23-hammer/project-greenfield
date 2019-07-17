import React from 'react';
import OverviewContainer from '../containers/OverviewContainer.js';
import RelatedContainer from '../containers/RelatedContainer.js';
import ReviewsContainer from '../containers/ReviewsContainer.js';


const App = (props) => {
    return (
        <React.Fragment>
            <OverviewContainer />
            <ReviewsContainer />
            <RelatedContainer />
        </React.Fragment>
    )
};

export default App;