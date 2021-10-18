import styles from '../styles/subtitle.module.css'
import MyImage from "../components/myImage";
import Link from 'next/link'
import ReactTooltip from 'react-tooltip';
import FileFormatTabs from "../components/fileFormatTabs";
import {AnimatePresence, motion, useAnimation, useCycle} from "framer-motion"
import {stagger, fadeInUp, easing} from "../components/animations";
import {useEffect, useRef, useState} from "react";
import { useInView } from "react-intersection-observer";
import AnimateOnScroll from "../components/animateOnScroll";
import AnimateDirectionSlide from "../components/animateDirectionSlide";
import {useSpring} from "react-spring";
import {useRouter} from "next/router";


export default function Subtitle(){
    /*state management is below*/
    const [currentNav, setCurrentNav]=useState('none')
    const [isVideoOpen, setIsVideoOpen]=useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isPaymentSelected, setIsPaymentSelected] = useState('one-time');
    const [isStreamingServices, setIsStreamingServices] = useState(false);
    const [isClosedCaptions, setIsClosedCaptions] = useState(false);

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

                        <div className={styles.purchase_options}>
                            <div className={styles.product_version} key='one-time' onClick={()=>handlePaymentSelect('one-time')}>
                                <div className={styles.product_label_wrapper_off}>
                                    one-time

                                </div>

                            </div>


                            <div className={styles.product_version} key='rent' onClick={()=>handlePaymentSelect('rent')}>
                                <div className={styles.product_label_wrapper_off}>
                                    rent

                                </div>

                            </div>

                            <div className={styles.product_version} key='installment' onClick={()=>handlePaymentSelect('installment')}>
                                <div className={styles.product_label_wrapper_off}>
                                    installments

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
                                <select name="size" className="o-caption o-caption--bold js-size-select">

                                    <option value="6" selected="selected">1</option>

                                    <option value="6.5">2</option>

                                    <option value="7">3</option>

                                    <option value="7.5">4</option>

                                    <option value="8">5</option>

                                    <option value="8.5">6</option>

                                    <option value="9">7</option>

                                    <option value="9.5">8</option>


                                </select>
                                <span className={styles.arrow} aria-hidden="true">

        <svg viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1l4 4 4-4"></path>
        </svg>

</span>

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
                                <select name="size" className="o-caption o-caption--bold js-size-select">

                                    <option value="6" selected="selected">12 months (4 payments)</option>

                                    <option value="6.5">24 months (8 payments)</option>

                                    <option value="7">36 months (12 payments)</option>


                                </select>
                                <span className={styles.arrow} aria-hidden="true">

        <svg viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1l4 4 4-4"></path>
        </svg>

