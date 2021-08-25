import '../styles/global.css'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {AnimatePresence} from "framer-motion";
import { Provider } from 'react-redux'
import { useStore } from '../store'

export default function App({Component, pageProps}){
    const store = useStore(pageProps.initialReduxState)
    return (<Provider store={store}><AnimatePresence exitBeforeEnter><Component key='main' {...pageProps} /><Navbar/><Footer/></AnimatePresence></Provider>)
}