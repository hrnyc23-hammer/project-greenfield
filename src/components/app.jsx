import React from 'react';
import OverviewContainer from '../containers/OverviewContainer.js';
import ReviewsContainer from '../containers/ReviewsContainer.js';

const App = (props) => {
    return (
        <React.Fragment>
            <OverviewContainer />
            <ReviewsContainer />
        </React.Fragment>
    )
};

export default App;