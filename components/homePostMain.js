import styles from './homeMain.module.css'
import MyImage from "./myImage"
import Link from 'next/link'
import Logo from "./logo";

export default function HomePostMain(){
    const stuff=Array.from({length:14},()=>{
            return{
                title:'Subtitling Assistant',
                description:'Recognizes spoken text from the audio and automatically generates captions/subtitles in the same language.',
                icon_url:'/images/int.png'
            }})
    const elements=stuff.map((x,i)=><div key={i} className={styles.home_post_main_content}><div className={styles.home_post_main_content_inner}>
        <div className={styles.home_post_main_content_icon}>
            <div className={styles.line}></div>
                <div className={styles.home_post_main_content_icon_image}><div className={styles.home_post_main_content_icon_image_inner}><MyImage
                    priority={false}
                    src={x.icon_url}
                    height={50}
                    width={50}
                    alt='icon'
                /></div></div>
            <div className={styles.line}></div>
        </div>
        <div className={styles.home_post_main_content_text}><h4>{x.title}</h4><p>{x.description}</p><Link href='https://www.eztitles.com/index.php?page=subtitling-assistant#product-header-caption'><a className={styles.custom_link}>View more</a></Link></div>
    </div></div>)

    return(
        <div className={styles.home_post_main_wrapper}>
            {elements}


        </div>
    )
}




