import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from "@material-ui/core/TextField";
import Cookies from "universal-cookie";
import {useRouter} from "next/router";
import CustomInput from "./customInput";

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
const cookies = new Cookies();
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
    const modalStyle = getModalStyle();
    const router = useRouter()
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    console.log(props,'ass')




    const handleClose = () => {
        props.show(false);
    };

    const handleEmail=(e)=>{
        setEmail(e.target.value)

    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)

    }

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(e.target,e.target[0].value,e.target[1].value)
        fetch('/api/get-user?email='+e.target[0].value+'password='+e.target[1].value)
            .then(response => response.json())
            .then((data)=> {
                //will break if data[0] is not obj needed
                //fix it one day plis
                if(data.length>0){
                    cookies.set('user', {exists:true,user:[{email:e.target[0].value, country:e.target[1].value}]}, {path:'/'})
                    router.push('/buy/checkout')


                }

            });
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <form onSubmit={handleLogin}>
                <CustomInput
                label="Email"
                type="text"
                variant="outlined"
                id="custom-css-outlined-input"
                defaultValue={props.email}
                placeholder="Email"
                handleChange={handleEmail}
                value={email}
            />
                <CustomInput
                    label="Password"
                    type="password"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    placeholder="Password"
                    value={password}
                    handleChange={handlePassword}
                />
                <button type="submit">
                    log in
                </button>
            </form>
            <button type="button" onClick={handleClose}>
                cancel

            </button>

        </div>
    );

    return (
        <div>
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
