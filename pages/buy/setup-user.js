import styles from '../../styles/checkout.module.css'
import {countries} from "../../components/countries";
import Cookies from 'universal-cookie';
import {useRouter} from "next/router";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, {useState} from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';



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

const CssSelect = withStyles({
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
})(Select);


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


export default function SetupUser(){
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [error, setError]=useState(false)


    const countriesOptions=countries.map((x,i)=><MenuItem key={i} value={x}>{x}</MenuItem>)
    const cookies = new Cookies();
    const router = useRouter()
    const classes = useStyles();


    const handleChangePass=(e)=>{
        setPassword(e.target.value)
    }
    const handleChangeUsr=(e)=>{
        setUsername(e.target.value)
    }



    const handleSubmit=(e)=>{
        e.preventDefault()
        cookies.set('user-set', {user:[{email:e.target[0].value, country:e.target[1].value}]}, {path:'/'})

        router.push('/buy/checkout')

    }

    return(
        <div className={styles.main_wrapper}>
            <div className={styles.main_inner}>
                <div className={styles.form_wrapper}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <CssTextField
                            onChange={handleChangeUsr}
                            className={classes.margin}
                            label="Email"
                            type="text"
                            variant="outlined"
                            id="custom-css-outlined-input"
                        />
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value='country'
                            onChange={handleChangePass}
                        >
                            {countriesOptions}
                        </Select>
                        <Button variant="contained" color="primary" type='submit'>
                            Submit
                        </Button>

                    </form>
                </div>

            </div>

        </div>
    )
}
/*

export function getServerSideProps() {
    const reduxStore = initializeStore()
    const {dispatch} = reduxStore

    dispatch({
        type: 'TICK',
        lastUpdate: Date.now(),
    })

    return {props: {initialReduxState: reduxStore.getState()}}
}
*/
