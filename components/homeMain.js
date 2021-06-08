import utilStyles from "../styles/utils.module.css";
import styles from "./homeMain.module.css";
import MyImage from "./myImage";
const myLoader = ({ src, width, quality }) => {
    return `https://master.d2174uzsw3epqk.amplifyapp.com${src}?w=${width}&q=${quality || 75}`
}

export default function HomeMain(){
    return(
        <div className={''}>
            <div className={styles.video_background}>
                <video autoPlay loop>

                    <source src="/videos/home-hero-bg.mp4"/>
                </video>
            </div>
            <div className={styles.intro}>
                <div className={`${styles.intro_paragraph} ${utilStyles.whiteText}`}>
                    <h1 style={{'fontWeight':'lighter'}}>Start subtitling with some of the world’s most advanced professional subtitling tools.</h1>
                    <br />
                    <p>Starting from 58 EUR/month*<br /><i>*for EZTitles Essentials on 36 monthly instalments</i></p>

                </div>
                <div className={styles.three_buttons_wrapper}>
                    <div className={utilStyles.generic_button}>Subtitling Assistant</div>
                    <div className={utilStyles.generic_button} style={{'background':'#ffffff', 'color':'#2e77bb'}}>Free Trial</div>
                    <div className={utilStyles.generic_button}>Video Tutorials</div>
                </div>
                <div className={styles.product_cards}>
                    <div className={`${styles.product_card} ${styles.eztitles_card}`}>
                        <div className={styles.product_card_icon}>
                            <MyImage  src='/images/ezt.png' width={32} height={32} alt='ez titles icon'/>

                        </div>
                        <div className={styles.product_card_software}>
                            <MyImage  src='/images/windows.png' width={20} height={20} alt='supported software'/>

                        </div>
                        <h2>EZTitles</h2>
                        <h4><strong>for advanced<br />subtitle authoring</strong></h4>
                        <p>EZTitles redefines what professional subtitling software can do! World-class Streaming Services, TV, Digital Cinema, DVD and Blu-ray subtitle preparation software. Powerful conversion tool for almost any known file format. Breakthrough module for Closed Captioning. Three groundbreaking products. Single software.</p>

                    </div>

                    <div className={`${styles.product_card}`} style={{'border':'1px solid #613dc1', 'background':'#613dc166'}}>
                        <div className={styles.product_card_icon}>
                            <MyImage  src='/images/ezc.png' width={32} height={32} alt='ez titles icon'/>

                        </div>
                        <div className={styles.product_card_software}>
                            <MyImage  src='/images/windows.png' width={20} height={20} alt='supported software'/>

                        </div>
                        <h2>EZConvert</h2>
                        <h4><strong>for conversion<br />between formats</strong></h4>
                        <p>Fast and accurate subtitle conversion tool which supports a variety of subtitle formats and DVD, Blu-ray and NLE authoring systems. EZConvert does not bother with different output file format a client may require. It simply has them all!</p>

                    </div>
                    {/*<div className={styles.product_card} style={{'border':'1px solid #de6b48', 'background':'#de6b48ee'}}>
                        <div className={styles.product_card_icon}>
                            <MyImage  src='/images/ep.png' width={32} height={32} alt='ez titles icon'/>

                        </div>
                        <div className={styles.product_card_software}>
                            <MyImage  src='/images/windows.png' width={20} height={20} alt='supported software'/>

                        </div>
                        <h2>EZTitles Plug-ins</h2>
                        <h4><strong>for integration</strong></h4>
                        <p>The plug-ins for ProMedia Carbon & Rhozet Carbon Coder, and Capella Systems' Cambria File Convert are powerful tools which allows you to load and encode your subtitles Closed Caption, Teletext or DVB files with the video.</p>

                    </div>*/}
                    <div className={styles.product_card} style={{'border':'1px solid #79b473', 'background':'#79b47366'}}>
                        <div className={styles.product_card_icon}>
                            <MyImage  src='/images/3d.png' width={32} height={32} alt='ez titles icon'/>

                        </div>
                        <div className={styles.product_card_software}>
                            <MyImage  src='/images/windows.png' width={20} height={20} alt='supported software'/>

                        </div>
                        <h2>3DTitles</h2>
                        <h4><strong>for 3D subtitling</strong></h4>
                        <p>3DTitles adds depth to your regular 2D subtitles. The software analyzes the whole movie and automoatically choses the perfect Z-position for each subtitle. Or YOU can do it according to point of interest in the picture.</p>

                    </div>



                </div>

            </div>
        </div>
    )
}
