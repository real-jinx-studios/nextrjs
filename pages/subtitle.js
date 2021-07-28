import styles from '../styles/subtitle.module.css'
import MyImage from "../components/myImage";
import Link from 'next/link'
import ReactTooltip from 'react-tooltip';
import FileFormatTabs from "../components/fileFormatTabs";


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
                    <Link href='https://eztitstorage.blob.core.windows.net/eztitles-storage/HardID.exe'><a className={styles.free_trial}>FREE TRIAL</a></Link>
                </div>


            </div>
        </div>
        <div className={styles.content_wrapper}>
            {/*first section*/}
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
            {/*second section*/}
            <div style={{"marginTop":"230px"}} className={styles.content_inner}>
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
            {/*third section*/}
            <div style={{"marginTop":"230px"}} className={styles.content_inner}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 style={{"fontFamily": "'Montserrat', sans-serif","fontSize": "4.063em","fontWeight": "100 !important","padding": "0 0 20px","lineHeight": "63px"}}>Any type of resolution</h2>
                    </div>
                </div>
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




            </div>
            {/*fourth section*/}
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
            {/*fifth section*/}
            <div style={{"marginTop":"230px"}} className={styles.content_inner}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 style={{"fontFamily": "'Montserrat', sans-serif","fontSize": "4.063em","fontWeight": "100 !important","padding": "0 0 20px","lineHeight": "63px"}}>in any language</h2>
                        <h3>in jeder Sprache in qualsiasi lingua на любом языке herhangi bir dilde بأي لغة <br/><br/>

                            dans n'importe quelle langue בכל שפה bármilyen nyelven em qualquer idioma <br/><br/>

                            Σε οποιαδήποτε γλώσσα किसी भी भाषा में En cualquier idioma In elke taal <br/><br/>

                            På ethvert sprog Na bilo kojem jeziku あらゆる言語で Noma yiluphi ulimi </h3>

                    </div>
                </div>




            </div>
            {/*sixth section*/}
            <div style={{"marginTop":"230px"}} className={styles.content_inner}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h2 style={{"fontFamily": "'Montserrat', sans-serif","fontSize": "2.3em","fontWeight": "100 !important","padding": "0 0 20px","lineHeight": "63px"}}>Vertical orientation, Horizontal groups,<br/>Rubies and Bouten for East Asian scripts</h2>
                        <h3>
                            With EZTitles you can input text in the vertical direction common for the Chinese, Japanese and Korean language scripts. An interesting requirement can be identified as the need to display horizontal and vertical text simultaneously on the screen. In EZTitles this can be achieved easily by using two subtitle tracks.

                            Most of the time the non-Asian text inserted in a vertical subtitle doesn’t need to be rotated but there are cases for which the text should remain easily readable. EZTitles is able to satisfy this requirement as well by marking the non-Asian text as Horizontal Group.

                            Another feature is the ability to insert Rubies above or below (if horizontally oriented) or to the right or left side (if vertically oriented) of the letters.

                            The Rubies’ traditional purpose is to give additional information about the pronunciation of particular characters and symbols, considering the complexity of the Asian scripts, which may be otherwise unknown to the reader.

                            The Phonetic Guide provides the option to insert rubies for the whole phrase or only for the symbol that requires it. This tool can also be used for emphasizing part of the text or it is also known as inserting a Bouten.

                            With the Asian Text Font option, EZTitles can display different fonts for Asian and non-Asian text pieces inserted to the same line. The Asian-font text has the same font size as the regular-font text.

                        </h3>

                    </div>
                </div>




            </div>
            {/*seventh section*/}
            <div style={{"marginTop":"230px", "paddingBottom":"600px"}} className={styles.content_inner}>
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

        </div>
        </>
    )
}
