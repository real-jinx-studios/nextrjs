import React, { useState } from "react";
import { useEntries } from "../../lib/swr-hooks";
import { useRouter } from "next/router";
import styles from "../../styles/login.module.css";
import CustomInput from "../../components/customInput";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";

export default function ServicePortal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { entries, isLoading, time } = useEntries();
  const router = useRouter();

  const handleUsernameChange = (e) => {
    console.log(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
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
        }
      })
      .catch(function (error) {
        console.log(error, "error ass");
      });
  };
  return (
    <section className={styles.section}>
      <form noValidate onSubmit={handleSubmit}>
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
          <a>SIGN-UP</a>
        </Link>
      </form>
    </section>
  );
}
