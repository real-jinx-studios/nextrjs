import styles from "../styles/subtitle.module.css";
import MyImage from "../components/utils/myImage";
import Link from "next/link";
import ReactTooltip from "react-tooltip";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useCycle,
  useViewportScroll,
  useTransform,
  AnimateSharedLayout,
} from "framer-motion";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/layout";
import { Store } from "../utils/store";
import ProductFeaturesSection from "../components/products/eztitles/product_features_section";
import FileFormatsSection from "../components/products/eztitles/file_formats_section";
import TimelineSection from "../components/products/eztitles/timeline_section";
import LicenseOptionsSection from "../components/products/eztitles/license_options_section";
import ProductPageNav from "../components/navigation/ProductPageNav";
import SubtitlesForAnything from "../components/products/eztitles/SubtitlesForAnything";

export default function Subtitle() {
  /*intersection observer shit*/

  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();

  /*some more impractical bullshit about product prices*/
  const prices = {
    essentials: {
      ot: "1720",
      rent: "80",
      installment: "436",
      installment_contd: "435",
    },
    standard: {
      ot: "1940",
      rent: "90",
      installment: "491",
      installment_contd: "490",
    },
    ultimate: {
      ot: "2380",
      rent: "100",
      installment: "601",
      installment_contd: "600",
    },
  };

  /*state management is below*/
  const [currentNav, setCurrentNav] = useState("none");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRentDropdownOpen, setIsRentDropdownOpen] = useState(false);
  const [isInstallmentDropdownOpen, setIsInstallmentDropdownOpen] =
    useState(false);
  const [isPaymentSelected, setIsPaymentSelected] = useState("one-time");

  /*viewport scroll handlers*/
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  /*scrolling triggers below for components in view*/
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const videoRef = useRef();
  const router = useRouter();

  /*event handlers like clicks and such below*/
  const handleVideoPlay = () => {
    if (videoRef.current.paused) videoRef.current.play();
    else videoRef.current.pause();
  };
  const handlePaymentSelect = (e) => {
    setIsPaymentSelected(e);
  };

  const toggleRentDropdown = () => setIsRentDropdownOpen(!isRentDropdownOpen);
  const toggleInstallmentDropdown = () =>
    setIsInstallmentDropdownOpen(!isInstallmentDropdownOpen);

  /*animation setup is below*/
  const dropdownAnimVariantOption1 = {
    initial: {
      opacity: 0,
      y: -75,
    },
    animate: {
      opacity: 1,
      y: 2,
      transition: {
        type: "tween",
        duration: 0.12,
        ease: [0.68, -0.55, 0.27, 1.55],
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.2,
      },
    },
  };
  const dropdownAnimVariantOption2 = {
    initial: {
      opacity: 0,
      y: -75,
    },
    animate: {
      opacity: 1,
      y: 3.5,
      transition: {
        type: "tween",
        delay: 0.096,
        duration: 0.12,
        ease: [0.68, -0.55, 0.27, 1.55],
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.2,
      },
    },
  };
  /*dynamic element generation*/
  const toggleDropdown = (e) => {
    setIsDropdownOpen(!isDropdownOpen);
    setLicense(e);
  };

  const license_editions = [
    {
      name: "Essentials",
      info: "For subtitling streaming services.",
    },
    {
      name: "Standard",
      info: "For more standard sub stuff.",
    },
    {
      name: "Ultimate",
      info: "for tesla owners.",
    },
  ];
  const [license, setLicense] = useState("Essentials");
  const liOptionsElement = license_editions.map((x, i) => {
    if (x.name != license) {
      return (
        <motion.div
          variants={
            i == 1 ? dropdownAnimVariantOption1 : dropdownAnimVariantOption2
          }
          initial="initial"
          animate="animate"
          exit="exit"
          className={styles.version_dropdown}
          onClick={() => {
            toggleDropdown(x.name);
          }}
          key={x.name}
        >
          <div key={i} className={styles.option_version}>
            <div className={styles.version_inner}>
              <h2 data-tip data-for={`info ${i}`}>
                {x.name}
                {/*  <svg className={styles.version_info_icon} xmlns="http://www.w3.org/2000/svg" height="18px"
                                 viewBox="0 0 24 24" width="18px" fill="#000000">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path
                                    d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                            </svg>*/}
              </h2>
              <ReactTooltip id={`info ${i}`} type="info">
                <span>{x.info}</span>
              </ReactTooltip>
            </div>
          </div>
        </motion.div>
      );
    }
  });
  const liSelectedElement = license_editions.map((x, i) => {
    if (x.name == license) {
      return (
        <div
          key={x.name}
          className={styles.version_dropdown}
          onClick={() => {
            toggleDropdown(x.name);
          }}
        >
          <div className={styles.selected_version}>
            <div className={styles.version_inner}>
              <h2 data-tip data-for={`info ${i}`}>
                {x.name}
                {/* <svg className={styles.version_info_icon} xmlns="http://www.w3.org/2000/svg" height="18px"
                                 viewBox="0 0 24 24" width="18px" fill="#000000">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path
                                    d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                            </svg>*/}
              </h2>
              <ReactTooltip id={`info ${i}`} type="info">
                <span>{x.info}</span>
              </ReactTooltip>
            </div>
          </div>
          {!isDropdownOpen && (
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.version_dropdown_svg}
              xmlns="http://www.w3.org/2000/svg"
              height="36px"
              viewBox="0 0 24 24"
              width="36px"
              fill="#FFFFFF"
            >
              <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
              <path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z" />
            </motion.svg>
          )}
          {isDropdownOpen && (
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.version_dropdown_svg}
              xmlns="http://www.w3.org/2000/svg"
              height="36px"
              viewBox="0 0 24 24"
              width="36px"
              fill="#FFFFFF"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M0 0h24v24H0V0z"
                fill="none"
              />
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
              />
            </motion.svg>
          )}
        </div>
      );
    }
  });

  const { state, dispatch } = useContext(Store);
  const handleCheckout = async (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_CHECKOUT_NORMAL",
      payload: {
        name: "EZTitles",
        icon: "/images/icons/ez_icon3.png",
        edition: "essentials",
        license: "Rent",
        duration: "1",
        quantity: 1,
        price: 80,
      },
    });
    /*router.push("/user");*/
    router.push("/user?destination=checkout");
  };
  const handleCheckoutConvert = async (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TO_CHECKOUT_NORMAL",
      payload: {
        name: "EZConvert",
        icon: "/images/icons/ezc_icon3.png",
        edition: "PROFESSIONAL",
        license: "Purchase",
        duration: "lifetime",
        quantity: 1,
        price: 6800,
      },
    });
    router.push("/checkout/#");
  };
  const handleCheckoutPlugins = async (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_CHECKOUT_NORMAL",
      payload: {
        name: "EZT Plugins",
        icon: "/images/icons/ep_icon3.png",
        edition: "ProMedia Carbon",
        license: "Purchase",
        duration: "lifetime",
        quantity: 1,
        price: 500,
      },
    });
    router.push("/user");
  };

  return (
    <Layout
      title="EZTitles subtitle software"
      description="Subtitle anything with the worlds most advanced subtitling and captioning software!"
    >
      <Head>
        <meta
          name="google-site-verification"
          content="ysxVMioFPf2YJs3BRu3gefvPmShIoplEtnSp3FJJbAg"
        />
      </Head>
      <div className={styles.video_background}>
        <video autoPlay loop>
          <source src="/videos/hero-eztitles.webm" type="video/webm" />
        </video>
      </div>
      <motion.header className={styles.main_wrapper} ref={ref}>
        {/*eztitles purchase menu*/}
        <motion.div className={styles.page_top}>
          <div className={styles.page_top_grid}>
            <div className={styles.title_desc_cell}>
              <h1 className={styles.main_title_description_text}>
                The world’s best professional subtitling and captioning software
              </h1>
            </div>
            <div className={styles.title_cell}>
              <h2 className={styles.main_title_text}>EZTITLES</h2>
            </div>
            <div className={styles.free_trial_cell}>
              <input
                className="chk"
                type="checkbox"
                id="button-mover-trigger"
              />

              <Link href="/products/free-trial">
                <a className="button button_basic_long">FREE TRIAL</a>
              </Link>
              <label htmlFor="button-mover-trigger">
                <div className="chk_trigger"></div>
              </label>
            </div>
            <div className={styles.license_editions_cell}>
              <a
                onClick={handleCheckoutPlugins}
                href="#"
                className="button button_basic_long"
              >
                LICENSE EDITIONS
              </a>
            </div>
            <div className={styles.pricing_cell}>
              <h4 className={styles.pricing_options_description_title}>
                CHECK PRICING OPTIONS
                <br />
                <span>
                  EZTitles license editions differ only in the supported file
                  formats
                </span>
              </h4>
            </div>
            <div className={styles.dropdown_cell}>
              <div className={styles.dropdown_menu}>
                <select className={styles.select_custom}>
                  <option value="">ESSENTIAL</option>
                  <option value="">STANDARD</option>
                  <option value="">ULTIMATE</option>
                </select>
                <span className={styles.custom_arrow}></span>
              </div>
              {/*         <select className={styles.version_dropdown_select}>
                <option value="essentials">Essentials</option>
                <option value="standard">Standard</option>
                <option value="ultimate">Ultimate</option>
              </select>
              {liSelectedElement}

              <AnimatePresence exitBeforeEnter>
                {isDropdownOpen && <>{liOptionsElement}</>}
              </AnimatePresence>*/}
            </div>

            <div className={styles.payment_select_cell}>
              <p className={styles.payment_text_cell_text}>Payment:</p>
              <div className={styles.select}>
                <div className={styles.purchase_options}>
                  <div
                    className={styles.product_version}
                    key="one-time"
                    onClick={() => handlePaymentSelect("one-time")}
                  >
                    <div
                      className={
                        isPaymentSelected == "one-time"
                          ? styles.product_label_wrapper_on
                          : styles.product_label_wrapper_off
                      }
                    >
                      one-time
                    </div>
                  </div>

                  <div
                    className={styles.product_version}
                    key="rent"
                    onClick={() => handlePaymentSelect("rent")}
                  >
                    <div
                      className={
                        isPaymentSelected == "rent"
                          ? styles.product_label_wrapper_on
                          : styles.product_label_wrapper_off
                      }
                    >
                      rent
                    </div>
                  </div>

                  <div
                    className={styles.product_version}
                    key="installment"
                    onClick={() => handlePaymentSelect("installment")}
                  >
                    <div
                      className={
                        isPaymentSelected == "installment"
                          ? styles.product_label_wrapper_on
                          : styles.product_label_wrapper_off
                      }
                    >
                      installments
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.payment_installment_cell}>
              <p className={styles.text_installment}>
                1 payment of €436 and 3 payments of €435
              </p>
              <div className={styles.dropdown_menu}>
                <select className={styles.select_custom}>
                  <option value="">12 Months (4 payments)</option>
                  <option value="">24 Months (8 payments)</option>
                  <option value="">36 Months (12 payments)</option>
                </select>
                <span className={styles.custom_arrow}></span>
              </div>
            </div>
            <div className={styles.checkout_btn_cell}>
              <a
                href="/user-login"
                onClick={handleCheckout}
                className="button button_basic_long"
              >
                GO TO CHECKOUT
              </a>
            </div>
            <div className={styles.checkout_price_cell}>
              {isPaymentSelected == "one-time" && (
                <p className={styles.price_text}>
                  {prices[license.toLowerCase()].ot}€ w/o VAT<sup>*</sup>
                </p>
              )}
              {isPaymentSelected == "rent" && (
                <p className={styles.price_text}>
                  {prices[license.toLowerCase()].rent}€ w/o VAT
                  <br />
                  <small>per/MO.</small>
                </p>
              )}
              {isPaymentSelected == "installment" && (
                <p className={styles.price_text}>
                  1 x {prices[license.toLowerCase()].installment}€ w/o VAT
                  <br />
                  <small>then</small>
                  <br />
                  <small>
                    3<small> x </small>
                    {prices[license.toLowerCase()].installment_contd}€ w/o VAT
                  </small>
                </p>
              )}
            </div>
            <div className={styles.payment_info_cell}>
              <p>
                &#127544; Edit stuff at checkout. Add whatever you want or not.
                &#127544;
              </p>
            </div>
            <div className={styles.arrow_cell}>
              <div className={styles.scroll_down_svg}>
                <Link href="#video">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 50 50"
                      height="48px"
                      viewBox="0 0 50 50"
                      width="48px"
                      fill="#FFFFFF"
                    >
                      <path d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15  c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422  C15.172,39.813,15.172,40.446,15.563,40.836z" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.header>
      <div className={styles.content_wrapper}>
        <ProductPageNav />

        {/*video section*/}
        <section ref={section1} className={styles.video_section}>
          <div className={styles.container} id="video">
            <div className={styles.content_inner_text}>
              <div className={styles.paragraph}>
                <h2 className={styles.subsection_title}>
                  Take a quick look at EZTitles’ capabilities
                </h2>
              </div>
            </div>
            <AnimateSharedLayout>
              <motion.div className={styles.video_wrapper}>
                <motion.div
                  layout
                  data-isopen={isVideoOpen}
                  initial={{ borderRadius: 50 }}
                  className={styles.video_parent}
                  onClick={() => {
                    setIsVideoOpen(!isVideoOpen);
                    handleVideoPlay();
                  }}
                >
                  <motion.div layout className={styles.video_play}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48px"
                      viewBox="0 0 24 24"
                      width="48px"
                      fill="#fefefe"
                    >
                      <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                    </svg>
                  </motion.div>

                  <motion.div className={styles.video_actual}>
                    <video
                      ref={videoRef}
                      style={{ maxWidth: 985, maxHeight: 554 }}
                    >
                      <source src="/videos/subass_video.mp4" />
                    </video>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimateSharedLayout>
            <div className={styles.content_inner_text}>
              <div className={styles.paragraph}>
                <h2 className={styles.subsection_title}>
                  and explore its full power
                </h2>
              </div>
              <div className={styles.scroll_down_svg}>
                <Link href="#compatibility">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 50 50"
                      height="48px"
                      viewBox="0 0 50 50"
                      width="48px"
                      fill="#FFFFFF"
                    >
                      <path d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15  c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422  C15.172,39.813,15.172,40.446,15.563,40.836z" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SubtitlesForAnything />
        {/*video format resolution and aspect ratio section*/}
        <section ref={section3} className={styles.video_format_section}>
          <div className={styles.v_r_a_video_background}>
            <video autoPlay loop muted>
              <source src="/videos/noway_cut.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles.container}>
            <div
              className={styles.content_inner_text}
              style={{ flex: "unset" }}
            >
              <div className={styles.paragraph}>
                <h2 className={styles.v_r_a_title}>Subtitle any video file</h2>
              </div>
            </div>
            {/*commented out sections using grid*/}
            {/*<div className={styles.video_resolution_aspect_wrapper}>

                        <div className={styles.v_r_a_card}>
                            <div className={`${styles.v_r_a_card_inner}`}>
                              <div className={styles.v_r_a_card_inner_title}>
                                    <h4>any file format</h4>
                                </div>
                                    <div className={styles.v_r_a_card_inner_description}>
                                        <p className={styles.v_r_a_card_inner_description_text}>EZTitles works with nearly
                                            any known video format
                                            with embedded timecode</p>

                                    </div>
                                <div className={styles.v_r_a_card_inner_format_wrapper}>
                                    <ul>
                                        <li>MPEG-1</li>
                                        <li>MPEG-2</li>
                                        <li>MPEG-4</li>
                                        <li>AVI</li>
                                    </ul>
                                    <ul>
                                        <li>WMV</li>
                                        <li>MOV</li>
                                        <li>MXF</li>
                                        <li>MVF</li>
                                    </ul>

                                </div>


                            </div>
                        </div>

                        <div className={styles.v_r_a_card}>
                            <div className={`${styles.v_r_a_card_inner}`}>
                              <div className={styles.v_r_a_card_inner_title}>
                                    <h4>any resolution</h4>
                                </div>
                                    <div className={styles.v_r_a_card_inner_description}>
                                        <p className={styles.v_r_a_card_inner_description_text}>from SD up to 4K
                                            and any custom resolution</p>

                                    </div>
                                <div className={styles.v_r_a_card_inner_format_wrapper_resolution}>
                                    <ul>
                                        <li><span>SD<br/>640x480</span></li>
                                        <li><span>HD<br/>1280x720</span></li>
                                        <li><span>FULL HD<br/>1920x1080</span></li>
                                        <li><span>4K<br/>4096x2160</span></li>
                                    </ul>

                                </div>


                            </div>
                        </div>

                        <div className={styles.v_r_a_card}>
                            <div className={`${styles.v_r_a_card_inner}`}>
                                <div className={styles.v_r_a_card_inner_title}>
                                    <h4>any screen ratio</h4>
                                </div>
                                <div className={styles.v_r_a_card_inner_format_wrapper_ratio}>
                                    <ul>
                                        <li>
                                            <span>16:10</span>
                                            <div className={styles.ratio_icons}>
                                                <MyImage src='/images/software/eztitles/computer-widescreen.png' width={35} height={35}/>
                                                <MyImage src='/images/software/eztitles/pc.png' width={35} height={35}/>
                                                <MyImage src='/images/software/eztitles/smartphone.png' width={35} height={35}/>

                                            </div>
                                        </li>
                                        <li>
                                        <span>16:9</span>
                                        <div className={styles.ratio_icons}>
                                            <MyImage src='/images/software/eztitles/computer-widescreen.png' width={35} height={35}/>
                                            <MyImage src='/images/software/eztitles/tv.png' width={35} height={35}/>
                                            <MyImage src='/images/software/eztitles/smartphone.png' width={35} height={35}/>

                                        </div>
                                    </li>
                                        <li>
                                        <span>1.85:1</span>
                                        <div className={styles.ratio_icons}>
                                            <MyImage src='/images/software/eztitles/cinema.png' width={35} height={35}/>

                                        </div>
                                    </li>
                                        <li>
                                            <span>2.35:1</span>
                                            <div className={styles.ratio_icons}>
                                                <MyImage src='/images/software/eztitles/movie-reel.png' width={35} height={35}/>

                                            </div>
                                        </li>

                                    </ul>
                                    <ul>
                                        <li>
                                            <span>1:1</span>
                                            <div className={styles.ratio_icons}>
                                                <MyImage src='/images/software/eztitles/social_media.png' width={35} height={35}/>

                                            </div>
                                        </li>
                                        <li>
                                            <span>5:4</span>
                                            <div className={styles.ratio_icons}>
                                                <MyImage src='/images/software/eztitles/pc.png' width={35} height={35}/>

                                            </div>
                                        </li>
                                        <li>
                                            <span>3:2</span>
                                            <div className={styles.ratio_icons}>
                                                <MyImage src='/images/software/eztitles/film.png' width={35} height={35}/>
                                                <MyImage src='/images/software/eztitles/camera.png' width={35} height={35}/>
                                                <MyImage src='/images/software/eztitles/tablet.png' width={35} height={35}/>

                                            </div>
                                        </li>
                                    </ul>

                                </div>


                            </div>
                        </div>




                    </div>*/}
            {/*section using flex for more responsiveness*/}
            <div className={styles.video_resolution_aspect_wrapper_flex}>
              {/*file format card*/}
              <div className={styles.v_r_a_card_flex}>
                <div className={`${styles.v_r_a_card_inner}`}>
                  <div className={styles.v_r_a_card_inner_title}>
                    <h4>any file format</h4>
                  </div>
                  <div className={styles.v_r_a_card_inner_description}>
                    <p className={styles.v_r_a_card_inner_description_text}>
                      EZTitles works with nearly any known video format with
                      embedded timecode
                    </p>
                  </div>
                  <div className={styles.v_r_a_card_inner_format_wrapper}>
                    <ul>
                      <li>MPEG-1</li>
                      <li>MPEG-2</li>
                      <li>MPEG-4</li>
                      <li>AVI</li>
                    </ul>
                    <ul>
                      <li>WMV</li>
                      <li>MOV</li>
                      <li>MXF</li>
                      <li>MVF</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/*resolution card*/}
              <div className={styles.v_r_a_card_flex}>
                <div className={`${styles.v_r_a_card_inner}`}>
                  <div className={styles.v_r_a_card_inner_title}>
                    <h4>any resolution</h4>
                  </div>
                  <div className={styles.v_r_a_card_inner_description}>
                    <p className={styles.v_r_a_card_inner_description_text}>
                      from SD up to 4K and any custom resolution
                    </p>
                  </div>
                  <div
                    className={
                      styles.v_r_a_card_inner_format_wrapper_resolution
                    }
                  >
                    <ul>
                      <li>
                        <span>
                          SD
                          <br />
                          640x480
                        </span>
                      </li>
                      <li>
                        <span>
                          HD
                          <br />
                          1280x720
                        </span>
                      </li>
                      <li>
                        <span>
                          FULL HD
                          <br />
                          1920x1080
                        </span>
                      </li>
                      <li>
                        <span>
                          4K
                          <br />
                          4096x2160
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/*aspect ratio card*/}
              <div className={styles.v_r_a_card_flex}>
                <div className={`${styles.v_r_a_card_inner}`}>
                  <div className={styles.v_r_a_card_inner_title}>
                    <h4>any screen ratio</h4>
                  </div>
                  <div className={styles.v_r_a_card_inner_format_wrapper_ratio}>
                    <ul>
                      <li>
                        <span>16:10</span>
                        <div className={styles.ratio_icons}>
                          <MyImage
                            src="/images/software/eztitles/computer-widescreen.png"
                            width={35}
                            height={35}
                            layout="intrinsic"
                          />
                          <MyImage
                            src="/images/software/eztitles/pc.png"
                            width={35}
                            height={35}
                            layout="intrinsic"
                          />
                          <MyImage
                            src="/images/software/eztitles/smartphone.png"
                            width={35}
                            height={35}
                            layout="intrinsic"
                          />
                        </div>
                      </li>
                      <li>
                        <span>16:9</span>
                        <div className={styles.ratio_icons}>
                          <MyImage
                            src="/images/software/eztitles/computer-widescreen.png"
                            width={35}
                            height={35}
                            layout="intrinsic"
                          />
                          <MyImage
                            src="/images/software/eztitles/tv.png"
                            width={35}
                            height={35}
                            layout="intrinsic"
                          />
                          <MyImage
                            src="/images/software/eztitles/smartphone.png"
                            width={35}
                            height={35}
                            layout="intrinsic"
                          />
                        </div>
                      </li>
                      <li>
                        <span>1.85:1</span>
                        <div className={styles.ratio_icons}>
                          <MyImage
                            src="/images/software/eztitles/cinema.png"
                            width={35}
                            height={35}
                            layout="intrinsic"
                          />
                        </div>
                      </li>
                      <li>
                        <span>2.35:1</span>
                        <div className={styles.ratio_icons}>
                          <MyImage
                            src="/images/software/eztitles/movie-reel.png"
                            width={35}
                            height={35}
                            layout="intrinsic"
                          />
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>1:1</span>
                        <div className={styles.ratio_icons}>
                          <MyImage
                            src="/images/software/eztitles/social_media.png"
                            width={35}
                            height={35}
                            layout="intrinsic"
                          />
                        </div>
                      </li>
                      <li>
                        <span>5:4</span>
                        <div className={styles.ratio_icons}>
                          <MyImage
                            src="/images/software/eztitles/pc.png"
                            width={35}
                            height={35}
                            layout="intrinsic"
                          />
                        </div>
                      </li>
                      <li>
                        <span>3:2</span>
                        <div className={styles.ratio_icons}>
                          <MyImage
                            src="/images/software/eztitles/film.png"
                            width={35}
                            height={35}
                            layout="intrinsic"
                          />
                          <MyImage
                            src="/images/software/eztitles/camera.png"
                            width={35}
                            height={35}
                            layout="intrinsic"
                          />
                          <MyImage
                            src="/images/software/eztitles/tablet.png"
                            width={35}
                            height={35}
                            layout="intrinsic"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*language section*/}
        <section ref={section4} className={styles.language_section}>
          <div className={styles.container}>
            <div
              style={{ marginTop: "230px" }}
              className={styles.content_inner}
            >
              <div className={styles.content_inner_text}>
                <dd className={styles.language_text}>
                  <span className={styles.big_text}>in any language</span>{" "}
                  <span className={styles.language_text_color}>
                    dans n'importe quelle languein{" "}
                  </span>
                  en cualquier idioma{" "}
                  <span className={styles.language_text_color}>
                    in jeder sprache
                  </span>{" "}
                  на любом языке{" "}
                  <span className={styles.language_text_color}>
                    به هر زبانی
                  </span>
                  &nbsp;
                  <span className={styles.language_text_color}>
                    herhangi bir dilde
                  </span>{" "}
                  in qualsiasi lingua{" "}
                  <span className={styles.language_text_color}>
                    w dowolnym języku{" "}
                  </span>{" "}
                  בכל שפה på hvilket som helst språk &nbsp;{" "}
                  <span className={styles.language_text_color}>任何語言</span>{" "}
                  &nbsp; σε οποιαδήποτε γλώσσα
                  <span className={styles.language_text_color}> بأي لغة</span>
                  &nbsp;
                  <span className={styles.language_text_color}>
                    bármilyen nyelven
                  </span>{" "}
                  em qualquer idioma{" "}
                  <span className={styles.language_text_color}>
                    किसी भी भाषा म
                  </span>{" "}
                  ในภาษาใดก็ได้ 모든 언어로&nbsp;{" "}
                  <span className={styles.language_text_color}>
                    任意の言語で
                  </span>{" "}
                  &nbsp; på vilket språk som helst{" "}
                  <span className={styles.language_text_color}>
                    на всеки език
                  </span>
                </dd>
              </div>
            </div>
          </div>
        </section>
        <TimelineSection />
        <ProductFeaturesSection />
        <FileFormatsSection />
        <LicenseOptionsSection />
        <section className={styles.lottie_section}>
          <div>
            <div>text</div>
            <div></div>
          </div>
        </section>
      </div>
      {/*<PaypalCheckout/>*/}
    </Layout>
  );
}
