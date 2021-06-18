import Head from 'next/head'
import Layout, {siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.css'
import Navbar from "../components/navbar";
import HomeMain from "../components/homeMain";
import HomeProductsMain from "../components/homeProductsMain";
import HomePostMain from "../components/homePostMain";



export default function Home() {




    return(
        <Layout home>

            <Head>
                <title>{siteTitle}</title>

            </Head>

            <HomeMain/>
            <HomePostMain/>


        </Layout>
    )
}

