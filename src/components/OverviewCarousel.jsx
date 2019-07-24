import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ButtonBase from "@material-ui/core/ButtonBase";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Avatar from "@material-ui/core/Avatar";
import FullScreenIcon from "@material-ui/icons/Fullscreen";

const Carousel = ({ props, setView, expanded }) => {
  const noImgAvailableURL = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

  const [count, setCount] = useState(0);
  const [thumbCount, setThumbCount] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState("0% 0%");

  const photoLength = props.selectedStyle.photos.length - 1;
  const thumbnailsShown =
    props.selectedStyle.photos.length <= 7 ? props.selectedStyle.photos : props.selectedStyle.photos.slice(thumbCount, Math.min(thumbCount + 7, photoLength));

  const defaultView = { height: 500};
  const showLeftArrow = { color: "red", height: 40, width: 20, position: "relative", zIndex: 1, cursor: "pointer" };
  const showRightArrow = { color: "red", height: 40, width: 20, position: "relative", left: "95%", zIndex: 1, cursor: "pointer" };
  const showLeftThumbArrow = { color: "red", height: 20, width: 20, position: "relative", zIndex: 1, cursor: "pointer" };
  const showRightThumbArrow = { color: "red", height: 20, width: 20, position: "relative", zIndex: 1, cursor: "pointer" };
  const hideArrow = { color: "red", height: 20, width: 20, visibility: "hidden", zIndex: 1 };
  const selectedThumbnail = { border: "3px solid lightGreen" };
  const thumbnail = { opacity: 0.65 };

  const [imageSlider, setImageSlider] = useState({});

  const backgroundImageStyle = {
    backgroundImage: `url("${props.selectedStyle.photos[count].url}")`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    transition: "all 0.5s linear",
    cursor: "zoom-in",
    backgroundColor: "lightGray"
  };
  const backgroundImageStyleExpanded = {
    backgroundImage: `url("${props.selectedStyle.photos[count].url}")`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    transition: "all 0.5s linear",
    cursor: "crosshair",
    backgroundColor: "lightGray"
  };

  const zoomed = {
    backgroundImage: `url("${props.selectedStyle.photos[count].url}")`,
    backgroundPosition: position,
    height:'100%',
    backgroundRepeat: "no-repeat",
    cursor:"zoom-out"
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
      setImageSlider(backgroundImageStyle);
    }
  });

  const useStyles = makeStyles(theme => ({
    root: {
      justifyContent: "space-around"
    },
    zoom: {
      "&:hover": {
      opacity : 0
      }
    },
    img :{
      display: 'block',
      width: '100%'
    }
  }));
  const classes = useStyles();

  const handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition(`${x}% ${y}%`);
  };

  return (
    <div style={defaultView}>
    {expanded.xs===8 ?
      <div
        className={expanded.xs===12 ? classes.zoom : null}
        style={expanded.xs === 8 ? imageSlider : zoom === false ? backgroundImageStyleExpanded : null}
        onMouseOver={handleMouseMove}
        onClick={expanded.xs === 12 ? ()=>setZoom(!zoom) : null}>
        <FullScreenIcon style={{ maxHeight: 50, maxWidth: 50, color: "gray", cursor: "pointer" }} onClick={setView} />
        <div style={{ display: "flex", position: "relative", top: "50%" }}>
          <div style={count === 0 ? hideArrow : showLeftArrow} onClick={() => setCount(count === 0 ? 0 : count - 1)}>
            <ChevronLeftIcon />
          </div>
          <div style={count === photoLength ? hideArrow : showRightArrow} onClick={() => setCount(Math.min(count + 1, photoLength))}>
            <ChevronRightIcon />
          </div>
        </div>
        <div style={{ zIndex: 2, position: "relative", top: "75%", display: "block" }}>
          <GridList cellHeight={100} cols={9} className={classes.root}>
            <div style={thumbCount > 0 ? showLeftThumbArrow : hideArrow} onClick={() => setThumbCount(thumbCount === 0 ? 0 : thumbCount - 1)}>
              <ChevronLeftIcon />
            </div>
            {thumbnailsShown.map((photo, i) => (
              <GridListTile key={photo.thumbnail_url}>
                <ButtonBase onClick={() => setCount(thumbCount + i)}>
                  <Avatar
                    src={photo.thumbnail_url || noImgAvailableURL}
                    style={photo.thumbnail_url === props.selectedStyle.photos[count].thumbnail_url ? selectedThumbnail : thumbnail}
                  />
                </ButtonBase>
              </GridListTile>
            ))}
            <div style={thumbCount + 7 >= photoLength ? hideArrow : showRightThumbArrow} onClick={() => setThumbCount(Math.min(thumbCount + 1, photoLength))}>
              <ChevronRightIcon />
            </div>
          </GridList>
        </div>
      </div> : zoom === true ?
    <figure onMouseMove={handleMouseMove} style={zoomed}>
      <div className={classes.zoom} style={backgroundImageStyleExpanded} onClick={()=>setZoom(!zoom)}/>
    </figure> : 
    
    <div
        style={expanded.xs === 8 ? imageSlider : zoom === false ? backgroundImageStyleExpanded : null}
        onMouseOver={handleMouseMove}
        onClick={expanded.xs === 12 ? ()=>setZoom(!zoom) : null}>
        <FullScreenIcon style={{ maxHeight: 50, maxWidth: 50, color: "gray", cursor: "pointer" }} onClick={setView} />
        <div style={{ display: "flex", position: "relative", top: "50%" }}>
          <div style={count === 0 ? hideArrow : showLeftArrow} onClick={() => setCount(count === 0 ? 0 : count - 1)}>
            <ChevronLeftIcon />
          </div>
          <div style={count === photoLength ? hideArrow : showRightArrow} onClick={() => setCount(Math.min(count + 1, photoLength))}>
            <ChevronRightIcon />
          </div>
        </div>
        <div style={{ zIndex: 2, position: "relative", top: "75%", display: "block" }}>
          <GridList cellHeight={100} cols={9} className={classes.root}>
            <div style={thumbCount > 0 ? showLeftThumbArrow : hideArrow} onClick={() => setThumbCount(thumbCount === 0 ? 0 : thumbCount - 1)}>
              <ChevronLeftIcon />
            </div>
            {thumbnailsShown.map((photo, i) => (
              <GridListTile key={photo.thumbnail_url}>
                <ButtonBase onClick={() => setCount(thumbCount + i)}>
                  <Avatar
                    src={photo.thumbnail_url || noImgAvailableURL}
                    style={photo.thumbnail_url === props.selectedStyle.photos[count].thumbnail_url ? selectedThumbnail : thumbnail}
                  />
                </ButtonBase>
              </GridListTile>
            ))}
            <div style={thumbCount + 7 >= photoLength ? hideArrow : showRightThumbArrow} onClick={() => setThumbCount(Math.min(thumbCount + 1, photoLength))}>
              <ChevronRightIcon />
            </div>
          </GridList>
        </div>
        </div>
      }
    </div>
  );
};

export default Carousel;
