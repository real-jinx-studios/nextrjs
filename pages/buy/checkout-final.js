import styles from '../../styles/checkout2.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { initializeStore } from '../../store'
import Cookies from 'universal-cookie';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import React, {useState} from "react";
import {getClient} from "../../lib/swr-hooks";
import Router, {useRouter} from "next/router";
import CustomInput from "../../components/customInput";
import MyImage from "../../components/myImage";
import Link from 'next/link';




export default function CheckoutFinal() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)








    return (

        <section className={styles.section}>
            <div className={styles.container}>



            </div>
        </section>

    )
}
