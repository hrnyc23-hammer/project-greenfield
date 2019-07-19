import React from 'react';
import Fab from "@material-ui/core/Fab";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const Outfits = (props) => {
  let outfits = props.outfits ? JSON.parse(localStorage.getItem("greenfieldOutfits")) : [];
  outfits = outfits === null ? [] : outfits;
  console.log(outfits);
  const containsOutfit = (outfit) => {
    if (!outfit) {
      return false;
    }
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
      {outfits ? outfits.map((ele, idx) => {
        return (
        <div key={idx}>
          <div>{ele.id}</div>
          <div>{ele.name}</div>
          <div>{ele.category}</div>
        </div>
        )
      }) : 
        <div></div>
      }
    </div>
  </React.Fragment>  
  )
};

export default Outfits;