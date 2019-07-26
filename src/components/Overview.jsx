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
import DoneIcon from "@material-ui/icons/Done";
import { postToCart } from '../infoFetchers';
import CartModal from './CartModal';
import { clickTracker } from '../infoFetchers';
import Box from '@material-ui/core/Box';


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
      textAlign: "center",
      alignItems:"center"
    },
    button: {
      width:'75%',
      marin : 4
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
    <div id="overview" className={classes.root}>
    <Box py={2}>
      <OverviewSearch />
      <Box pt={1} pb={4}>
      <Typography align="center">
        SITE-WIDE ANNOUCEMENT MESSAGE! SALE/DISCOUNT OFFER
        </Typography>
        </Box>
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
              <div style={{display:'flex',alignItems: "baseline",justifyContent: "flex-start", paddingBottom:10}}>
                {props.meta ? <ReviewsStars meta={props.meta} /> : null}
                <a style={{textDecoration: "underline",fontSize:11, fontFamily: 'roboto',cursor:"pointer"}} onClick={()=>{scrollToReviews();clickTracker("scroll-to-reviews","overview")}}>({totalStars}) READ ALL REVIEWS</a>
                </div>
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
                  clickTracker("added-to-cart", "overview")
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
            <Grid container direction="column">
            <Grid item xs={8} className={classes.slogan} style={{margin:'auto',padding:5}}>
              <Typography variant="h5">{props.info.slogan}</Typography>
              <Typography variant="body2">{props.info.description}</Typography>
            </Grid>
            <Grid item xs={4} style={{margin:'auto'}}>{props.info.features.map((productFeature,i) => {
                return <div key={i}><Typography variant="overline"><DoneIcon/>{productFeature.feature}  {productFeature.value}</Typography></div>
            })}</Grid>
            </Grid>
          </Grid>
        )}
        </Box>
    </div>
  );
}

export default Overview;
