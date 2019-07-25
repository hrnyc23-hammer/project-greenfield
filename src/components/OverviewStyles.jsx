import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ButtonBase from "@material-ui/core/ButtonBase";
import Avatar from "@material-ui/core/Avatar";


const Styles = ({props}) => {

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    width: 65,
    height: 65
  },
  selectedStyle: {
    width:65,
    height:65,
    border: '3px solid lightGreen'
  },
  tile: {
    flexWrap: "wrap"
  }
}))

const classes = useStyles();

  return(
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
)
}

export default Styles;