import '../styles/global.css'
import Navbar2 from "../components/navbar2";
import Footer from "../components/footer";
import { Provider } from 'react-redux'
import { useStore } from '../store'
import {motion, useAnimation, AnimatePresence} from "framer-motion";
import React, {useCallback, useEffect, useState} from "react";
import Link from 'next/link'

import { useRouter } from 'next/router'
import Modal from "../components/Modal";
import { IdProvider } from '@radix-ui/react-id';
import NavbarSmall from "../components/navbarSmall";
import Head from "next/head";



export default function App({Component, pageProps}){
    const [showModal, setModal]=useState(false)
    const router = useRouter()
    console.log(Component.name, pageProps, router.pathname,'shit')
    const store = useStore(pageProps.initialReduxState)

    /*get screen size for correct navbar*/
    const useMediaQuery = (width) => {
        const [targetReached, setTargetReached] = useState(false);

        const updateTarget = useCallback((e) => {
            if (e.matches) {
                setTargetReached(true);
            } else {
                setTargetReached(false);
            }
        }, []);

        useEffect(() => {
            const media = window.matchMedia(`(max-width: ${width}px)`);
            media.addListener(updateTarget);

            // Check on mount (callback is not called until a change occurs)
            if (media.matches) {
                setTargetReached(true);
            }

            return () => media.removeListener(updateTarget);
        }, []);

        return targetReached;
    };


    const isBreakpoint = useMediaQuery(1111)
    return (
        <Provider store={store}>
            <IdProvider>
                <Head>
                    <meta name="google-site-verification" content="ysxVMioFPf2YJs3BRu3gefvPmShIoplEtnSp3FJJbAg" />

                </Head>
                <AnimatePresence exitBeforeEnter onExitComplete={()=>{setModal(false)}}>
                    <main><Component setModal={setModal} location={router.pathname} key={router.pathname} {...pageProps} /></main>

                </AnimatePresence>
                {isBreakpoint  ?( <NavbarSmall/>):(<Navbar2/>)}
                <Footer/>
                {/*{(router.pathname!='/subtitle' && router.pathname!='/checkout2' && router.pathname!='/checkout3' )&&<SubtitleButton/>}*/}
                <Modal showModal={showModal} setModal={setModal}/>
            </IdProvider>
    </Provider>
    )
}


function SubtitleButton(){
    const [hovered, setHovered]=useState({is:false, xPos:0, yPos:0})
    const style={
        width:160,
        position:'fixed',
        bottom:'2%',
        right:'1%',
        backgroundColor:'#699BD2',
        borderRadius:'8px',
        color:!hovered.is?'#ffffff':'#0A131F',
        display:'flex',
        padding:'8px 3px 8px 3px',
        justifyItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        cursor:'pointer',
        userSelect:'none',
        overflow:'hidden',
        transition: '0.5s ease-in-out 0.1s',
        zIndex:5

    }
    const fillStyle={
        position:'absolute',
        borderRadius:998,
        width:300,
        height: 300,
        backgroundColor:'#fefefe',
        left:hovered.xPos,
        top:-hovered.yPos,
        userSelect: 'none',
        pointerEvents: 'none'
    }

    const controls = useAnimation();
    useEffect(() => {
        if (hovered.is) {
            controls.start("hover");

        }else{
            controls.start("rest");

        }
    }, [controls, hovered.is]);
    const fill={
        rest:{scale:0, transition:{duration:0.6}},
        hover:{scale:2.5, transition:{duration:0.5}}
    }

    return(
<Link href='/subtitle2'>
        <div onMouseEnter={(e)=>{setHovered({is:true, xPos: e.clientX-e.target.offsetLeft, yPos: e.clientY-e.target.offsetTop})}} onMouseLeave={(e)=>{setHovered({is:false, xPos: e.clientX-e.target.offsetLeft, yPos: e.clientY-e.target.offsetTop})}}  style={style}>

            <motion.div animate={controls} variants={fill} initial='rest' whileHover='hover' style={fillStyle}></motion.div>

            <span style={{position:'relative',zIndex:'2',height:'min-content', userSelect:'none', pointerEvents:'none'}}>
                Start Subtitling

            </span>
        </div>
</Link>
    )

}