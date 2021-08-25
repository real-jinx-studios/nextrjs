import styles from '../../styles/checkout.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { initializeStore } from '../../store'
import Cookies from 'universal-cookie';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import React, {useState} from "react";
import {getClient} from "../../lib/swr-hooks";
import Router, {useRouter} from "next/router";
import { loadStripe } from '@stripe/stripe-js';
import CustomInput from "../../components/customInput";

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

    const cookies = new Cookies();
    const cart = cookies.get('cart')
    const user = cookies.get('user')
    console.log(user, 'fuck off')
    const { entries, isLoading } = getClient(user?user.user[0].email:'undefined')
    let customer_type=cart?cart.c_type : 'individual'
    let customer_email=user?user.user[0].email : ''
    let customer_country=user?user.user[0].country : ''
    let user_exists=user?user.exists : ''
    if(!isLoading && user.exists){
        //customer_type=entries[0].type
        customer=entries[0]
    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!user_exists){
            try {
                const res = await fetch('/api/create-customer', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email:e.target[10].value,
                        first_name:e.target[2].value,
                        last_name:e.target[3].value,
                        street_address:e.target[4].value,
                        street_address_2:e.target[5].value,
                        postcode:e.target[6].value,
                        phone_num:e.target[9].value,
                        city:e.target[7].value,
                        country:e.target[8].value,
                        company_name:e.target[1].value,
                        vat:e.target[0].value,
                        type:cart.c_type
                    }),
                })
                try {
                    const json = await res.json()
                    if (!res.ok) throw Error(json.message)
                    try {
                        const res = await fetch('/api/create-user?email='+customer_email, {
                            method: 'GET'
                        })
                        const json = await res.json()
                        if (!res.ok) {
                            console.log(json.message, 's3')
                        }else{
                            Router.push('/buy/success?from=new')
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
        }else{
            //call some confirmation email shit api
            Router.push('/buy/success?from=old')
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
    console.log(user, customer_email)



    let cart_table = <div>shit</div>
    let tyst=0

    if (cart) {
        cart_table = cart.cart.map((x, i) => <tr key={i}>
            <td>{x.name}<small>({x.version})</small></td>
            <td>€{x.price}</td>
            <td>{x.qty}</td>
            <td>€{x.qty * x.price}</td>
            <td hidden={true}>{tyst+=x.qty * x.price}</td>
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
                <div className={styles.form_wrapper}>
                    <form noValidate onSubmit={handleSubmit}>
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
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>VAT: 19%
                                            <br/>
                                            Total's total price: €{tyst+(tyst*0.19)}</td>
                                    </tr>


                                    </tbody>
                                </table>


                            </div>
                            <div className={styles.client_info}>
                                {customer_type == 'organization' && <>
                                    <CustomInput type='text' defaultValue={entries[0].vat} placeholder="VAT" onChange={handleChangeUsr}/>
                                    <CustomInput
                                        onChange={handleChangeUsr}
                                        className={classes.margin}
                                        label="Company Name"
                                        type="text"
                                        variant="outlined"
                                        id="custom-css-outlined-input"
                                        defaultValue={entries[0].company_name}
                                        placeholder="Company name"
                                    />
                                </>}
                                <CustomInput
                                    onChange={handleChangeUsr}
                                    className={classes.margin}
                                    label="First Name"
                                    type="text"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                    defaultValue={entries[0].first_name}
                                    placeholder="First name"
                                />
                                <CustomInput
                                    onChange={handleChangePass}
                                    className={classes.margin}
                                    label="Last Name"
                                    type="text"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                    defaultValue={entries[0].last_name}
                                    placeholder="last name"
                                />
                                <CustomInput
                                    onChange={handleChangeUsr}
                                    className={classes.margin}
                                    label="Address line 1"
                                    type="text"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                    defaultValue={entries[0].street_address}
                                    placeholder="Street Address 1"
                                />
                                <CustomInput
                                    onChange={handleChangeUsr}
                                    className={classes.margin}
                                    label="Address line 2"
                                    type="text"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                    defaultValue={entries[0].street_address_2}
                                    placeholder="Street Address 2"
                                />
                                <CustomInput
                                    onChange={handleChangeUsr}
                                    className={classes.margin}
                                    label="Postcode"
                                    type="text"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                    defaultValue={entries[0].postcode}
                                    placeholder="Postcode"
                                />
                                <CustomInput
                                    onChange={handleChangeUsr}
                                    className={classes.margin}
                                    label="City"
                                    type="text"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                    defaultValue={entries[0].city}
                                    placeholder="City"
                                />
                                <CustomInput
                                    onChange={handleChangeUsr}
                                    className={classes.margin}
                                    label="Country"
                                    type="text"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                    defaultValue={entries[0].country}
                                    placeholder="Country"
                                />
                                <CustomInput
                                    onChange={handleChangePass}
                                    className={classes.margin}
                                    label="Phone number"
                                    variant="outlined"
                                    type="text"
                                    id="custom-css-outlined-input"
                                    defaultValue={entries[0].phone_num}
                                    placeholder="Phone number"
                                />
                                <CustomInput
                                    onChange={handleChangePass}
                                    className={classes.margin}
                                    label="Email"
                                    variant="outlined"
                                    type="text"
                                    id="custom-css-outlined-input"
                                    defaultValue={customer_email}
                                    placeholder="Email"
                                />
                            </div>
                            <div className={styles.payment}>
                                <button className={styles.submit_button} type="submit">Pay with Paypal</button>
                                <button className={styles.submit_button} type="submit">Pay with Other</button>


                            </div>

                        </div>
                    </form>
                </div>
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
