import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OutfitItem from './OutfitItem';
import { SvgIcon, Typography } from '@material-ui/core';
import { clickTracker } from '../infoFetchers';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  add: {
    cursor: "pointer"
  },
  invisible: {
    visibility: "hidden"
  },
  visible: {
    visibility: "visible"
  }
}));

const Outfits = (props) => {
  const classes = useStyles();
  let outfits = {};


  useEffect(() => {
    outfits = JSON.parse(localStorage.getItem("greenfieldOutfits"))
    outfits = outfits === null ? {} : outfits;
    for (let outfit in outfits) {
      if (JSON.stringify(outfits[outfit]) !== JSON.stringify(props.outfits[outfit])) {
        props.addToOutfits(outfits);
      }
    }
  });

  const [lowerLimit, setLowerLimit] = useState(0);

  const reduceLimit = () => {
    setLowerLimit(lowerLimit - 1);
  };

  const increaseLimit = () => {
    setLowerLimit(lowerLimit + 1);
  };

  const addOutfit = () => {
    if (outfits[props.info.id] === undefined) {
      let outfitPackage = {
        info: props.info,
        styles: props.styles.results,
        meta: props.meta
      };
      outfits[props.info.id] = outfitPackage;
      localStorage.setItem("greenfieldOutfits", JSON.stringify(outfits));
      props.addToOutfits(outfits);
    }
  };


  return (
    <React.Fragment>
      <Typography variant="h5">Your Outfits</Typography>
      <Grid container className={classes.root}
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={4}
      >
        <Grid item>
          <SvgIcon onClick={() => {
            addOutfit();
            clickTracker("outfit", "compare");
          }} className={classes.add} color="primary">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </SvgIcon>
        </Grid>
        <Grid item className={lowerLimit !== 0 ? classes.visible : classes.invisible}>
          <SvgIcon color="primary" onClick={() => {
            reduceLimit();
            clickTracker("outfits", "compare");
          }} className={classes.add}>
            <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/>
          </SvgIcon>
        </Grid>
        {Object.keys(props.outfits).map((ele, idx) => {
          if (idx >= lowerLimit && idx < lowerLimit + 4) {
            return (
              <Grid item key={idx}>
                <OutfitItem item={props.outfits[ele]} removeFromOutfits={props.removeFromOutfits}/>
              </Grid>
              )
            }
          })
        }
        <Grid item className={lowerLimit + 4 < Object.keys(props.outfits).length ? classes.visible : classes.invisible}>
          <SvgIcon color="primary" onClick={() => {
            increaseLimit();
            clickTracker("outfit", "compare");
          }} className={classes.add}>
            <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/>
          </SvgIcon>
        </Grid>
      </Grid>
    </React.Fragment>
  )
};

export default Outfits;