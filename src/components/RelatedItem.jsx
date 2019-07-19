import React from 'react';
import ReviewsStars from './ReviewsStars.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const RelatedItem = props => {
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
      maxWidth: 345
    },
    media: {
      height: 140
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
        />
        <CardContent>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            {props.item.info ? props.item.info.category : itemUnavailable}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {props.item.info ? props.item.info.name : itemUnavailable}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ${price}
          </Typography>
          {props.meta ? <ReviewsStars meta={props.meta} /> : null}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default RelatedItem;