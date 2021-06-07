import styles from './homeMain.module.css'
import MyImage from "./myImage";

export default function HomePostMain(){
    const stuff=Array.from({length:14},()=>{
            return{
                title:'What we do',
                description:'We at EZTitles Development Studio are devoted to providing our clients with a range of quality professional subtitling solutions.\n' +
                    'Our wide range of cutting-edge professional subtitling products will help you complete even the most complex subtitling tasks at maximum speed, precision and ease.\n' +
                    'We offer excellent support and services and are always happy to listen to our clients’ input, using their opinions and ideas to improve the software. We believe our products are the best in the field precisely because we base our improvements and changes on active user feedback.\n' +
                    'And with our reasonably priced products and flexible installment plans we are also helping your budget.\n' +
                    'We have always strived to make our software more personal. With you being in the center of it.\n' +
                    'If you’d like to give our products a try, we would be happy to offer you a free trial. ',
                icon_url:'/images/icon1.png'
            }})
    const elements=stuff.map((x,i)=><div key={i} className={styles.home_post_main_content}><div className={styles.home_post_main_content_inner}>
        <div className={styles.home_post_main_content_icon}>
            <div className={styles.line}></div>
                <div className={styles.home_post_main_content_icon_image}><MyImage
                priority={false}
                src={x.icon_url}
                height={50}
                width={50}
                alt='icon'
                /></div>
            <div className={styles.line}></div>
        </div>
        <div className={styles.home_post_main_content_text}><h4>{x.title}</h4><p>{x.description}</p></div>
    </div></div>)

    return(
        <div className={styles.home_post_main_wrapper}>
            {elements}

        </div>
    )
}




