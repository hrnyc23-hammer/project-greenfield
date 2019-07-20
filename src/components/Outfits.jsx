import React, { useEffect } from 'react';
import Fab from "@material-ui/core/Fab";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OutfitItem from './OutfitItem';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

const Outfits = (props) => {
  const classes = useStyles();
  let outfits = {};

  useEffect(() => {
    outfits = JSON.parse(localStorage.getItem("greenfieldOutfits"))
    outfits = outfits === null ? {} : outfits;
    for (let outfit in outfits) {
      if (outfits[outfit] !== props.outfits[outfit]) {
        props.addToOutfits(outfits);
      }
    }
  });

  

  const addOutfit = (event) => {
    event.preventDefault();
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
    <Grid container className={classes.root}
    direction="row"
    justify="flex-start"
    alignItems="center"
    spacing={4}
    >
      <Grid item>
        <Fab onClick={e => addOutfit(e)}>+</Fab>
      </Grid>
      {Object.keys(props.outfits).map((ele, idx) => {
        return (
          <Grid item key={idx}>
            <OutfitItem item={props.outfits[ele]} removeFromOutfits={props.removeFromOutfits}/>
          </Grid>
        )
      })
    }  
    </Grid>
  )
};

export default Outfits;