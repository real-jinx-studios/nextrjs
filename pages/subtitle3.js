import styles from '../styles/subtitle3.module.css'
import MyImage from "../components/myImage";
import Link from 'next/link'
import ReactTooltip from 'react-tooltip';
import FileFormatTabs from "../components/fileFormatTabs";
import {
    AnimatePresence,
    motion,
    useAnimation,
    useCycle,
    useViewportScroll,
    useTransform,
    AnimateSharedLayout
} from "framer-motion"
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
    const [isDigitalCinema, setIsDigitalCinema] = useState(false);
    const [isClosedCaptions, setIsClosedCaptions] = useState(false);

    /*viewport scroll handlers*/
    const { scrollYProgress } = useViewportScroll()
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);


    /*scrolling triggers below for components in view*/
    const [ref, inView] = useInView();
    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();
    const [ref4, inView4] = useInView();
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

    /*use cycle for animation state management for the card section after video*/
    const [cardState, cycleCardState]=useCycle(
        [{flex: '0 0 32%'},{flex: '0 0 32%'},{flex: '0 0 32%'}],
        [{flex: '0 0 89%'},{flex: '0 0 5%'},{flex: '0 0 5%'}],
        [{flex: '0 0 5%'},{flex: '0 0 5%'},{flex: '0 0 89%'}]
    )

    const [test, cycleTest]=useCycle('one','two','three')

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
        console.log('what the fuck')
        setIsStreamingServices(!isStreamingServices)

    }
    const handleDigitalCinema=()=>{
        setIsDigitalCinema(!isDigitalCinema)

    }
    useEffect(()=>{
        if(isStreamingServices){
            cycleCardsVariants(1)
        }else{
            cycleCardsVariants(0)
        }
    },[isStreamingServices])

    useEffect(()=>{
        if(isDigitalCinema){
            cycleCardsVariants(2)
        }else{
            cycleCardsVariants(0)
        }
    },[isDigitalCinema])

    const handleClosedCaptions=()=>{
        setIsClosedCaptions(!isClosedCaptions)

    }
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)
    const toggleRentDropdown = () => setIsRentDropdownOpen(!isRentDropdownOpen)
    const toggleInstallmentDropdown = () => setIsInstallmentDropdownOpen(!isInstallmentDropdownOpen)

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
            rotate:'90deg',
            fill:'#ffffff'
        },
        animate:{
            originX:'50%',
            originY:'50%',
            rotate:'-90deg',
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
    const cardWrapperVariant={
        closed:{
            gridTemplateColumns:'1fr 1fr 1fr'

        },
        open:{
            gridTemplateColumns:'6fr 0.25fr 0.25fr'
        }
    }
    const cardFlexVariant1={
        closed:{
            gridTemplateColumns:'1fr 1fr 1fr'

        },
        open:{
            gridTemplateColumns:'6fr 0.25fr 0.25fr'
        }
    }
    const cardInnerVariant={
        closed:{
            opacity:1,
            zIndex:2

        },
        open:{
            opacity:0,
            zIndex:1
        }
    }

    const cardsVariantsInitial={
        streamingServicesOuter:{flex:'0 0 32%'},
        streamingServicesInner:{opacity: 1, zIndex:2},
        streamingServicesExtended:{opacity: 0, zIndex:1},
        closedCaptionsOuter:{flex:'0 0 32%'},
        closedCaptionsInner:{opacity: 1, zIndex:2},
        closedCaptionsExtended:{opacity: 0, zIndex:1},
        digitalCinemaOuter:{flex:'0 0 32%'},
        digitalCinemaInner:{opacity: 1, zIndex:2},
        digitalCinemaExtended:{opacity: 0, zIndex:1},
    }
    const cardsVariantsStreamingOpen={
        streamingServicesOuter:{flex:'0 0 93%'},
        streamingServicesInner:{opacity: 0, zIndex:1},
        streamingServicesExtended:{opacity: 1, zIndex:2},
        closedCaptionsOuter:{flex:'0 0 3%'},
        closedCaptionsInner:{opacity: 0, zIndex:1},
        closedCaptionsExtended:{opacity: 1, zIndex:2},
        digitalCinemaOuter:{flex:'0 0 3%'},
        digitalCinemaInner:{opacity: 1, zIndex:2},
        digitalCinemaExtended:{opacity: 0, zIndex:1},
    }
    const cardsVariantsDigitalOpen={
        streamingServicesOuter:{flex:'0 0 3%'},
        streamingServicesInner:{opacity: 1, zIndex:2},
        streamingServicesExtended:{opacity: 2, zIndex:1},
        closedCaptionsOuter:{flex:'0 0 3%'},
        closedCaptionsInner:{opacity: 0, zIndex:1},
        closedCaptionsExtended:{opacity: 1, zIndex:2},
        digitalCinemaOuter:{flex:'0 0 93%'},
        digitalCinemaInner:{opacity: 0, zIndex:1},
        digitalCinemaExtended:{opacity: 1, zIndex:2},
    }
    const [cardsVariants, cycleCardsVariants]= useCycle(cardsVariantsInitial, cardsVariantsStreamingOpen, cardsVariantsDigitalOpen)






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
                    <Link href="#formats"><motion.a className={`${styles.secondary_nav_inner_item2} ${currentNav=='formats'?styles.active_item2:''}`}>How it is easy</motion.a></Link>
                    <Link href="#features"><motion.a className={`${styles.secondary_nav_inner_item3} ${currentNav=='features'?styles.active_item3:''}`}>Designed for you</motion.a></Link>
                    <Link href="#editions"><motion.a className={`${styles.secondary_nav_inner_item4} ${currentNav=='editions'?styles.active_item4:''}`}>Samples</motion.a></Link>
                    <div className="sticky-nav_overlay" style={{"backgroundColor": "#fefefe"}}></div>
                </div>
            </div>

            {/*video section*/}
            <div style={{"marginTop":"230px"}} className={styles.content_inner}>
                <motion.div
                    layout
                    data-isOpen={isVideoOpen}
                    initial={{ borderRadius: 50 }}
                    className={styles.video_parent}
                    onClick={() => {setIsVideoOpen(!isVideoOpen); handleVideoPlay()}}
                >
                    <motion.div layout className={styles.video_play} ><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#fefefe"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/></svg></motion.div>

                    <motion.div
                        className={styles.video_actual}>

                        <video ref={videoRef} style={{width: 985, height: 554}}>
                            <source src="/videos/subass_video.mp4"/>

                        </video>
                    </motion.div>
                </motion.div>

            </div>


            {/*first section*/}
            <div style={{"marginTop":"320px", paddingTop:80}} ref={ref1} className={styles.content_inner} id='compatibility'>
                <div className={styles.content_inner_text}>
                        <div className={styles.paragraph}>
                            <h2 className={styles.subsection_title}>Prepare subtitles<br/>for any content</h2>
                            <p className={styles.subsection_description}>With EZTitles you can <span className={styles.text_highlight}>subtitle anything</span> – Streaming Services like <span className={styles.text_highlight}>Netflix, Apple iTunes, Amazon Prime, Hulu</span> and others, Open subtitles, Closed Captions, Digital Cinema, Blu-ray, Teletext, DVD/DVB Subtitles - and deliver your <span className={styles.text_highlight}>work in any file format</span><br/>your clients may require.</p>

                        </div>
                </div>
                <AnimateSharedLayout>
                <motion.div layout className={styles.card_wrapper_flex}>


                        {/*streaming services*/}
                        <motion.div variants={cardsVariants} animate='streamingServicesOuter' layout className={styles.card_flex}>
                            {/*shrunk part*/}
                            <motion.div
                                variants={cardsVariants}
                                animate='streamingServicesInner'
                                key='streaming'
                                className={styles.card_inner}>
                                <div className={styles.card_inner_title}>
                                    <h4>Streaming Services</h4>
                                </div>
                                <div className={styles.card_inner_description}>
                                    <p className={styles.card_inner_description_text}>EZTitles is designed to subtitle
                                        all major Streaming Services
                                        with a world class quality.</p>

                                </div>
                               <div className={styles.streaming_services_icons}>
                                   <MyImage src='/images/software/eztitles/Netflix.png' width={153} height={75}/>
                                   <MyImage src='/images/software/eztitles/hbo_max.png' width={153} height={75}/>
                                   <MyImage src='/images/software/eztitles/apple_tv_plus.png' width={153} height={75}/>
                                   <MyImage src='/images/software/eztitles/prime_video.png' width={153} height={75}/>
                                   <MyImage src='/images/software/eztitles/disney_plus.png' width={153} height={75}/>
                                   <MyImage src='/images/software/eztitles/hulu.png' width={153} height={75}/>

                               </div>

                                <div className={styles.card_inner_more_icon}>
                                    <motion.svg
                                        onClick={handleStreamingServices} xmlns="http://www.w3.org/2000/svg"
                                        height="48px" viewBox="0 0 20 20" width="48px" fill="#FFFFFF">
                                        <g>
                                            <rect fill="none" height="20" width="20"/>
                                            <path
                                                d="M10,4c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6S6.69,4,10,4 M10,3c-3.87,0-7,3.13-7,7c0,3.87,3.13,7,7,7 c3.87,0,7-3.13,7-7C17,6.13,13.87,3,10,3L10,3z M9.5,10v2.5c0,0.28,0.22,0.5,0.5,0.5h0c0.28,0,0.5-0.22,0.5-0.5V10H13l-3-3l-3,3 H9.5z"/>
                                        </g>
                                    </motion.svg>

                                </div>

                            </motion.div>
                            {/*extended part*/}
                            <motion.div
                                variants={cardsVariants}
                                animate='streamingServicesExtended'
                                key='initial'
                                className={styles.card_inner_extended}>
                                <div className={styles.card_inner_title_extended}>
                                    <div className={styles.card_inner_title_extended_icon}>
                                        <MyImage src='/images/software/eztitles/streaming-icon.svg' width={65} height={65}/>
                                    </div>
                                    <div className={styles.card_inner_title_extended_text}>
                                        <h4>Streaming Services an Open Subtitles</h4>
                                    </div>

                                </div>
                                <div className={styles.card_inner_extended_description}>
                                    <div className={styles.card_inner_extended_description_text}>
                                        <p className={styles.simple_text}>EZTitles is designed to comply with all the <span className={styles.text_highlight_bold}>Streaming Services</span>  as <span className={styles.text_highlight_bold}>Netflix, Disney+, Apple TV+, Amazon Prime, Hulu
                                        </span> and others, <span className={styles.text_highlight_bold}>TV broadcast, film</span> and <span className={styles.text_highlight_bold}>NLE standards</span>.</p>
                                    </div>
                                    <div className={styles.card_inner_extended_description_list}>
                                        <ul>
                                            <li className={styles.simple_text}>
                                                EZTitles is an official <Link href='#'><a className={styles.link}>Netflix Partner</a></Link> for Timed Text creation and works together with both Netflix and Disney
                                                on the easy and accurate fulfillment of their requirements with our products.
                                            </li>
                                            <li className={styles.simple_text}>
                                                With our subtitling tools you could work in any language - West, Central and East European, Arabic, Hebrew,
                                                Persian, South and East Asian, incl. <Link href='#'><a className={styles.link}>vertical orientation, Rubies and Bouten for Chinese, Japanese and
                                                Korean scripts</a></Link>.
                                            </li>
                                            <li className={styles.simple_text}>
                                                Export all industry standard <Link href='#'><a className={styles.link}>Timed Text and Open Subtitles File Formats</a></Link>.
                                            </li>
                                            <li className={styles.simple_text}>
                                                Always deliver perfect subtitles to meet your client’s requirements thanks to the automated <Link href='#'><a className={styles.link}>Checks and Fixes</a></Link>.
                                            </li>
                                            <li className={styles.simple_text}>
                                                EZTitles is fully geared up to prepare flawless SDH subtitles. They can be in the source language of the video,
                                                as they include important non-dialogue audio sound effects and speaker identification, or in foreign languages
                                                if needed. Overlaps, colors and precise text positioning on the screen are all supported by EZTitles.
                                            </li>
                                        </ul>

                                    </div>


                                </div>


                                <div className={styles.card_inner_extended_more_icon}>
                                    <motion.svg
                                        onClick={handleStreamingServices} xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24"
                                        width="48px" fill="#FFFFFF">
                                        <path d="M0 0h24v24H0V0z" fill="none"/>
                                        <path
                                            d="M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                    </motion.svg>

                                </div>

                            </motion.div>

                        </motion.div>
                        {/*closed captions plain*/}
                        <motion.div variants={cardsVariants} animate='closedCaptionsOuter'  layout className={styles.card_flex}>
                            <motion.div variants={cardsVariants}
                                        animate='closedCaptionsInner'
                                        className={`${styles.card_inner} ${styles.closed_captions}`}>
                                {!isStreamingServices && (<><div className={styles.card_inner_title}>
                                    <h4>Closed Captions</h4>
                                </div>
                                    <div className={styles.card_inner_description}>
                                    <p className={styles.card_inner_description_text}>EZTitles is a great software for
                                        Closed Captions creation.
                                        You can prepare stellar Roll-up,
                                        Paint-on and Pop-on Closed
                                        Captions stunningly fast in
                                        CEA-608, CEA-708
                                        or other file formats.</p>

                                    </div></>)}


                            </motion.div>
                        </motion.div>
                        {/*digital cinema*/}
                        <motion.div variants={cardsVariants} animate='digitalCinemaOuter' layout className={styles.card_flex}>

                                {/*shrunk part*/}
                                <motion.div
                                    variants={cardsVariants}
                                    animate='digitalCinemaInner'
                                    key='digital'
                                    className={styles.card_inner}>
                                    <div className={styles.card_inner_title}>
                                        <h4>Digital Cinema</h4>
                                    </div>
                                    <div className={styles.card_inner_description}>
                                        <p className={styles.card_inner_description_text}>Prepare quality subtitles for
                                            Digital Cinema and see
                                            exactly how they will look like
                                            on the theater’s screen in any
                                            resolution from 2K up to 4K.</p>
                                    </div>
                                    <div className={styles.digital_cinema_aspect_ratios}>
                                        <div className={styles.digital_cinema_resolution}>
                                            <p>Resolution</p>
                                            <ul>
                                                <li>1998 x 1080</li>
                                                    <li>2048 x 858</li>
                                                        <li>2048 x 1080</li>
                                                            <li>3996 x 2160</li>
                                                                <li>4096 x 1716</li>
                                                                    <li>4096 x 2160</li>
                                            </ul>
                                        </div>
                                        <div className={styles.digital_cinema_ratio}>
                                            <p>Aspect Ratio</p>
                                            <ul>
                                                <li>1.85 : 1</li>
                                                    <li>2.39 : 1</li>
                                                        <li>1.90 : 1</li>
                                                            <li>1.85 : 1</li>
                                                                <li>2.39 : 1</li>
                                                                    <li>1.90 : 1</li>
                                            </ul>

                                        </div>

                                    </div>

                                    <div className={styles.card_inner_more_icon}>
                                        <motion.svg
                                            onClick={handleDigitalCinema} xmlns="http://www.w3.org/2000/svg"
                                            height="48px" viewBox="0 0 20 20" width="48px" fill="#FFFFFF" style={{transform: 'rotate(-180deg)'}}>
                                            <g>
                                                <rect fill="none" height="20" width="20"/>
                                                <path
                                                    d="M10,4c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6S6.69,4,10,4 M10,3c-3.87,0-7,3.13-7,7c0,3.87,3.13,7,7,7 c3.87,0,7-3.13,7-7C17,6.13,13.87,3,10,3L10,3z M9.5,10v2.5c0,0.28,0.22,0.5,0.5,0.5h0c0.28,0,0.5-0.22,0.5-0.5V10H13l-3-3l-3,3 H9.5z"/>
                                            </g>
                                        </motion.svg>

                                    </div>

                                </motion.div>
                                {/*extended part*/}
                                <motion.div
                                    variants={cardsVariants}
                                    animate='digitalCinemaExtended'
                                    key='digital_extended'
                                    className={styles.card_inner_extended}>
                                    <div className={styles.card_inner_title_extended}>
                                        <div className={styles.card_inner_title_extended_icon}>
                                            <MyImage src='/images/software/eztitles/digital-icon.svg' width={65} height={65}/>
                                        </div>
                                        <div className={styles.card_inner_title_extended_text}>
                                            <h4>Digital Cinema</h4>
                                        </div>

                                    </div>
                                    <div className={styles.card_inner_extended_description}>
                                        <div className={styles.card_inner_extended_description_title}>
                                            <h4>Digital Cinema Ready</h4>
                                        </div>
                                        <div className={styles.card_inner_extended_description_text}>
                                            <p className={styles.simple_text} style={{marginTop:6}}>EZTitles supports Texas Instruments CineCanvas XML-based subtitles for the DLP Cinema projection system
                                                and the SMPTE 428-7-2014 DCDM (Digital Cinema Distribution Master) XML specifications.
                                                Get a 100% accurate preview of your subtitles in the exact way they appear on the theater’s screen.</p>
                                        </div>





                                    </div>
                                    <div className={styles.card_inner_extended_description}>
                                        <div className={styles.card_inner_extended_description_title}>
                                            <h4>Digital Cinema Mode</h4>
                                        </div>
                                        <div className={styles.card_inner_extended_description_text}>
                                            <p className={styles.simple_text} style={{marginTop:6}}>EZTitles has a dedicated presentation mode which complies with all the standards and requirements of
                                                Digital Cinema subtitling. The Digital Cinema mode supports the following image resolutions:</p>
                                        </div>
                                        <div className={styles.card_inner_extended_digital_cinema_list}>
                                            <ul>
                                                <li>1998 x 1080, 2K flat in 1.85 : 1 aspect ratio;</li>
                                                <li>2048 x 858, 2K scope in 2.39 : 1 aspect ratio;</li>
                                                <li>2048 x 1080, 2K full container in 1.90:1 aspect ratio;</li>
                                                <li>3996 x 2160, 4K flat in 1.85 : 1 aspect ratio;</li>
                                                <li>4096 x 1716, 4K scope in 2.39 : 1 aspect ratio;</li>
                                                <li>4096 x 2160, 4K full container in 1.90:1 aspect ratio.</li>
                                            </ul>

                                        </div>
                                        <div className={styles.card_inner_extended_description_text}>
                                            <p className={styles.simple_text} style={{marginTop:6}}>EZTitles covers the full range of the Digital Cinema subtitle specifications by adding support for the <Link href='#'><a className={styles.link}>ruby characters
                                                and vertical text</a></Link>. Subtitles containing ruby characters and vertical text can now be exported and imported as text
                                                or image-based subtitles for Digital Cinema. Check all <Link href='#'><a className={styles.link}>exporting options</a></Link>.</p>
                                        </div>



                                    </div>


                                    <div className={styles.card_inner_extended_more_icon}>
                                        <motion.svg
                                            onClick={handleDigitalCinema} xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24"
                                            width="48px" fill="#FFFFFF">
                                            <path d="M0 0h24v24H0V0z" fill="none"/>
                                            <path
                                                d="M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                        </motion.svg>

                                    </div>

                                </motion.div>



                        </motion.div>

                </motion.div>
                    <motion.div layout className={styles.card_wrapper_flex}>


                        {/*blue-ray services*/}
                        <motion.div variants={cardsVariants} animate='streamingServicesOuter' layout className={styles.card_flex}>
                            {/*shrunk part*/}
                            <motion.div
                                variants={cardsVariants}
                                animate='streamingServicesInner'
                                key='streaming'
                                className={styles.card_inner}>
                                <div className={styles.card_inner_title}>
                                    <h4>Blu-ray and DVD</h4>
                                </div>
                                <div className={styles.card_inner_description}>
                                    <p className={styles.card_inner_description_text}>EZTitles can create BDN subtitle
                                        files in compliance with all
                                        industry standards.
                                        Whether it is DVD, NLE or Blu-ray
                                        with EZTitles you can create
                                        subtitles for them all. Text script
                                        formats and high-quality
                                        anti-aliased images are available.</p>

                                </div>


                                <div className={styles.card_inner_more_icon}>
                                    <motion.svg
                                        onClick={handleStreamingServices} xmlns="http://www.w3.org/2000/svg"
                                        height="48px" viewBox="0 0 20 20" width="48px" fill="#FFFFFF">
                                        <g>
                                            <rect fill="none" height="20" width="20"/>
                                            <path
                                                d="M10,4c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6S6.69,4,10,4 M10,3c-3.87,0-7,3.13-7,7c0,3.87,3.13,7,7,7 c3.87,0,7-3.13,7-7C17,6.13,13.87,3,10,3L10,3z M9.5,10v2.5c0,0.28,0.22,0.5,0.5,0.5h0c0.28,0,0.5-0.22,0.5-0.5V10H13l-3-3l-3,3 H9.5z"/>
                                        </g>
                                    </motion.svg>

                                </div>

                            </motion.div>
                            {/*extended part*/}
                            <motion.div
                                variants={cardsVariants}
                                animate='streamingServicesExtended'
                                key='initial'
                                className={styles.card_inner_extended}>
                                <div className={styles.card_inner_title_extended}>
                                    <div className={styles.card_inner_title_extended_icon}>
                                        <MyImage src='/images/software/eztitles/blueray-icon.svg' width={65} height={65}/>
                                    </div>
                                    <div className={styles.card_inner_title_extended_text}>
                                        <h4>Blu-ray and DVD</h4>
                                    </div>

                                </div>
                                <div className={styles.card_inner_extended_description}>
                                    <div className={styles.card_inner_extended_description_text}>
                                        <p className={styles.simple_text} style={{marginTop:6}}>EZTitles can prepare BDN subtitle files in compliance with all industry standards. Whether it is DVD, NLE or Blu-ray.
                                            With EZTitles you can create subtitles for them all. Text script formats and high-quality anti-aliased images are
                                            available for the following systems:</p>
                                    </div>
                                    <div className={styles.card_inner_extended_digital_cinema_list}>
                                        <ul>
                                            <li>DaVinci Resolve,</li>
                                            <li>Sony Blu-print™,</li>
                                            <li>Sonic Scenarist HDMV (Blu-ray),</li>
                                            <li>Sonic Scenarist Advanced Contents (HD-DVD),</li>
                                            <li>Adobe® Encore® DVD,</li>
                                            <li>Apple® DVD Studio Pro®,</li>
                                            <li>Spruce DVD Maestro,</li>
                                            <li>Final Cut Pro®,</li>
                                            <li>Sony DoStudio,</li>
                                            <li>Sony DVD Architect and many more.</li>
                                        </ul>

                                    </div>
                                    <div className={styles.card_inner_extended_description_text}>
                                        <p className={styles.simple_text} style={{marginTop:6}}>Check <Link href='#'><a className={styles.link}>all supported formats</a></Link>.</p>
                                    </div>



                                </div>


                                <div className={styles.card_inner_extended_more_icon}>
                                    <motion.svg
                                        onClick={handleStreamingServices} xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24"
                                        width="48px" fill="#FFFFFF">
                                        <path d="M0 0h24v24H0V0z" fill="none"/>
                                        <path
                                            d="M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                    </motion.svg>

                                </div>

                            </motion.div>

                        </motion.div>
                        {/*teletext plain*/}
                        <motion.div variants={cardsVariants} animate='closedCaptionsOuter'  layout className={styles.card_flex}>
                            <motion.div variants={cardsVariants}
                                        animate='closedCaptionsInner'
                                        className={`${styles.card_inner} ${styles.teletext}`}>
                                {!isStreamingServices && (<><div className={styles.card_inner_title}>
                                    <h4>Teletext</h4>
                                </div>
                                    <div className={styles.card_inner_description}>
                                        <p className={styles.card_inner_description_text}>EZTitles easily prepare Teletext
                                            subtitles and even offers
                                            a specified profile preset for that.
                                            Just choose it and the program
                                            will change the interface to focus
                                            on the tools you’d mostly need
                                            to get the job done.</p>

                                    </div></>)}


                            </motion.div>
                        </motion.div>
                        {/*dvb plain*/}
                        <motion.div variants={cardsVariants} animate='closedCaptionsOuter'  layout className={styles.card_flex}>
                            <motion.div variants={cardsVariants}
                                        animate='closedCaptionsInner'
                                        className={`${styles.card_inner}`}>
                                {!isStreamingServices && (<><div className={styles.card_inner_title}>
                                    <h4>DVB Subtitles</h4>
                                </div>
                                    <div className={styles.card_inner_description}>
                                        <p className={styles.card_inner_description_text}>Generate ETSI EN 300 743
                                            compatible DVB subtitling
                                            elementary stream for
                                            muxing with ProMedia Carbon
                                            multiplexers. There is an option
                                            to export Generic DVB
                                            Elementary Stream as well.</p>

                                    </div></>)}


                            </motion.div>
                        </motion.div>

                    </motion.div>


                </AnimateSharedLayout>

            </div>
            {/*video format section*/}
                <div style={{"marginTop":"230px"}} className={styles.content_inner}>
                    <div className={styles.content_inner_text}>

                            <div className={styles.paragraph}>
                                <h2 className={styles.subsection_title}>Almost any Video File</h2>
                                <p className={styles.subsection_description} style={{textAlign:'center'}}>EZTitles works with nearly <span className={styles.text_highlight}>any known video format</span> with embedded timecodes.</p>

                            </div>

                    </div>
                    <div className={styles.video_format_wrapper}>

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



                    </div>





                </div>
        </div>
        </motion.div>
    )
}
