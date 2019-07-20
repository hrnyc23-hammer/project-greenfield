import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const Carousel = ({ props }) => {
  const useStyles = makeStyles(theme => ({
    image: {
      maxWidth: 450,
      maxHeight: 450
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "cover"
    },
    hide: {
      visibility: "hidden"
    },
    left: {
      position: "absolute",
      top: "50%"
    },
    right: {
      position: "absolute",
      top: "50%",
      left: "50%"
    }
  }));

  const classes = useStyles();

  const [count, setCount] = useState(0);

  const photoLength = props.selectedStyle.photos.length - 1;
  return (
    <div>
      <button onClick={() => setCount(count - 1)} className={count === 0 ? classes.hide : classes.left}>
        -
      </button>
      <button onClick={() => setCount(count + 1)} className={count === photoLength ? classes.hide : classes.right}>
        +
      </button>
      <div className={classes.img}>
      <Grid container justifyContent="center">
        <img className={classes.image} src={props.selectedStyle.photos[count].url} />
      </Grid>
        </div>
    </div>
  );
};

export default Carousel;
