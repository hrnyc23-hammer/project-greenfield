import React from 'react';
import ReviewsStars from './ReviewsStars';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { clickTracker } from '../infoFetchers';
import { SvgIcon } from '@material-ui/core';

const OutfitItem = props => {
  const noImgAvailableURL =
    "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
  let imgSrc;
  let price;
  let defaultFound = false;



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
      width: 250
    },
    media: {
      height: 140
    }
  });

  const removeOutfit = () => {
    let outfits = JSON.parse(localStorage.getItem("greenfieldOutfits"));
    delete outfits[props.item.info.id];
    localStorage.setItem("greenfieldOutfits", JSON.stringify(outfits));
    props.removeFromOutfits(props.item.info.id);
  }

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
          <SvgIcon color="primary" onClick={() => {
            removeOutfit();
            clickTracker("remove-outfit", "compare");
          }}>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </SvgIcon>
        </CardMedia>
        <CardContent>
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
      </CardActions>
    </Card>
  );
};

export default OutfitItem;