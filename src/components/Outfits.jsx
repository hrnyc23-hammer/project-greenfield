import React from 'react';
import Fab from "@material-ui/core/Fab";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const Outfits = (props) => {
  const outfits = props.outfits ? JSON.parse(localStorage.getItem("greenfieldOutfits")) : [];
  const containsOutfit = (outfit) => {
    return outfits.reduce((memo, ele) => {
      return memo || outfit.id === ele.id;
    }, false);
  }
  return (
  <React.Fragment>
    <Fab
      onClick={e => {
        e.preventDefault();
        if (!containsOutfit(props.info)) {
          localStorage.setItem("greenfieldOutfits", JSON.stringify([...outfits, props.info]));
          props.addToOutfits(props.info);
        }
      }}
    >
      +
    </Fab>
    <div>
      {outfits.map(ele => {
        return <div>{ele.id}</div>
      })}
    </div>
  </React.Fragment>  
  )
};

export default Outfits;