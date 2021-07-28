import React, {useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useEntries} from "../../lib/swr-hooks";
import { useRouter } from 'next/router'
import styles from '../../styles/login.module.css'


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

export default function ServicePortal() {
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [error, setError]=useState(false)
    const { entries, isLoading, time} = useEntries()
    const router = useRouter()

    const classes = useStyles();
    const handleError=()=>{
        setError(ture)
    }
    const handleChangePass=(e)=>{
        setPassword(e.target.value)
    }
    const handleChangeUsr=(e)=>{
        setUsername(e.target.value)
    }
    const handleClick=(e)=>{
        e.preventDefault()
        if(isLoading){
            console.log('waiting for shit')
        }else{
            console.log(entries, 'the fuck')

            if (entries.filter(function(e) { return e.username === username && e.password === password ; }).length > 0){
                router.push('/user-login/login-success?select-all-query-execution-time='+entries[entries.length-1].time)


            }else{
                setError(true)

            }

        }
    }
    const handleClickRegister=()=>{
        router.push('/user-login/register')
    }

    return (
        <div className={styles.main_wrapper}>
            <div className={styles.main_inner}>
                <form className={classes.root} noValidate onSubmit={handleClick}>
                    {error && <><CssTextFieldError
                        onChange={handleChangeUsr}
                        className={classes.margin}
                        label="Username"
                        type="text"
                        variant="outlined"
                        id="custom-css-outlined-input"
                    />
                        <CssTextFieldError
                        onChange={handleChangePass}
                        className={classes.margin}
                        label="Password"
                        variant="outlined"
                        type="password"
                        id="custom-css-outlined-input"
                        /> </>}
                    {!error && <><CssTextField
                        onChange={handleChangeUsr}
                        className={classes.margin}
                        label="Username"
                        type="text"
                        variant="outlined"
                        id="custom-css-outlined-input"
                    />
                        <CssTextField
                            onChange={handleChangePass}
                            className={classes.margin}
                            label="Password"
                            variant="outlined"
                            type="password"
                            id="custom-css-outlined-input"
                        /> </>}
                    <button className={styles.submit_button} type="submit">SIGN IN</button>
                    <p>OR</p>
                    <button className={styles.submit_button} onClick={handleClickRegister}>REGISTER</button>
                </form>
            </div>
        </div>
    );
}
