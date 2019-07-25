import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const Cart = ({ props, selectSize, selectQty }) => {
  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    button: {
      margin: theme.spacing(1)
    }
  }));

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={6}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">Size</InputLabel>
          <NativeSelect onChange={e => {
            selectSize(e.target.value);
            props.handleSelectedSize(e.target.value)}}>
            <option value="" />
            {Object.keys(props.selectedStyle.skus).map(size => {
              return (
                <option key={size} value={size}>
                  {size}
                </option>
              );
            })}
          </NativeSelect>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">Qty</InputLabel>
          <NativeSelect onChange={e => selectQty(e.target.value)}>
            <option value="" />
            {Array(Math.min(15, props.selectedStyle.skus[props.size] ? props.selectedStyle.skus[props.size] : 0))
              .fill(0)
              .map((amt, i) => {
                return (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
          </NativeSelect>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Cart;
