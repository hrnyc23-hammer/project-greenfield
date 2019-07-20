import React from "react";
import ReviewsStars from "./ReviewsStars";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import OverviewSearch from './OverviewSearch'
import Badge from '@material-ui/core/Badge';

const Overview = props => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      maxWidth: "100%"
    },
    image: {
      width: 450,
      height: 450,
      objectFit: "cover"
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "cover"
    },
    bigAvatar: {
      width: 70,
      height: 70
    },
    selectedStyle: {
      width:70,
      height:70,
      border: '5px solid lightGreen'
    },
    tile: {
      flexWrap: "wrap"
    },
    slogan: {
      textAlign: "center"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    button: {
      margin: theme.spacing(1)
    },
    badge: {
      margin: theme.spacing(2)
    },
    originalPrice: {
      textDecoration: "line-through",
    },
    salePrice: {
      color: "red"
    },
    saleHidden: {
      visibility: "hidden"
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
    <OverviewSearch/>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  src={props.selectedStyle.photos[0].url}
                />
              </ButtonBase>
          </Grid>
          <Grid
            item
            xs={4}
            container
            direction="column"
            className={classes.rows}
          >
              <Grid item>
                <Typography gutterBottom variant="subtitle1">
                  {props.meta ? <ReviewsStars meta={props.meta} /> : null}
                </Typography>
                <Typography variant="h4" gutterBottom>
                  {props.info.category}
                </Typography>
                <Typography variant="body2" color="textSecondary" 
                className={props.selectedStyle.sale_price > 0 ? classes.originalPrice:null}>
                ${props.selectedStyle.original_price}
                </Typography>
                <Typography variant="body2" color="textSecondary" 
                className={props.selectedStyle.sale_price > 0 ? classes.salePrice : classes.saleHidden}>
                ${props.selectedStyle.sale_price}
                </Typography>
                <Typography variant="h5">{props.selectedStyle.name}</Typography>
              </Grid>
              <Grid item>
                <GridList className={classes.tile} cellHeight={100} cols={4}>
                  {props.styles.results.map(style => (
                    <GridListTile key={style.style_id}>
                      <ButtonBase onClick={() => props.handleSelectedStyle(style)}>
                      <Avatar src={style.photos[0].thumbnail_url} 
                      className={style.style_id === props.selectedStyle.style_id ? classes.selectedStyle:classes.bigAvatar} />
                      </ButtonBase>
                    </GridListTile>
                  ))}
                </GridList>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item xs={6}>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="age-native-helper">Qty</InputLabel>
                      <NativeSelect>
                        <option value="" />
                        {Array(
                          Math.min(
                            15,
                            props.selectedStyle.skus[props.size]
                              ? props.selectedStyle.skus[props.size]
                              : 0
                          )
                        )
                          .fill(0)
                          .map((amt, i) => {
                            return (
                              <option key={i} value={i + 1}>
                                {i + 1}
                              </option>
                            );
                          })}
                      </NativeSelect>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="age-native-helper">Size</InputLabel>
                      <NativeSelect
                        onChange={e => props.handleSelectedSize(e.target.value)}
                      >
                        <option value="" />
                        {Object.keys(props.selectedStyle.skus).map(size => {
                          return (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          );
                        })}
                      </NativeSelect>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justify="center" alignItems="stretch">
                <Button variant="contained" className={classes.button}>
                  Add to cart
                </Button>
              </Grid>
          </Grid>
            <Grid item xs={12} className={classes.slogan}>
              <Typography variant="h5">{props.info.slogan}</Typography>
            </Grid>
          <Grid container />
        </Grid>
      </Paper>
    </div>
  );
};

export default Overview;
