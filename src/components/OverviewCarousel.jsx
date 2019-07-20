import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const Carousel = ({ props }) => {
  const useStyles = makeStyles(theme => ({
    root : {
      justify:"spaceAround",
      display:"flex",
      flex: "noWrap"
    },
    image: {
      width: "80%",
      height: 450
    },
    imageContainer: {
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
      position: "relative",
      top: "50%",
      left: "5%",
      zIndex: 1
    },
    right: {
      position: "relative",
      top: "50%",
      left: "75%",
      zIndex: 1
    }
  }));

  const classes = useStyles();

  const [count, setCount] = useState(0);

  const photoLength = props.selectedStyle.photos.length - 1;
  return (
    <Box className={classes.root}>
      <button onClick={() => setCount(count - 1)} className={count === 0 ? classes.hide : classes.left}>
        -
      </button>
      <button onClick={() => setCount(count + 1)} className={count === photoLength ? classes.hide : classes.right}>
        +
      </button>
      <Box>
        <img className={classes.image} src={props.selectedStyle.photos[count].url} />
      </Box>
    </Box>
  );
};

export default Carousel;
