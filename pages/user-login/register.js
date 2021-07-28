import styles from '../../styles/login.module.css'
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useState} from "react";
import Router from 'next/router'
import {useEntries} from "../../lib/swr-hooks";

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

export default function Register(){
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [submitting, setSubmitting] = useState(false)
    const classes = useStyles();
    const handleChangePass=(e)=>{
        setPassword(e.target.value)
    }
    const handleChangeUsr=(e)=>{
        setUsername(e.target.value)
    }
    async function handleClick(e) {
        e.preventDefault()
        setSubmitting(true)
        try {
            const res = await fetch('/api/create-entry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            })
            setSubmitting(false)
            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            Router.push('/user-login/register-success')
        } catch (e) {
            throw Error(e.message)
        }
    }


    return (
        <div className={styles.main_wrapper}>
            <div className={styles.main_inner}>
                <form className={classes.root} noValidate onSubmit={handleClick}>
                    <CssTextField
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
                    />
                    <button className={styles.submit_button} type="submit">REGISTER USER</button>
                </form>
            </div>
        </div>
    );

}
