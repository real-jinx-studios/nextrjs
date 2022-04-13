import React, { Fragment, useRef, useState } from "react";
import { useRouter } from "next/router";

import CustomInput from "../../inputs/customInput";
import styles from "./auth.module.css";
import Link from "next/link";
import Loader from "../../utils/loader";
import { promiseResolver } from "../../../lib/promiseResolver";
import { useVerifyUserCredentials } from "../../../lib/hookers";

export default function LoginForm(props) {
  //get where to redirect from user since could be checkout or user profile or other
  const router = useRouter();
  const destination = router.query.destination;
  //make useRef const to attach to html input fields for user
  const usernameRef = useRef();
  const passwordRef = useRef();

  //state for the conditional rendering if register is true or false
  const [isLoading, setIsLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [loginError, setIsLoginError] = useState(false);

  //handle user submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    //make client side validation for quick response to obvious mistakes. will have serverside too for security.

    if (!isRegister) {
      //configuration object set redirect to false so we dont get next auth error. so we dont change page on wrong user input.
      const [data, error] = await promiseResolver(
        useVerifyUserCredentials(username, password)
      );

      if (!error) {
        //set some auth state

        router.replace(`/${destination}`);
        setIsLoading(false);
      } else {
        console.log(error, "error from login form");
        setIsLoginError(true);
        setIsLoading(false);
      }
    }
  };

  //function to validate user input
  const validate = (formFields) => {
    const errors = {};
    //email verification regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    //check if empty for each field
    if (!formFields.username) {
      errors.username = "Username cannot be empty";
    }
    if (!formFields.email) {
      errors.email = "Email cannot be empty";
    } else if (!regex.test(formFields.email)) {
      errors.email = "Email not valid";
    }

    //return found errors
    return errors;
  };

  return (
    <section className={styles.section}>
      <div className={styles.section_decal_1} />
      <div className={styles.section_decal_2} />
      <div className="form holder" className={styles.form}>
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
            isRequired
          />
          <CustomInput
            reference={passwordRef}
            type="password"
            placeholder="Password"
            isRequired
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
                    router.push("/user/register");
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
      </div>
    </section>
  );
}
