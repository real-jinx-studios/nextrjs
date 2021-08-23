import styles from "../../../styles/login.module.css";
import React, {useState} from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


const CssTextField = withStyles({
    root: {
        '& input': {
            color: '#ffffff',
        },
        '& label': {
            color: '#ffffff',
        },
        '& label.Mui-focused': {
            color: '#35C9F2ee',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#35C9F2ee',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#ffffff88',
            },
            '&:hover fieldset': {
                borderColor: '#ffffff',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#35C9F2ee',
            },
            '&.Mui-focused': {
                color: '#ffffff',
            },
        },
    },
})(TextField);

const CssTextFieldError = withStyles({
    root: {
        '& input': {
            color: '#AD2831',
        },
        '& label': {
            color: '#AD2831',
        },
        '& label.Mui-focused': {
            color: '#35C9F2ee',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#35C9F2ee',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#AD283188',
            },
            '&:hover fieldset': {
                borderColor: '#AD2831',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#35C9F2ee',
            },
            '&.Mui-focused': {
                color: '#AD2831',
            },
        },
    },
})(TextField);


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        width:298,
        margin: 'auto'

    },
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function ChangePassword(){

    const [password1, setPassword1]=useState('')
    const [password2, setPassword2]=useState('')
    const [error, setError]=useState(false)
    const classes = useStyles();
    const handleError=()=>{
        setError(true)
    }
    const handleChangePass1=(e)=>{
        setPassword1(e.target.value)
    }
    const handleChangePass2=(e)=>{
        setPassword2(e.target.value)
    }
    const handleClick=(e)=>{
        e.preventDefault()
        if(password1 !== password2){
            setError(true)
            return
        }

    }
    return (
        <div className={styles.main_wrapper}>
            <div className={styles.main_inner}>
                <form className={classes.root} noValidate onSubmit={handleClick}>
                    {error && <><CssTextFieldError
                        onChange={handleChangePass1}
                        className={classes.margin}
                        label="Username"
                        type="text"
                        variant="outlined"
                        id="custom-css-outlined-input"
                    />
                        <CssTextFieldError
                            onChange={handleChangePass2}
                            className={classes.margin}
                            label="Password"
                            variant="outlined"
                            type="password"
                            id="custom-css-outlined-input"
                        /> </>}
                    {!error && <><CssTextField
                        onChange={handleChangePass1}
                        className={classes.margin}
                        label="Username"
                        type="text"
                        variant="outlined"
                        id="custom-css-outlined-input"
                    />
                        <CssTextField
                            onChange={handleChangePass2}
                            className={classes.margin}
                            label="Password"
                            variant="outlined"
                            type="password"
                            id="custom-css-outlined-input"
                        /> </>}
                    <button className={styles.submit_button} type="submit">SIGN IN</button>
                </form>
            </div>
        </div>
    );
}

