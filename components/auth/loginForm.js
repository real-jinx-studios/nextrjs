import React, { Fragment, useRef, useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import ReCAPTCHA from "react-google-recaptcha";
import CustomInput from "../inputs/customInput";
import styles from "./auth.module.css";
import Link from "next/link";
import Loader from "../../components/utils/loader";

export default function LoginForm(props) {
  //get where to redirect from login since could be checkout or user profile or other
  const { destination } = props;
  const router = useRouter();
  //make useRef const to attach to html input fields
  const usernameRef = useRef();
  const passwordRef = useRef();

  //state for the conditional rendering if register is true or false
  const [isLoading, setIsLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [loginError, setIsLoginError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    //make client side validation for quick response to obvious mistakes. will have serverside too for security.

    if (!isRegister) {
      //configuration object set redirect to false so we dont get next auth error. so we dont change page on wrong user input.
      const signin = await signIn("credentials", {
        redirect: false,
        username: username,
        password: password,
      });

      if (!signin.error) {
        //set some auth state
        setIsLoading(false);
        router.replace(`/${destination}`);
      } else {
        console.log(signin);
        setIsLoginError(true);
        setIsLoading(false);
      }
    }
  };

  return (
    <section className={styles.section}>
      <div className="titleArea">
        {isRegister ? (
          <div className={styles.title__section}>
            <h1>Registration</h1>
            <p>
              Please, provide all the necessary data needed for your Account
              creation.
            </p>
          </div>
        ) : (
          <div className={styles.title__section}>
            <h1>Login</h1>
            <p></p>
          </div>
        )}
      </div>
      <div className="form holder" className={styles.form}>
        {isRegister ? (
          <form>
            <div className={styles.input_wrapper}>
              <CustomInput type="text" placeholder="First Name" isRequired />
              <CustomInput type="text" placeholder="Last Name" isRequired />
              <CustomInput type="text" placeholder="Country" isRequired />
              <CustomInput type="text" placeholder="VAT Number" isRequired />
              <CustomInput type="text" placeholder="City" isRequired />
              <CustomInput
                type="text"
                placeholder="Street Address line 1"
                isRequired
              />
              <CustomInput type="text" placeholder="Street Address line 2" />
              <CustomInput type="text" placeholder="Postal Code" isRequired />
            </div>
            <div className={styles.input_wrapper}>
              <CustomInput type="email" placeholder="Email" isRequired />
              <CustomInput type="text" placeholder="Username" isRequired />
              <CustomInput type="password" placeholder="Password" isRequired />
              <CustomInput
                type="password"
                placeholder="Repeat Password"
                isRequired
              />
            </div>
            <div className={styles.input_wrapper}>
              <div className="recaptcha bullshit and checkbox"></div>
              <div className="submit button div"></div>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className={styles.input_wrapper}>
            <div
              className={styles.error}
              style={loginError ? { opacity: "1" } : { opacity: "0" }}
            >
              Incorrect username or password.
            </div>
            <CustomInput
              reference={usernameRef}
              type="text"
              placeholder="Username"
            />
            <CustomInput
              reference={passwordRef}
              type="password"
              placeholder="Password"
            />
            {!isLoading ? (
              <Fragment>
                <button className={styles.submit_button} type="submit">
                  SIGN IN
                </button>
                <p>OR</p>
                <Link href="#">
                  <a
                    onClick={() => {
                      setIsRegister(true);
                    }}
                  >
                    SIGN-UP
                  </a>
                </Link>
              </Fragment>
            ) : (
              <div className={styles.loader_wrapper}>
                <Loader />
              </div>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
