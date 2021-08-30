import {useState, useEffect} from "react";
import styles from './navbar.module.css'
import Link from 'next/link'
import utilStyles from "../styles/utils.module.css";
import MyImage from "./myImage";
import cn from 'classnames';
import {useRouter} from 'next/router'
import HeaderMenuButton from "./HeaderMenuButton";
import Cookies from 'universal-cookie';

export default function Navbar(){
    const router = useRouter();
    const [scroll, setScroll]=useState(false)
    const sticky=80
    const cookies=new Cookies()
    const isCart=cookies.get('cart')
    const isUser=cookies.get('user')
    const catchScroll=(e)=>{
        if(window.scrollY > sticky) {
            setScroll(true)

        }else if(window.scrollY <= sticky){
            setScroll(false)
        }
    }

    useEffect(()=>{
        window.onscroll=(function(e){catchScroll(e)})
    },[])

    const handleCartClick=(e)=>{
        e.preventDefault()
        if(!isCart){
            router.push('/buy/products')

        } else if(!isUser){
            router.push('/buy/setup-user')

        } else if(isCart){
            router.push('/buy/checkout')

        }else{
            router.push('/buy/products')
        }



    }



    return(
        <nav className={cn({
            [styles.navbar_wrapper]: scroll === false,
            [styles.navbar_wrapper_scroll]: scroll === true
        })} role='navigation'>
            <div className={styles.navbar_inner}>
                <div className={styles.nav_sec_left}>
                    <ul className={styles.nav_ul}>
                        <li className={cn({
                            [styles.nav_li]: scroll === false,
                            [styles.nav_li_scroll]: scroll === true
                        })}><Link href='/subtitle'><a>Subtitle</a></Link></li>
                        <li className={cn({
                            [styles.nav_li]: scroll === false,
                            [styles.nav_li_scroll]: scroll === true
                        })}><Link href='/convert'><a>Convert</a></Link></li>
                        <li className={cn({
                            [styles.nav_li]: scroll === false,
                            [styles.nav_li_scroll]: scroll === true
                        })}><Link href='/Burn-in'><a>Burn-in</a></Link></li>
                        <li className={cn({
                            [styles.nav_li]: scroll === false,
                            [styles.nav_li_scroll]: scroll === true
                        })}><Link href='/go3d'><a>Go 3D</a></Link></li>
                    </ul>
                </div>
                <div className={styles.nav_sec_center}>
                    <div className={cn({
                        [router.pathname!=='/'?styles.nav_icon_wrapper:styles.nav_icon_wrapper_home]: scroll === false,
                        [styles.nav_icon_wrapper_scroll]: scroll === true
                    })}>
                    <Link href={router.pathname!=='/'?'/':'/all'}><a><MyImage
                        priority={true}
                        src='/images/ezlogo.png'
                        height={50}
                        width={100}
                        alt='EZTitles Logo'
                    /></a></Link>
                    </div>

                </div>
                <div className={styles.nav_sec_right}>
                    <ul className={styles.nav_ul}>
                        <li className={cn({
                            [styles.nav_li]: scroll === false,
                            [styles.nav_li_scroll]: scroll === true
                        })}><Link href='/user-login'><a>Sign in</a></Link></li>
                        <li className={cn({
                            [styles.nav_li]: scroll === false,
                            [styles.nav_li_scroll]: scroll === true
                        })}><Link href='/buy/products'><a>Store</a></Link></li>
                        <li className={cn({
                            [styles.nav_li]: scroll === false,
                            [styles.nav_li_scroll]: scroll === true
                        })}><a className={styles.cart_wrapper} onClick={handleCartClick}>{isCart && <div
                            className={styles.cart_items}>
                            <div className={styles.cart_items_inner}></div>
                            <div className={styles.cart_items_inner_number}>{isCart.cart.length}</div>
                        </div>}<svg className={styles.nav_cart_svg} xmlns="http://www.w3.org/2000/svg" height="29px" viewBox="0 0 24 24" width="36px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg></a></li>
                        <li className={cn({
                            [styles.nav_li]: scroll === false,
                            [styles.nav_li_scroll]: scroll === true
                        })}><svg className={styles.nav_search_svg} xmlns="http://www.w3.org/2000/svg" height="29px" viewBox="0 0 24 24" width="36px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></li>

                        {/*<li className={cn({
                           [styles.nav_li]: scroll === false,
                           [styles.nav_li_scroll]: scroll === true
                       })}><HeaderMenuButton/></li>*/}
                    </ul>

                </div>

            </div>
        </nav>
    )
}