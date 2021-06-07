import '../styles/global.css'
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function App({Component, pageProps}){
    return (<><Component {...pageProps} /><Navbar/><Footer/></>)
}