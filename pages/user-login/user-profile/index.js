import {useRouter} from 'next/router'
import styles from '../../../styles/profile.module.css'
import {motion} from "framer-motion";
export default function UserProfile(){
    const router=useRouter();
    const time=router.query
    return(
        <div style={{"background":"#2A7221", "marginTop":"180px"}}><h1 style={{"margin": "auto", "textAlign": "center"}}>YOU LOGGED IN! gg ez</h1><small>{JSON.stringify(time)}</small>

            <motion.div exit={{opacity:0}} initial='initial' animate='animate'>
                <div className={styles.main_wrapper}>
                    <div className={styles.main_inner}>
                        <h2>Subscription options & Pricing</h2>
                        <nav>
                            <ul className={styles.ul_menu}>
                                <li onClick={handleClick} className={styles.active} data-type='organization'><p>For Organizations</p></li>
                                <li onClick={handleClick} data-type='personal'><p>For Individuals</p></li>
                                <li onClick={handleClick} data-type='education'><p>For Education</p></li>
                                <li onClick={handleClick} data-type='other'><p>More Options</p></li>
                            </ul>
                        </nav>
                        <div className={styles.offers}>
                            <div className={styles.offers_inner}>
                                <div className={styles.offers_nav_wrapper}>
                                    <nav className={styles.nav_sub_menu}>
                                        <ul className={styles.ul_sub_menu}>
                                            <li onClick={handleClickOption} className={`${styles.offers_offer} ${styles.active_offer}`} data-billing="yearly"><p>Yearly billing</p></li>
                                            <li onClick={handleClickOption} className={styles.offers_offer} data-billing="monthly"><p>Monthly billing</p></li>
                                            <li onClick={handleClickOption} className={styles.offers_offer} data-billing="lifetime"><p>Lifetime License</p></li>

                                        </ul>
                                    </nav>
                                </div>

                                <div className={styles.offers_options_wrapper}>
                                    {cards}

                                </div>

                                <div className={styles.offers_bottom_disclamer}><h5>Taxes may still be added. The tax rate depends on your country tax rules,<br />entered tax identification number (e.g. VAT ID), and selected purchase method <strong>at checkout.</strong></h5></div>

                            </div>


                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}

