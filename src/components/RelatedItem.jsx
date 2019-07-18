import React from 'react';
import ReviewsStars from './ReviewsStars.jsx';

const RelatedItem = (props) => {
  const noImgAvailableURL = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
  const displayItem = () => {
    if (typeof props.item !== 'number' || props.item === null) {
      let imgSrc;
      let price;
      let defaultFound = false;

      for (let i = 0; i < props.item.styles.length; i++) {
        let style = props.item.styles[i];
        if (style["default?"]) {
          defaultFound = true;
          price = parseInt(style.original_price) - parseInt(style.sale_price);
          imgSrc = style.photos[0].thumbnail_url;
          break;
        }
      }

      if (!defaultFound) {
        price = parseInt(props.item.styles[0].original_price) - parseInt(props.item.styles[0].sale_price);
        imgSrc = props.item.styles[0].photos[0].thumbnail_url;
      }

      imgSrc = imgSrc ? imgSrc : noImgAvailableURL;

      return (
        <div>
          <div>
            <img src={imgSrc}/>
          </div>
          <div>{props.item.info.category}</div>
          <div>{props.item.info.name}</div>
          <div>{price}</div>
          <div><ReviewsStars meta={props.item.meta}/></div>
        </div>
      )
    } else {
      return <div></div>
    }
  };
  return (
    displayItem()
  )
};

export default RelatedItem;