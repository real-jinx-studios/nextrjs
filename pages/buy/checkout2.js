import styles from '../../styles/checkout2.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { initializeStore } from '../../store'
import Cookies from 'universal-cookie';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import React, {useState} from "react";
import {getClient} from "../../lib/swr-hooks";
import Router, {useRouter} from "next/router";
import { loadStripe } from '@stripe/stripe-js';
import CustomInput from "../../components/customInput";
import MyImage from "../../components/myImage";
import Link from 'next/link';
import ReactTooltip from "react-tooltip";




export default function Checkout2() {
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
/*
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
    }*/

    const handleSubmit = async (e) => {
        e.preventDefault()




      /*  soap.createClient(url, function(err, client) {
            client.checkVat(args, function(err, result) {
                console.log(result);
            });
        });*/
    }




    /*const handleSubmit = async (e) => {
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
                /!*
                try {
                    router.push('/buy/success')
                } catch (e) {
                    console.log(e,'2')
                }*!/
            } catch (e) {
                console.log(e.message, '3')
            }
        }else{
            //call some confirmation email shit api
            Router.push('/buy/success?from=old')
        }

    }*/

    const handleError = () => {
        setError(true)
    }
    const handleChangePass = (e) => {
        setPassword(e.target.value)
    }
    const handleChangeUsr = (e) => {
        setUsername(e.target.value)
    }



    const removeUser = () => {
        cookies.remove('user-set', {path: '/'})

    }
    const removeCart = () => {
        cookies.remove('cart', {path: '/'})

    }



    let cart_table = <div>shit</div>
    let tyst=0



    return (
        <>
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.client_info_section}>
                    {/*VAT*/}
                    <div className={styles.client_info_section_part1}>
                        <form onSubmit={handleSubmit} className={styles.client_info_section_part1_form}>
                            <div className={styles.client_info_section_part1_form_inner}>
                                <div className={styles.client_order_summary_content_title} style={{justifyContent:'unset'}}>
                                    <div className={styles.checkout_step}>1</div>
                                    <h3 className={styles.client_order_summary_content_title_text}>
                                        VAT Info
                                    </h3>
                                    <small data-tip data-for='vat-main' style={{color:'#2e77bb', textDecoration:'underline', cursor:'pointer', marginLeft:20}}>Why?</small>
                                    <ReactTooltip id='vat-main' type='info'>
                                        <span>If you have a VAT number we need it,<br/>to remove the added tax on your price.</span>

                                    </ReactTooltip>
                                </div>
                                <fieldset className={styles.client_info_section_part1_form_inner_fieldset}>
                                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                                        <input className={styles.input} type="text" value='France' required/>
                                        <span className={styles.placeholder}>Country</span>

                                    </label>
                                    <div className={styles.client_info_section_part1_vat}>
                                        <label className={`${styles.input_wrapper} ${styles.one}`} style={{paddingRight:12}}>
                                            <input className={styles.input} type="text" value="FR" disabled required/>

                                        </label>
                                        <label className={`${styles.input_wrapper} ${styles.one}`}>
                                            <input className={styles.input} type="text" required/>
                                            <span className={styles.placeholder}>VAT Number</span>

                                        </label>
                                    </div>

                                </fieldset>
                                <div className={styles.button_wrapper}>
                                    <button type='submit' className={styles.button}>
                                        <div className={styles.button_inner}>
                                            <div className={styles.button_inner_text}>
                                                Proceed to next step

                                            </div>

                                        </div>
                                    </button>


                                </div>


                            </div>
                        </form>

                    </div>
                    {/*hardID*/}
                    <div className={styles.client_info_section_part1}>
                        <form onSubmit={handleSubmit} className={styles.client_info_section_part1_form}>
                            <div className={styles.client_info_section_part1_form_inner}>
                                <div className={styles.client_order_summary_content_title} style={{justifyContent:'unset'}}>
                                    <div className={styles.checkout_step}>2</div>
                                    <h3 className={styles.client_order_summary_content_title_text}>
                                        HardID
                                    </h3>
                                </div>
                                <div className={styles.client_order_summary_content_disclaimer}>
                                    <p className={styles.client_order_summary_content_disclaimer_text}>In order to activate your software we need a hardwareID for every license you have purchased. You can do this now if you have your hardwareID or at another time via email. <Link href="#"><a className={styles.download_hardID}>Download Tool here!</a></Link></p>
                                </div>
                                <div className={styles.client_info_section_part1_hardID}>
                                    <div className={styles.button_wrapper}>
                                        <button type='submit' className={styles.button}>
                                            <div className={styles.button_inner}>
                                                <div className={styles.button_inner_text}>
                                                    Provide ID

                                                </div>

                                            </div>
                                        </button>


                                    </div>
                                    <div className={styles.button_wrapper2}>
                                        <button type='submit' className={styles.button2}>
                                            <div className={styles.button_inner2}>
                                                <div className={styles.button_inner_text2}>
                                                    Skip this step

                                                </div>

                                            </div>
                                        </button>


                                    </div>
                                </div>
                                <fieldset className={styles.client_info_section_part1_form_inner_fieldset}>
                                    <div className={styles.client_info_section_part1_hardID_field_wrapper}>
                                        <label className={`${styles.input_wrapper} ${styles.one}`}>
                                            <input className={styles.input} type="text" required/>
                                            <span className={styles.placeholder}>Hardware ID</span>

                                        </label>
                                        <span className={styles.client_info_hardID_content_item_icon}>
                                            <MyImage src='/images/icons/eztit_icon2.png' width={50} height={50} alt='product icon'/>

                                        </span>
                                        <span className={styles.client_info_hardID_content_item_title}>
                                            EZTitles<br/><small>Ultimate</small>
                                        </span>
                                    </div>
                                    <div className={styles.client_info_section_part1_hardID_field_wrapper}>
                                        <label className={`${styles.input_wrapper} ${styles.one}`}>
                                            <input className={styles.input} type="text" required/>
                                            <span className={styles.placeholder}>Hardware ID</span>

                                        </label>
                                        <span className={styles.client_info_hardID_content_item_icon}>
                                            <MyImage src='/images/icons/eztit_icon2.png' width={50} height={50} alt='product icon'/>

                                        </span>
                                        <span className={styles.client_info_hardID_content_item_title}>
                                            EZTitles<br/><small>Ultimate</small>
                                        </span>
                                    </div>
                                    <div className={styles.client_info_section_part1_hardID_field_wrapper}>
                                        <label className={`${styles.input_wrapper} ${styles.one}`}>
                                            <input className={styles.input} type="text" required/>
                                            <span className={styles.placeholder}>Hardware ID</span>

                                        </label>
                                        <span className={styles.client_info_hardID_content_item_icon}>
                                            <MyImage src='/images/icons/eztit_icon2.png' width={50} height={50} alt='product icon'/>

                                        </span>
                                        <span className={styles.client_info_hardID_content_item_title}>
                                            EZTitles<br/><small>Essentials</small>
                                        </span>
                                    </div>
                                    <div className={styles.client_info_section_part1_hardID_field_wrapper}>
                                        <label className={`${styles.input_wrapper} ${styles.one}`}>
                                            <input className={styles.input} type="text" required/>
                                            <span className={styles.placeholder}>Hardware ID</span>

                                        </label>
                                        <span className={styles.client_info_hardID_content_item_icon}>
                                            <MyImage src='/images/icons/ezconvert_icon2.png' width={50} height={50} alt='product icon'/>

                                        </span>
                                        <span className={styles.client_info_hardID_content_item_title}>
                                            EZConvert<br/><small>Professional</small>
                                        </span>
                                    </div>
                                    <div className={styles.client_info_section_part1_hardID_field_wrapper}>
                                        <label className={`${styles.input_wrapper} ${styles.one}`}>
                                            <input className={styles.input} type="text" required/>
                                            <span className={styles.placeholder}>Hardware ID</span>

                                        </label>
                                        <span className={styles.client_info_hardID_content_item_icon}>
                                            <MyImage src='/images/icons/3dtitles_icon2.png' width={50} height={50} alt='product icon'/>

                                        </span>
                                        <span className={styles.client_info_hardID_content_item_title}>
                                            3DTitles<br/><small>Full</small>
                                        </span>
                                    </div>


                                </fieldset>
                                <div className={styles.button_wrapper}>
                                    <button type='submit' className={styles.button}>
                                        <div className={styles.button_inner}>
                                            <div className={styles.button_inner_text}>
                                                Proceed to billing

                                            </div>

                                        </div>
                                    </button>


                                </div>


                            </div>
                        </form>

                    </div>
                    {/*billing*/}
                    <div className={styles.client_info_section_part1}>
                        <form onSubmit={handleSubmit} className={styles.client_info_section_part1_form}>
                            <div className={styles.client_info_section_part1_form_inner}>
                                <div className={styles.client_order_summary_content_title} style={{justifyContent:'unset'}}>
                                    <div className={styles.checkout_step}>3</div>
                                    <h3 className={styles.client_order_summary_content_title_text}>
                                        Billing Info
                                    </h3>
                                </div>
                                <fieldset className={styles.client_info_section_part1_form_inner_fieldset}>
                                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                                        <input className={styles.input} type="text" required/>
                                        <span className={styles.placeholder}>Full name</span>

                                    </label>
                                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                                        <input className={styles.input} type="text" required/>
                                        <span className={styles.placeholder}>Email</span>

                                    </label>

                                </fieldset>
                                <fieldset className={styles.client_info_section_part1_form_inner_fieldset}>
                                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                                        <input className={styles.input} type="text" required/>
                                        <span className={styles.placeholder}>Phone number</span>

                                    </label>
                                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                                        <input className={styles.input} type="text" required/>
                                        <span className={styles.placeholder}>Street Address 1</span>

                                    </label>
                                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                                        <input className={styles.input} type="text" required/>
                                        <span className={styles.placeholder}>Street Address 2</span>

                                    </label>
                                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                                        <input className={styles.input} type="text" required/>
                                        <span className={styles.placeholder}>City</span>

                                    </label>
                                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                                        <input className={styles.input} type="text" required/>
                                        <span className={styles.placeholder}>Country</span>

                                    </label>
                                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                                        <input className={styles.input} type="text" required/>
                                        <span className={styles.placeholder}>Province/State</span>

                                    </label>
                                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                                        <input className={styles.input} type="text" required/>
                                        <span className={styles.placeholder}>Postcode</span>

                                    </label>
                                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                                        <input className={styles.input} type="text" required/>
                                        <span className={styles.placeholder}>Company name</span>

                                    </label>

                                </fieldset>
                                <div className={styles.button_wrapper}>
                                    <button type='submit' className={styles.button}>
                                        <div className={styles.button_inner}>
                                            <div className={styles.button_inner_text}>
                                                Proceed to payment

                                            </div>

                                        </div>
                                    </button>


                                </div>


                            </div>
                        </form>

                    </div>
                    {/*card*/}
                    <div className={styles.client_info_section_part1}>
                        <form onSubmit={handleSubmit} className={styles.client_info_section_part1_form}>
                            <div className={styles.client_info_section_part1_form_inner}>
                                <div className={styles.client_order_summary_content_title} style={{justifyContent:'unset'}}>
                                    <div className={styles.checkout_step}>4</div>
                                    <h3 className={styles.client_order_summary_content_title_text}>
                                        Payment details
                                    </h3>
                                </div>
                                <fieldset className={styles.client_info_section_part1_form_inner_fieldset}>
                                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                                        <input className={styles.input} type="text" required/>
                                        <span className={styles.placeholder}>Name on card</span>

                                    </label>
                                    <div className={styles.client_info_section_part1_payment_field_wrapper}>
                                        <label className={`${styles.input_wrapper} ${styles.one}`}>
                                            <input className={styles.input} type="text" required/>
                                            <span className={styles.placeholder}>Card number</span>

                                        </label>
                                        <label className={`${styles.input_wrapper} ${styles.one}`} style={{paddingLeft:12}}>
                                            <input className={styles.input} type="text" required/>
                                            <span className={styles.placeholder}>Exp. date</span>

                                        </label>
                                        <label className={`${styles.input_wrapper} ${styles.one}`} style={{paddingLeft:12}}>
                                            <input className={styles.input} type="text" required/>
                                            <span className={styles.placeholder}>CVV</span>

                                        </label>
                                    </div>

                                </fieldset>
                                <div className={styles.button_wrapper}>
                                    <button type='submit' className={styles.button}>
                                        <div className={styles.button_inner}>
                                            <div className={styles.button_inner_text}>
                                                PAY NOW

                                            </div>

                                        </div>
                                    </button>


                                </div>


                            </div>
                        </form>

                    </div>

                </div>
                <div className={styles.client_order_summary_section}>
                    <div className={styles.client_order_summary_wrapper}>
                        <div className={styles.client_order_summary_inner}>
                            <div className={styles.client_order_summary_content}>
                                <div className={styles.client_order_summary_content_title}>
                                    <h3 className={styles.client_order_summary_content_title_text}>
                                        Order summary
                                    </h3>
                                    <button className={styles.client_order_summary_content_title_edit}>Edit</button>
                                </div>
                                <ul className={styles.client_order_summary_content_items_ul}>
                                    <li>
                                        <span className={styles.client_order_summary_content_item_icon}>
                                            <MyImage src='/images/icons/eztit_icon2.png' width={50} height={50} alt='product icon'/>

                                        </span>
                                        <span className={styles.client_order_summary_content_item_title}>
                                            EZTitles<br/><small>Ultimate</small>
                                        </span>
                                        <span className={styles.client_order_summary_content_item_payment}>
                                            Rent<br/><small>3 mth.</small>
                                        </span>
                                        <span className={styles.client_order_summary_content_item_qty}>
                                            x2
                                        </span>
                                        <span className={styles.client_order_summary_content_item_price}>
                                            €249.99<br/><small>incl. VAT</small>
                                        </span>

                                    </li>
                                    <li>
                                        <span className={styles.client_order_summary_content_item_icon}>
                                            <MyImage src='/images/icons/eztit_icon2.png' width={50} height={50} alt='product icon'/>

                                        </span>
                                        <span className={styles.client_order_summary_content_item_title}>
                                            EZTitles<br/><small>Essentials</small>
                                        </span>
                                        <span className={styles.client_order_summary_content_item_payment}>
                                            Purchase<br/><small>Lifetime</small>
                                        </span>
                                        <span className={styles.client_order_summary_content_item_qty}>
                                            x1
                                        </span>
                                        <span className={styles.client_order_summary_content_item_price}>
                                            €2 150.00<br/><small>incl. VAT</small>
                                        </span>

                                    </li>
                                    <li>
                                        <span className={styles.client_order_summary_content_item_icon}>
                                            <MyImage src='/images/icons/ezconvert_icon2.png' width={50} height={50} alt='product icon'/>

                                        </span>
                                        <span className={styles.client_order_summary_content_item_title}>
                                            EZConvert<br/><small>Professional</small>
                                        </span>
                                        <span className={styles.client_order_summary_content_item_payment}>
                                            Rent<br/><small>1 mth.</small>
                                        </span>
                                        <span className={styles.client_order_summary_content_item_qty}>
                                            x1
                                        </span>
                                        <span className={styles.client_order_summary_content_item_price}>
                                            €479.99<br/><small>incl. VAT</small>
                                        </span>

                                    </li>
                                    <li>
                                        <span className={styles.client_order_summary_content_item_icon}>
                                            <MyImage src='/images/icons/3dtitles_icon2.png' width={50} height={50} alt='product icon'/>

                                        </span>
                                        <span className={styles.client_order_summary_content_item_title}>
                                            3DTitles<br/><small>Full</small>
                                        </span>
                                        <span className={styles.client_order_summary_content_item_payment}>
                                            Purchase<br/><small>Lifetime</small>
                                        </span>
                                        <span className={styles.client_order_summary_content_item_qty}>
                                            x1
                                        </span>
                                        <span className={styles.client_order_summary_content_item_price}>
                                            €3 420.00<br/><small>incl. VAT</small>
                                        </span>

                                    </li>
                                </ul>
                                <hr className={styles.client_order_summary_content_separator}/>
                                <div className={styles.client_order_summary_content_total_wrapper}>
                                    <div className={styles.client_order_summary_content_total}>
                                        <div className={styles.client_order_summary_content_total_content}>
                                            <div className={styles.client_order_summary_content_total_content_inner}>
                                                <small>subtotal:</small>
                                                <small className={styles.client_order_summary_content_total_content_inner_price}>€5 819.00</small>

                                            </div>
                                            <div data-tip data-for='vat' className={styles.client_order_summary_content_total_content_inner}>
                                                <ReactTooltip id='vat' type='info'>
                                                    <span> If you are a VAT registered company. please provide VAT in step one to remove the VAT%</span>

                                                </ReactTooltip>
                                                <small style={{color:'#2e77bb', textDecoration:'underline', cursor:'pointer'}}>VAT 25%:</small>
                                                <small className={styles.client_order_summary_content_total_content_inner_price}>€1454.75</small>

                                            </div>
                                            <div className={styles.client_order_summary_content_total_content_inner} style={{fontWeight:'800'}}>
                                                <span>Total:</span>
                                                <span className={styles.client_order_summary_content_total_content_inner_price}>€7153.75</span>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            </div>

        </section>
        </>
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
