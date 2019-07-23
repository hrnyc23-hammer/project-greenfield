import React, { useEffect, useState } from 'react';
import RelatedItem from './RelatedItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  shift: {
    cursor: "pointer"
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
        <SvgIcon color="primary" onClick={reduceLimit} className={classes.shift}>
          <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/>
        </SvgIcon>
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
        <SvgIcon color="primary" onClick={increaseLimit} className={classes.shift}>
          <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/>
        </SvgIcon>
        </Grid> : <div></div>}
    </Grid>
    </div>
  )
};

export default Related;