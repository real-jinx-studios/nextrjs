import Head from 'next/head'
import Layout, {siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.css'
import Navbar from "../components/navbar";
import HomeMain from "../components/homeMain";
import HomeMain2 from "../components/homeMain2";
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

            <HomeMain2/>
            <HomeMain/>
          {/*  <div className={styles.customers_slider}>
                <div className={styles.clients_title}>
                    <h2>Our Clients</h2>
                </div>
                <div className={styles.customers_slider_container}>
                    <div className={`${styles.customers_slider_wrapper} ${styles.fast}`}>
                        <div className={styles.customers_slider_inner}>
                            <div className={styles.customers_logos_container}>
                                <Logo class={styles.customers_logos} img={styles.customers_svg} reverse={1} part={1}/>
                            </div>
                        </div>
                        <div className={styles.customers_slider_inner}>
                            <div className={styles.customers_logos_container}>
                                <Logo class={styles.customers_logos} img={styles.customers_svg} reverse={1} part={2}/>
                            </div>
                        </div>

                    </div>

                </div>
                <div className={styles.customers_slider_container}>
                    <div className={`${styles.customers_slider_wrapper} ${styles.slow}`}>
                        <div className={styles.customers_slider_inner}>
                            <div className={styles.customers_logos_container}>
                                <Logo class={styles.customers_logos} img={styles.customers_svg} reverse={0} part={3}/>
                            </div>
                        </div>
                        <div className={styles.customers_slider_inner}>
                            <div className={styles.customers_logos_container}>
                                <Logo class={styles.customers_logos} img={styles.customers_svg} reverse={0} part={4}/>
                            </div>
                        </div>

                    </div>

                </div>
                <div className={styles.customers_slider_container}>
                    <div className={`${styles.customers_slider_wrapper} ${styles.super_fast}`}>
                        <div className={styles.customers_slider_inner}>
                            <div className={styles.customers_logos_container}>
                                <Logo class={styles.customers_logos} img={styles.customers_svg} reverse={1} part={5}/>
                            </div>
                        </div>
                        <div className={styles.customers_slider_inner}>
                            <div className={styles.customers_logos_container}>
                                <Logo class={styles.customers_logos} img={styles.customers_svg} reverse={1} part={5}/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <HomePostMain/>*/}



        </Layout>
    )
}

