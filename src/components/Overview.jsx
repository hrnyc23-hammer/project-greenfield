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
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { postToCart } from '../infoFetchers';
import CartModal from './CartModal';


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

  let sessionId;

  const [size, setSize] = useState(undefined);
  const [qty, setQty] = useState(undefined);
  const [status, setStatus] = useState(undefined);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setStatus('incomplete');
  }

  const handleOpen = () => {
    setOpen(true);  
  }

  const selectSize = (newSize) => {
    setSize(newSize);
  };

  const selectQty = (newQty) => {
    setQty(newQty);
  };

  useEffect(() => {
    sessionId = sessionStorage.getItem("greenfieldSession");
    if (sessionId === null) {
      sessionId = Math.floor(Math.random() * Math.pow(10, 9));
      sessionStorage.setItem("greenfieldSession", sessionId);
    }
  })

  const addToCart = (event) => {
    event.preventDefault();
    return postToCart(props.info.id, sessionId);
  };
  
  var totalStars = 0
  for (let key in props.meta.ratings) {
      totalStars = totalStars + props.meta.ratings[key]
  }

  return (
    <div className={classes.root}>
      <OverviewSearch />
      <Typography align="center">
        SITE-WIDE ANNOUCEMENT MESSAGE! -SALE/DISCOUNT OFFER
        </Typography>
        {expanded.xs === 12 ? (
          <Grid item xs={expanded.xs}>
            <Carousel props={props} setView={toggleExpand} expanded={expanded}/>
          </Grid>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={expanded.xs}>
              <Carousel props={props} setView={toggleExpand} expanded={expanded} />
            </Grid>
            <Grid item xs={4} container direction="column">
              <Grid item>
                {props.meta ? <ReviewsStars meta={props.meta} /> : null}
                <a style={{cursor : "pointer"}} onClick={()=>scrollToReviews()}>({totalStars}) READ ALL REVIEWS</a>
                <ProductInfo props={props} />
              </Grid>
              <Grid item>
                <Styles props={props} />
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item xs={12}>
                    <Cart props={props} selectSize={selectSize} selectQty={selectQty}/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item xs={6}>
                <Button variant="contained" className={classes.button} onClick={(event) => {
                  if (size !== undefined && size !== '' && qty !== undefined && qty !== '') {
                    addToCart(event)
                    .then(() => {
                      setStatus("success");
                      handleOpen();
                      selectSize(undefined);
                    })
                    .catch(() => {
                      setStatus("fail");
                      handleOpen();
                    });
                  } else {
                    setStatus("incomplete");
                    handleOpen();
                  }}}>
                  <ShoppingCartIcon/>
                </Button>
                </Grid>
                <Grid item xs={6} className={classes.shawdow} >
                <Share />
                </Grid>
                <Grid item>
                  <CartModal open={open} status={status} handleClose={handleClose}/>
                </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.slogan}>
              <Typography variant="h5">{props.info.slogan}</Typography>
            </Grid>
          </Grid>
        )}
    </div>
  );
};

export default Overview;
