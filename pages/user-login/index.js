import React, { useState } from "react";
import { useEntries } from "../../lib/swr-hooks";
import { useRouter } from "next/router";
import styles from "../../styles/login.module.css";
import CustomInput from "../../components/inputs/customInput";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import ReCAPTCHA from "react-google-recaptcha";

export default function ServicePortal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { entries, isLoading, time } = useEntries();
  const [register, setRegister] = useState(false);
  const router = useRouter();

  const handleUsernameChange = (e) => {
    console.log(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
  };

  const onChange = (e) => {
    console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/user", {
        username: e.target[0].value,
        password: e.target[1].value,
      })
      .then(function (response) {
        if (response.data[0]["COUNT(1)"] == 1) {
          Cookies.set(
            "session",
            JSON.stringify({
              logged_in: "true",
              username: e.target[0].value,
              session: "47rty347823827uisgsw9vsrhe4",
            })
          );
          router.push("/buy/checkout");
        } else if (response.data[0]["COUNT(1)"] == 0) {
          setError(true);
        }
      })
      .catch(function (error) {
        console.log(error, "error ass");
      });
  };
  return (
    <section className={styles.section}>
      <form noValidate onSubmit={handleSubmit}>
        {!register && (
          <>
            <div
              className={styles.error}
              style={error ? { opacity: "1" } : { opacity: "0" }}
            >
              Incorrect username or password.
            </div>
            <CustomInput
              handleChange={handleUsernameChange}
              type="text"
              placeholder="Username"
            />
            <CustomInput
              handleChange={handlePasswordChange}
              type="password"
              placeholder="Password"
            />
            <button className={styles.submit_button} type="submit">
              SIGN IN
            </button>
            <p>OR</p>
            <Link href="#">
              <a onClick={() => setRegister(true)}>SIGN-UP</a>
            </Link>
          </>
        )}
        {register && (
          <>
            <div className={styles.register_wrapper}>
              <CustomInput type="text" placeholder="First Name" />
              <CustomInput type="text" placeholder="Last Name" />
              <CustomInput type="text" placeholder="Username" />
              <CustomInput type="email" placeholder="*Error in Email" error />
              <CustomInput type="password" placeholder="Password" />
              <CustomInput type="password" placeholder="Repeat Password" />
            </div>
            <ReCAPTCHA
              sitekey="6LeWlToeAAAAAKy0nyjcN6pAOsgq3W1zWlv4beuA"
              onChange={onChange}
            />
            <button className={styles.submit_button} type="submit">
              REGISTER
            </button>
          </>
        )}
      </form>
    </section>
  );
}
