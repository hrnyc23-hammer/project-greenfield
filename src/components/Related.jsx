import React, { useEffect, useState } from 'react';
import RelatedItem from './RelatedItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));


const Related = (props) => {
  const classes = useStyles();

  useEffect(() => {
    if (props.related.length === 0) {
      props.fetchRelatedIds(props.info.id);
    } else if (typeof props.related[0] === 'number') {
      props.load(props.related);
    }
  });

  const [lowerLimit, setLowerLimit] = useState(0);

  const reduceLimit = (event) => {
    event.preventDefault();
    setLowerLimit(lowerLimit - 1);
  };

  const increaseLimit = (event) => {
    event.preventDefault();
    setLowerLimit(lowerLimit + 1);
  };

  return (
    <div>
    <Grid container className={classes.root}
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={4}
    >
      {lowerLimit !== 0 ? <Grid item>
        <Fab onClick={reduceLimit}>{"<"}</Fab>
      </Grid> : <div></div>}
      {props.related.length !== 0 ? props.related.map((item, idx) => {
        if (idx >= lowerLimit && idx < lowerLimit + 4) {
          return (
          <Grid item key={idx}>
            <RelatedItem item={item} currentItemInfo={props.info} handleRelatedClick={props.handleRelatedClick}/>
          </Grid>
        )}
      }) : null}
      {lowerLimit + 4 < props.related.length ? <Grid item>
        <Fab onClick={increaseLimit}>{">"}</Fab>
        </Grid> : <div></div>}
    </Grid>
    </div>
  )
};

export default Related;