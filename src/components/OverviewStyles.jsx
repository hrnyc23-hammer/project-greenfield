import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ButtonBase from "@material-ui/core/ButtonBase";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from '@material-ui/core/Tooltip';
import { clickTracker } from '../infoFetchers';

const Styles = ({props}) => {

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    border:'3px solid white'
  },
  selectedStyle: {
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
        <Tooltip title={style.name}>
        <ButtonBase style={{borderRadius:35}}
                    onClick={() => {props.handleSelectedStyle(style);clickTracker("select-style","overview")}}>
        <Avatar style={{height: 65, width: 65}} src={style.photos[0].thumbnail_url} 
        className={style.style_id === props.selectedStyle.style_id ? classes.selectedStyle:classes.bigAvatar} />
        </ButtonBase>
        </Tooltip>
      </GridListTile>
    ))}
  </GridList>
)
}

export default Styles;