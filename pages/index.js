import Head from 'next/head'
import Layout, {siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.css'
import Navbar from "../components/navbar";
import HomeMain from "../components/homeMain";
import HomeProductsMain from "../components/homeProductsMain";
import HomePostMain from "../components/homePostMain";
import { useEntries } from '../lib/swr-hooks'
import Entries from '../components/entries/index'
import {query} from "../lib/db";

export async function getStaticProps(){
    let data=''
    try {
        const results = await query(`
      SELECT * FROM products
      ORDER BY prID DESC
      LIMIT 11
  `);
        return {props:{results:JSON.parse(JSON.stringify(results))}};
    }
    catch (e) {
        return {props:{ message: e.message }};
    }

    return 'error'


}

export default function Home({results}) {
    const { entries, isLoading } = useEntries()
    results=results.map(x=><div key={x.prID} className='db'><h3>{x.prName}</h3><br/><p>{x.prText}</p></div>)

    if (isLoading) {
    return(
        <Layout home>

            <Head>
                <title>{siteTitle}</title>

            </Head>

            <HomeMain/>
            <HomePostMain/>


        </Layout>
    )}
    return(
        <Layout home>

            <Head>
                <title>{siteTitle}</title>

            </Head>

            <HomeMain/>
            <HomePostMain/>
            {/*<Entries entries={entries} />*/}
            <div style={{'position':'relative','zIndex':'999'}}>{results}</div>


        </Layout>
    )
}

