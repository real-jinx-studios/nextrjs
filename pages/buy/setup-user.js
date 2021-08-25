import styles from '../../styles/checkout.module.css'
import {countries} from "../../components/countries";
import Cookies from 'universal-cookie';
import {useRouter} from "next/router";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import React, {useState} from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import LoginPop from "../../components/loginPop";
import {Modal} from "@material-ui/core";
import {getClient} from "../../lib/swr-hooks";
import CustomInput from "../../components/customInput";





export default function SetupUser(){
    const [email, setEmail]=useState('')
    const [country, setCountry]=useState('')
    const [error, setError]=useState(false)
    const [modal, setModal] = useState(false)


    const countriesOptions=countries.map((x,i)=><option key={i} value={x}>{x}</option>)
    const cookies = new Cookies();
    const router = useRouter()


    const handleChangeCountry=(e)=>{
        setCountry(e.target.value)
    }
    const handleChangeEmail=(e)=>{
        setEmail(e.target.value)
    }



    const handleSubmit=(e)=>{
        e.preventDefault()
        // add error handling
        if(checkForErr(e.target)){


            fetch('/api/check-user-exist?email='+e.target[0].value)
                .then(response => response.json())
                .then((data)=> {
                    //will break if data[0] is not obj needed
                    if(data[0].truth==1){
                        setModal(true)

                       // cookies.set('user', {exists:true,user:[{email:e.target[0].value, country:e.target[1].value}]}, {path:'/'})

                    }else{
                        cookies.set('user', {exists:false,user:[{email:e.target[0].value, country:e.target[1].value}]}, {path:'/'})
                        router.push('/buy/checkout')
                    }

                });




        }






    }
    function checkForErr(fields){
        if(fields){


        }
        return true

    }

    return(
        <div className={styles.main_wrapper}>
            <div className={styles.main_inner}>
                <div className={styles.form_wrapper}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <CustomInput
                            onChange={handleChangeEmail}
                            label="Email"
                            type="email"
                            placeholder="Email"
                        />
                        <select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue='country'
                            onChange={handleChangeCountry}
                        >
                            {countriesOptions}
                        </select>
                        <Button variant="contained" color="primary" type='submit'>
                            Submit
                        </Button>

                    </form>
                    {modal && <LoginPop email={email} show={setModal}/>}
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
