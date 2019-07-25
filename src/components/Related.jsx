import React, { useEffect, useState } from 'react';
import RelatedItem from './RelatedItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Typography } from '@material-ui/core';
import { clickTracker } from '../infoFetchers';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  shift: {
    cursor: "pointer"
  },
  invisible: {
    visibility: "hidden"
  },
  visible: {
    visibility: "visible"
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

  const reduceLimit = () => {
    setLowerLimit(lowerLimit - 1);
  };

  const increaseLimit = () => {
    setLowerLimit(lowerLimit + 1);
  };

  return (
    <React.Fragment>
      <Typography variant="h5">Related Products</Typography>
      <Grid container className={classes.root}
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={4}
      >
        <Grid item className={classes.invisible}>
        <SvgIcon className={classes.shift} color="primary">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </SvgIcon>
        </Grid>
        <Grid item className={lowerLimit !== 0 ? classes.visible : classes.invisible}>
          <SvgIcon color="primary" onClick={() => {
            reduceLimit();
            clickTracker("see-more-related-products", "compare");
          }} className={classes.shift}>
            <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/>
          </SvgIcon>
        </Grid>
        {props.related.length !== 0 ? props.related.map((item, idx) => {
          if (idx >= lowerLimit && idx < lowerLimit + 4) {
            return (
            <Grid item key={idx}>
              <RelatedItem item={item} currentItemInfo={props.info} handleRelatedClick={props.handleRelatedClick}/>
            </Grid>
          )}
        }) : null}
        <Grid item className={lowerLimit + 4 < props.related.length ? classes.visible : classes.invisible}>
          <SvgIcon color="primary" onClick={() => {
            increaseLimit();
            clickTracker("see-more-related-products", "compare");
          }} className={classes.shift}>
            <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/>
          </SvgIcon>
          </Grid>
      </Grid>
    </React.Fragment>
  )
};

export default Related;