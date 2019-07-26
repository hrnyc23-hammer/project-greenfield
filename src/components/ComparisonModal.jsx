import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { SvgIcon } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';


const makeComparison = (originalFeatures, compareToFeatures) => {
  let obj = {};
  if (originalFeatures) {
    originalFeatures.forEach((feature) => {
      obj[feature.feature] = {
        original: feature.value
      }
    });
  }
  if (compareToFeatures) {
    compareToFeatures.forEach((feature) => {
      if (obj[feature.feature] !== undefined) {
        obj[feature.feature].compare = feature.value;
      } else {
        obj[feature.feature] = {
          compare: feature.value
        }
      }
    });
  }
  
  return obj;
};

const useStyles = makeStyles(theme => ({
  compareItem: {
    width: "33%"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ComparisonModal = (props) => {

  const classes = useStyles();

  const comparison = makeComparison(props.currentInfo.features, props.compareInfo.features);

  const displayItemValue = (item, side) => {
    if (item === undefined || item === 'false' || item === 'null') {
      return <ListItemText className={classes.compareItem}></ListItemText>
    } else if (item === 'true') {
      return <ListItemIcon className={classes.compareItem} style={{contentAlign: side}}>
        <SvgIcon>
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </SvgIcon>
      </ListItemIcon>
    } else {
      return <ListItemText className={classes.compareItem} style={{textAlign: side}}>{item}</ListItemText>
    }
  };

  return (
    <Dialog onClose={props.handleClose} 
      aria-labelledby="simple-dialog-title" 
      open={props.open} maxWidth="sm" 
      fullWidth={true}
      TransitionComponent={Transition}
      keepMounted>
      <DialogTitle id="simple-dialog-title">Comparing</DialogTitle>
      <List>
        <ListItem divider={true}>
            <ListItemText className={classes.compareItem} style={{textAlign: "left"}}>{props.currentInfo.name}</ListItemText>
              <ListItemText className={classes.compareItem}></ListItemText>
              <ListItemText className={classes.compareItem} style={{textAlign: "right"}} primaryTypographyProps={{align: "right"}}>{props.compareInfo.name}</ListItemText>
        </ListItem>
        {Object.keys(comparison).map((feature, idx) => {
          let original = comparison[feature].original;
          let compare = comparison[feature].compare;
          if ((original !== undefined && original !== 'false' && original !== 'null') || 
          (compare !== undefined && compare !== 'false' && compare !== 'null')) {
              return (
                <ListItem divider={true} key={idx}>
                  {displayItemValue(original, "left")}
                  <ListItemText className={classes.compareItem} style={{textAlign: "center"}}>{feature}</ListItemText>
                  {displayItemValue(compare, "right")}
                </ListItem>
              )
            }})}
      </List>
    </Dialog>
  );
}

export default ComparisonModal;