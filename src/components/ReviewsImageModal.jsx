import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: "700px",
    height: "700px",
    outline: "none"
  }
}));

const ReviewsImageModal = props => {
  const [modalStyle] = useState({
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  });
  const [imgStyle] = useState({
    maxHeight: "700px",
    maxWidth: "700px",
    margin: "auto",
    display: "block",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)"
  });

  const classes = useStyles();
  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <div style={modalStyle} className={classes.paper}>
        <img style={imgStyle} src={props.url} />
      </div>
    </Modal>
  );
};

export default ReviewsImageModal;
