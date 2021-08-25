import {useRouter} from 'next/router'
import styles from '../../../styles/profile.module.css'
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import Cookies from "universal-cookie";
import {getClient} from "../../../lib/swr-hooks";
export default function UserProfile(){
    const [menu, setMenu]=useState('Password')
    //const [userInfo, setUserInfo]=useState({})
    const router=useRouter();
    let userInfo={}
    const time=router.query
    const handleClick=(e)=>{
        setMenu(e.target.innerHTML)

    }
    const handleClickTokens=(e) => {
        //setMenu(e.target.innerHTML)


    }
    const handleCheck=(e)=>{
        const formUserInfo={
            id: userInfo.id,
            first_name: e.target[0],
            last_name: e.target[0],
            email: userInfo.email,
            street_address: userInfo.id,

        }
        if(JSON.stringify(userInfo) === JSON.stringify(formUserInfo)){

        }
    }

    const cookies = new Cookies();
    const logged = cookies.get('logged')
    const { entries, isLoading } = getClient(logged?logged.email:'undefined')
    let abbr='00'
    if(!isLoading){
        userInfo=(entries[0])
        abbr=userInfo.first_name[0].toUpperCase()+''+userInfo.last_name[0].toUpperCase()
    }


    const handleSubmit=async (e) => {
        e.preventDefault()

        try {
            const res = await fetch('/api/auth/change-pass', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email:userInfo.email,
                    old_pass: e.target[0].value,
                    new_pass: e.target[1].value
                }),
            })
            const json = await res.json()
            if (!res.ok) throw Error(json.message)

        } catch (e) {
            throw Error(e.message)
        }


    }
    const handleSubmitProfile=async (e) => {
       /* e.preventDefault()
        const logged = cookies.get('logged')

        console.log(logged.email, e.target[0].value)
        try {
            const res = await fetch('/api/auth/change-pass', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email:logged.email,
                    old_pass: e.target[0].value,
                    new_pass: e.target[1].value
                }),
            })
            const json = await res.json()
            if (!res.ok) throw Error(json.message)

        } catch (e) {
            throw Error(e.message)
        }*/


    }
    return(
        <motion.div exit={{opacity:0}} initial='initial' animate='animate'>
            <div className={styles.main_wrapper}>
                <div className={styles.main_inner}>
                    <div className={styles.profile_wrapper}>
                        <div className={styles.profile_nav}>
                            <div className={styles.icon_wrapper}>
                                <div className={`${styles.icon} ${styles.color_change}`}>
                                    <div className={styles.initials}>
                                        {abbr}


                                    </div>

                                </div>
                                <div className={styles.name}>


                                </div>

                            </div>
                            <ul>
                                <li onClick={handleClick}>License Manager</li>
                                <li onClick={handleClick}>Token Management</li>
                                <li onClick={handleClick}>Profile Info</li>
                                <li onClick={handleClick}>Password</li>
                            </ul>

                        </div>
                        <div className={styles.profile_main}>
                            {menu=='Token Management' &&
                                <div className={styles.tm_outer}>
                                    <div className={styles.tm_nav}>
                                        <div className={styles.icon_wrapper} style={{"paddingTop":"0","marginBottom":100}}>
                                            <div className={`${styles.submenu_title}`}>
                                                <h2 style={{"color":"#19191988"}}>Tokens and Wallets</h2>

                                            </div>


                                        </div>
                                            <ul>
                                                <li onClick={handleClickTokens}>Tokens</li>
                                                <li onClick={handleClickTokens}>Wallets</li>
                                                <li onClick={handleClickTokens}>Activity Reports</li>
                                            </ul>


                                    </div>

                                    <div className={styles.tm_content}>

                                       content

                                    </div>
                                </div>

                            }

                            {menu=='Profile Info' &&
                            <form style={{"height":"100%"}} onSubmit={handleSubmitProfile}>
                                <div className={styles.menu_outer}>
                                    <h2 style={{"color":"#19191988"}}>Personal Info</h2>
                                    <div className={styles.menu_wrapper_left}>
                                        <label className={`${styles.input_wrapper} ${styles.one}`}>
                                            <input className={styles.input} type="text" defaultValue={userInfo.first_name} required/>
                                            <span className={styles.placeholder}>First name</span>

                                        </label>
                                        <label className={`${styles.input_wrapper} ${styles.one}`}>
                                            <input className={styles.input} type="text" defaultValue={userInfo.last_name} required/>
                                            <span className={styles.placeholder}>Last name</span>

                                        </label>
                                        <label className={`${styles.input_wrapper} ${styles.one} `}>
                                            <input className={styles.input} type="text" defaultValue={userInfo.email} required/>
                                            <span className={styles.placeholder}>Email</span>

                                        </label>
                                        <label className={`${styles.input_wrapper} ${styles.one} `}>
                                            <input className={styles.input} type="text" defaultValue={userInfo.company_name} required/>
                                            <span className={styles.placeholder}>Company name</span>

                                        </label>
                                        <label className={`${styles.input_wrapper} ${styles.one} `}>
                                            <input className={styles.input} type="text" defaultValue={userInfo.vat} required/>
                                            <span className={styles.placeholder}>VAT</span>

                                        </label>
                                        <label className={`${styles.input_wrapper} ${styles.one} `}>
                                            <input className={styles.input} type="text" defaultValue={userInfo.type} required/>
                                            <span className={styles.placeholder}>Customer type</span>

                                        </label>

                                    </div>


                                    <div className={styles.menu_wrapper_right}>
                                        <label className={`${styles.input_wrapper} ${styles.one}`}>
                                            <input className={styles.input} type="text" defaultValue={userInfo.country} required/>
                                            <span className={styles.placeholder}>Country</span>

                                        </label>
                                        <label className={`${styles.input_wrapper} ${styles.one}`}>
                                            <input className={styles.input} type="text" defaultValue={userInfo.city} required/>
                                            <span className={styles.placeholder}>City</span>

                                        </label>
                                        <label className={`${styles.input_wrapper} ${styles.one} `}>
                                            <input className={styles.input} type="text" defaultValue={userInfo.postcode} required/>
                                            <span className={styles.placeholder}>Postcode</span>

                                        </label>
                                        <label className={`${styles.input_wrapper} ${styles.one} `}>
                                            <input className={styles.input} type="text" defaultValue={userInfo.street_address} required/>
                                            <span className={styles.placeholder}>Street Address 1</span>

                                        </label>
                                        <label className={`${styles.input_wrapper} ${styles.one} `}>
                                            <input className={styles.input} type="text" defaultValue={userInfo.street_address_2} required/>
                                            <span className={styles.placeholder}>Street Address 2</span>

                                        </label>
                                        <label className={`${styles.input_wrapper} ${styles.one} `}>
                                            <input className={styles.input} type="text" defaultValue={userInfo.first_name} required/>
                                            <span className={styles.placeholder}>Phone number</span>

                                        </label>

                                    </div>
                                </div>
                            </form>

                            }

                            {menu=='Password' &&
                            <form style={{"height":"100%"}} onSubmit={handleSubmit}>
                                <div className={styles.password_outer}>
                                    <h2 style={{"color":"#19191988"}}>Change Password</h2>

                                    <div className={styles.password_wrapper}>
                                        {/*<label className={styles.input_wrapper}>
                                    <input className={styles.input} type="password" required/>
                                    <span className={styles.placeholder}>Old Pass</span>

                                </label>*/}
                                        <label className={`${styles.input_wrapper} ${styles.one}`}>
                                            <input className={styles.input} type="password" required/>
                                            <span className={styles.placeholder}>Old Pass</span>

                                        </label>
                                        <label className={`${styles.input_wrapper} ${styles.one}`}>
                                            <input className={styles.input} type="password" required/>
                                            <span className={styles.placeholder}>New Pass</span>

                                        </label>
                                        <label className={`${styles.input_wrapper} ${styles.one}`}>
                                            <input className={styles.input} type="password" required/>
                                            <span className={styles.placeholder}>Repeat Pass</span>

                                        </label>
                                        {/* <label className={`${styles.input_wrapper} ${styles.two}`}>
                                    <input className={styles.input} type="text" required/>
                                    <span className={styles.placeholder}>Repeat Pass</span>

                                </label>*/}
                                        {/*  <label className={`${styles.input_wrapper} ${styles.three}`}>
                                    <input className={styles.input} type="button" required placeholder="&nbsp;"/>
                                    <span className={styles.placeholder}>Repeat Pass</span>
                                    <span className={styles.border}></span>

                                </label>*/}
                                        <label className={`${styles.input_wrapper} ${styles.one}`}>
                                            <button type="submit">SAVE</button>
                                        </label>

                                    </div>
                                </div>
                            </form>

                            }

                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    )
}

