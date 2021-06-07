import {useState, useEffect} from "react";
import styles from './navbar.module.css'
import Link from 'next/link'
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import cn from 'classnames';
export default function Navbar(){
    const [scroll, setScroll]=useState(false)
    const sticky=80
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
                        [styles.nav_icon_wrapper]: scroll === false,
                        [styles.nav_icon_wrapper_scroll]: scroll === true
                    })}>
                    <Link href='/'><a><Image
                        priority
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
                        })}><Link href='/service-portal'><a>Service Portal</a></Link></li>
                        <li className={cn({
                            [styles.nav_li]: scroll === false,
                            [styles.nav_li_scroll]: scroll === true
                        })}><Link href='/Buy Now'><a>Buy Now</a></Link></li>
                        <li className={cn({
                            [styles.nav_li]: scroll === false,
                            [styles.nav_li_scroll]: scroll === true
                        })}><svg className={styles.nav_search_svg} xmlns="http://www.w3.org/2000/svg" height="29px" viewBox="0 0 24 24" width="36px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></li>
                    </ul>

                </div>

            </div>
        </nav>
    )
}