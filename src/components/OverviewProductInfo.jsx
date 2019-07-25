import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const ProductInfo = ({ props }) => {
  const useStyles = makeStyles(theme => ({
    originalPrice: {
      textDecoration: "line-through",
    },
    salePrice: {
      color: "red",
      paddingLeft:10
    },
    saleHidden: {
      visibility: "hidden"
    }
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>{props.info.name}</Typography>
      <Typography variant="subtitle2" gutterBottom>
        {props.info.category}
      </Typography>
      <div style={{display:'flex', justifyContent:'flex-start'}}>
      <Typography
        variant="body2"
        color="textSecondary"
        className={
          props.selectedStyle.sale_price > 0 ? classes.originalPrice : null
        }
      >
        ${props.selectedStyle.original_price}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        className={
          props.selectedStyle.sale_price > 0
            ? classes.salePrice
            : classes.saleHidden
        }
      >
        ${props.selectedStyle.sale_price}
      </Typography>
      </div>
      <Typography variant="overline">STYLE > {props.selectedStyle.name}</Typography>
    </React.Fragment>
  );
};

export default ProductInfo;
