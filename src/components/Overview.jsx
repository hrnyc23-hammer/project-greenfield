import React from "react";
import ReviewsStars from "./ReviewsStars";
import OverviewSearch from "./OverviewSearch";
import Carousel from "./OverviewCarousel";
import ProductInfo from "./OverviewProductInfo";
import Styles from "./OverviewStyles";
import Cart from "./OverviewCart";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Overview = props => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      maxWidth: "100%"
    },
    slogan: {
      textAlign: "center"
    },
    button: {
      margin: theme.spacing(1)
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <OverviewSearch />
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Carousel props={props} />
          </Grid>
          <Grid item xs={4} container direction="column">
            <Grid item>
              {props.meta ? <ReviewsStars meta={props.meta} /> : null}
              <ProductInfo props={props} />
            </Grid>
            <Grid item>
              <Styles props={props} />
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item xs={12}>
                <Cart props={props}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justify="center" alignItems="stretch">
              <Button variant="contained" className={classes.button}>
                Add to cart
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.slogan}>
            <Typography variant="h5">{props.info.slogan}</Typography>
          </Grid>
          <Grid container />
        </Grid>
      </Paper>
    </div>
  );
};

export default Overview;
