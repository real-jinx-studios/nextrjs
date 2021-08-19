import styles from '../../styles/checkout.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { initializeStore } from '../../store'
import Cookies from 'universal-cookie';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, {useState} from "react";
import {getClient} from "../../lib/swr-hooks";
import Router, {useRouter} from "next/router";
import { loadStripe } from '@stripe/stripe-js';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width:'100%',
        margin: 'auto',
        padding: '150px 0'

    },
    margin: {
        margin: theme.spacing(1),
    },
}));


export default function Checkout() {
    /* const dispatch = useDispatch()
     const increment = () =>
         dispatch({
             type: 'INCREMENT',
             id: 'EZTitles'
         })*/

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    let customer={}

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/create-customer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email:customer.email,
                    first_name:customer.first_name,
                    last_name:customer.last_name,
                    street_address:customer.street_address,
                    street_address_2:customer.street_address_2,
                    postcode:customer.postcode,
                    phone_num:customer.phone_num,
                    city:customer.city,
                    country:customer.country,
                    company_name:customer.company_name,
                    vat:customer.vat,
                    type:customer.type
                }),
            })
            try {
                const json = await res.json()
                if (!res.ok) throw Error(json.message)
                try {
                    const res = await fetch('/api/create-user?email='+customer.email, {
                        method: 'GET'
                    })
                    const json = await res.json()
                    if (!res.ok) {
                        console.log(json.message, 's3')
                    }


                } catch (e) {
                    console.log(e.message,'s1')
                }
            }catch(e){console.log(e,'1')}
/*
            try {
                router.push('/buy/success')
            } catch (e) {
                console.log(e,'2')
            }*/
        } catch (e) {
            console.log(e.message, '3')
        }

    }

    const handleError = () => {
        setError(true)
    }
    const handleChangePass = (e) => {
        setPassword(e.target.value)
    }
    const handleChangeUsr = (e) => {
        setUsername(e.target.value)
    }


    const classes = useStyles();

    const removeUser = () => {
        cookies.remove('user-set', {path: '/'})

    }
    const removeCart = () => {
        cookies.remove('cart', {path: '/'})

    }
    const cookies = new Cookies();
    const cart = cookies.get('cart')
    const user = cookies.get('user')
    const { entries, isLoading } = getClient(user.user[0].email)
    let customer_type='individual'
    if(!isLoading){
        customer_type=entries[0].type
        customer=entries[0]
    }


    let cart_table = <div>shit</div>

    if (cart) {
        cart_table = cart.cart.map((x, i) => <tr key={i}>
            <td>{x.name}<small>({x.version})</small></td>
            <td>€{x.price}</td>
            <td>{x.qty}</td>
            <td>€{x.qty * x.price}</td>
        </tr>)

    }
    if(isLoading){
        return(
            <div>loading shit</div>
        )
    }
    return (
        <div className={styles.main_wrapper}>
            <div className={styles.main_inner}>
                <div className={styles.title}>
                    Order Checkout

                </div>
                <form className={classes.root} noValidate onSubmit={handleSubmit}>
                    <div className={styles.wrapper}>
                        <div className={styles.cart_info}>
                            <table>
                                <thead>
                                <tr>
                                    <td>Product</td>
                                    <td>Price</td>
                                    <td>Quantity</td>
                                    <td>Total price</td>
                                </tr>

                                </thead>
                                <tbody>
                                {cart_table}


                                </tbody>
                            </table>


                        </div>
                        <div className={styles.client_info}>
                            {customer_type=='organization' && <>
                                <TextField
                                onChange={handleChangeUsr}
                                className={classes.margin}
                                label="VAT"
                                type="text"
                                variant="outlined"
                                id="custom-css-outlined-input"
                                defaultValue={entries[0].vat}
                            />
                                <TextField
                                onChange={handleChangeUsr}
                                className={classes.margin}
                                label="Company Name"
                                type="text"
                                variant="outlined"
                                id="custom-css-outlined-input"
                                defaultValue={entries[0].company_name}
                            />
                            </>}
                            <TextField
                                onChange={handleChangeUsr}
                                className={classes.margin}
                                label="First Name"
                                type="text"
                                variant="outlined"
                                id="custom-css-outlined-input"
                                defaultValue={entries[0].first_name}
                            />
                            <TextField
                                onChange={handleChangePass}
                                className={classes.margin}
                                label="Last Name"
                                type="text"
                                variant="outlined"
                                id="custom-css-outlined-input"
                                defaultValue={entries[0].last_name}
                            />
                            <TextField
                                onChange={handleChangeUsr}
                                className={classes.margin}
                                label="Address line 1"
                                type="text"
                                variant="outlined"
                                id="custom-css-outlined-input"
                                defaultValue={entries[0].street_address}
                            />
                            <TextField
                                onChange={handleChangeUsr}
                                className={classes.margin}
                                label="Address line 2"
                                type="text"
                                variant="outlined"
                                id="custom-css-outlined-input"
                                defaultValue={entries[0].street_address_2}
                            />
                            <TextField
                                onChange={handleChangeUsr}
                                className={classes.margin}
                                label="Postcode"
                                type="text"
                                variant="outlined"
                                id="custom-css-outlined-input"
                                defaultValue={entries[0].postcode}
                            />
                            <TextField
                                onChange={handleChangeUsr}
                                className={classes.margin}
                                label="City"
                                type="text"
                                variant="outlined"
                                id="custom-css-outlined-input"
                                defaultValue={entries[0].city}
                            />
                            <TextField
                                onChange={handleChangeUsr}
                                className={classes.margin}
                                label="Country"
                                type="text"
                                variant="outlined"
                                id="custom-css-outlined-input"
                                defaultValue={entries[0].country}
                            />
                            <TextField
                                onChange={handleChangePass}
                                className={classes.margin}
                                label="Phone number"
                                variant="outlined"
                                type="text"
                                id="custom-css-outlined-input"
                                defaultValue={entries[0].phone_num}
                            />
                            <TextField
                                onChange={handleChangePass}
                                className={classes.margin}
                                label="Email"
                                variant="outlined"
                                type="text"
                                id="custom-css-outlined-input"
                                defaultValue={entries[0].email}
                            />
                        </div>
                        <div className={styles.payment}>
                            <button className={styles.submit_button} type="submit">Pay with Paypal</button>
                            <button className={styles.submit_button} type="submit">Pay with Other</button>


                        </div>

                    </div>
                </form>
                <div onClick={removeUser}><p>REMOVE USER</p></div>
                <div onClick={removeCart}><p>CLEAN CART</p></div>
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
