// import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Box from "@material-ui/core/Box";
// import Grid from "@material-ui/core/Grid";
// import Icon from "@material-ui/core/Icon";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import ButtonBase from "@material-ui/core/ButtonBase";
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
// import Avatar from "@material-ui/core/Avatar";

// const Carousel = ({ props }) => {

//   const noImgAvailableURL = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
//   useEffect(() => {
//     let styleDefault;
//     for (let i = 0; i < props.styles.results.length; i++) {
//       if (props.styles.results[i]["default?"] === 1) {
//         styleDefault = i;
//       }
//     }
//     if (JSON.stringify(props.selectedStyle) === "{}") {
//       props.handleSelectedStyle(props.styles.results[styleDefault]);
//     }
//   });

//   const [count, setCount] = useState(0);
//   const [thumbCount, setThumbCount] = useState(0);

//   const photoLength = props.selectedStyle.photos.length - 1;
//   const thumbnailsShown = props.selectedStyle.photos.slice(thumbCount, thumbCount + 7);


//   const useStyles = makeStyles(theme => ({
//     root : {
//       justify:"spaceAround",
//       display:"flex",
//       flex: "noWrap"
//     },
//     image: {
//       width: "80%",
//       height: 450
//     },
//     imageContainer: {
//       margin: "auto",
//       display: "block",
//       maxWidth: "100%",
//       maxHeight: "100%",
//       objectFit: "cover"
//     },
//     hide: {
//       visibility: "hidden"
//     },
//     left: {
//       position: "relative",
//       top: "50%",
//       left: "5%",
//       zIndex: 1
//     },
//     right: {
//       position: "relative",
//       top: "50%",
//       left: "75%",
//       zIndex: 1
//     }
//   }));

//   const classes = useStyles();

//   return (
//     <Box className={classes.container}>
// {console.log(count)}
//   <Grid container>
//     <Grid item>
//         <Grid item>
//           <ButtonBase onClick={() => setCount(count === 0 ? 0 : count - 1)} className={count === 0 ? classes.hide : classes.left}>
            // <ChevronLeftIcon />
//           </ButtonBase>
//         </Grid>
//         <Grid>
//           <img src={props.selectedStyle.photos[count].url || noImgAvailableURL} className={classes.image} />
//         </Grid>
//         <Grid item>
//           <ButtonBase onClick={() => setCount(Math.min(count + 1, photoLength))} className={count === photoLength ? classes.hide : classes.right}>
//             <ChevronRightIcon />
//           </ButtonBase>
//         </Grid>
//       </Grid>
//     </Grid>
//     <Grid item>
//       <Grid container direction="row" justify="space-between" alignItems="center">
//         <ButtonBase onClick={() => setThumbCount(Math.min(0, thumbCount - 1))} className={0 === thumbCount ? classes.hide : null}>
//           <ChevronLeftIcon />
//         </ButtonBase>
//         <GridList cellHeight={100} cols={Math.min(photoLength + 1, 7)}>
//           {thumbnailsShown.map((photo, i) => (
//             <GridListTile key={photo.thumbnail_url}>
//               <ButtonBase onClick={() => setCount(thumbCount + i)}>
//                 <Avatar src={photo.thumbnail_url || noImgAvailableURL} />
//               </ButtonBase>
//             </GridListTile>
//           ))}
//         </GridList>
//         <ButtonBase onClick={() => setThumbCount(Math.min(thumbCount + 1, photoLength))} className={thumbCount + 7 >= photoLength ? classes.hide : null}>
//           <ChevronRightIcon />
//         </ButtonBase>
//       </Grid>
//     </Grid>
// </Box>
//     <div className={classes.root}>
//     <div>
//       <button onClick={() => setCount(count - 1)} className={count === 0 ? classes.hide : classes.left}>
//         -
//       </button>
//       <button onClick={() => setCount(count + 1)} className={count === photoLength ? classes.hide : classes.right}>
//         +
//       </button>
//       <div>
//         <img className={classes.image} src={props.selectedStyle.photos[count].url || noImgAvailableURL} />
//       </div>
//       </div>
//       <Grid container direction="row" justify="space-between" alignItems="center">
//         <ButtonBase onClick={() => setThumbCount(Math.min(0, thumbCount - 1))} className={0 === thumbCount ? classes.hide : null}>
//           <ChevronLeftIcon />
//         </ButtonBase>
//         <GridList cellHeight={100} cols={Math.min(photoLength + 1, 7)}>
//           {thumbnailsShown.map((photo, i) => (
//             <GridListTile key={photo.thumbnail_url}>
//               <ButtonBase onClick={() => setCount(thumbCount + i)}>
//                 <Avatar src={photo.thumbnail_url || noImgAvailableURL} />
//               </ButtonBase>
//             </GridListTile>
//           ))}
//         </GridList>
//         <ButtonBase onClick={() => setThumbCount(Math.min(thumbCount + 1, photoLength))} className={thumbCount + 7 >= photoLength ? classes.hide : null}>
//           <ChevronRightIcon />
//         </ButtonBase>
//       </Grid>
//     </div>
//   );
// };

