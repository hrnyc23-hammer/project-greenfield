import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
  },
}));

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
}

const ComparisonModal = (props) => {

  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();
  const comparison = makeComparison(props.currentInfo.features, props.compareInfo.features);

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.open}
      onClose={props.handleClose}
    >
      <div style={modalStyle} className={classes.paper}>
        <h5 id="modal-title">Comparing</h5>
        <table>
          <tbody>
            <tr>
              <td>{props.currentInfo.name}</td>
              <td>{props.compareInfo.name}</td>
            </tr>
            {Object.keys(comparison).map((feature, idx) => {
              return (
                <tr key={idx}>
                  <td>{comparison[feature].original}</td>
                  <td>{feature}</td>
                  <td>{comparison[feature].compare}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Modal>
  );
}

export default ComparisonModal;