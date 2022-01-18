import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import HomeMain from "../components/homeMain";
import HomeMain2 from "../components/homeMain2";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
import { query } from "../lib/db";

export default function Home(props) {
  const { products } = props;
  return (
    <Layout home>
      <section className="section-one">
        <h1>Cutting-edge professional subtitling products</h1>
        <HomeMain2 />
        <div className="product-wrapper">
          {products.map((x) => (
            <Link href="/subtitle3">
              <div key={x.name} className="grid-wrapper__item">
                <h3>{x.name}</h3>
                <p>
                  Editions:
                  {x.editions.split(",").map((y) => (
                    <span key={y}>&nbsp; &#127569;{y}&nbsp;</span>
                  ))}
                </p>
                <p>
                  prices:
                  {x.price_no_vat.split(",").map((z) => (
                    <span key={z}>&nbsp; &#127569;{z}EUR&nbsp;</span>
                  ))}
                </p>
                <p>
                  licenses:
                  {x.license.split(",").map((q) => (
                    <span key={q}>&nbsp; &#127569;{q}&nbsp;</span>
                  ))}
                </p>
                <p>
                  tags:
                  {x.categories.split(",").map((w) => (
                    <span key={w}>&nbsp; &#127569;{w}&nbsp;</span>
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

      <HomeMain />
    </Layout>
  );
}
export async function getStaticProps() {
  /*const data = await axios.get(`/api/get-products`);*/
  //connection to middleware for static generation
  /*const res = await fetch("http://localhost:5000/get-products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };*/
  const data = await query(`
            SELECT *
            FROM products
        `);
  console.log(data);
  return {
    props: {
      products: JSON.parse(JSON.stringify(data)),
    },
  };
}
