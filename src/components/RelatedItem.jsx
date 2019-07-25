import React, { useState } from 'react';
import ReviewsStars from './ReviewsStars';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ComparisonModal from './ComparisonModal';
import Button from '@material-ui/core/Button';
import { clickTracker } from '../infoFetchers';
import { SvgIcon } from '@material-ui/core';

const RelatedItem = props => {
  const noImgAvailableURL =
    "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
  let imgSrc;
  let price;
  let defaultFound = false;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleOpen = () => {
    open ? handleClose() : handleOpen();
  }



  for (let i = 0; i < props.item.styles ? props.item.styles.length : 0; i++) {
    let style = props.item.styles[i];
    if (style["default?"]) {
      defaultFound = true;
      price = parseInt(style.original_price) - parseInt(style.sale_price);
      imgSrc = style.photos[0].thumbnail_url;
      break;
    }
  }

  if (!defaultFound && props.item.styles !== undefined) {
    price =
      parseInt(props.item.styles[0].original_price) -
      parseInt(props.item.styles[0].sale_price);
    imgSrc = props.item.styles[0].photos[0].thumbnail_url;
  }

  imgSrc = imgSrc ? imgSrc : noImgAvailableURL;

  const useStyles = makeStyles({
    card: {
      width: 225
    },
    media: {
      height: 120
    }
  });

  const classes = useStyles();
  const itemUnavailable = "Information unavailable";

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgSrc}
          title={props.item.info ? props.item.info.name : itemUnavailable}
        >
          <SvgIcon color="primary" onClick={(event) => {
            toggleOpen();
            clickTracker("compare-products", "compare");
            event.stopImmediatePropagation()
          }}>
            <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
          </SvgIcon>
          <ComparisonModal open={open} 
            handleClose={handleClose} 
            compareInfo={props.item.info ? props.item.info : {}}
            currentInfo={props.currentItemInfo ? props.currentItemInfo : {}}></ComparisonModal>
        </CardMedia>
        <CardContent onClick={() => {
              clickTracker("change-products", "compare");
              !props.item.info ? null : location.href = `/?products=${props.item.info.id}`;
            }
          }>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            {props.item.info ? props.item.info.category : itemUnavailable}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
          <strong>{props.item.info ? props.item.info.name : itemUnavailable}</strong>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ${price}
          </Typography>
          <ReviewsStars meta={props.item.meta}/>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary" onClick={() => {
          clickTracker("change-products", "compare");
        }}>
          <a href={props.item.info ? `/?products=${props.item.info.id}` : "#"}
            style={{textDecoration: "none"}}>See Product</a>
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default RelatedItem;