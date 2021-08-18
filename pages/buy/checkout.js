import styles from '../../styles/checkout.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { initializeStore } from '../../store'
import Cookies from 'universal-cookie';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, {useState} from "react";
import {useEntries} from "../../lib/swr-hooks";
import {useRouter} from "next/router";
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

const stripePromise = loadStripe(

    'pk_test_51J6ChfFcRooXIbcMTlFKrBpktYDxWUuSJL3SDcm45JO5svvsarb7l16wG8OWNTO2FSR4hGEUMzemQ39DPEkca4nu00OKt4qDFa'

);


export default function Checkout(){
   /* const dispatch = useDispatch()
    const increment = () =>
        dispatch({
            type: 'INCREMENT',
            id: 'EZTitles'
        })*/

    React.useEffect(() => {

        // Check to see if this is a redirect back from Checkout

        const query = new URLSearchParams(window.location.search);

        if (query.get('success')) {

            console.log('Order placed! You will receive an email confirmation.');

        }

        if (query.get('canceled')) {

            console.log('Order canceled -- continue to shop around and checkout when you’re ready.');

        }

    }, []);

    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [error, setError]=useState(false)
    const { entries, isLoading, time} = useEntries()

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    const handleError=()=>{
        setError(true)
    }
    const handleChangePass=(e)=>{
        setPassword(e.target.value)
    }
    const handleChangeUsr=(e)=>{
        setUsername(e.target.value)
    }


    const classes = useStyles();

    const removeUser=()=>{
        cookies.remove('user-set', {path: '/'})

    }
    const removeCart=()=>{
        cookies.remove('cart', {path: '/'})

    }
    const cookies = new Cookies();
    const cart=cookies.get('cart')
    const user=cookies.get('user-set')
    let cart_table=<div>shit</div>

    if(cart){
        cart_table=cart.cart.map((x,i)=><tr key={i}><td>{x.name}<small>({x.version})</small></td><td>€{x.price}</td><td>{x.qty}</td><td>€{x.qty*x.price}</td></tr>)

    }

    return(
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
                            <TextField
                                onChange={handleChangeUsr}
                                className={classes.margin}
                                label="First Name"
                                type="text"
                                variant="outlined"
                                id="custom-css-outlined-input"
                            />
                            <TextField
                            onChange={handleChangeUsr}
                            className={classes.margin}
                            label="Last Name"
                            type="text"
                            variant="outlined"
                            id="custom-css-outlined-input"
                        />
                            <TextField
                                onChange={handleChangeUsr}
                                className={classes.margin}
                                label="Address line 1"
                                type="text"
                                variant="outlined"
                                id="custom-css-outlined-input"
                            />
                            <TextField
                                onChange={handleChangeUsr}
                                className={classes.margin}
                                label="Address line 2"
                                type="text"
                                variant="outlined"
                                id="custom-css-outlined-input"
                            />
                            <TextField
                                onChange={handleChangeUsr}
                                className={classes.margin}
                                label="Postcode"
                                type="text"
                                variant="outlined"
                                id="custom-css-outlined-input"
                            />
                            <TextField
                                onChange={handleChangeUsr}
                                className={classes.margin}
                                label="City"
                                type="text"
                                variant="outlined"
                                id="custom-css-outlined-input"
                            />
                            <TextField
                                onChange={handleChangeUsr}
                                className={classes.margin}
                                label="Country"
                                type="text"
                                variant="outlined"
                                id="custom-css-outlined-input"
                            />
                                <TextField
                                    onChange={handleChangePass}
                                    className={classes.margin}
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    id="custom-css-outlined-input"
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
            <form action="/api/checkout_sessions" method="POST">

                <section>

                    <button type="submit" role="link">

                        Checkout

                    </button>

                </section>

                <style jsx>

                    {`

          section {

            background: #ffffff;

            display: flex;

            flex-direction: column;

            width: 400px;

            height: 112px;

            border-radius: 6px;

            justify-content: space-between;

          }

          button {

            height: 36px;

            background: #556cd6;

            border-radius: 4px;

            color: white;

            border: 0;

            font-weight: 600;

            cursor: pointer;

            transition: all 0.2s ease;

            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);

          }

          button:hover {

            opacity: 0.8;

          }

        `}

                </style>

            </form>

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
