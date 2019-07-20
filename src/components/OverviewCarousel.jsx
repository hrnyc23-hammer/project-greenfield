import React from 'react';
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";

const Carousel = ({props})=> {
  const useStyles = makeStyles(theme => ({
    image: {
      width: 450,
      height: 450,
      objectFit: "cover"
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "cover"
    }
  }))

  const classes = useStyles();

return (
  <ButtonBase className={classes.image}>
  {console.log(props)}
 <img
   className={classes.img}
   src={props.selectedStyle.photos[0].url}
 />
</ButtonBase>
);
};

export default Carousel;