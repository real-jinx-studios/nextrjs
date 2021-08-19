import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from "@material-ui/core/TextField";

function rand() {
    return Math.round(Math.random() * 20) - 11;
}

function getModalStyle() {

    return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: '#F5F5F5',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <TextField
                label="Email"
                type="text"
                variant="outlined"
                id="custom-css-outlined-input"
                defaultValue={props.email}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                id="custom-css-outlined-input"
            />
            <button type="button" onClick={handleClose}>
                log in

            </button>
            <button type="button" onClick={handleClose}>
                cancel

            </button>

        </div>
    );

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Open Modal
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
