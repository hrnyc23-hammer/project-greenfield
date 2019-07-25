import React, { useState, useEffect } from "react";
import ReviewsStars from "./ReviewsStars";
import OverviewSearch from "./OverviewSearch";
import Carousel from "./OverviewCarousel";
import ProductInfo from "./OverviewProductInfo";
import Styles from "./OverviewStyles";
import Cart from "./OverviewCart";
import Grid from "@material-ui/core/Grid";
import Share from "./OverviewShare";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Overview = props => {
  const [expanded, setExpanded] = useState({ xs: 8 });

  const toggleExpand = () => {
    if (expanded.xs === 8) {
      setExpanded({ xs: 12 });
    } else {
      setExpanded({ xs: 8 });
    }
  };

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
      margin: theme.spacing(1),
      width:'75%'
    },
    shawdow : {

      '&:hover': {
        opacity: 0.5
    }
    }
  }));

  const classes = useStyles();

  const scrollToReviews = () => {
    document.getElementById("reviews").scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <div className={classes.root}>
      <OverviewSearch />
      <Paper className={classes.paper}>
        {expanded.xs === 12 ? (
          <Grid item xs={expanded.xs}>
            <Carousel props={props} setView={toggleExpand} expanded={expanded} />
          </Grid>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={expanded.xs}>
              <Carousel props={props} setView={toggleExpand} expanded={expanded} />
            </Grid>
            <Grid item xs={4} container direction="column">
              <Grid item>
                {props.meta ? <ReviewsStars meta={props.meta} /> : null}
                <a onClick={()=>scrollToReviews()}>READ ALL REVIEWS</a>
                <ProductInfo props={props} />
              </Grid>
              <Grid item>
                <Styles props={props} />
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item xs={12}>
                    <Cart props={props} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item xs={6}>
                <Button variant="contained" className={classes.button}>
                  <ShoppingCartIcon/>
                </Button>
                </Grid>
                <Grid item xs={6} className={classes.shawdow} >
                <Share />
                </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.slogan}>
              <Typography variant="h5">{props.info.slogan}</Typography>
            </Grid>
          </Grid>
        )}
      </Paper>
    </div>
  );
};

export default Overview;
