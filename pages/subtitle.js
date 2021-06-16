import styles from '../styles/subtitle.module.css'
import MyImage from "../components/myImage";
import Link from 'next/link'


export default function Subtitle(){
    return (
        <>
        <div className={styles.main_wrapper}>
            <div className={styles.main_inner}>
                <div className={styles.title_icon_wrapper}>
                    <MyImage priority='true' src='/images/ezt.png' width={48} height={48} alt='EZTitles logo'/>
                    <p className={styles.big_title}>EZTitles</p>
                </div>
                <div className={styles.caption_wrapper}>
                    <p className={styles.caption}>There is an easier way<br/>to create subtitles</p>
                </div>
                <div className={styles.free_trial_wrapper}>
                    <Link href='/products/downloads'><a className={styles.free_trial}>FREE TRIAL</a></Link>
                </div>


            </div>
            <div className={`${styles.background_letter} ${styles.E}`}>E</div>
            <div className={`${styles.background_letter} ${styles.Z}`}>Z</div>
            <div className={`${styles.background_letter} ${styles.T}`}>T</div>
        </div>
        <div className={styles.content_wrapper}>
            <div className={styles.content_inner}>
                <div className={styles.content_inner_text}>
                    <div className={styles.paragraph}>
                        <h3>EZTitles is a world-class<br/>professional subtitling software</h3>
                        <p>EZTitles offers an ocean of useful features and automations to help you get your work done faster, more accurately and stress-free.
                            With EZTitles you can subtitle anything – Streaming Services as Disney+, Netflix, Apple TV+, Amazon Prime, Hulu or others, Open subtitles, Closed Captions, Digital Cinema, Blu-ray, Teletext, DVD and DVB Subtitles.</p>

                    </div>
                    <div className={styles.paragraph}>
                        <h3>Shot change detection</h3>
                        <p>Our stellar shot change detection will help you cue subtitles with an unprecedented accuracy. You can simply skip the non-speech scenes and focus on the relevant parts, and you can even split a block of text into proper subtitles by using the Split Text to Subtitles feature in conjunction with the Continuous Typing Workflow.</p>

                    </div>
                    <div className={styles.paragraph}>
                        button
                    </div>
                </div>
                <div className={styles.image_wrapper}>
                    <div className={styles.image_inner}>
                        <MyImage src='/images/eztitles_window.png' width={1017} height={1017} alt='eztitles screenshot'/>
                    </div>

                </div>
            </div>

        </div>
        </>
    )
}
