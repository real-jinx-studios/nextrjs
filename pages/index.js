import Head from 'next/head'
import Layout, {siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.css'
import Navbar from "../components/navbar";
import HomeMain from "../components/homeMain";
import HomePostMain from "../components/homePostMain";
import {getTables} from "../lib/mysql";

export async function getStaticProps(){
    const allPostsData=getTables()
    if(allPostsData!=undefined){
        return{
            props:{
                allPostsData
            }
        }
    }else{
        return{
            props:{
                error:'error'
            }
        }
    }
}



export default function Home({allPostsData}) {
    console.log(allPostsData)
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

