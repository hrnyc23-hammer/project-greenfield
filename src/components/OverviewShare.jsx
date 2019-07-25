import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ShareIcon from "@material-ui/icons/Share";
import { makeStyles } from "@material-ui/core/styles";
import { clickTracker } from '../infoFetchers';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    }
  }));

  const classes = useStyles();


  return (
    <div>
      <Button variant="contained" className={classes.button} onClick={(e)=>{handleClick(e);clickTracker("share","overview")}}>
        <ShareIcon/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Facebook</MenuItem>
        <MenuItem onClick={handleClose}>Twitter</MenuItem>
        <MenuItem onClick={handleClose}>Pintrest</MenuItem>
      </Menu>
    </div>
  );
}