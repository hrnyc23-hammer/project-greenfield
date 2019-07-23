import React, { useState, useEffect } from "react";
import Icon from "@material-ui/core/Icon";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ButtonBase from "@material-ui/core/ButtonBase";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Avatar from "@material-ui/core/Avatar";

const Carousel = ({ props }) => {
  const noImgAvailableURL = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

  const [count, setCount] = useState(0);
  const [thumbCount, setThumbCount] = useState(0);

  const photoLength = props.selectedStyle.photos.length - 1;
  const thumbnailsShown = props.selectedStyle.photos.slice(thumbCount, thumbCount + 7);

  const slider = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    flex:"noWrap",
    alignItems : "center"
  };

  const showArrow = { color: "red", height:20, width:20, position:"aboslute", top: 150,zIndex:1 }

  const hideArrow = { color: "red", height:20, width:20, visibility:'hidden', zIndex:1 }

  const [imageSlider, setImageSlider] = useState({});

  const backgroundImageStyle = {
    backgroundImage: `url("${props.selectedStyle.photos[count].url}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    height:"100%",
    width:"100%",
    transition: "all 1s linear"
  };

  useEffect(() => {
    let styleDefault;
    for (let i = 0; i < props.styles.results.length; i++) {
      if (props.styles.results[i]["default?"] === 1) {
        styleDefault = i;
      }
    }
    if (JSON.stringify(props.selectedStyle) === "{}") {
      props.handleSelectedStyle(props.styles.results[styleDefault]);
    }

    if (imageSlider.backgroundImage !== `url("${props.selectedStyle.photos[count].url}")`) {
      setImageSlider(backgroundImageStyle)
    }


  });


  return (
        <div style={imageSlider}>
      <div style={count === 0 ? hideArrow : showArrow} onClick={() => setCount(count === 0 ? 0 : count - 1)}>
        <ChevronLeftIcon/>
      </div>
      <div style={count === photoLength ? hideArrow : showArrow} onClick={() => setCount(Math.min(count + 1, photoLength))}>
        <ChevronRightIcon />
      </div>
    <div style={{zIndex:2, position:'relative', top:"75%"}}>
    <div style={thumbCount === 0 ? hideArrow : showArrow} onClick={() => setThumbCount(thumbCount === 0 ? 0 : thumbCount - 1)}>
        <ChevronLeftIcon/>
      </div>
        <div style={thumbCount === photoLength ? hideArrow : showArrow} onClick={() => setThumbCount(Math.min(thumbCount + 1, photoLength))}>
        <ChevronRightIcon />
      </div>
      <GridList cellHeight={100} cols={Math.min(photoLength + 1, 7)}>
          {thumbnailsShown.map((photo, i) => (
            <GridListTile key={photo.thumbnail_url}>
              <ButtonBase onClick={() => setCount(thumbCount + i)}>
                <Avatar src={photo.thumbnail_url || noImgAvailableURL} />
              </ButtonBase>
            </GridListTile>
          ))}
        </GridList>
        </div>
              </div>
  );
};

export default Carousel;
