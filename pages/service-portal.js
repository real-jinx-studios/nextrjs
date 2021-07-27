import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {useEntries} from "../lib/swr-hooks";
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        borderColor: '#ffffff',
        background : "#ffffffcc",
        marginTop: 138,
        textAlign: "center"
    },
    main: {
        width: "100%",
        height:"200px",
        padding: "80 0",
        marginTop: 130,
        textAlign:"center"
    }
}));

export default function ServicePortal() {
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const { entries, isLoading } = useEntries()
    const router = useRouter()

    const classes = useStyles();
    const handleChangePass=(e)=>{
        setPassword(e.target.value)
    }
    const handleChangeUsr=(e)=>{
        setUsername(e.target.value)
    }
    const handleClick=()=>{
        if(isLoading){
            console.log('waiting for shit')
        }else{
            console.log(entries, username, password)
            if(entries[0].username==username && entries[0].password==password){
                router.push('/login-success')


            }

        }
    }

    return (
        <div className={classes.main}>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
                <Input
                    onChange={handleChangeUsr}
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <TextField
                onChange={handleChangePass}
                className={classes.margin}
                style={{"color":"#ffffff"}}
                id="input-with-icon-textfield"
                label="Password"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
            />
            <div style={{"height":180,"position":"relative", "z-index":"999"}}><div style={{"cursor":"pointer","margin":"auto","border": "solid 1px #ffffff", "marginTop":18, "color":"#ffffff", "width":"130px" }} onClick={handleClick}>SUBMIT</div></div>
        </div>
    );
}
