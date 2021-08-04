import styles from "../../styles/buy.module.css";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";


export default function EZTitles(){
    const [active,setActive]=useState()
    const handleClick=(e)=>{
        if(e.target.parentNode.nodeName=='LI') {
            e.target.parentNode.parentNode.childNodes.forEach(x => x.classList.remove(styles.active))
            e.target.parentNode.classList.add(styles.active)
        }
    }
    return(
        <motion.div exit={{opacity:0}} initial='initial' animate='animate'>
            <div className={styles.main_wrapper}>
                <div className={styles.main_inner}>
                    <h2>Subscription options & Pricing</h2>
                    <nav>
                        <ul className={styles.ul_menu}>
                            <li onClick={handleClick} className={styles.active}><p>For Organizations</p></li>
                            <li onClick={handleClick}><p>For Freelancers</p></li>
                            <li onClick={handleClick}><p>For Education</p></li>
                            <li onClick={handleClick}><p>More Options</p></li>
                        </ul>
                    </nav>
                    <div className={styles.offers}>
                        <nav className={styles.nav_sub_menu}>
                            <ul className={styles.ul_sub_menu}>
                                <li><p>Yearly billing</p></li>
                                <li><p>Monthly billing</p></li>
                                <li><p>Lifetime License</p></li>

                            </ul>
                        </nav>


                    </div>
                </div>
            </div>
        </motion.div>
    )
}