// export default Carousel;



// import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Box from "@material-ui/core/Box";
// import Grid from "@material-ui/core/Grid";
// import Icon from "@material-ui/core/Icon";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import ButtonBase from "@material-ui/core/ButtonBase";
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
// import Avatar from "@material-ui/core/Avatar";

// const Carousel = ({ props }) => {
  // const noImgAvailableURL = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
  // useEffect(() => {
  //   let styleDefault;
  //   for (let i = 0; i < props.styles.results.length; i++) {
  //     if (props.styles.results[i]["default?"] === 1) {
  //       styleDefault = i;
  //     }
  //   }
  //   if (JSON.stringify(props.selectedStyle) === "{}") {
  //     props.handleSelectedStyle(props.styles.results[styleDefault]);
  //   }
  // });

  // const [count, setCount] = useState(0);
  // const [thumbCount, setThumbCount] = useState(0);

  // const photoLength = props.selectedStyle.photos.length - 1;
  // const thumbnailsShown = props.selectedStyle.photos.slice(thumbCount, thumbCount + 7);
  
//   const useStyles = makeStyles(theme => ({
//     container: {
//       justifyContent : 'center',
//       width: 450,
//       height: 450,
//       objectFit: "cover",
//       overflow: "hidden"
//     },
//     img: {
//       maxWidth: "100%",
//       maxHeight: "100%",

//     },
//     hide : {
//       visibility : 
//     }
//   }))

//   const classes = useStyles();

// return (
{/* <Box className={classes.container}>
{console.log(count)}
  <Grid container>
    <Grid item>
        <Grid item>
          <ButtonBase onClick={() => setCount(count === 0 ? 0 : count - 1)} className={count === 0 ? classes.hide : classes.left}>
            <ChevronLeftIcon />
          </ButtonBase>
        </Grid>
        <Grid>
          <img src={props.selectedStyle.photos[count].url || noImgAvailableURL} className={classes.image} />
        </Grid>
        <Grid item>
          <ButtonBase onClick={() => setCount(Math.min(count + 1, photoLength))} className={count === photoLength ? classes.hide : classes.right}>
            <ChevronRightIcon />
          </ButtonBase>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <ButtonBase onClick={() => setThumbCount(Math.min(0, thumbCount - 1))} className={0 === thumbCount ? classes.hide : null}>
          <ChevronLeftIcon />
        </ButtonBase>
        <GridList cellHeight={100} cols={Math.min(photoLength + 1, 7)}>
          {thumbnailsShown.map((photo, i) => (
            <GridListTile key={photo.thumbnail_url}>
              <ButtonBase onClick={() => setCount(thumbCount + i)}>
                <Avatar src={photo.thumbnail_url || noImgAvailableURL} />
              </ButtonBase>
            </GridListTile>
          ))}
        </GridList>
        <ButtonBase onClick={() => setThumbCount(Math.min(thumbCount + 1, photoLength))} className={thumbCount + 7 >= photoLength ? classes.hide : null}>
          <ChevronRightIcon />
        </ButtonBase>
      </Grid>
    </Grid>
</Box>
);
};

export default Carousel; */}
