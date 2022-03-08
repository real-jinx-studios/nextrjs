import { Fragment } from "react";
import HomeMain from "../components/homeMain";
import styles from "../components/homeMain.module.css";
import ProductsShowcase from "../components/home_page/products_showcase";

export default function Home(props) {
  return (
    <Fragment>
      <div className={styles.video_background}>
        <video autoPlay loop>
          <source src="/videos/home-hero-bg.mp4" />
        </video>
      </div>
      <section className="container" aria-labelledby="ezt-main-page">
        <h1 id="ezt-main-page">
          Cutting-edge professional subtitling products
        </h1>
        {/*<HomeMain />*/}
      </section>
      <ProductsShowcase />
    </Fragment>
  );
}
