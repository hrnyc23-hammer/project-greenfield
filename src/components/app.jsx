import React from 'react';
import OverviewContainer from '../containers/OverviewContainer.js';
import ReviewsContainer from '../containers/ReviewsContainer.js';
import RelatedContainer from '../containers/relatedContainer.js';

const App = (props) => {
    return (
        <React.Fragment>
            <OverviewContainer />
            {/* <ReviewsContainer /> */}
            <RelatedContainer />
        </React.Fragment>
    )
};

export default App;