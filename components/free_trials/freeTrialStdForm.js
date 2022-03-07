import styles from "./free_trial.module.css";
import RegisterFormTrial from "../forms/auth/registerFormTrial";
import LoginFormTrial from "../forms/auth/loginFormTrial";
import TrialRequestForm from "../forms/trialRequestForm";
import { useEffect, useState } from "react";
export default function FreeTrialStdFrom({ session, data }) {
  if (data) {
    console.log(data);
  }
  const [state, setState] = useState("login");
  useEffect(() => {
    if (session === "authenticated") {
      setState("authenticated");
    } else {
      setState("login");
    }
  }, [session]);
  const handleFormStateChange = (e) => {
    setState(e);
  };

  return (
    <section
      className={styles.products_section}
      aria-labelledby="products-trial-registration-section"
    >
      <div className="container">
        <h2
          id="products-trial-registration-section"
          className={styles.products_section_title}
        >
          {!state === "authenticated"
            ? "In order to offer you a Free Trial, you need to Log in to an existing account or create a new one."
            : "Complete the steps below to receive your free trial!"}
        </h2>
      </div>

      <div className="container">
        {state === "register" && (
          <RegisterFormTrial handleFormStateChange={handleFormStateChange} />
        )}
        {state === "login" && (
          <LoginFormTrial handleFormStateChange={handleFormStateChange} />
        )}
        {state === "authenticated" && data && (
          <TrialRequestForm
            handleFormStateChange={handleFormStateChange}
            data={data}
          />
        )}
      </div>
    </section>
  );
}
