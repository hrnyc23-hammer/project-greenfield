import React from 'react';
import OverviewContainer from '../containers/OverviewContainer.js';
import RelatedContainer from '../containers/RelatedContainer.js';
import ReviewsContainer from '../containers/ReviewsContainer.js';
import QAContainer from "./../containers/QAContainer";
import OutfitsContainer from '../containers/OutfitsContainer';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

const App = (props) => {

  const useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(4),
      maxWidth: "100%"
    }
  }))

  const theme = {
    spacing: 1,
  }

  const classes = useStyles();


  return (
    <React.Fragment>
      <Box px={8}>
      <Paper className={classes.paper} divider={true}>
        <OverviewContainer />
        <Divider light={true} variant="middle"/>
        <RelatedContainer />
        <OutfitsContainer />
        <Divider light={true} variant="middle"/>
        <QAContainer />
        <Divider light={true} variant="middle"/> 
        <ReviewsContainer />
      </Paper>
      </Box>
    </React.Fragment>
  )
};

export default App;
