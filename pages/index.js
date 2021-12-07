import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Navbar from "../components/navbar";
import HomeMain from "../components/homeMain";
import HomeMain2 from "../components/homeMain2";
import HomeProductsMain from "../components/homeProductsMain";
import HomePostMain from "../components/homePostMain";
import styles from "../components/homeMain.module.css";
import Logo from "../components/logo";
import db from "../utils/db";
import Link from "next/link";
import Product from "../models/product";

export default function Home(props) {
  const { products } = props;
  return (
    <Layout home>
      <section className="section-one">
        <h1>Cutting-edge professional subtitling products</h1>
        <div className="product-wrapper">
          {products.map((x) => (
            <Link href="/subtitle3">
              <div key={x.name} className="grid-wrapper__item">
                <h3>{x.name}</h3>
                <p>
                  Editions:
                  {x.editions.map((y) => (
                    <span>&nbsp; &#127569;{y}&nbsp;</span>
                  ))}
                </p>
                <p>
                  prices:
                  {x.price_no_vat.map((z) => (
                    <span>&nbsp; &#127569;{z}EUR&nbsp;</span>
                  ))}
                </p>
                <p>
                  licenses:
                  {x.license.map((q) => (
                    <span>&nbsp; &#127569;{q}&nbsp;</span>
                  ))}
                </p>
                <p>
                  tags:
                  {x.categories.map((w) => (
                    <span>&nbsp; &#127569;{w}&nbsp;</span>
                  ))}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <HomeMain2 />
      <HomeMain />
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
  );
}
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();

  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
