import styles from '../styles/subtitle.module.css'
import MyImage from "../components/myImage";
import Link from 'next/link'
import ReactTooltip from 'react-tooltip';
import FileFormatTabs from "../components/fileFormatTabs";
import {AnimatePresence, motion, useAnimation, useCycle, useViewportScroll, useTransform} from "framer-motion"
import {stagger, fadeInUp, easing} from "../components/animations";
import React, {useEffect, useRef, useState} from "react";
import { useInView } from "react-intersection-observer";
import AnimateOnScroll from "../components/animateOnScroll";
import AnimateDirectionSlide from "../components/animateDirectionSlide";
import {useSpring} from "react-spring";
import {useRouter} from "next/router";
import ScrollDownPrompt from "../components/scrollDownPrompt";


export default function Subtitle(){
    /*state management is below*/
    const [currentNav, setCurrentNav]=useState('none')
    const [isVideoOpen, setIsVideoOpen]=useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isRentDropdownOpen, setIsRentDropdownOpen] = useState(false);
    const [isInstallmentDropdownOpen, setIsInstallmentDropdownOpen] = useState(false);
    const [isPaymentSelected, setIsPaymentSelected] = useState('one-time');
    const [isStreamingServices, setIsStreamingServices] = useState(false);
    const [isClosedCaptions, setIsClosedCaptions] = useState(false);
    const [isAsian, setIsAsian] = useState(false);
    const [shotChange, setShotChange] = useState(0);

    /*viewport scroll handlers*/
    const { scrollYProgress } = useViewportScroll()
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

    /*variable*/
    const shotChangesArray=["/images/shots/01-shot-detection-img.png","/images/shots/02-proper-timeline.png","/images/shots/03-offer-img-2.png","/images/shots/04-split-text-img.png","/images/shots/05-comprehensive-check-img.png","/images/shots/06-proofing-tools-img.png","/images/shots/07-macros-img.png"]

    /*scrolling triggers below for components in view*/
    const [ref, inView] = useInView();
    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();
    const [ref4, inView4] = useInView();
    //shot change detection in views
    const [shotRef0, shotRefInView0] = useInView({threshold:0.6});
    const [shotRef1, shotRefInView1] = useInView({threshold:0.6});
    const [shotRef2, shotRefInView2] = useInView({threshold:0.6});
    const [shotRef3, shotRefInView3] = useInView({threshold:0.6});
    const [shotRef4, shotRefInView4] = useInView({threshold:0.6});
    const [shotRef5, shotRefInView5] = useInView();
    const [shotRef6, shotRefInView6] = useInView();
    const [shotRef7, shotRefInView7] = useInView();
    //shot change handler
    useEffect(()=>{

        if(shotRefInView0){
            setShotChange(0)
        }else if(shotRefInView1){
            setShotChange(1)
        }else if(shotRefInView2){
            setShotChange(2)
        }else if(shotRefInView3){
            setShotChange(3)
        }else if(shotRefInView4){
            setShotChange(4)
        }else if(shotRefInView5){
            setShotChange(0)
        }else if(shotRefInView6){
            setShotChange(6)
        }else if(shotRefInView7){
            setShotChange(7)
        }
    },[shotRefInView0, shotRefInView1, shotRefInView2, shotRefInView3, shotRefInView4, shotRefInView5, shotRefInView6, shotRefInView7])


    const videoRef=useRef();
    const router = useRouter()
    useEffect(()=>{
        const nav=router.asPath.split('#')

        if(inView1){
            setCurrentNav('compatibility')
        }else if(inView2){
            setCurrentNav('formats')
        }else if(inView3){
            setCurrentNav('features')
        }else if(inView4){
            setCurrentNav('editions')
        }else if(inView){
            setCurrentNav('none')
        }/*else{
            setCurrentNav('none')
        }*/
    },[inView1, inView2, inView3, inView4])

    /*event handlers like clicks and such below*/
    const handleVideoPlay=()=>{
        if (videoRef.current.paused)
            videoRef.current.play();
        else
            videoRef.current.pause();

    }
    const handlePaymentSelect=(e)=>{
        setIsPaymentSelected(e)

    }
    const handleStreamingServices=()=>{
        setIsStreamingServices(!isStreamingServices)

    }
    const handleClosedCaptions=()=>{
        setIsClosedCaptions(!isClosedCaptions)

    }
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)
    const toggleRentDropdown = () => setIsRentDropdownOpen(!isRentDropdownOpen)
    const toggleInstallmentDropdown = () => setIsInstallmentDropdownOpen(!isInstallmentDropdownOpen)
    const extendAsian = () => setIsAsian(!isAsian)

    /*animation setup is below*/
    const dropdownAnimVariantOption1={
        initial:{
            opacity:0,
            y:-100
        },
        animate:{
            opacity:1,
            y:2,
            transition:{




            }
        },
        exit:{
            opacity:0,
            y:-50,
            transition:{
                duration:0.2
            }
        }
    }
    const dropdownAnimVariantOption2={
        initial:{
            opacity:0,
            y:-150
        },
        animate:{
            opacity:1,
            y:3.5,
            transition:{


            }
        },
        exit:{
            opacity:0,
            y:-100,
            transition:{
                duration:0.2
            }
        }
    }
    const dropdownAnimVariantRentOption={
        initial:{
            opacity:0,

        },
        animate:{
            opacity:1,
            y:80,
            transition:{
                staggerChildren:0.11


            }
        },
        exit:{

            transition:{
                staggerChildren:0.06
            }
        }
    }
    const dropdownAnimVariantRentItem={
        initial:{
            opacity:0,
            x:-150
        },
        animate:{
            opacity:1,
            x:0
        },
        exit:{
            opacity:0,
            x:150,
            transition:{
                duration:0.2
            }
        }
    }
    const dropdownAnimVariantInstallmentOption={
        initial:{
            opacity:0,

        },
        animate:{
            opacity:1,
            y:48.5,
            transition:{
                staggerChildren:0.11


            }
        },
        exit:{

            transition:{
                staggerChildren:0.06
            }
        }
    }
    const paymentRentInstallmentVariant={
        initial:{
            opacity:0,
            y:-98
        },
        animate:{
            opacity:1,
            y:0,
            transition:{


            }
        },
        exit:{
            opacity:0,
            y:-50,
            transition:{
                duration:0.2
            }
        }
    }
    const cardOverlayVariant={
        initial:{
            opacity:0
        },
        animate:{
            opacity:1,
        },
        exit:{
            opacity:0
        }
    }
    const showOverlaySvgVariant={
        initial:{
            rotate:'0deg',
            fill:'#ffffff'
        },
        animate:{
            originX:'50%',
            originY:'50%',
            rotate:'45deg',
            fill:'#D92B3A'
        },
        exit:{
            rotate:'0deg',
            fill:'#ffffff'
        }
    }
    const overlayTextVariant={
        initial:{
            opacity:0,
            y:-60
        },
        animate:{
            opacity:1,
            y:'16%',
            transition:{
                delay:0.3
            }
        }
    }
    const pixelVariant={
        initial:{
            opacity:0,
            scale:1.5
        },
        animate:{
            opacity:1,
            scale:1,
            transition:{
                duration:0.3,
            }
        }
    }

    const asianVariant={
        animate:{y:0,height:500},
        initial:{
            y:420,

            height:1,
            transition:{
                type:'tween',
                duration:0.2,
                ease:[0.6,-0.05,0.01,0.99]
            }
        },
        exit:{y:0, height:500},
        buttonMainAnimate:{
            width:40,
            height:40,
            backgroundColor:'#D92B3A'
        },
        buttonMainInitial:{
            width:126.167,
            height:40.0667,
        },
        buttonTextInitial:{
            opacity:1
        },
        buttonTextAnimate:{
            opacity:0,
            width:0,
            letterSpacing:0,
            fontSize:0
        },
        buttonIconInitial:{
            rotate:'0deg'
        },
        buttonIconAnimate:{
            rotateZ:'-45deg',
            x:6
        }
    }
    const shotChangeVariant={
        initial:{
            opacity:0,
            y:-200
        },
        animate:{
            opacity:1,
            y:0
        },
        exit:{
            opacity:0,
            y:200
        }
    }

    /*jsx generated divs*/


    /*let pixel_grid = [];
    for (var q = 0; q < 28; q++){
        for (var i = 0; i < 53; i++) {

            pixel_grid.push(<motion.div variants={pixelVariant} initial='initial' animate='animate' className={styles.resolution_pixel_wrapper} style={{top: 25 * q + 'px',left: 25 * i + 'px'}}>
                <div className={styles.resolution_pixel_inner}>
                    <div className={styles.resolution_pixel_core}>

                    </div>
                </div>
            </motion.div>);
        }
    }*/







    return (
        <motion.div exit={{opacity:0}} initial='initial' animate='animate'>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.08}} className={styles.video_background}>
                <video style={{"width":"100%"}} autoPlay loop>

                    <source src="/videos/hero-eztitles.mp4"/>
                </video>
            </motion.div>
        <div className={styles.main_wrapper} ref={ref}>

            {/*eztitles purchase menu*/}

            <AnimatePresence exitBeforeEnter>
                <div className={styles.product_purchase_info}>
                    <motion.div variants={stagger} className={styles.main_inner}>
                        <div className={styles.caption_wrapper}>
                            <motion.p variants={fadeInUp} className={styles.caption}>The world’s best professional<br/>subtitling and captioning software</motion.p>
                        </div>




                    </motion.div>
                    <div className={styles.purchase_info_title}>
                        <div style={{height:132.4}}>
                            <h1 className={styles.title_1}>EZTitles</h1>
                            <select className={styles.version_dropdown_select}>
                                <option value='essentials'>Essentials</option>
                                <option value='standard'>Standard</option>
                                <option value='ultimate'>Ultimate</option>
                            </select>
                            <div className={styles.version_dropdown} onClick={toggleDropdown}>
                                <h2>Essentials</h2>
                                {!isDropdownOpen && (<motion.svg
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    className={styles.version_dropdown_svg}
                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                 height="36px" viewBox="0 0 24 24" width="36px"
                                                                 fill="#FFFFFF">
                                    <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/>
                                    <path
                                        d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"/>
                                </motion.svg>)}
                                {isDropdownOpen && (<motion.svg
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    className={styles.version_dropdown_svg}
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="36px" viewBox="0 0 24 24" width="36px"
                                    fill="#FFFFFF">
                                    <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0V0z" fill="none"/>
                                    <path xmlns="http://www.w3.org/2000/svg" d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
                                </motion.svg>)}
                            </div>
                            <AnimatePresence exitBeforeEnter>
                            {isDropdownOpen && (<>
                                <motion.div
                                    variants={dropdownAnimVariantOption1}
                                    initial='initial'
                                    animate='animate'
                                    exit='exit'
                                key='option1'
                                className={styles.version_dropdown} onClick={toggleDropdown}>
                                <h2>Standard</h2>
                            </motion.div>
                                <motion.div
                                    variants={dropdownAnimVariantOption2}
                                    initial='initial'
                                    animate='animate'
                                    exit='exit'
                                key='option2'
                                className={styles.version_dropdown} onClick={toggleDropdown}>
                                <h2>Ultimate</h2>
                                </motion.div>
                                </>
                          )}
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className={styles.product_versions}>
                        <p className={styles.product_versions_label}>Payment:</p>

                        <div className={styles.select}>
                            <div className={styles.purchase_options}>
                                <div className={styles.product_version} key='one-time'
                                     onClick={() => handlePaymentSelect('one-time')}>
                                    <div className={styles.product_label_wrapper_off}>
                                        one-time

                                    </div>

                                </div>


                                <div className={styles.product_version} key='rent'
                                     onClick={() => handlePaymentSelect('rent')}>
                                    <div className={styles.product_label_wrapper_off}>
                                        rent

                                    </div>

                                </div>

                                <div className={styles.product_version} key='installment'
                                     onClick={() => handlePaymentSelect('installment')}>
                                    <div className={styles.product_label_wrapper_off}>
                                        installments

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className={styles.product_version}>
                            <div className={styles.product_label_wrapper_off}>

                            </div>

                        </div>

                    </div>
                    <AnimatePresence exitBeforeEnter>
                        {isPaymentSelected == 'rent' && <motion.div
                            variants={paymentRentInstallmentVariant}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            key='rent-payment'
                            className={styles.rent}>
                            <p className={styles.product_versions_label}>Months:</p>
                            <div className={styles.select}>
                                <select style={{display:"none"}} name="size" className="o-caption o-caption--bold js-size-select">

                                    <option value="6" selected="selected">1</option>

                                    <option value="6.5">2</option>

                                    <option value="7">3</option>

                                    <option value="7.5">4</option>

                                    <option value="8">5</option>

                                    <option value="8.5">6</option>

                                    <option value="9">7</option>

                                    <option value="9.5">8</option>


                                </select>
                                <div className={styles.rent_dropdown} onClick={toggleRentDropdown}>
                                    <p>1 MONTH</p>
                                    {!isRentDropdownOpen && (<motion.svg
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        className={styles.rent_dropdown_svg}
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="36px" viewBox="0 0 24 24" width="36px"
                                        fill="#FFFFFF">
                                        <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/>
                                        <path
                                            d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"/>
                                    </motion.svg>)}
                                    {isRentDropdownOpen && (<motion.svg
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        className={styles.rent_dropdown_svg}
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="36px" viewBox="0 0 24 24" width="36px"
                                        fill="#FFFFFF">
                                        <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0V0z" fill="none"/>
                                        <path xmlns="http://www.w3.org/2000/svg" d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
                                    </motion.svg>)}
                                </div>
                                <AnimatePresence exitBeforeEnter>
                                    {isRentDropdownOpen && (
                                        <motion.div
                                            variants={dropdownAnimVariantRentOption}
                                            initial='initial'
                                            animate='animate'
                                            exit='exit'
                                            key='rent'
                                        >
                                            <motion.div
                                                variants={dropdownAnimVariantRentItem}
                                                key='option1'
                                                className={styles.rent_dropdown_item} onClick={toggleRentDropdown}>
                                                <p>2 MONTHS</p>
                                            </motion.div>
                                            <motion.div
                                                variants={dropdownAnimVariantRentItem}
                                                key='option2'
                                                className={styles.rent_dropdown_item} onClick={toggleRentDropdown}>
                                                <p>3 MONTHS</p>
                                            </motion.div>
                                            <motion.div
                                                variants={dropdownAnimVariantRentItem}
                                                key='option2'
                                                className={styles.rent_dropdown_item} onClick={toggleRentDropdown}>
                                                <p>4 MONTHS</p>
                                            </motion.div>
                                            <motion.div
                                                variants={dropdownAnimVariantRentItem}
                                                key='option2'
                                                className={styles.rent_dropdown_item} onClick={toggleRentDropdown}>
                                                <p>5 MONTHS</p>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </div>
                        </motion.div>
                    }

                        {isPaymentSelected == 'installment' && <motion.div
                            variants={paymentRentInstallmentVariant}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            key='installment-payment'
                            className={styles.rent}>
                            <p className={styles.product_versions_label}>Installment Plan:</p>
                            <div className={styles.select}>
                                <select style={{display:'none'}} name="size" className="o-caption o-caption--bold js-size-select">

                                    <option value="6" selected="selected">12 months (4 payments)</option>

                                    <option value="6.5">24 months (8 payments)</option>

                                    <option value="7">36 months (12 payments)</option>


                                </select>
                                <div className={styles.installment_dropdown} onClick={toggleInstallmentDropdown}>
                                    <p>12 MONTHS (4 payments)</p>
                                    {!isInstallmentDropdownOpen && (<motion.svg
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        className={styles.installment_dropdown_svg}
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="36px" viewBox="0 0 24 24" width="36px"
                                        fill="#FFFFFF">
                                        <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/>
                                        <path
                                            d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"/>
                                    </motion.svg>)}
                                    {isInstallmentDropdownOpen && (<motion.svg
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        className={styles.installment_dropdown_svg}
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="36px" viewBox="0 0 24 24" width="36px"
                                        fill="#FFFFFF">
                                        <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0V0z" fill="none"/>
                                        <path xmlns="http://www.w3.org/2000/svg" d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
                                    </motion.svg>)}
                                </div>
                                <AnimatePresence exitBeforeEnter>
                                    {isInstallmentDropdownOpen && (
                                        <motion.div
                                            variants={dropdownAnimVariantInstallmentOption}
                                            initial='initial'
                                            animate='animate'
                                            exit='exit'
                                            key='rent'
                                        >
                                            <motion.div
                                                variants={dropdownAnimVariantRentItem}
                                                key='option1'
                                                className={styles.installment_dropdown_item} onClick={toggleInstallmentDropdown}>
                                                <p>24 MONTHS (8 payments)</p>
                                            </motion.div>
                                            <motion.div
                                                variants={dropdownAnimVariantRentItem}
                                                key='option2'
                                                className={styles.installment_dropdown_item} onClick={toggleInstallmentDropdown}>
                                                <p>36 MONTHS (12 payments)</p>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </div>
                        </motion.div>
                        }
                    </AnimatePresence>

                    <div className={styles.product_checkout_wrapper}>

                        <button className={styles.buy_button}>
                            <span>Go to checkout</span>

                        </button>
                        <p className={styles.price_1}>

                            <span>€80.00<br/><small>W/O VAT</small></span>

                        </p>
                    </div>


                </div>
            </AnimatePresence>
            <ScrollDownPrompt href='#compatibility'/>



        </div>
        <div className={styles.content_wrapper}>
            <div className={styles.secondary_nav}>
                <div className={styles.secondary_nav_inner}>
                    <Link href="#compatibility"><motion.a className={`${styles.secondary_nav_inner_item1} ${currentNav=='compatibility'?styles.active_item1:''}`}>What you can do</motion.a></Link>
                    <Link href="#formats"><motion.a className={`${styles.secondary_nav_inner_item2} ${currentNav=='formats'?styles.active_item2:''}`}>Do it easy</motion.a></Link>
                    <Link href="#features"><motion.a className={`${styles.secondary_nav_inner_item3} ${currentNav=='features'?styles.active_item3:''}`}>Guarantee quality</motion.a></Link>
                    <Link href="#editions"><motion.a className={`${styles.secondary_nav_inner_item4} ${currentNav=='editions'?styles.active_item4:''}`}>Complete & export</motion.a></Link>
                    <div className="sticky-nav_overlay" style={{"backgroundColor": "#fefefe"}}></div>
                </div>
            </div>

            {/*video section*/}
            <div className={styles.content_inner}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 className={styles.subsection_title}>Take a quick look at EZTitles’ capabilities</h2>

                    </div>
                </div>
                <div className={styles.video_wrapper}>
                    <div className={styles.note} style={{transform:'rotate(-90deg) translateX(-50%) translateY(-150%)'}}>&#x2237; on click video expands in all directions, same time &#x2237;</div>



                    <motion.div
                        layout
                        data-isOpen={isVideoOpen}
                        initial={{ borderRadius: 50 }}
                        className={styles.video_parent}
                        onClick={() => {setIsVideoOpen(!isVideoOpen); handleVideoPlay()}}>

                        <motion.div layout className={styles.video_play} ><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#fefefe"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/></svg></motion.div>

                        <motion.div
                            className={styles.video_actual}>

                            <video ref={videoRef} style={{width: 985, height: 554}}>
                                <source src="/videos/subass_video.mp4"/>

                            </video>
                        </motion.div>
                    </motion.div>
                </div>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <p className={styles.subsection_description} style={{textAlign:'center'}}>and <span className={styles.text_highlight}>scroll down</span> to explore its <span className={styles.text_highlight}>full power</span></p>

                    </div>
                </div>

            </div>


            {/*first section*/}
            <div style={{"marginTop":"320px", paddingTop:80}} ref={ref1} className={styles.content_inner} id='compatibility'>
                <div className={styles.content_inner_text}>
                        <div className={styles.paragraph}>
                            <h2 className={styles.subsection_title}>Prepare subtitles<br/>for any content</h2>
                            <p className={styles.subsection_description}>With EZTitles you can <span className={styles.text_highlight}>subtitle anything</span> – Streaming Services like <span className={styles.text_highlight}>Netflix, Apple iTunes, Amazon Prime, Hulu</span> and others, Open subtitles, Closed Captions, Digital Cinema, Blu-ray, Teletext, DVD/DVB Subtitles - and deliver your <span className={styles.text_highlight}>work in any file format</span><br/>your clients may require.</p>

                        </div>
                </div>
                <div className={styles.card_wrapper}>
                    <div className={styles.note} style={{transform:'rotate(-90deg) translateX(-100%) translateY(-200%)'}}>&#x2297; no visible entry animations &#x2297;</div>

                    {/*<div className={styles.card}>
                        <div className={styles.card_inner}>
                            <div className={styles.card_inner_title}>
                                <h4>Streaming Services</h4>
                            </div>
                            <div className={styles.card_inner_description}>
                                <p className={styles.card_inner_description_text}>EZTitles is designed to be a world-class professional subtitling software so it complies with all the TV broadcast, streaming services.</p>

                            </div>
                            <div className={styles.card_inner_background_icon}>
                                <MyImage src='/images/icons/streaming-icon.svg' width={600} height={600} />
                            </div>
                            <div className={styles.card_inner_screenshot}>
                                <MyImage src='/images/software/eztitles/netlix_menu.png' width={333} height={333} />
                            </div>
                            <div className={styles.card_inner_more_icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>

                            </div>

                        </div>
                    </div>*/}
                    {/*streaming services card with overlay*/}
                    <div className={styles.card}>
                        {/*hidden part*/}
                        <AnimatePresence exitBeforeEnter>
                            {isStreamingServices
                                &&
                                    (<motion.div
                                            variants={cardOverlayVariant}
                                            initial='initial'
                                            animate='animate'
                                            exit='exit'
                                            key='overlay'
                                            className={styles.card_inner_overlay}>
                                <div className={styles.card_inner_title}>
                                    <h4>Streaming Services</h4>
                                </div>
                                <div className={styles.card_inner_description}>
                                    <motion.p   variants={overlayTextVariant}
                                                initial='initial'
                                                animate='animate'
                                                exit='initial'
                                                className={styles.card_inner_overlay_description_text}>Services such as:<br/>Disney+, Apple TV+, Netflix (<Link href='https://www.eztitles.com/download.php?file=prepare-subtitles-for-Netflix'><a style={{color:'#35C9F2', textDecoration:'underline', cursor:'pointer'}}>find our guide here</a></Link>), Amazon Prime or others, film, NLE, 4k, HD, Blu-ray and DVD standards.
                                        <motion.div className={styles.card_inner_overlay_images}>
                                            <MyImage src='/images/icons/disney.png' width={50} height={50}/>
                                            <MyImage src='/images/icons/hbo.png' width={50} height={50}/>
                                            <MyImage src='/images/icons/netflix.png' width={50} height={50}/>
                                            <MyImage src='/images/icons/apple.png' width={50} height={50}/>
                                            <MyImage src='/images/icons/amazon.png' width={50} height={50}/>
                                            <MyImage src='/images/icons/hulu.png' width={50} height={50}/>
                                        </motion.div>
                                    </motion.p>


                                </div>
                                <div className={styles.card_inner_background_icon}>
                                    <MyImage src='/images/icons/streaming-icon.svg' width={600} height={600}/>
                                </div>
                                <div className={styles.card_inner_more_icon}>
                                    <motion.svg
                                        variants={showOverlaySvgVariant}
                                        onClick={handleStreamingServices} xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24"
                                                width="48px" fill="#FFFFFF">
                                        <path d="M0 0h24v24H0V0z" fill="none"/>
                                        <path
                                            d="M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                    </motion.svg>

                                </div>
                            </motion.div>
                                )
                            }
                        </AnimatePresence>
                        {/*visible part*/}
                        <AnimatePresence>
                            {!isStreamingServices &&
                                (<motion.div
                                        variants={cardOverlayVariant}
                                        initial='initial'
                                        animate='animate'
                                        exit='exit'
                                        key='initial'
                                        className={styles.card_inner}>
                                <div className={styles.card_inner_title}>
                                    <h4>Streaming Services</h4>
                                </div>
                                <div className={styles.card_inner_description}>
                                    <p className={styles.card_inner_description_text}>EZTitles is designed to be a
                                        world-class professional subtitling software so it complies with all the TV
                                        broadcast, streaming services.</p>

                                </div>
                                <div className={styles.card_inner_background_icon}>
                                    <MyImage src='/images/icons/streaming-icon.svg' width={600} height={600}/>
                                </div>
                                <div className={styles.card_inner_more_icon}>
                                    <motion.svg
                                        variants={showOverlaySvgVariant}
                                        initial='animate'
                                        animate='initial'
                                        exit='animate'
                                        onClick={handleStreamingServices} xmlns="http://www.w3.org/2000/svg"
                                         height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF">
                                        <path d="M0 0h24v24H0V0z" fill="none"/>
                                        <path
                                            d="M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                    </motion.svg>

                                </div>

                            </motion.div>
                                )
                            }
                        </AnimatePresence>
                    </div>
                    {/*digital cinema plain*/}
                    <div className={styles.card}>
                        <div className={styles.card_inner}>
                            <div className={styles.card_inner_title}>
                                <h4>Digital Cinema</h4>
                            </div>
                            <div className={styles.card_inner_description}>
                                <p className={styles.card_inner_description_text}>This is a completely new presentation mode which complies with all the standards and requirements of Digital Cinema subtitling and provides an accurate preview of what your subtitles will look like on the theater’s screen.</p>

                            </div>
                            <div className={styles.card_inner_background_icon}>
                                <MyImage src='/images/icons/digital-icon.svg' width={600} height={600}/>
                            </div>

                        </div>
                    </div>

                    {/*closed captions card with overlay*/}
                    <div className={styles.card}>
                        {/*hidden part*/}
                        <AnimatePresence exitBeforeEnter>
                            {isClosedCaptions
                            &&
                            (<motion.div
                                    variants={cardOverlayVariant}
                                    initial='initial'
                                    animate='animate'
                                    exit='exit'
                                    key='overlay'
                                    className={styles.card_inner_overlay}>
                                    <div className={styles.card_inner_title}>
                                        <h4>Closed Captions</h4>
                                    </div>
                                    <div className={styles.card_inner_description}>
                                        <motion.p   variants={overlayTextVariant}
                                                    initial='initial'
                                                    animate={{opacity:1,y:0}}
                                                    exit='initial'
                                                    className={styles.card_inner_overlay_description_text}>Main formats we support:<br/>
                                            <ul className={styles.card_inner_overlay_description_ul}>
                                                <li>Scenarist Closed Caption Format (SCC)
                                                </li>
                                                <li>SMPTE-TT (.xml) Captions with tunnel CEA-608 data
                                                </li>
                                                <li>CPC-715 Online Caption Format (.onl)
                                                </li>
                                                <li>Captions Inc. Files (.cin)
                                                </li>
                                                <li>Cheetah CAP; Cheetah ASC
                                                </li>
                                                <li>TDS Captions; ECF Captions
                                                </li>
                                                <li>NCI Captions; NCI Timed Roll Up Captions (.flc)
                                                </li>
                                                <li>ProCap Captions (.txt)
                                                </li>
                                                <li>Ultech ULT Captions; MCC CEA-708 captions (.mcc)</li>
                                            </ul>
                                        </motion.p>


                                    </div>
                                    <div className={styles.card_inner_background_icon}>
                                        <MyImage src='/images/icons/closed-icon.svg' width={600} height={600}/>
                                    </div>
                                    <div className={styles.card_inner_more_icon}>
                                        <motion.svg
                                            variants={showOverlaySvgVariant}
                                            onClick={handleClosedCaptions} xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24"
                                            width="48px" fill="#FFFFFF">
                                            <path d="M0 0h24v24H0V0z" fill="none"/>
                                            <path
                                                d="M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                        </motion.svg>

                                    </div>
                                </motion.div>
                            )
                            }
                        </AnimatePresence>
                        {/*visible part*/}
                        <AnimatePresence>
                            {!isClosedCaptions &&
                            (<motion.div
                                    variants={cardOverlayVariant}
                                    initial='initial'
                                    animate='animate'
                                    exit='exit'
                                    key='initial'
                                    className={styles.card_inner}>
                                    <div className={styles.card_inner_title}>
                                        <h4>Closed Captions</h4>
                                    </div>
                                    <div className={styles.card_inner_description}>
                                        <p className={styles.card_inner_description_text}>With the advantage of using digital video as a standard, you can prepare closed captions off-line stunningly fast. And you can deliver them to your clients without having to leave your home or office, since you have all the popular closed captions file formats at your fingertips.</p>

                                    </div>
                                    <div className={styles.card_inner_background_icon}>
                                        <MyImage src='/images/icons/closed-icon.svg' width={600} height={600}/>
                                    </div>
                                    <div className={styles.card_inner_more_icon}>
                                        <motion.svg
                                            variants={showOverlaySvgVariant}
                                            initial='animate'
                                            animate='initial'
                                            exit='animate'
                                            onClick={handleClosedCaptions} xmlns="http://www.w3.org/2000/svg"
                                            height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF">
                                            <path d="M0 0h24v24H0V0z" fill="none"/>
                                            <path
                                                d="M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                        </motion.svg>

                                    </div>

                                </motion.div>
                            )
                            }
                        </AnimatePresence>
                    </div>


                    {/*blue-ray plain*/}
                    <div className={styles.card}>
                        <div className={styles.card_inner}>
                            <div className={styles.card_inner_title}>
                                <h4>Blue-ray</h4>
                            </div>
                            <div className={styles.card_inner_description}>
                                <p className={styles.card_inner_description_text}>This is a completely new presentation mode which complies with all the standards and requirements of Digital Cinema subtitling and provides an accurate preview of what your subtitles will look like on the theater’s screen.</p>

                            </div>
                            <div className={styles.card_inner_background_icon}>
                                <MyImage src='/images/icons/blueray-icon.svg' width={600} height={600}/>
                            </div>

                        </div>
                    </div>
                    {/*teletext plain*/}
                    <div className={styles.card}>
                        <div className={styles.card_inner}>
                            <div className={styles.card_inner_title}>
                                <h4>Teletext</h4>
                            </div>
                            <div className={styles.card_inner_description}>
                                <p className={styles.card_inner_description_text}>This is a completely new presentation mode which complies with all the standards and requirements of Digital Cinema subtitling and provides an accurate preview of what your subtitles will look like on the theater’s screen.</p>

                            </div>
                            <div className={styles.card_inner_background_icon}>
                                <MyImage src='/images/icons/teletext-icon.svg' width={600} height={600}/>
                            </div>

                        </div>
                    </div>
                    {/*DVB plain*/}
                    <div className={styles.card}>
                        <div className={styles.card_inner}>
                            <div className={styles.card_inner_title}>
                                <h4>DVB</h4>
                            </div>
                            <div className={styles.card_inner_description}>
                                <p className={styles.card_inner_description_text}>This is a completely new presentation mode which complies with all the standards and requirements of Digital Cinema subtitling and provides an accurate preview of what your subtitles will look like on the theater’s screen.</p>

                            </div>
                            <div className={styles.card_inner_background_icon}>
                                <MyImage src='/images/icons/dvb-icon.svg' width={600} height={600}/>
                            </div>

                        </div>
                    </div>



                </div>


            </div>
            {/*video format section*/}
                <div style={{"marginTop":"230px"}} className={styles.content_inner}>
                    <div className={styles.content_inner_text}>

                            <div className={styles.paragraph}>
                                <h2 className={styles.subsection_title}>Almost any Video File</h2>
                                <p className={styles.subsection_description} style={{textAlign:'center'}}>EZTitles works with nearly <span className={styles.text_highlight}>any known video format</span> with embedded timecodes.</p>

                            </div>

                    </div>

                   {/* <div className={styles.example_wrapper}>
                        <MyImage src='/images/shots/example.png' width={1232} height={325} priority={true}/>
                    </div>*/}
                    <div className={styles.example_wrapper_real}>
                        <div className={styles.note} style={{transform:'rotate(-90deg) translateX(-100%) translateY(-200%)'}}>&#x2251; text inside boxes slides in from left to right, staggered &#x2251;</div>

                        <div className={styles.example_format}>
                            <div className={styles.example_format_text}>
                                mpeg-1
                            </div>
                        </div>
                        <div className={styles.example_format}>
                            <div className={styles.example_format_text}>
                                mpeg-2
                            </div>
                        </div>
                        <div className={styles.example_format}>
                            <div className={styles.example_format_text}>
                                mpeg-4
                            </div>
                        </div>
                        <div className={styles.example_format}>
                            <div className={styles.example_format_text}>
                                avi
                            </div>
                        </div>
                        <div className={styles.example_format}>
                            <div className={styles.example_format_text}>
                                wmv
                            </div>
                        </div>
                        <div className={styles.example_format}>
                            <div className={styles.example_format_text}>
                                apple
                            </div>
                        </div>
                        <div className={styles.example_format}>
                            <div className={styles.example_format_text}>
                                mxf
                            </div>
                        </div>
                        <div className={styles.example_format}>
                            <div className={styles.example_format_text}>
                                mvf
                            </div>
                        </div>

                    </div>

                    {/*<div className={styles.video_format_wrapper}>

                        <div className={styles.video_format_item}>
                            <div className={styles.video_format_item_title}>
                                <div className={styles.video_format_item_title_text}>
                                    MPEG-1

                                </div>
                            </div>

                        </div>


                        <div className={styles.video_format_item}>
                            <div className={styles.video_format_item_title}>
                                <div className={styles.video_format_item_title_text}>
                                    MPEG-2

                                </div>
                            </div>

                        </div>


                        <div className={styles.video_format_item}>
                            <div className={styles.video_format_item_title}>
                                <div className={styles.video_format_item_title_text}>
                                    MPEG-4

                                </div>
                            </div>

                        </div>


                            <div className={styles.video_format_item}>
                                <div className={styles.video_format_item_title}>
                                    <div className={styles.video_format_item_title_text}>
                                        AVI

                                    </div>
                                </div>

                            </div>

                            <div className={styles.video_format_item}>
                                <div className={styles.video_format_item_title}>
                                    <div className={styles.video_format_item_title_text}>
                                        WMV

                                    </div>
                                </div>

                            </div>

                            <div className={styles.video_format_item}>
                                <div className={styles.video_format_item_title}>
                                    <div className={styles.video_format_item_title_text}>
                                        APPLE

                                    </div>
                                </div>

                            </div>


                            <div className={styles.video_format_item}>
                                <div className={styles.video_format_item_title}>
                                    <div className={styles.video_format_item_title_text}>
                                        MXF

                                    </div>
                                </div>

                            </div>

                            <div className={styles.video_format_item}>
                                <div className={styles.video_format_item_title}>
                                    <div className={styles.video_format_item_title_text}>
                                        MVF

                                    </div>
                                </div>

                            </div>



                    </div>*/}





                </div>
            {/*resolution section*/}
            <div style={{"marginTop":"230px", maxWidth:1400}} className={styles.content_inner}>
                
                <div className={styles.content_inner_text} style={{marginBottom:20}}>
                    <div className={styles.paragraph}>
                        <h2 className={styles.subsection_title}>Any type of resolution</h2>
                        <p className={`${styles.subsection_description}`} style={{textAlign:'center'}}>from <span className={styles.text_highlight}>SD</span><small className={styles.very_small}>(640x480)</small> up to <span className={styles.text_highlight}>4k</span><small className={styles.very_small}>(4096x2160)</small></p>

                    </div>
                </div>
                <div className={styles.resolution_main_wrapper}>
                    <div className={styles.note}>&larr; fades in and down for every resolution, staggered &larr;</div>
                    <div className={styles.resolution_main_inner}>
                        <div className={styles.resolution_inner_title_4k}>
                            4096x2160

                        </div>
                        <div className={styles.resolution_main_inner_2k}>
                            <div className={styles.resolution_inner_title_2k}>
                                2560x1440

                            </div>


                        </div>
                        <div className={styles.resolution_main_inner_fhd}>
                            <div className={styles.resolution_inner_title_fhd}>
                                1920x1080

                            </div>


                        </div>
                        <div className={styles.resolution_main_inner_hd}>
                            <div className={styles.resolution_inner_title_hd}>
                                1280x720

                            </div>


                        </div>
                        <div className={styles.resolution_main_inner_sd}>
                            <div className={styles.resolution_inner_title_sd}>
                                640x480

                            </div>


                        </div>


                    </div>

                </div>
                




            </div>
            {/*ratio section*/}
        
            <div className={styles.content_inner} style={{marginTop:320,maxWidth:1400}}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 className={styles.subsection_title}>and any screen ratio</h2>

                    </div>
                </div>
                <div className={styles.ratio_circle_wrapper}>
                    <div className={styles.note}>&#x2235; fades in and right for every aspect ratio, staggered &#x2235;</div>
                    <div className={styles.ratio_circle}>
                        <div className={styles.ratio_circle_inner}>
                            <p className={styles.ratio_circle_inner_text}>4:3</p>
                        </div>
                    </div>
                    <div className={styles.ratio_circle} style={{left:239}}>
                        <div className={styles.ratio_circle_inner}>
                            <p className={styles.ratio_circle_inner_text}>3:2</p>
                        </div>
                    </div>
                    <div className={styles.ratio_circle} style={{left:469}}>
                        <div className={styles.ratio_circle_inner}>
                            <p className={styles.ratio_circle_inner_text}>16:10</p>
                        </div>
                    </div>
                    <div className={styles.ratio_circle} style={{left:699}}>
                        <div className={styles.ratio_circle_inner}>
                            <p className={styles.ratio_circle_inner_text}>16:9</p>
                        </div>
                    </div>
                    <div className={styles.ratio_circle} style={{left:929}}>
                        <div className={styles.ratio_circle_inner}>
                            <p className={styles.ratio_circle_inner_text}>1.85:1</p>
                        </div>
                    </div>
                    <div className={styles.ratio_circle} style={{left:1159}}>
                        <div className={styles.ratio_circle_inner}>
                            <p className={styles.ratio_circle_inner_text}>2.35:1</p>
                        </div>
                    </div>
                    {/*<div className={styles.ratio_circle} style={{left:115, top:230}}>
                        <div className={styles.ratio_circle_inner}>
                            <p className={styles.ratio_circle_inner_text}>16:9</p>
                        </div>
                    </div>
                    <div className={styles.ratio_circle} style={{left:345, top:230}}>
                        <div className={styles.ratio_circle_inner}>
                            <p className={styles.ratio_circle_inner_text}>1.85:1</p>
                        </div>
                    </div>
                    <div className={styles.ratio_circle} style={{left:575, top:230}}>
                        <div className={styles.ratio_circle_inner}>
                            <p className={styles.ratio_circle_inner_text}>2.35:1</p>
                        </div>
                    </div>*/}


                </div>
              {/*  <div className={styles.dc_ratio}>
                    <div className={styles.ratio}>
                        <div className={`${styles.ratio_row}`}>
                            <div data-tip data-for='info1' className={`${styles.dc_inner_ratio_5_4} ${styles.dc_ratio_hover}`}>
                                <div className={styles.info_icon}><MyImage src='/images/icons/info.png' width={20} height={20}/></div>
                                <ReactTooltip id='info1' type='info'>
                                    <span>Early television receivers and large-format computer monitors</span>

                                </ReactTooltip>

                                <div className={styles.dc_inner_content}>
                                    <div className={styles.boxes_info}>
                                        <Link href="/pages/Streaming_Services">
                                            <a>
                                                <div className={styles.center_elem_ratio}>
                                                    <div className={styles.center_elem_ratio_wrapper}>
                                                        <h3 className={styles.center_elem_text}>5:4</h3>

                                                        <div className={styles.center_elem_ratio_inner}>
                                                            <MyImage src='/images/icons/pc.png' width={39} height={39}/>

                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div data-tip data-for='info2' className={`${styles.dc_inner_ratio_4_3} ${styles.dc_ratio_hover}`}>
                                <div className={styles.info_icon}><MyImage src='/images/icons/info.png' width={20} height={20}/></div>
                                <ReactTooltip id='info2' type='info'>
                                    <span>4:3 was the normal ratio for standard-definition television sets.<br/>Today, the 4:3 aspect ratio primarily serves artistic purposes.</span>

                                </ReactTooltip>
                                <div className={styles.dc_inner_content}>
                                    <div className={styles.boxes_info}>
                                        <Link href="/pages/Streaming_Services">
                                            <a>
                                                <div className={styles.center_elem_ratio}>
                                                    <div className={styles.center_elem_ratio_wrapper}>
                                                        <h3 className={styles.center_elem_text}>4:3</h3>

                                                        <div className={styles.center_elem_ratio_inner}>
                                                            <MyImage src='/images/icons/tv.png' width={39} height={39}/>
                                                            <MyImage src='/images/icons/pc.png' width={39} height={39}/>

                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div data-tip data-for='info3' className={`${styles.dc_inner_ratio_3_2} ${styles.dc_ratio_hover}`}>
                                <div className={styles.info_icon}><MyImage src='/images/icons/info.png' width={20} height={20}/></div>
                                <ReactTooltip id='info3' type='info'>
                                    <span>Classic 35 mm still photographic film.</span>

                                </ReactTooltip>
                                <div className={styles.dc_inner_content}>
                                    <div className={styles.boxes_info}>
                                        <Link href="/pages/Streaming_Services">
                                            <a>
                                                <div className={styles.center_elem_ratio}>
                                                    <div className={styles.center_elem_ratio_wrapper}>
                                                        <h3 className={styles.center_elem_text}>3:2</h3>

                                                        <div className={styles.center_elem_ratio_inner}>
                                                            <MyImage src='/images/icons/photographic-film.png' width={39} height={39}/>
                                                            <MyImage src='/images/icons/camera.png' width={39} height={39}/>
                                                            <MyImage src='/images/icons/tablet.png' width={39} height={39}/>

                                                        </div>
                                                    </div>
                                                </div>

                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div data-tip data-for='info4' className={`${styles.dc_inner_ratio_16_10} ${styles.dc_ratio_hover}`}>
                                <div className={styles.info_icon}><MyImage src='/images/icons/info.png' width={20} height={20}/></div>
                                <ReactTooltip id='info4' type='info'>
                                    <span>A common computer screen ratio.</span>

                                </ReactTooltip>

                                <div className={styles.dc_inner_content}>
                                    <div className={styles.boxes_info}>
                                        <Link href="/pages/Streaming_Services">
                                            <a>
                                                <div className={styles.center_elem_ratio}>
                                                    <div className={styles.center_elem_ratio_wrapper}>
                                                        <h3 className={styles.center_elem_text}>16:10</h3>

                                                        <div className={styles.center_elem_ratio_inner}>
                                                            <MyImage src='/images/icons/computer-widescreen.png' width={39} height={39}/>
                                                            <MyImage src='/images/icons/pc.png' width={39} height={39}/>
                                                            <MyImage src='/images/icons/smartphone.png' width={39} height={39}/>

                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.ratio_row}`}>
                            <div data-tip data-for='info5' className={`${styles.dc_inner_ratio_16_9} ${styles.dc_ratio_hover}`}>
                                <div className={styles.info_icon}><MyImage src='/images/icons/info.png' width={20} height={20}/></div>
                                <ReactTooltip id='info5' type='info'>
                                    <span>The standard size for high definition widescreen televisions and most computer monitors,<br/>16:9 is the most common aspect ratio used today.</span>

                                </ReactTooltip>
                                <div className={styles.dc_inner_content}>
                                    <div className={styles.boxes_info}>
                                        <Link href="/pages/Streaming_Services">
                                            <a>
                                                <div className={styles.center_elem_ratio}>
                                                    <div className={styles.center_elem_ratio_wrapper}>
                                                        <h3 className={styles.center_elem_text}>16:9</h3>

                                                        <div className={styles.center_elem_ratio_inner}>
                                                            <MyImage src='/images/icons/tv.png' width={39} height={39}/>
                                                            <MyImage src='/images/icons/computer-widescreen.png' width={39} height={39}/>
                                                            <MyImage src='/images/icons/smartphone.png' width={39} height={39}/>

                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div data-tip data-for='info6' className={`${styles.dc_inner_ratio_185_100} ${styles.dc_ratio_hover}`}>
                                <div className={styles.info_icon}><MyImage src='/images/icons/info.png' width={20} height={20}/></div>
                                <ReactTooltip id='info6' type='info'>
                                    <span>One of the two standard aspect ratios in modern cinema,<br/>1.85:1 is regarded as the normal widescreen format and is actually quite similar in size to 16:9.</span>

                                </ReactTooltip>
                                <div className={styles.dc_inner_content}>
                                    <div className={styles.boxes_info}>
                                        <Link href="/pages/Streaming_Services">
                                            <a>
                                                <div className={styles.center_elem_ratio}>
                                                    <div className={styles.center_elem_ratio_wrapper}>
                                                        <h3 className={styles.center_elem_text}>1.85:1</h3>

                                                        <div className={styles.center_elem_ratio_inner}>
                                                            <MyImage src='/images/icons/cinema.png' width={39} height={39}/>

                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div data-tip data-for='info7' className={`${styles.dc_inner_ratio_235_100} ${styles.dc_ratio_hover}`}>
                                <div className={styles.info_icon}><MyImage src='/images/icons/info.png' width={20} height={20}/></div>
                                <ReactTooltip id='info7' type='info'>
                                    <span> Debuting in 1953, Cinemascope was a super widescreen format<br/>developed by the head of research at 20th Century Fox.</span>

                                </ReactTooltip>
                                <div className={styles.dc_inner_content}>
                                    <div className={styles.boxes_info}>
                                        <Link href="/pages/Streaming_Services">
                                            <a>
                                                <div className={styles.center_elem_ratio}>
                                                    <div className={styles.center_elem_ratio_wrapper}>
                                                        <h3 className={styles.center_elem_text}>2.35:1</h3>

                                                        <div className={styles.center_elem_ratio_inner}>
                                                            <MyImage src='/images/icons/movie-reel.png' width={39} height={39}/>

                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.ratio_main_wrapper}>
                    <div className={styles.ratio_main_inner}>
                        <div className={`${styles.ratio_main_2_35} ${styles.ratio_box}`}>
                            <div className={`${styles.ratio_main_1_85} ${styles.ratio_box}`}>
                                <div className={`${styles.ratio_main_16_9} ${styles.ratio_box}`}>
                                    <div className={`${styles.ratio_main_16_10} ${styles.ratio_box}`}>
                                        <div className={`${styles.ratio_main_3_2} ${styles.ratio_box}`}>
                                            <div className={`${styles.ratio_main_4_3} ${styles.ratio_box}`}>
                                                <div className={`${styles.ratio_main_5_4} ${styles.ratio_box}`}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>






                    </div>
                </div>*/}




            </div>

        
            {/*any language section*/}

                <div style={{"marginTop":"230px"}} className={styles.content_inner}>

                    <div className={styles.content_inner_text}>

                    <div className={styles.paragraph}>
                        <h2 className={styles.subsection_title}>in any language</h2>
                        <div className={styles.languages_outer}>
                            <div className={styles.note} style={{transform:'rotate(-90deg) translateX(-100%) translateY(-225%)'}}>&#x223A; text starts centered then moves to sides like zipper gradually, staggered &#x223A;</div>


                            <div className={styles.languages_wrapper}>

                                <div className={styles.language_left}>in jeder Sprache</div>
                                <div className={styles.language_right}>на любом языке</div>
                                <div className={styles.language_left}>in qualsiasi lingua</div>
                                <div className={styles.language_right}>herhangi bir dilde</div>
                                <div className={styles.language_left}>بأي لغ</div>
                                <div className={styles.language_right}>dans n'importe quelle langue</div>
                                <div className={styles.language_left}>בכל שפה</div>
                                <div className={styles.language_right}>bármilyen nyelven</div>
                                <div className={styles.language_left}>Σε οποιαδήποτε γλώσσα</div>
                                <div className={styles.language_right}>em qualquer idioma</div>
                                <div className={styles.language_left}>किसी भी भाषा में</div>
                                <div className={styles.language_right}>En cualquier idioma</div>
                                <div className={styles.language_left}>På ethvert sprog</div>
                                <div className={styles.language_right}>あらゆる言語で</div>
                                <div className={styles.language_left}>Na bilo kojem jeziku</div>
                                <div className={styles.language_right}>Noma yiluphi ulimi</div>
                                <div className={styles.language_left}>На всеки език</div>

                            </div>
                        </div>

                    </div>
                </div>




            </div>

            {/*asian section*/}
            <div style={{"marginTop":"230px"}} className={styles.content_inner}>
                    {/*<div className={styles.note} style={{transform:'rotate(-90deg) translateX(-0%) translateY(-0%)'}}>&#x22EE; block of text shows on button press &#x22EE;</div>*/}
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 className={styles.subsection_title}>Vertical orientation, Horizontal groups, Rubies and Bouten</h2>
                        <div className={styles.asian_wrapper}>
                            <MyImage src="/images/vertical-orientation-horizontal-text.svg" width={800} height={80}/>
<p className={styles.subsection_description} style={{textAlign:'center'}}>With EZTitles you can input text in the
    vertical direction common for the
    <span className={styles.text_highlight}> Chinese, Japanese
    and Korean</span> language scripts.</p>

                            <motion.div variants={asianVariant} animate={isAsian?'buttonMainAnimate':'buttonMainInitial'}  className={styles.asian_expand_button} onClick={extendAsian}>
                                <motion.div variants={asianVariant} animate={isAsian?'buttonIconAnimate':'buttonIconInitial'} className={styles.asian_expand_button_icon}></motion.div>
                                <motion.div variants={asianVariant} animate={isAsian?'buttonTextAnimate':'buttonTextInitial'} className={styles.asian_expand_button_text}>view more</motion.div>

                            </motion.div>

                                 <div className={styles.asian_inner}>
                                     <AnimatePresence exitBeforeEnter>
                                         <motion.div variants={asianVariant} animate={!isAsian?'exit':'initial'} exit='exit' key='cover' className={styles.asian_cover}></motion.div>

                                     </AnimatePresence>
                                    <div className={styles.asian_inner_text_wrapper}>
                                        <p className={styles.asian_inner_text}>An interesting requirement can be identified as
                                            the
                                            need to
                                            display horizontal and vertical text simultaneously on the screen. In
                                            EZTitles
                                            this can be
                                            achieved easily by using two subtitle tracks.Most of the time the non-Asian
                                            text
                                            inserted in a vertical subtitle doesn’t need
                                            to be
                                            rotated but there are cases for which the text should remain easily
                                            readable.
                                            EZTitles is
                                            able to satisfy this requirement as well by marking the non-Asian text as
                                            Horizontal Group.Another feature is the ability to insert Rubies above or
                                            below
                                            (if horizontally
                                            oriented) or
                                            to the right or left side (if vertically oriented) of the letters.
                                        </p>
                                    </div>
                                    <div className={styles.asian_inner_text_wrapper}>
                                        <p className={styles.asian_inner_text}>The Rubies’ traditional purpose is to
                                            give
                                            additional information about the
                                            pronunciation of
                                            particular characters and symbols, considering the complexity of the Asian
                                            scripts, which
                                            may be otherwise unknown to the reader.
                                            The Phonetic Guide provides the option to insert rubies for the whole phrase
                                            or
                                            only for the
                                            symbol that requires it. This tool can also be used for emphasizing part of
                                            the
                                            text or it
                                            is also known as inserting a Bouten.
                                            With the Asian Text Font option, EZTitles can display different fonts for
                                            Asian
                                            and
                                            non-Asian text pieces inserted to the same line. The Asian-font text has the
                                            same font size
                                            as the regular-font text.
                                        </p>
                                    </div>
                                </div>
                            <img className={styles.asian_vertical_img}
                                 src="/images/vertical-orientation-vertical-text.svg" width={158} height={800}/>
                        </div>
                    </div>
                </div>




            </div>
            {/*file formats section*/}
            <div style={{"marginTop":"230px"}} className={styles.content_inner} id='formats' ref={ref2}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 className={styles.subsection_title}>Export your work in any file format used in the industry today</h2>
                        <p className={styles.subsection_description} style={{textAlign:'center'}}>EZTitles supports <span className={styles.text_highlight}>over 69</span> file formats.</p>
                        <div className={styles.file_formats_wrapper}>
                                <div className={styles.note} style={{transform:'rotate(-90deg) translateX(-80%) translateY(-200%)'}}>&#x22EE; pressing every heading will switch files displayed in <span className={styles.text_highlight}>undefined</span> animation &#x22EE;</div>

                            <div className={styles.file_formats_header}>
                                <div className={styles.file_format_title_selected}>
                                    Open subtitles
                                </div>
                                <div className={styles.file_format_title}>
                                    Closed Captions
                                </div>
                                <div className={styles.file_format_title}>
                                    DVB subtitles
                                </div>
                                <div className={styles.file_format_title}>
                                    Images for DVD authoring and NLE system
                                </div>
                                <div className={styles.file_format_title}>
                                    Text-only scripts for Authoring and NLE systems
                                </div>

                            </div>
                            <div className={styles.file_formats_content_1}>
                                <ul>
                                    <li className={styles.file_format_item}>Compressed PAC (.pac)</li>
                                    <li className={styles.file_format_item}>.890 files</li>
                                    <li className={styles.file_format_item}>EBU (.STL)</li>
                                    <li className={styles.file_format_item}>EBU (.STL) for ARTE</li>
                                    <li className={styles.file_format_item}>Windows Media Player SAMI</li>
                                    <li className={styles.file_format_item}>Plain ASCII text</li>
                                    <li className={styles.file_format_item}>Rich Text Format (RTF) files</li>
                                    <li className={styles.file_format_item}>DLP Cinema™ Subtitle XML </li>
                                    <li className={styles.file_format_item}>DLP Cinema™ Subtitle XML with quality images</li>
                                </ul>
                                <ul>
                                    <li className={styles.file_format_item}>DCDM SMPTE 428-7-2007 XML Subtitles</li>
                                    <li className={styles.file_format_item}>QuickTime Text and .SMIL files</li>
                                    <li className={styles.file_format_item}>SubRip (.srt) subtitles</li>
                                    <li className={styles.file_format_item}>MicroDVD (.sub) subtitles</li>
                                    <li className={styles.file_format_item}>WebVTT (.vtt) subtitles</li>
                                    <li className={styles.file_format_item}>Videotron Lambda CAP (.cap)</li>
                                    <li className={styles.file_format_item}>Unicode PAC (.fpc)</li>
                                    <li className={styles.file_format_item}>Win2020 text files</li>
                                    <li className={styles.file_format_item}>DAS</li>
                                </ul>
                                <ul>
                                    <li className={styles.file_format_item}>Softitler .TXT</li>
                                    <li className={styles.file_format_item}>Avid® DS Nitris™ Subtitles Files</li>
                                    <li className={styles.file_format_item}>OVR</li>
                                    <li className={styles.file_format_item}>VDPC</li>
                                    <li className={styles.file_format_item}>XLS Excel Workbook file</li>
                                    <li className={styles.file_format_item}>Timed Text (TTML XML)</li>
                                    <li className={styles.file_format_item}>Ooyala Timed Text XML</li>
                                    <li className={styles.file_format_item}>IMSC1 &amp; IMSC 1.1 XML</li>
                                    <li className={styles.file_format_item}>Netflix Timed Text (NFLX-TT)</li>
                                </ul>
                                <ul>
                                    <li className={styles.file_format_item}>EBU Timed Text (EBU-TT and EBU-TT-D)</li>
                                    <li className={styles.file_format_item}>EBU-TT and EBU-TT-D for BBC</li>
                                    <li className={styles.file_format_item}>SMPTE-TT Subtitles</li>
                                    <li className={styles.file_format_item}>Inscriber CG (.txt)</li>
                                    <li className={styles.file_format_item}>Apple iTunes Timed Text (.itt)</li>
                                    <li className={styles.file_format_item}>SubStation Alpha (.SSA, .ASS)</li>
                                    <li className={styles.file_format_item}>Swift Interchange Format (.sif)</li>
                                    <li className={styles.file_format_item}>Universal Subtitling Format (.usf)</li>
                                </ul>

                            </div>

                        </div>

                    </div>
                </div>




            </div>
            {/*shot change section*/}
            <div style={{"marginTop":"230px"}} className={styles.content_inner}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 ref={shotRef0} className={styles.subsection_title}>EZTitles offers an ocean of useful features and automations to help your subtitling endeavours.</h2>
                        <div className={styles.features_wrapper}>
                            <div className={styles.note} style={{transform:'rotate(-90deg) translateX(-80%) translateY(-200%)'}}>&#x2238; section <span className={styles.text_highlight}>not finished</span>, images static and change on feature scroll &#x2238;</div>

                            <div className={styles.feature}>
                                <div className={styles.feature_text_outer}>
                                    <div ref={shotRef1} className={styles.feature_text_wrapper}>
                                        <h4 className={styles.subsection_description}>Shot change detection</h4>
                                        <p className={styles.simple_text}>
                                            Our stellar shot change detection will help you cue subtitles with an
                                            unprecedented accuracy.
                                            EZTitles detects shot changes on its own, on the fly, in background and
                                            without any additional software or set-ups needed.
                                            This means you can use EZTitles and all its features for subtitling while
                                            the video file is still being processed.
                                            And there are also tools for fixing existing subtitles to meet the shot
                                            change requirements.

                                        </p>
                                    </div>
                                    <div ref={shotRef2} className={styles.feature_text_wrapper}>
                                        <h4 className={styles.subsection_description}>A proper Timeline</h4>
                                        <p className={styles.simple_text}>
                                            It displays not only the audio and video tracks but also the boundaries of
                                            subtitles and shot changes. Navigation is as simple as it can get. For
                                            example, you can drag a subtitle’s in- and out-cues to a new position just
                                            using the mouse — and they will auto-snap to shot changes in vicinity.
                                            Moreover, the EZTitles timeline can display your video as a strip of
                                            consecutive frames, making it easy to find the exact position of a hidden
                                            shot change, or even to precisely snap a subtitle’s cue to the shot change
                                            by hand.
                                            A great feature of EZTitles is you could have a second track on the Timeline
                                            which can be used for overlapping subtitles, loading a script for reference
                                            or more useful purposes.
                                        </p>
                                    </div>
                                    <div ref={shotRef3} className={styles.feature_text_wrapper}>
                                        <h4 className={styles.subsection_description}>Subtitling Assistant</h4>
                                        <p className={styles.simple_text}>
                                            Subtitling Assistant is THE next gen smart feature we’ve implemented into EZTitles intended to automate the process of creating Closed Captions both Pop-on and Roll-up, SDH Subtitles or Master Translation Templates in the same language.
                                        </p>
                                    </div>
                                    <div ref={shotRef4} className={styles.feature_text_wrapper}>
                                        <h4 className={styles.subsection_description}>Split text to subtitles</h4>
                                        <p className={styles.simple_text}>
                                            The Split text to subtitles feature can serve many purposes, but it is best described as an advanced set of tools for splitting any block of text into individual subtitles. The result will strictly comply with all the requirements for the minimum interval between subtitles, minimum and maximum durations, reading speed, line length restrictions and so on.
                                            The Auto-Adjust can simultaneously perform multiple operations depending on the options you activate. In general, it word-wraps and splits your text to optimally fill the lines, splits it into individual subtitles and finally (re)calculates the in- and out-cues of the resulting new subtitles.
                                            You can simply skip the non-speech scenes and focus on the relevant parts, and you can even split a block of text into proper subtitles by using the Auto-Adjust feature in conjunction with the Continuous Typing Workflow.
                                        </p>
                                    </div>
                                    <div ref={shotRef5} className={styles.feature_text_wrapper}>
                                        <h1 className={styles.subsection_description}>END END END END END END</h1>
                                        <p className={styles.simple_text}></p>
                                    </div>



                                </div>

                                <AnimatePresence>
                                    {shotChange == 1 &&
                                        <motion.div variants={shotChangeVariant}
                                                    initial='initial'
                                                    animate='animate'
                                                    exit='exit'
                                                    key='shot1'
                                                    className={styles.feature_image}>
                                            <MyImage src="/images/shots/01-shot-detection-img.png" width={1111} height={1111} priotity={true}/>
                                        </motion.div>}
                                    {shotChange == 2 &&
                                        <motion.div variants={shotChangeVariant}
                                                    initial='initial'
                                                    animate='animate'
                                                    exit='exit'
                                                    key='shot2'
                                                    className={styles.feature_image}>
                                            <MyImage src="/images/shots/02-proper-timeline.png" width={1111} height={1111} priotity={true}/>
                                        </motion.div>}
                                    {shotChange == 3 &&
                                    <motion.div variants={shotChangeVariant}
                                                initial='initial'
                                                animate='animate'
                                                exit='exit'
                                                key='shot3'
                                                className={styles.feature_image}>
                                        <MyImage src="/images/shots/03-offer-img-2.png" width={1111} height={1111} priotity={true}/>
                                    </motion.div>}
                                    {shotChange == 4 &&
                                    <motion.div variants={shotChangeVariant}
                                                initial='initial'
                                                animate='animate'
                                                exit='exit'
                                                key='shot4'
                                                className={styles.feature_image}>
                                        <MyImage src="/images/shots/04-split-text-img.png" width={1111} height={1111} priotity={true}/>
                                    </motion.div>}
                                </AnimatePresence>
                            </div>



                        </div>

                    </div>
                </div>




            </div>
            {/*
            ninth section
            <div style={{"marginTop":"230px"}} className={styles.content_inner}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 style={{"fontFamily": "'Montserrat', sans-serif","fontSize": "2.3em","fontWeight": "100 !important","padding": "0 0 20px","lineHeight": "63px"}}>Even more features!</h2>
                        <div className={styles.more_features_wrapper}>
                            <div className={styles.m_feature}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/puzzle.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>Fully customizable </h3>
                                    <p>Almost every aspect of EZTitles is customizable. The program can easily adapt to any unique style of work in no time.</p>

                                    <p>Profiles - Working on an Open, Teletext or Closed Captions project? EZTitles’ profile presets will help you with that. Just choose the project type, and the software will change its interface to focus only on the tools you need to get your job done!</p>

                                    <p>You can create your own unique profile to fit your work style best! Or simply import one if someone has already done it for you.</p>
                                </div>


                            </div>
                            <div className={styles.m_feature}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/compare.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>File Revisions</h3>
                                    <p>Creating subtitles is a complex process which often involves different parties: translators, editors, proofreaders and so on. And you want to see the changes that your colleagues have applied when reviewing your subtitles.</p>

                                        <p>Now this is possible in EZTitles — you can simply create a new Labeled Revision each time you are about to make changes to the subtitles.</p>

                                            <p>Later, if you want to compare your subtitles’ current state with any of the existing revisions, you just need to choose one from the list and compare. And if you want to check the differences between two revisions, you can do that as well.</p>
                                </div>


                            </div>
                            <div className={styles.m_feature}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/tablet.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>Import/Export Presets</h3>
                                    <p>You will absolutely fall for this wonderful feature. Now you can configure import and export presets for each of the supported file formats, so you don’t need to check or apply the settings each time you import or export a file. Plus, every preset includes your default save folder - you don’t have to browse for it every time.</p>
                                </div>


                            </div>
                            <div className={styles.m_feature}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/translate.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>Translation Template</h3>
                                    <p>EZTitles offers you the option to load a second file along with your project to use it as a translation template. It can be used for translating your subtitles into a new language, verifying subtitles and proofing already existing subtitles.</p>
                                </div>


                            </div>
                            <div className={styles.m_feature}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/timeline.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>Frame-accurate cueing</h3>
                                    <p>EZTitles offers ultra-precise frame by frame forward/backward video playback. And to top it off each single frame can be easily auditioned thanks to the audio scrubbing.</p>
                                </div>


                            </div>
                            <div className={styles.m_feature}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/color-palette.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>In Colors</h3>
                                    <p>EZTitles supports color subtitles in the Teletext, Open/DVD and Digital Cinema modes. In addition, the program respects the limitations of the currently chosen format or authoring system.</p>
                                </div>


                            </div>
                            <div className={styles.m_feature}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/cloud-network.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>Cloud Services</h3>
                                    <p>You can connect EZTitles to either Google Drive or Dropbox and sync all your files, settings, keyboard shortcuts, auto correct and spell checker dictionaries, project templates and program visual layout across all your devices.</p>
                                    <p>Installing EZTitles on a new computer is as easy as it gets. Once you connect to the cloud, all your settings and files automatically synchronize to be ready for use on the spot.</p>
                                    <p>You could also share your project templates with your colleagues and coworkers. As well as configure import and export presets for each file format which will also include your default save folder so you don’t have to browse for it every time.</p>
                                </div>


                            </div>
                            <div className={styles.m_feature}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/typing.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>Continuous Typing Workflow</h3>
                                    <p>This feature shines when used in conjunction with the Split text to subtitles functionality. It facilitates efficient subtitling of long speech segments and continuous dialogue — you just type the text in and EZTitles does the rest for you. As a result, you get splendid separate subtitles with the correct timecodes set automatically.</p>
                                    <p>This feature is designed for roll-up closed captions but can also be applied to regular subtitles.</p>
                                </div>


                            </div>
                            <div className={styles.m_feature}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/pole-vault.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>Skip the non-speech scenes</h3>
                                    <p>With the brilliant timesaving feature called “Preview subtitled scenes only”, EZTitles automatically recognizes and skips scenes with no speech to save you time on the final preview or quality check!</p>
                                </div>


                            </div>
                            <div className={styles.m_feature}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/disc.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>Import video from DVD</h3>
                                    <p>You can import video directly from DVD — you only need the right decoders installed on your computer.</p>
                                </div>


                            </div>
                            <div className={styles.m_feature}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/speed.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>Video playback</h3>
                                    <p>Speed-up and keep speech understandable.</p>
                                    <p>EZTitles boasts an advanced audio filter that allows you to play at 1.5x and 2x speeds with the speech remaining perfectly understandable.</p>
                                    <p>With this filter you can not only preview your subtitles in the fastest way possible but also speed up your subtitle preparation process 1.5 to 2 times. </p>
                                </div>


                            </div>
                            <div className={styles.m_feature}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/ratio.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>Aspect Ratio and Letterbox Options</h3>
                                    <p>We understand that letterboxed videos can sometimes bring additional requirements for the text’s position, and that is why EZTitles offers several options designed to help you in this situation.</p>
                                    <p>If you set the correct aspect ratio and letterboxing, you will have an instant view of how your subtitles fit on the picture.</p>
                                </div>


                            </div>
                            <div className={styles.m_feature}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/treasure-map.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>Aspect Ratio and Letterbox Options</h3>
                                    <p>On the right side of the screen is the subtitle list which shows you all the subtitles, their attributes and the corresponding frame pictures. A small icon next to a subtitle indicates an issue, so spotting mistakes in EZTitles is quite simple.</p>
                                </div>


                            </div>
                            <div className={styles.m_feature}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/subtitles2.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>Place the text anywhere you want</h3>
                                    <p>With EZTitles you can place your subtitles anywhere on the screen. If you are doing a dialogue, you can have one line justified to the left and the other justified to the right, and you can also change the horizontal position if needed.</p>
                                </div>


                            </div>
                            <div className={styles.m_feature}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/symbol.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>Insert Symbol</h3>
                                    <p>You can use the “Edit/Insert/Insert Symbol” dialog box to insert symbols such as ©, ™, µ, ♪, ♫, or special characters that are not on the keyboard.</p>
                                    <p>What types of symbols and characters you can insert depends on the font you choose? For example, some fonts may include fractions (¼), international characters (Ç, ë) and currency symbols (£, ¥).</p>
                                </div>


                            </div>
                            <div className={styles.m_feature}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/eye.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>What You See Is What You Get</h3>
                                    <p>All subtitles are displayed exactly the way they’re meant to look. You view and edit your subtitles right over the video, so the appearance properties can be adjusted on the fly depending on the picture beneath.</p>
                                </div>


                            </div>
                            <div className={styles.m_feature}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/order.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>Dashes and hyphens</h3>
                                    <p>There are various requirements for using dashes and hyphens when subtitling a dialogue, splitting text in the middle of a sentence, etc. And that’s why EZTitles introduces a whole group of options to automate this process.</p>
                                </div>


                            </div>
                            <div className={styles.m_feature}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/full-screen.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>Full Screen Preview</h3>
                                    <p>If your computer has two monitors or a TV-out, the second display can be used for a full screen preview, so you can view your subtitles exactly the way they will appear on the viewer’s screen or in the theater.</p>
                                </div>


                            </div>
                            <div className={styles.m_feature}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/time-travel.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>Full Undo functionality</h3>
                                    <p>EZTitles offers unlimited Undo functionality so you could always track back as far as you need to.</p>
                                </div>


                            </div>





                        </div>

                    </div>
                </div>




            </div>
            eleventh section
            <div style={{"marginTop":"80px"}} className={styles.content_inner}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 style={{"fontFamily": "'Montserrat', sans-serif","fontSize": "2.3em","fontWeight": "100 !important","padding": "0 0 20px","lineHeight": "63px"}}>A license for every need</h2>
                        <h3 style={{"fontFamily": "'Montserrat', sans-serif","fontSize": "1.6em","fontWeight": "lighter","padding": "0 0 20px","lineHeight": "63px"}}>EZTitles can be licensed in different ways so it could fit your desired workflow.</h3>
                        <div className={styles.license_wrapper}>
                            <div className={styles.license_option}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/dongle.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>Dongle</h3>
                                    <p>The normal EZTitles license comes on a dongle so the software will work on the computer where it has been plugged at that time.</p>
                                </div>


                            </div>
                            <div className={styles.license_option}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/no-wifi.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>Off-Line Licenses Manager</h3>
                                    <p>Available from 5x EZTitles onwards you could assign your licenses to your associates for a specified period of time and for a particular computer. Once expired it could either be extended or assigned to a different PC.</p>
                                </div>


                            </div>
                            <div className={styles.license_option}>
                                <div className={styles.m_feature_icon}>
                                    <MyImage src="/images/features_icons/world-grid.png" width={111} height={111}/>

                                </div>
                                <div className={styles.m_feature_text_short}>
                                    <h3>On-Line Licenses Manager</h3>
                                    <p>Available from 5x EZTitles onwards you could assign each of your licenses to a specific person for a specified period of time. As soon as a license is closed by one person it could immediately be accessed by another. The users and their access to the software can be managed by any criteria – specific time of day, specific timeframe, etc.</p>
                                </div>


                            </div>






                        </div>
                        <p>Ask us about the Enterprise solutions. <div className={styles.free_trial}>CONTACT US</div></p>
                        <div className={styles.free_trial}>VIEW LICENSE EDITIONS</div>


                    </div>
                </div>




            </div>
            twelfth section
            <div style={{"marginTop":"80px", "paddingBottom":"30px"}} className={styles.content_inner}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 style={{"fontFamily": "'Montserrat', sans-serif","fontSize": "2.3em","fontWeight": "100 !important","padding": "0 0 20px","lineHeight": "63px"}}>Find the right solution for you!</h2>
                        <Link href="/buy/product?eztitles"><a><motion.button  whileHover={{scale:1.1}} whileTap={{scale:0.9}} className={styles.get_now}>GET NOW</motion.button></a></Link>

                    </div>
                </div>




            </div>*/}

        </div>
        </motion.div>
    )
}
