import {useState, useEffect} from "react";
import styles from './navbarSmall.module.css'
import Link from 'next/link'
import MyImage from "./myImage";
import cn from 'classnames';
import {useRouter} from 'next/router'
import Cookies from 'universal-cookie';
import Hamburger from "./hamburger";



export default function NavbarSmall(){
    const router = useRouter();
    const [scroll, setScroll]=useState(false)
    const sticky=80
    const cookies=new Cookies()
    const isCart=cookies.get('cart')
    const isUser=cookies.get('user')
    const catchScroll=()=>{
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


    //animations
    const score={
        rest:{width:0, transition:{duration:0.3}},
        enter:{width:60, transition:{duration:0.3}},
        exit:{width:-60, transition:{duration:0.3}},
    }



    return(
        <nav className={cn({
            [styles.navbar_wrapper]: scroll === false,
            [styles.navbar_wrapper_scroll]: scroll === true
        })} role='navigation'>
            <div className={styles.navbar_inner}>

                <div className={styles.nav_sec_left}>
                    <div className={cn({
                        [router.pathname!=='/'?styles.nav_icon_wrapper:styles.nav_icon_wrapper_home]: scroll === false,
                        [styles.nav_icon_wrapper_scroll]: scroll === true
                    })}>
                        <Link href={router.pathname!=='/'?'/':'/buy/products'}><a><MyImage
                            priority={true}
                            src='/images/ezlogo.png'
                            height={50}
                            width={100}
                            alt='EZTitles Logo'
                        /></a></Link>
                    </div>

                </div>
                <div className={styles.nav_sec_right}>
                   <Hamburger scroll={scroll}/>


                </div>

            </div>
        </nav>
    )
}