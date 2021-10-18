import utilStyles from "../styles/utils.module.css";
import styles from "./homeMain2.module.css";
import MyImage from "./myImage";
import Link from 'next/link';
import {useEffect, useState} from 'react';
import AppShowcase from "./appShowcase";
import {motion, useAnimation} from "framer-motion";
import * as React from "react";
import { useRef } from "react";

export default function HomeMain(props){
    const [selectedApp, setSelectedApp]=useState(3)
    useEffect(()=>{
        console.log(selectedApp)
    },[selectedApp])

    const easing =[.6,-0.05,0.01,0.99]

//animations
    const fadeInUp={
        initial:{
            bottom:80,
            opacity:0
        },
        animate:{
            bottom:-30,
            opacity:1,
            transition:{
                duration:0.6,
                ease: easing,
                staggerChildren:0.3

            }
        }
    }

    const fadeInUpMain={
        initial:{
            bottom:220,
            opacity:0
        },
        animate:{
            opacity:1,
            transition:{
                duration:0.3,

            }
        }
    }
    const fadeInUpSecondaryBottom={
        initial:{
            bottom:-80,
            opacity:0,
            right:-28,
        },
        animate:{

            opacity:0.95,

            transition:{
                duration:0.3,

            }
        }
    }
    const fadeInUpSecondaryRight={
        initial:{
            bottom:80,
            opacity:0,
            right:-320,
        },
        animate:{

            opacity:0.98,

            transition:{
                duration:0.1,

            }
        }
    }
    const logo_anim_outer={
        initial:{
            width:0,
            height:0,
        },
        animate:{
            width:200,
            height:200,
            transition:{
                duration:0.3,
                delay:1,
                staggerChildren:0.3
            }
        }
    }
    const logo_anim_outer1={
        initial:{
            width:0,
            height:0,
        },
        animate:{
            width:190,
            x:5,
            y:5,
            height:190,
            transition:{
                duration:0.5,
                delay:1.2,
                staggerChildren:0.5
            }
        }
    }
    const logo_anim_outer2={
        initial:{
            width:0,
            height:0,
        },
        animate:{
            width:180,
            x:5,
            y:5,
            height:180,
            transition:{
                duration:0.5,
                delay:1.5,
                staggerChildren:0.5
            }
        }
    }
    const logo_anim_outer_text={
        initial:{
            translateX:0,
            translateY:0,
           opacity:0,
           scale:0
        },
        animate:{
            opacity:1,
            translateX:59,
            translateY:36,
            scale:1.8,
            transition:{
                duration:0.3,
                delay:1.8,
            }
        }
    }

    const constraintsRefEz = useRef(null);
    const constraintsRefEc = useRef(null);
    const constraintsRef3d = useRef(null);
    const constraintsRefEp = useRef(null);
    const constraintsRefEzMain = useRef(null);



    return(
        <section>
            <div className={styles.container}>

               {/* <Link href="/animations"><a className={styles.scroll_down_mouse}></a></Link>*/}
                <div className={styles.product_main_wrapper}>
                    <motion.div ref={constraintsRefEzMain} variants={fadeInUp} initial='initial' animate='animate'
                                className={styles.product_main}>
                        <h1 className={styles.title}>EZTitles</h1>
                        <div className={styles.product_main_inner}>
                            <motion.div className={styles.stats}>
                                <motion.div ref={constraintsRefEz} variants={logo_anim_outer} initial='initial'
                                            animate='animate' className={styles.ez_logo}>
                                    <motion.div drag dragConstraints={constraintsRefEz} variants={logo_anim_outer1}
                                                initial='initial' animate='animate'
                                                className={styles.ez_logo_anim_inner_1}>
                                        <motion.div drag dragConstraints={constraintsRefEz} variants={logo_anim_outer2}
                                                    initial='initial' animate='animate'
                                                    className={styles.ez_logo_anim_inner_2}>
                                            <motion.div drag dragConstraints={constraintsRefEz}
                                                        variants={logo_anim_outer_text} initial='initial'
                                                        animate='animate'
                                                        className={styles.ez_logo_anim_inner_text}>Ez
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                            {/*icons end*/}

                            <h2>Start subtitling with some of the world’s most<br/>advanced professional subtitling
                                tools.
                            </h2>
                            <div className={styles.product_main_inner_try_button}><span className={styles.button_inner}>Free Trial</span></div>
                            <div className={styles.product_main_inner_buy_button}><span className={styles.button_inner}>Buy now</span></div>


                        </div>
                        <div className={styles.product_main_description}>
                            <p>EZTitles redefines what professional subtitling software can do! Word-class TV, Digital Cinema, DVD and Blu-ray subtitle preparation software. Powerful conversion tool for almost any known file format. Breakthrough module for Closed Captioning. Three groundbreaking products. Single software.</p>
                            <div className={styles.product_main_inner_buy_button} style={{backgroundColor:'#fefefe00', border:'2px solid #ffffff'}}><span className={styles.button_inner}>Learn More</span></div>
                        </div>


                    </motion.div>

                    <motion.div variants={fadeInUp} initial='initial' animate='animate' className={styles.product_main}>
                        <h1 className={styles.title}>EZConvert</h1>

                        <div className={styles.product_main_inner}>
                        {/*icons*/}

                        <motion.div className={styles.stats}>
                            <motion.div ref={constraintsRefEc} variants={logo_anim_outer} initial='initial'
                                        animate='animate' className={styles.ec_logo}>
                                <motion.div drag dragConstraints={constraintsRefEc} variants={logo_anim_outer1}
                                            initial='initial' animate='animate' className={styles.ec_logo_anim_inner_1}>
                                    <motion.div drag dragConstraints={constraintsRefEc} variants={logo_anim_outer2}
                                                initial='initial' animate='animate'
                                                className={styles.ec_logo_anim_inner_2}>
                                        <motion.span drag dragConstraints={constraintsRefEc}
                                                     variants={logo_anim_outer_text} initial='initial' animate='animate'
                                                     className={styles.ec_logo_anim_inner_text}>Ec
                                        </motion.span>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/*icons end*/}
                        <h2>Start subtitling with some of the world’s most<br/>advanced professional subtitling tools.
                        </h2>
                        <div className={styles.product_main_inner_try_button}><span className={styles.button_inner}>Free Trial</span></div>
                        <div className={styles.product_main_inner_buy_button} style={{backgroundColor:'#660720'}}><span className={styles.button_inner}>Buy now</span></div>


</div>
                        <div className={styles.product_main_description}>
                            <p>Fast and accurate subtitle conversion tool which supports a variety of subtitle formats and DVD, Blu-ray and NLE authoring systems. EZConvert does not bother with different output file format a client may require. It simply has them all!</p>
                            <div className={styles.product_main_inner_buy_button} style={{backgroundColor:'#fefefe00', border:'2px solid #ffffff'}}><span className={styles.button_inner}>Learn More</span></div>
                        </div>
                    </motion.div>
                </div>
                <div style={{height:160}}></div>
                <motion.div variants={fadeInUp} initial='initial' animate='animate' className={styles.product}>
                    <h1 className={styles.title} style={{textAlign:'left'}}>3DTitles</h1>

                    {/*icons*/}

                    <motion.div className={styles.stats}>
                        <motion.div ref={constraintsRef3d} variants={logo_anim_outer} initial='initial' animate='animate' className={styles.md_logo}>
                            <motion.div drag dragConstraints={constraintsRef3d} variants={logo_anim_outer1} initial='initial' animate='animate' className={styles.md_logo_anim_inner_1}>
                                <motion.div drag dragConstraints={constraintsRef3d} variants={logo_anim_outer2} initial='initial' animate='animate' className={styles.md_logo_anim_inner_2}>
                                    <motion.span drag dragConstraints={constraintsRef3d} variants={logo_anim_outer_text} initial='initial' animate='animate' className={styles.md_logo_anim_inner_text}>3D</motion.span>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <div style={{height:50}}></div>
                    {/*icons end*/}
                    <h2>Start subtitling with some of the world’s most<br/>advanced professional subtitling tools.</h2>


                </motion.div>
                <div style={{height:160}}></div>
                <motion.div variants={fadeInUp} initial='initial' animate='animate' className={styles.product}>
                    <h1 className={styles.title} style={{textAlign:'right'}}>Plug-ins</h1>

                    {/*icons*/}

                    <motion.div style={{float:'right'}} className={styles.stats}>
                        <motion.div ref={constraintsRefEp} variants={logo_anim_outer} initial='initial' animate='animate' className={styles.ep_logo}>
                            <motion.div drag dragConstraints={constraintsRefEp} variants={logo_anim_outer1} initial='initial' animate='animate' className={styles.ep_logo_anim_inner_1}>
                                <motion.div drag dragConstraints={constraintsRefEp} variants={logo_anim_outer2} initial='initial' animate='animate' className={styles.ep_logo_anim_inner_2}>
                                    <motion.span drag dragConstraints={constraintsRefEp} variants={logo_anim_outer_text} initial='initial' animate='animate' className={styles.ep_logo_anim_inner_text}>Ep</motion.span>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <div style={{height:50}}></div>
                    {/*icons end*/}
                    <h2>Start subtitling with some of the world’s most<br/>advanced professional subtitling tools.</h2>


                </motion.div>

            </div>
            <div style={{height:800}}></div>
        </section>
    )
}



