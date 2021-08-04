import '../styles/global.css'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {AnimatePresence} from "framer-motion";

export default function App({Component, pageProps}){
    return (<AnimatePresence exitBeforeEnter><Component {...pageProps} /><Navbar/><Footer/></AnimatePresence>)
}