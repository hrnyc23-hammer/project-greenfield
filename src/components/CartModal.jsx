import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const displayMessage = (status) => {
  if (status === 'success') {
    return {
      head: "Looks great!",
      body: "This item has successfully been added to your cart."
    }
  } else if (status === 'fail') {
    return {
      head: "Sorry",
      body: "Something went wrong. We weren't able to add this item to your cart. We're working on a fix now."
    }
  } else if (status === 'incomplete') {
    return {
      head: "Nothing there",
      body: "Please make sure you have size and quantity selected to add this item to your cart."
    }
  } else {
    return {
      head: "",
      body: ""
    }
  }
}

const CartModal = (props) => {
  let message = displayMessage(props.status);
  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{message.head}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {message.body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CartModal;