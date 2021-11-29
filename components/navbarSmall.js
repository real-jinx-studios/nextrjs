import {useState, useEffect, Ref, useRef} from "react";
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




    //animations
    const score={
        rest:{width:0, transition:{duration:0.3}},
        enter:{width:60, transition:{duration:0.3}},
        exit:{width:-60, transition:{duration:0.3}},
    }
    const nav_btn=useRef()
    const primary_nav=useRef()

    const handleBorgerClick=(e)=>{
        const vis=primary_nav.current.getAttribute('data-visible')

        if(vis==='false'){
            primary_nav.current.setAttribute('data-visible', 'true')
            nav_btn.current.setAttribute('aria-expanded', 'true')
        }else{
            primary_nav.current.setAttribute('data-visible', 'false')
            nav_btn.current.setAttribute('aria-expanded', 'false')
        }

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
                <div className={`${styles.nav_sec_right}`}>
                   {/*<Hamburger scroll={scroll}/>*/}
                    <button onClick={handleBorgerClick} ref={nav_btn} className={styles.nav_button} aria-controls='primary-navigation' aria-expanded='false'><span className='sr-only'>Menu</span></button>
                    <div  ref={primary_nav} data-visible='false' className={styles.nav_side}>
                        <ul id='primary-navigation'>
                            <li>Subtitle</li>
                            <li>Convert</li>
                            <li>3DTitles</li>
                            <li>Subtitling Assistant</li>
                            <li><br/></li>
                            <li>Services Portal</li>
                            <li>Search</li>
                            <li>Whatever</li>
                        </ul>

                    </div>


                </div>

            </div>
        </nav>
    )
}