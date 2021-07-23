import styles from '../styles/subtitle.module.css'
import MyImage from "../components/myImage";
import Link from 'next/link'


export default function Subtitle(){
    return (
        <>
            <div className={styles.video_background}>
                <video style={{"width":"100%"}} autoPlay loop>

                    <source src="/videos/hero-eztitles.mp4"/>
                </video>
            </div>
        <div className={styles.main_wrapper}>

            <div className={styles.main_inner}>
                <div className={styles.title_icon_wrapper}>
                    <MyImage priority='true' src='/images/ezt.png' width={48} height={48} alt='EZTitles logo'/>
                    <p className={styles.big_title}>EZTitles</p>
                </div>
                <div className={styles.caption_wrapper}>
                    <p className={styles.caption}>The world’s best professional<br/>subtitling and captioning software</p>
                </div>
                <div className={styles.free_trial_wrapper}>
                    <Link href='/products/downloads'><a className={styles.free_trial}>FREE TRIAL</a></Link>
                </div>


            </div>
        </div>
        <div className={styles.content_wrapper}>
            <div className={styles.content_inner}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 style={{"fontFamily": "'Montserrat', sans-serif","fontSize": "4.063em","fontWeight": "100 !important","padding": "0 0 20px","lineHeight": "63px"}}>Prepare subtitles for any content</h2>
                        <p><strong>With EZTitles you can subtitle anything – Streaming Services as Netflix, Apple iTunes, Amazon Prime,<br/> Hulu or others, Open subtitles, Closed Captions, Digital Cinema, Blu-ray, Teletext, DVD<br/>and DVB Subtitles - and deliver your work in any file format your clients may require.</strong></p>

                    </div>
                </div>
                <div className={styles.dc}>
                    <div className={`${styles.dc_inner} ${styles.slide_in_blurred_right} ${styles.dc_side}`}>
                        <div className={styles.dc_background}><MyImage src='/images/icons/streaming-icon.svg' width={200} height={200} /></div>
                        <div className={styles.dc_inner_content}>
                            <div className={styles.boxes_info}>
                                <Link href="/pages/Streaming_Services">
                                    <a>
                                        <div className={styles.center_elem}>
                                            <div className={styles.center_elem_img}><MyImage src='/images/icons/streaming-icon.svg' width={80} height={80}/></div>
                                            <h3 className={styles.center_elem_text}>Streaming <span>Services</span></h3>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.dc_inner} ${styles.dc_top}`}>
                        <div className={styles.dc_background}><MyImage src='/images/icons/digital-icon.svg' width={200} height={200} /></div>
                        <div className={styles.dc_inner_content}>
                            <div className={styles.boxes_info}>
                                <Link href="/pages/Streaming_Services">
                                    <a>
                                        <div className={styles.center_elem}>
                                            <div className={styles.center_elem_img}><MyImage src='/images/icons/digital-icon.svg' width={80} height={80}/></div>
                                            <h3 className={styles.center_elem_text}>Digital <span>Cinema</span></h3>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.dc_inner}  ${styles.slide_in_blurred_bottom} ${styles.dc_side}`}>
                        <div className={styles.dc_background}><MyImage src='/images/icons/blueray-icon.svg' width={200} height={200} /></div>
                        <div className={styles.dc_inner_content}>
                            <div className={styles.boxes_info}>
                                <Link href="/pages/Streaming_Services">
                                    <a>
                                        <div className={styles.center_elem}>
                                            <div className={styles.center_elem_img}><MyImage src='/images/icons/blueray-icon.svg' width={80} height={80}/></div>
                                            <h3 className={styles.center_elem_text}>Blue-ray</h3>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.dc_inner}  ${styles.slide_in_blurred_top} ${styles.dc_bottom}`}>
                        <div className={styles.dc_background}><MyImage src='/images/icons/teletext-icon.svg' width={200} height={200} /></div>
                        <div className={styles.dc_inner_content}>
                            <div className={styles.boxes_info}>
                                <Link href="/pages/Streaming_Services">
                                    <a>
                                        <div className={styles.center_elem}>
                                            <div className={styles.center_elem_img}><MyImage src='/images/icons/teletext-icon.svg' width={80} height={80}/></div>
                                            <h3 className={styles.center_elem_text}>Teletext</h3>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.dc_inner}  ${styles.slide_in_blurred_left_2}  ${styles.dc_bottom}`}>
                        <div className={styles.dc_background}><MyImage src='/images/icons/dvb-icon.svg' width={200} height={200} /></div>
                        <div className={styles.dc_inner_content}>
                            <div className={styles.boxes_info}>
                                <Link href="/pages/Streaming_Services">
                                    <a>
                                        <div className={styles.center_elem}>
                                            <div className={styles.center_elem_img}><MyImage src='/images/icons/dvb-icon.svg' width={80} height={80}/></div>
                                            <h3 className={styles.center_elem_text}>DVB</h3>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.dc_inner}  ${styles.slide_in_blurred_left_3}  ${styles.dc_bottom}`}>
                        <div className={styles.dc_background}><MyImage src='/images/icons/closed-icon.svg' width={200} height={200} /></div>
                        <div className={styles.dc_inner_content}>
                            <div className={styles.boxes_info}>
                                <Link href="/pages/Streaming_Services">
                                    <a>
                                        <div className={styles.center_elem}>
                                            <div className={styles.center_elem_img}><MyImage src='/images/icons/closed-icon.svg' width={80} height={80}/></div>
                                            <h3 className={styles.center_elem_text}>Closed <span>Captions</span></h3>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
            <div style={{"margin-top":"230px"}} className={styles.content_inner}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 style={{"fontFamily": "'Montserrat', sans-serif","fontSize": "4.063em","fontWeight": "100 !important","padding": "0 0 20px","lineHeight": "63px"}}>Almost any Video File</h2>
                        <p><strong>EZTitles works with nearly any known video format with embedded timecode and supports MPEG-1,<br/>MPEG-2, MPEG-4, AVI, WMV, MXF, MKV and Apple QuickTime .MOV video files.</strong></p>

                    </div>
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
            <div style={{"margin-top":"230px", "padding-bottom":"230px"}} className={styles.content_inner}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 style={{"fontFamily": "'Montserrat', sans-serif","fontSize": "4.063em","fontWeight": "100 !important","padding": "0 0 20px","lineHeight": "63px"}}>Any type of resolution</h2>
                    </div>
                </div>
                <div className={styles.dc}>
                    <div className={`${styles.dc_inner_res} ${styles.text_focus_in}`}>
                        <div className={styles.dc_inner_content_res}>
                           {/* <div className={styles.boxes_info_res}><div className={styles.full_res}><MyImage src='/images/res2.jpg' width={1500} height={800}/></div></div>*/}
                            <div className={styles.boxes_info_res}>
                                <div className={`${styles.res_ultra} ${styles.scale_in_bl_3}`}><div className={styles.res_inner}><h1 className={styles.res_size_ultra}>4096x2160</h1><div className={styles.res_name}><p>4K</p></div></div></div>
                                <div className={`${styles.res_full} ${styles.scale_in_bl_2}`}><div className={styles.res_inner}><h1 className={styles.res_size_full}>1920x1080</h1><div className={styles.res_name}><p>FULL HD</p></div></div></div>
                                <div className={`${styles.res_hd} ${styles.scale_in_bl_1}`}><div className={styles.res_inner}><h1 className={styles.res_size_hd}>1366x738</h1><div className={styles.res_name}><p>HD</p></div></div></div>
                                <div className={`${styles.res_sd} ${styles.scale_in_bl}`}><div className={styles.res_inner}><h1 className={styles.res_size_sd}>640x480</h1><div className={styles.res_name}><p>SD</p></div></div></div>

                            </div>

                        </div>
                    </div>



                </div>




            </div>


        </div>
        </>
    )
}
