import React from 'react';
import OverviewContainer from '../containers/OverviewContainer.js';
import RelatedContainer from '../containers/RelatedContainer.js';
import ReviewsContainer from '../containers/ReviewsContainer.js';
import QAContainer from "./../containers/QAContainer";
import OutfitsContainer from '../containers/OutfitsContainer';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";



const App = (props) => {

  const useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(8),
      maxWidth: "100%"
    }
  }))

  const classes = useStyles();


  return (
    <React.Fragment>
      <Paper className={classes.paper}>
      <OverviewContainer />
      <RelatedContainer />
      <OutfitsContainer />
      <QAContainer /> 
      <ReviewsContainer />
      </Paper>
    </React.Fragment>
  )
};

export default App;
