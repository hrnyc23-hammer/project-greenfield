import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfastOutlined"


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    }
}}));

const OverviewSearch = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <FreeBreakfastIcon/>
          <Typography className={classes.title} variant="h6" noWrap>
            Adamantium
          </Typography>
 
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default OverviewSearch;