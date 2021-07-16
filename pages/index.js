import Head from 'next/head'
import Layout, {siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.css'
import Navbar from "../components/navbar";
import HomeMain from "../components/homeMain";
import HomeProductsMain from "../components/homeProductsMain";
import HomePostMain from "../components/homePostMain";
import styles from "../components/homeMain.module.css";
import Logo from "../components/logo";



export default function Home() {




    return(
        <Layout home>

            <Head>
                <title>{siteTitle}</title>

            </Head>

            <HomeMain/>
            <div className={styles.customers_slider}>
                <div className={styles.clients_title}>
                    <h2>Our Clients</h2>
                </div>
                <div className={styles.customers_slider_container}>
                    <div className={`${styles.customers_slider_wrapper} ${styles.fast}`}>
                        <div className={styles.customers_slider_inner}>
                            <div className={styles.customers_logos_container}>
                                <Logo class={styles.customers_logos} img={styles.customers_svg} reverse={1}/>
                            </div>
                        </div>
                        <div className={styles.customers_slider_inner}>
                            <div className={styles.customers_logos_container}>
                                <Logo class={styles.customers_logos} img={styles.customers_svg} reverse={1}/>
                            </div>
                        </div>

                    </div>

                </div>
                <div className={styles.customers_slider_container}>
                    <div className={`${styles.customers_slider_wrapper} ${styles.slow}`}>
                        <div className={styles.customers_slider_inner}>
                            <div className={styles.customers_logos_container}>
                                <Logo class={styles.customers_logos} img={styles.customers_svg} reverse={0} />
                            </div>
                        </div>
                        <div className={styles.customers_slider_inner}>
                            <div className={styles.customers_logos_container}>
                                <Logo class={styles.customers_logos} img={styles.customers_svg} reverse={0} />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <HomePostMain/>



        </Layout>
    )
}

