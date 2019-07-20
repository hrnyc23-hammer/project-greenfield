import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
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

const ReviewsModal = (props) => {
    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();
    return (
        <Modal open={props.open} onClose={props.handleClose}>
            <div style={modalStyle} className={classes.paper}>
                <p>Modal</p>
            </div>
        </Modal>
    )
}

export default ReviewsModal