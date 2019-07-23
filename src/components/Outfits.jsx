import React, { useEffect } from 'react';
import Fab from "@material-ui/core/Fab";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OutfitItem from './OutfitItem';
import { SvgIcon } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  add: {
    cursor: "pointer"
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
    <Grid container className={classes.root}
    direction="row"
    justify="flex-start"
    alignItems="center"
    spacing={4}
    >
      <Grid item>
        <SvgIcon onClick={addOutfit} className={classes.add} color="primary">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </SvgIcon>
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