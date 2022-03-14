import styles from "./trial_forms.module.css";
import CustomInput from "../../inputs/customInput";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import Loader from "../../utils/loader";
import { useRouter } from "next/router";
import React, { useRef, useState, Fragment } from "react";
import CustomInputDropdown from "../../inputs/customInputDropdown";
import { signIn } from "next-auth/react";

export default function LoginFormTrial({ handleFormStateChange }) {
  //make useRef const to attach to html input fields for user
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

        handleFormStateChange("authenticated");
        setIsLoading(false);
      } else {
        console.log(signin);
        setIsLoginError(true);
        setIsLoading(false);
      }
    }
  };

  return (
    <form
      className={`${styles.input_wrapper} ${styles.form}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.title__section}>
        <p className={styles.title__section_p}>Log in</p>
        <p className={styles.title__section_p_subtext}>
          Don't have an account yet?{" "}
          <a
            className={styles.title__section_a}
            onClick={() => handleFormStateChange("register")}
          >
            Sign up
          </a>
        </p>
      </div>
      <div
        className={`${styles.error} ${loginError ? styles.error_active : ""}`}
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
          <button className="button button_basic_long" type="submit">
            SIGN IN
          </button>
        </Fragment>
      ) : (
        <div className={styles.loader_wrapper}>
          <Loader />
        </div>
      )}
    </form>
  );
}