</span>

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
                    <motion.div layout className={styles.video_play} ><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#f107a3"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/></svg></motion.div>

                    <motion.div
                        className={styles.video_actual}>

                        <video ref={videoRef} style={{width: 985, height: 554}}>
                            <source src="/videos/subass_video.mp4"/>

                        </video>
                    </motion.div>
                </motion.div>

            </div>


            {/*first section*/}
            <div style={{"marginTop":"320px"}} className={styles.content_inner}>
                <div className={styles.content_inner_text}>
                    <AnimateOnScroll>
                        <div className={styles.paragraph}>
                            <h2 style={{"fontFamily": "'Montserrat', sans-serif","fontSize": "4.063em","fontWeight": "100 !important","padding": "0 0 20px","lineHeight": "63px"}}>Prepare subtitles for any content</h2>
                            <p><strong>With EZTitles you can subtitle anything – Streaming Services as Netflix, Apple iTunes, Amazon Prime,<br/> Hulu or others, Open subtitles, Closed Captions, Digital Cinema, Blu-ray, Teletext, DVD<br/>and DVB Subtitles - and deliver your work in any file format your clients may require.</strong></p>

                        </div>
                    </AnimateOnScroll>
                </div>
                <div className={styles.card_wrapper}>
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

                </div>


            </div>
            {/*second section*/}
            <div style={{"marginTop":"230px"}} className={styles.content_inner}>
                <div className={styles.content_inner_text}>
                    <AnimateOnScroll>
                        <div className={styles.paragraph}>
                            <h2 style={{"fontFamily": "'Montserrat', sans-serif","fontSize": "4.063em","fontWeight": "100 !important","padding": "0 0 20px","lineHeight": "63px"}}>Almost any Video File</h2>
                            <p><strong>EZTitles works with nearly any known video format with embedded timecode and supports MPEG-1,<br/>MPEG-2, MPEG-4, AVI, WMV, MXF, MKV and Apple QuickTime .MOV video files.</strong></p>

                        </div>
                    </AnimateOnScroll>
                </div>
                <div className={styles.dc}>
                    <div className={`${styles.dc_inner_vf} ${styles.text_focus_in} ${styles.dc_side}`}>
                        <div className={styles.dc_inner_content}>
                            <div className={styles.boxes_info}>
                                <Link href="/pages/Streaming_Services">
                                    <a>
                                        <div className={styles.center_elem}>
                                            <h3 className={styles.center_elem_text}>MPEG-1</h3>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.dc_inner_vf} ${styles.text_focus_in} ${styles.dc_side}`}>
                        <div className={styles.dc_inner_content}>
                            <div className={styles.boxes_info}>
                                <Link href="/pages/Streaming_Services">
                                    <a>
                                        <div className={styles.center_elem}>
                                            <h3 className={styles.center_elem_text}>MPEG-2</h3>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.dc_inner_vf} ${styles.text_focus_in} ${styles.dc_side}`}>
                        <div className={styles.dc_inner_content}>
                            <div className={styles.boxes_info}>
                                <Link href="/pages/Streaming_Services">
                                    <a>
                                        <div className={styles.center_elem}>
                                            <h3 className={styles.center_elem_text}>MPEG-4</h3>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.dc_inner_vf} ${styles.text_focus_in} ${styles.dc_side}`}>
                        <div className={styles.dc_inner_content}>
                            <div className={styles.boxes_info}>
                                <Link href="/pages/Streaming_Services">
                                    <a>
                                        <div className={styles.center_elem}>
                                            <h3 className={styles.center_elem_text}>AVI</h3>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.dc_inner_vf} ${styles.text_focus_in} ${styles.dc_side}`}>
                        <div className={styles.dc_inner_content}>
                            <div className={styles.boxes_info}>
                                <Link href="/pages/Streaming_Services">
                                    <a>
                                        <div className={styles.center_elem}>
                                            <h3 className={styles.center_elem_text}>WMV</h3>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.dc_inner_vf} ${styles.text_focus_in} ${styles.dc_side}`}>
                        <div className={styles.dc_inner_content}>
                            <div className={styles.boxes_info}>
                                <Link href="/pages/Streaming_Services">
                                    <a>
                                        <div className={styles.center_elem}>
                                            <h3 className={styles.center_elem_text}>Apple</h3>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.dc_inner_vf} ${styles.text_focus_in} ${styles.dc_side}`}>
                        <div className={styles.dc_inner_content}>
                            <div className={styles.boxes_info}>
                                <Link href="/pages/Streaming_Services">
                                    <a>
                                        <div className={styles.center_elem}>
                                            <h3 className={styles.center_elem_text}>MXF</h3>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.dc_inner_vf} ${styles.text_focus_in} ${styles.dc_side}`}>
                        <div className={styles.dc_inner_content}>
                            <div className={styles.boxes_info}>
                                <Link href="/pages/Streaming_Services">
                                    <a>
                                        <div className={styles.center_elem}>
                                            <h3 className={styles.center_elem_text}>MVF</h3>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>




            </div>
            {/*third section*/}
            <div style={{"marginTop":"230px"}} className={styles.content_inner}>
                <AnimateOnScroll>
                    <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 style={{"fontFamily": "'Montserrat', sans-serif","fontSize": "4.063em","fontWeight": "100 !important","padding": "0 0 20px","lineHeight": "63px"}}>Any type of resolution</h2>
                    </div>
                </div>
                </AnimateOnScroll>
                <AnimateOnScroll>
                    <div className={styles.dc}>
                        <div style={{"textAlign":"center"}} className={`${styles.dc_inner_res} ${styles.text_focus_in}`}>
                        <h1 className={styles.h1_res}>from SD<small className={styles.very_small}>(640x480)</small> up to 4k<small className={styles.very_small}>(4096x2160)</small></h1>
                        <div className={styles.dc_inner_content_res}>
                            <div className={styles.boxes_info_res}>
                                <div className={`${styles.res_ultra} ${styles.scale_in_bl_3}`}><div className={styles.res_inner}><h1 className={styles.res_size_ultra}>4096x2160</h1><div className={styles.res_name}><p>4K</p></div></div></div>
                                <div className={`${styles.res_full} ${styles.scale_in_bl_2}`}><div className={styles.res_inner}><h1 className={styles.res_size_full}>1920x1080</h1><div className={styles.res_name}><p>FULL HD</p></div></div></div>
                                <div className={`${styles.res_hd} ${styles.scale_in_bl_1}`}><div className={styles.res_inner}><h1 className={styles.res_size_hd}>1366x738</h1><div className={styles.res_name}><p>HD</p></div></div></div>
                                <div className={`${styles.res_sd} ${styles.scale_in_bl}`}><div className={styles.res_inner}><h1 className={styles.res_size_sd}>640x480</h1><div className={styles.res_name}><p>SD</p></div></div></div>

                            </div>

                        </div>
                    </div>


                     </div>
                </AnimateOnScroll>




            </div>
            {/*fourth section*/}
        <AnimateOnScroll>
            <div style={{"marginTop":"230px"}} className={styles.content_inner}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 style={{"fontFamily": "'Montserrat', sans-serif","fontSize": "4.063em","fontWeight": "100 !important","padding": "0 0 20px","lineHeight": "63px"}}>and any screen ratio</h2>

                    </div>
                </div>
                <div className={styles.dc_ratio}>
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




            </div>

        </AnimateOnScroll>
            {/*fifth section*/}

                <div style={{"marginTop":"230px"}} className={styles.content_inner}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 style={{"fontFamily": "'Montserrat', sans-serif","fontSize": "4.063em","fontWeight": "100 !important","padding": "0 0 20px","lineHeight": "63px"}}>in any language</h2>
                        <h2 className={styles.tracking_in_expand}><span className={styles.highlight}>in jeder Sprache</span> <span>in qualsiasi
                            lingua</span> <span className={styles.highlight}>на любом языке</span> <span>herhangi bir dilde</span> <span className={styles.highlight}>بأي
                            لغة</span> <br/><br/>

                            <span>dans n'importe quelle langue</span> <span className={styles.highlight}>בכל שפה</span> <span>bármilyen nyelven</span> <span>em qualquer
                                idioma</span> <br/><br/>

                            <span>Σε οποιαδήποτε γλώσσα</span> <span className={styles.highlight}>किसी भी भाषा में</span> <span className={styles.highlight}>En cualquier idioma</span> <span className={styles.highlight}>In elke taal</span> <br/><br/>

                            <span>På ethvert sprog</span> <span className={styles.highlight}>Na bilo kojem jeziku</span> <span>あらゆる言語で</span> <span className={styles.highlight}>Noma yiluphi ulimi</span> </h2>

                    </div>
                </div>




            </div>

            {/*sixth section*/}
            <div style={{"marginTop":"230px"}} className={styles.content_inner}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 style={{"fontFamily": "'Montserrat', sans-serif","fontSize": "2.3em","fontWeight": "100 !important","padding": "0 0 20px","lineHeight": "63px"}}>Vertical orientation, Horizontal groups,<br/>Rubies and Bouten for East Asian scripts</h2>
                        <MyImage src="/images/vertical-orientation-horizontal-text.svg" width={800} height={80}/>
                            <div className={styles.vertical_horizontal}>
                                <div className={styles.vertical_horizontal_inner}>
                                    <p>With EZTitles you can input text in the vertical direction common for the Chinese, Japanese
                                    and Korean language scripts. An interesting requirement can be identified as the need to
                                    display horizontal and vertical text simultaneously on the screen. In EZTitles this can be
                                        achieved easily by using two subtitle tracks.</p>

                                    <p>Most of the time the non-Asian text inserted in a vertical subtitle doesn’t need to be
                                    rotated but there are cases for which the text should remain easily readable. EZTitles is
                                    able to satisfy this requirement as well by marking the non-Asian text as Horizontal Group.</p>

                                    <p>Another feature is the ability to insert Rubies above or below (if horizontally oriented) or
                                        to the right or left side (if vertically oriented) of the letters.</p>
                                </div>
                                <div className={styles.vertical_horizontal_inner}>
                                    <p>The Rubies’ traditional purpose is to give additional information about the pronunciation of
                                    particular characters and symbols, considering the complexity of the Asian scripts, which
                                    may be otherwise unknown to the reader.</p>

                                    <p>The Phonetic Guide provides the option to insert rubies for the whole phrase or only for the
                                    symbol that requires it. This tool can also be used for emphasizing part of the text or it
                                    is also known as inserting a Bouten.</p>

                                    <p>With the Asian Text Font option, EZTitles can display different fonts for Asian and
                                    non-Asian text pieces inserted to the same line. The Asian-font text has the same font size
                                        as the regular-font text.</p>
                                </div>
                        </div>
                        <MyImage src="/images/vertical-orientation-vertical-text.svg" width={158} height={800}/>

                    </div>
                </div>




            </div>
            {/*seventh section*/}
            <div style={{"marginTop":"230px"}} className={styles.content_inner} id='formats' ref={ref2}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 style={{"fontFamily": "'Montserrat', sans-serif","fontSize": "2.3em","fontWeight": "100 !important","padding": "0 0 20px","lineHeight": "63px"}}>Export your work in any file format<br/>used in the industry today</h2>
                        <p>69 file formats</p>
                        <div className={styles.file_format_tabs_wrapper}>
                            <FileFormatTabs/>
                        </div>

                    </div>
                </div>




            </div>
            {/*eighth section*/}
            <div style={{"marginTop":"230px"}} className={styles.content_inner}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 style={{"fontFamily": "'Montserrat', sans-serif","fontSize": "2.3em","fontWeight": "100 !important","padding": "0 0 20px","lineHeight": "63px"}}>EZTitles offers an ocean of useful features and<br/>automations to help your subtitling endeavours.</h2>
                        <div className={styles.features_wrapper}>
                            <div className={styles.feature}>
                                <div className={styles.feature_text}>
                                    <h2 className={styles.feature_title}>Shot change detection</h2>
                                    <p>
                                        Our stellar shot change detection will help you cue subtitles with an unprecedented accuracy.
                                        <br/>EZTitles detects shot changes on its own, on the fly, in background and without any additional software or set-ups needed.
                                        <br/>This means you can use EZTitles and all its features for subtitling while the video file is still being processed.
                                        <br/>And there are also tools for fixing existing subtitles to meet the shot change requirements.

                                    </p>
                                </div>
                                <div className={styles.feature_image}>
                                   <MyImage src="/images/shots/01-shot-detection-img.png" width={1111} height={1111}/>

                                </div>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.feature_text}>
                                    <h2 className={styles.feature_title}>A proper Timeline</h2>
                                    <p>It displays not only the audio and video tracks but also the boundaries of subtitles and shot changes. Navigation is as simple as it can get. For example, you can drag a subtitle’s in- and out-cues to a new position just using the mouse — and they will auto-snap to shot changes in vicinity.</p>
                                        <p>Moreover, the EZTitles timeline can display your video as a strip of consecutive frames, making it easy to find the exact position of a hidden shot change, or even to precisely snap a subtitle’s cue to the shot change by hand.</p>
                                            <p>A great feature of EZTitles is you could have a second track on the Timeline which can be used for overlapping subtitles, loading a script for reference or more useful purposes.</p>
                                </div>
                                <div className={styles.feature_image}>
                                    <MyImage src="/images/shots/02-proper-timeline.png" width={600} height={600}/>

                                </div>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.feature_text}>
                                    <h2 className={styles.feature_title}>Subtitling Assistant</h2>
                                    <p>Subtitling Assistant is THE next gen smart feature we’ve implemented into EZTitles intended to automate the process of creating Closed Captions both Pop-on and Roll-up, SDH Subtitles or Master Translation Templates in the same language.</p>
                                    <div className={styles.free_trial}>LEARN MORE</div>
                                </div>
                                <div className={styles.feature_image}>
                                    <MyImage src="/images/shots/03-offer-img-2.png" width={1111} height={800}/>

                                </div>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.feature_text}>
                                    <h2 className={styles.feature_title}>Split text to subtitles</h2>
                                    <p>The Split text to subtitles feature can serve many purposes, but it is best described as an advanced set of tools for splitting any block of text into individual subtitles. The result will strictly comply with all the requirements for the minimum interval between subtitles, minimum and maximum durations, reading speed, line length restrictions and so on.</p>
                                    <p>The Auto-Adjust can simultaneously perform multiple operations depending on the options you activate. In general, it word-wraps and splits your text to optimally fill the lines, splits it into individual subtitles and finally (re)calculates the in- and out-cues of the resulting new subtitles.</p>
                                    <p>You can simply skip the non-speech scenes and focus on the relevant parts, and you can even split a block of text into proper subtitles by using the Auto-Adjust feature in conjunction with the Continuous Typing Workflow.</p>
                                </div>
                                <div className={styles.feature_image}>
                                    <MyImage src="/images/shots/04-split-text-img.png" width={600} height={600}/>

                                </div>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.feature_text}>
                                    <h2 className={styles.feature_title}>Comprehensive Checks<br/>Quality Control<br/>Fix Subtitles</h2>
                                    <p>Comprehensive checks are done in background, they indicate inconsistent cues as well as reading speed and safe area problems. </p>
                                    <p>EZTitles offers you a wide range of tools to give you full control over your subtitles. You can check your project for inconsistent cues, reading speed/safe area problems, raised subtitles and snap thresholds. You can even check your subtitles’ visual attributes - fonts, color, alignment, box style, outline, italics and double height - for any issues.</p>
                                    <p>The Fix Subtitles tool cleans your project file based on multiple rules of your choice. You can fix intervals, empty out-cues, subtitles below or above the reading speed, raised subtitles; you can also delete empty subtitles and do many other useful things. If you happen to have messed up some of the subtitles, you can fix them fast and easy without having to start from scratch.</p>
                                    <p>EZTitles will also warn you if any attributes or features you’ve used are not supported by the file format you’re exporting your subtitles for.</p>
                                </div>
                                <div className={styles.feature_image}>
                                    <MyImage src="/images/shots/05-comprehensive-check-img.png" width={600} height={600}/>

                                </div>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.feature_text}>
                                    <h2 className={styles.feature_title}>Proofing Tools</h2>
                                    <p>With its army of useful features, EZTitles will help you work faster than ever before! Autocorrect, Short Forms, Thesaurus, Spelling Suggestions, Negative Dictionaries, Unit Converter, and Web Search to search for a word or phrase on the Internet — EZTitles got all this covered for you! And all these tools can be customized to fit your needs and help you focus on the most important part of job – the subtitling itself.</p>
                                    <p>EZTitles can work with Microsoft Office, Open Office or LibreOffice for the spellcheck. </p>
                                 </div>
                                <div className={styles.feature_image}>
                                    <MyImage src="/images/shots/06-proofing-tools-img.png" width={600} height={600}/>

                                </div>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.feature_text}>
                                    <h2 className={styles.feature_title}>Macros</h2>
                                    <p>With its army of useful features, EZTitles will help you work faster than ever before! Autocorrect, Short Forms, Thesaurus, Spelling Suggestions, Negative Dictionaries, Unit Converter, and Web Search to search for a word or phrase on the Internet — EZTitles got all this covered for you! And all these tools can be customized to fit your needs and help you focus on the most important part of job – the subtitling itself.</p>
                                </div>
                                <div className={styles.feature_image}>
                                    <MyImage src="/images/shots/07-macros-img.png" width={600} height={600}/>

                                </div>
                            </div>


                        </div>

                    </div>
                </div>




            </div>
            {/*ninth section*/}
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
            {/*eleventh section*/}
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
            {/*twelfth section*/}
            <div style={{"marginTop":"80px", "paddingBottom":"30px"}} className={styles.content_inner}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 style={{"fontFamily": "'Montserrat', sans-serif","fontSize": "2.3em","fontWeight": "100 !important","padding": "0 0 20px","lineHeight": "63px"}}>Find the right solution for you!</h2>
                        <Link href="/buy/product?eztitles"><a><motion.button  whileHover={{scale:1.1}} whileTap={{scale:0.9}} className={styles.get_now}>GET NOW</motion.button></a></Link>

                    </div>
                </div>




            </div>

        </div>
        </motion.div>
    )
}
