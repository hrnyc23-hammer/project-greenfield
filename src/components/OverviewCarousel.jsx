import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ButtonBase from "@material-ui/core/ButtonBase";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Avatar from "@material-ui/core/Avatar";
import FullScreenIcon from "@material-ui/icons/Fullscreen";
import { clickTracker } from '../infoFetchers';


const Carousel = ({ props, setView, expanded, meta }) => {
  const noImgAvailableURL = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

  const [count, setCount] = useState(0);
  const [thumbCount, setThumbCount] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState("0% 0%");
  const [imageSlider, setImageSlider] = useState({});

  const photoLength = props.selectedStyle.photos.length - 1;

  const thumbnailsShown =
    props.selectedStyle.photos.length <= 7 ? props.selectedStyle.photos : props.selectedStyle.photos.slice(thumbCount, Math.min(thumbCount + 7, photoLength));

  const handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition(`${x}% ${y}%`);
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

    if (imageSlider.backgroundImage !== props.selectedStyle.photos[count] ? `url("${props.selectedStyle.photos[count].url}")` : `url("${noImgAvailableURL}")`) {
      setImageSlider(backgroundImageStyle);
    }
  });
  const handleBackgroundClick = e => {
    e.preventDefault();
    setZoom(!zoom);
    e.stopPropagation();
  };

  const handleLeftArrow = e => {
    e.preventDefault();
    setCount(count === 0 ? 0 : count - 1);
    e.stopPropagation();
  };

  const handleRightArrow = e => {
    e.preventDefault();
    setCount(Math.min(count + 1, photoLength));
    e.stopPropagation();
  };

  const handleThumbLeftArrow = e => {
    e.preventDefault();
    setThumbCount(thumbCount === 0 ? 0 : thumbCount - 1);
    e.stopPropagation();
  };

  const handleThumbRightArrow = e => {
    e.preventDefault();
    setThumbCount(Math.min(thumbCount + 1, photoLength));
    e.stopPropagation();
  };
  const defaultView = {
    height: 500,
    borderRadius: 15,
    position: "relative",
    WebkitBoxShadow: "1px 1px 8px 1px rgba(0,0,0,0.61)",
    MozBoxShadow: "1px 1px 8px 1px rgba(0,0,0,0.61)",
    BoxShadow: "1px 1px 8px 1px rgba(0,0,0,0.61)"
  };

  const showLeftArrow = {
    color: "red",
    height: 40,
    width: 20,
    position: "absolute",
    zIndex: 1,
    cursor: "pointer"
  };
  const showRightArrow = {
    color: "red",
    height: 40,
    width: 20,
    position: "absolute",
    right: 5,
    zIndex: 1,
    cursor: "pointer"
  };
  const showLeftThumbArrow = {
    color: "red",
    height: 20,
    width: 20,
    zIndex: 1,
    cursor: "pointer"
  };
  const showRightThumbArrow = {
    color: "red",
    height: 20,
    width: 20,
    zIndex: 1,
    cursor: "pointer"
  };
  const hideArrow = {
    color: "red",
    height: 20,
    width: 20,
    visibility: "hidden",
    zIndex: 1,
    position: "absolute"
  };
  const hideThumbArrow = {
    color: "red",
    height: 20,
    width: 20,
    visibility: "hidden",
    zIndex: 1
  };
  const selectedThumbnail = {
    border: "3px solid lightGreen",
    cursor: "pointer"
  };
  const thumbnail = {
    opacity: 0.65,
    cursor: "pointer",
    border: "3px"
  };

  const backgroundImageStyle = {
    backgroundImage: props.selectedStyle.photos[count] ? `url("${props.selectedStyle.photos[count].url}")` : `url("${noImgAvailableURL}")`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    transition: "all 0.5s linear",
    cursor: "zoom-in",
    backgroundColor: "white",
    borderRadius: 15
  };
  const backgroundImageStyleExpanded = {
    backgroundImage: props.selectedStyle.photos[count] ? `url("${props.selectedStyle.photos[count].url}")` : `url("${noImgAvailableURL}")`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    transition: zoom === true ? "0s" : "all 0.5s linear",
    cursor: zoom === false ? "crosshair" : "zoom-out",
    backgroundColor: "white",
    borderRadius: 15
  };

  const zoomed = {
    backgroundImage: props.selectedStyle.photos[count] ? `url("${props.selectedStyle.photos[count].url}")` : `url("${noImgAvailableURL}")`,
    backgroundPosition: position,
    height: "100%",
    backgroundRepeat: "no-repeat"
  };

  const useStyles = makeStyles(theme => ({
    root: {
      justifyContent: "space-around"
    },
    zoom: {
      opacity: 0
    },
    img: {
      display: "block",
      width: "100%"
    },
    paper: {
      padding: theme.spacing(2),
      maxWidth: "100%"
    },
    buttonBase: {
      borderRadius: 35
    }
  }));
  const classes = useStyles();

  return (
    <div style={defaultView}>
      {expanded.xs === 8 ? (
        <div
          className={expanded.xs === 12 ? classes.zoom : null}
          style={expanded.xs === 8 ? imageSlider : zoom === false ? backgroundImageStyleExpanded : null}
          onMouseOver={handleMouseMove}
          onClick={() => { setView(); clickTracker("change-view", "overview") }}
        >
          <FullScreenIcon
            style={{ maxHeight: 50, maxWidth: 50, color: "gray", cursor: "pointer", position: "absolute", left: 10, top: 10 }}
            onClick={() => { setView(); clickTracker("change-view", "overview") }}
          />
          <div style={{ display: "flex", position: "relative", top: "45%", opacity: 0.5 }}>
            <div style={count === 0 ? hideArrow : showLeftArrow}
              onClick={(e) => { handleLeftArrow(e); clickTracker("left-arrow-click", "overview") }}>
              <ChevronLeftIcon />
            </div>
            <div style={count === photoLength ? hideArrow : showRightArrow}
              onClick={(e) => { handleRightArrow(e); clickTracker("right-arrow-click", "overview") }}>
              <ChevronRightIcon />
            </div>
          </div>
          <div style={{ zIndex: 2, position: "relative", top: "85%", display: "inlineBlock" }}>
            <GridList cellHeight={100} cols={9} className={classes.root}>
              <div style={thumbCount > 0 ? showLeftThumbArrow : hideThumbArrow}
                onClick={(e) => { handleThumbLeftArrow(e); clickTracker("left-thumbnail-click", "overview") }}>
                <ChevronLeftIcon />
              </div>
              {thumbnailsShown.map((photo, i) => (
                <GridListTile key={photo.thumbnail_url}>
                  <ButtonBase
                    className={classes.buttonBase}
                    onClick={e => {
                      setCount(thumbCount + i);
                      clickTracker("thumbail-image", "overview")
                      e.stopPropagation();
                    }}
                  >
                    <Avatar
                      src={photo.thumbnail_url || noImgAvailableURL}
                      style={photo.thumbnail_url === props.selectedStyle.photos[count].thumbnail_url ? selectedThumbnail : thumbnail}
                    />
                  </ButtonBase>
                </GridListTile>
              ))}
              <div style={thumbCount + 7 >= photoLength ? hideThumbArrow : showRightThumbArrow}
                onClick={(e) => { handleThumbRightArrow(e); clickTracker("right-thumbnail-click", "overview") }}>
                <ChevronRightIcon />
              </div>
            </GridList>
          </div>
        </div>
      ) : zoom === true ? (
        <figure onMouseMove={handleMouseMove} style={zoom ? zoomed : backgroundImageStyleExpanded}>
          <div className={classes.zoom} style={backgroundImageStyleExpanded}
            onClick={(e) => { handleBackgroundClick(e); clickTracker("change-view", "overview") }} />
        </figure>
      ) : (
            <div
              style={expanded.xs === 8 ? imageSlider : zoom === false ? backgroundImageStyleExpanded : null}
              onMouseOver={handleMouseMove}
              onClick={(e) => { handleBackgroundClick(e); clickTracker("change-view", "overview") }}
            >
              <FullScreenIcon
                style={{ maxHeight: 50, maxWidth: 50, color: "gray", cursor: "pointer", left: 10, top: 10, position: "absolute" }}
                onClick={() => { setView(); clickTracker("change-view", "overview") }}
              />
              <div style={{ display: "flex", position: "relative", top: "50%" }}>
                <div style={count === 0 ? hideArrow : showLeftArrow}
                  onClick={(e) => { handleLeftArrow(); clickTracker("left-arrow-click", "overview") }}>
                  <ChevronLeftIcon />
                </div>
                <div style={count === photoLength ? hideArrow : showRightArrow}
                  onClick={(e) => { handleRightArrow(e); clickTracker("left-arrow-click", "overview") }}>
                  <ChevronRightIcon />
                </div>
              </div>
              <div style={{ zIndex: 2, position: "relative", top: "85%", display: "inlineBlock" }}>
                <GridList cellHeight={100} cols={9} className={classes.root}>
                  <div style={thumbCount > 0 ? showLeftThumbArrow : hideThumbArrow}
                    onClick={(e) => { handleThumbLeftArrow(e); clickTracker("left-thumbnail-click", "overview") }}>
                    <ChevronLeftIcon />
                  </div>
                  {thumbnailsShown.map((photo, i) => (
                    <GridListTile key={photo.thumbnail_url}>
                      <ButtonBase
                        className={classes.buttonBase}
                        style={{ cursor: "pointer" }}
                        onClick={e => {
                          setCount(thumbCount + i);
                          clickTracker("thumbnail-image", "overview");
                          e.stopPropagation();
                        }}
                      >
                        <Avatar
                          src={photo.thumbnail_url || noImgAvailableURL}
                          style={photo.thumbnail_url === props.selectedStyle.photos[count].thumbnail_url ? selectedThumbnail : thumbnail}
                        />
                      </ButtonBase>
                    </GridListTile>
                  ))}
                  <div style={thumbCount + 7 >= photoLength ? hideThumbArrow : showRightThumbArrow}
                    onClick={(e) => { handleThumbRightArrow(e); clickTracker("right-thumbnail-click", "overview") }}>
                    <ChevronRightIcon />
                  </div>
                </GridList>
              </div>
            </div>
          )}
    </div>
  );
};

export default Carousel;
