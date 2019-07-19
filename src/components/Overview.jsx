import React from "react";
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
      maxHeight: "100%"
    },
    tile: {
      flexWrap: "wrap"
    },
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60,
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
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item ws={8}>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                src={props.selectedStyle.photos[0].url}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={4} container direction="column">
              <Grid item>
                <Typography gutterBottom variant="subtitle1">
                  REVIEWS GO HERE
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.info.category}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {props.selectedStyle.sale_price > 0
                    ? `Sale Price : ${props.selectedStyle.sale_price}`
                    : `Price : ${props.selectedStyle.original_price}`}
                </Typography>
                <Typography>{props.selectedStyle.name}</Typography>
              </Grid>
              <Grid item>
                <GridList className={classes.tile} cols={4}>
                  {props.styles.results.map(style => (
                    <GridListTile key={style.style_id}>
                    <a onClick={() => props.handleSelectedStyle(style)}>
                      <Avatar src={style.photos[0].thumbnail_url} className={classes.bigAvatar} /></a>
                      {/* <a onClick={() => props.handleSelectedStyle(style)}>
                        <img src={style.photos[0].thumbnail_url} className={classes.img}/></a> */}
                    </GridListTile>
                  ))}
                </GridList>
              </Grid>
              <Grid item>
                <Grid container>
                <Grid item xs={6}>
                <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-helper">Size</InputLabel>
        <NativeSelect
          // value={state.age}
          // onChange={handleChange("age")}
          // input={<Input name="age" id="age-native-helper" />}
        >
          <option value="" />
          <option value={10}>S</option>
          <option value={20}>M</option>
          <option value={30}>L</option>
        </NativeSelect>
      </FormControl>
                </Grid>
                <Grid item xs={6}>
                <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-helper">Qty</InputLabel>
        <NativeSelect
          // value={state.age}
          // onChange={handleChange("age")}
          // input={<Input name="age" id="age-native-helper" />}
        >
          <option value="" />
          <option value={10}>1</option>
          <option value={20}>5</option>
          <option value={30}>10</option>
        </NativeSelect>
      </FormControl>
                </Grid>
                </Grid>
              </Grid>
            </Grid>

        </Grid>
        <Grid className={classes.slogan}>{props.info.slogan}</Grid>
      </Paper>
    </div>
  );
};

export default Overview;
