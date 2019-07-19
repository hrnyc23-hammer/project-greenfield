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
      width: 300,
      height: 300,
      objectFit: "cover"
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%"
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={props.selectedStyle.photos[0].url}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  REVIEWS GO HERE
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.info.category}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {props.selectedStyle.sale_price > 0 ? (
                    `Sale Price : ${props.selectedStyle.sale_price}`
                  ) : (
                    `Price : ${props.selectedStyle.original_price}`
                  )}
                </Typography>
              </Grid>
              <Grid>
                {props.styles.results.map(style => {
                  return (
                    <div
                      key={style.style_id}
                      onClick={() => props.handleSelectedStyle(style)}>
                      {style.name}
                    </div>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Overview;