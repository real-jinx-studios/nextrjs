import styles from "./trial_forms.module.css";
import CustomInput from "../../inputs/customInput";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import Loader from "../../utils/loader";
import { useRouter } from "next/router";
import { useRef, useState, Fragment } from "react";
import CustomInputDropdown from "../../inputs/customInputDropdown";

export default function RequestForm(props) {
  //make useRef const to attach to html input fields for login
  const usernameRef = useRef();
  const passwordRef = useRef();
  //make useRef const to attach to html input fields for registration billing details
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const countryRef = useRef();
  const cityRef = useRef();
  const vatRef = useRef();
  const streetAddr1Ref = useRef();
  const streetAddr2Ref = useRef();
  const postcodeRef = useRef();
  const phoneNumberRef = useRef();
  const companyNameRef = useRef();
  //make useRef const to attach to html input fields for registration account details
  const emailRef = useRef();
  const r_usernameRef = useRef();
  const r_passwordRef = useRef();
  const r_passwordRepeatRef = useRef();
  //make useRef const to attach to html input fields for policy
  const policyRef = useRef();

  //state for the conditional rendering if register is true or false
  const [isLoading, setIsLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [loginError, setIsLoginError] = useState(false);
  const [reCAPTCHASuccess, setReCaptchaSuccess] = useState(false);
  const [policyCheck, setPolicyCheck] = useState(false);

  const onReCAPTCHASuccess = (e) => {
    setReCaptchaSuccess(true);
  };
  return (
    <form className={styles.form}>
      <div className={styles.title__section}>
        <h1>Registration</h1>
        <p>
          Please, provide all the necessary data needed for your Account
          creation.
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="48"
            height="48"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
            />
          </svg>
        </p>
      </div>
      <div className={styles.form_section_wrapper}>
        <div className={styles.form_section_title_wrapper} step-number="1">
          <h3>Personal Details</h3>
        </div>
        <div className={styles.input_wrapper}>
          <CustomInput
            reference={firstNameRef}
            type="text"
            placeholder="First Name"
            isRequired
            error={formErrors.first_name}
          />
          <CustomInput
            reference={lastNameRef}
            type="text"
            placeholder="Last Name"
            isRequired
          />
          <CustomInput
            reference={emailRef}
            type="text"
            placeholder="Email"
            isRequired
          />
          <CustomInputDropdown
            reference={countryRef}
            type="text"
            placeholder="Country"
            isRequired
            isCountry
          />

          <CustomInput
            reference={r_usernameRef}
            type="text"
            placeholder="Username"
            isRequired
          />
          <CustomInput
            reference={r_passwordRef}
            type="password"
            placeholder="Password"
            isRequired
          />
          <CustomInput
            reference={r_passwordRepeatRef}
            type="password"
            placeholder="Repeat Password"
            isRequired
          />
        </div>
      </div>

      <div className={styles.form_section_wrapper}>
        <style jsx>
          {`
            .shit {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 1.5em;
            }
          `}
        </style>
        <div className={styles.form_section_title_wrapper} step-number="2">
          <h3>Accept Privacy Policy:</h3>
        </div>
        <div className="shit">
          <div className={styles}>
            <div>
              <input
                ref={policyRef}
                type="checkbox"
                id="policy"
                onChange={(e) => setPolicyCheck(e.target.checked)}
              />
              <label htmlFor="policy">
                &nbsp;&nbsp; I agree that my data will be processed according to
                the{" "}
                <Link href="/legal/policy">
                  <a>Privacy Policy</a>
                </Link>
                .
              </label>
            </div>
          </div>
          <ReCAPTCHA
            sitekey="6LeWlToeAAAAAKy0nyjcN6pAOsgq3W1zWlv4beuA"
            onChange={onReCAPTCHASuccess}
          />
          <div className="">
            {!isLoading ? (
              <Fragment>
                <button
                  className={policyCheck ? "button" : "button button_disabled"}
                  type="submit"
                >
                  REGISTER
                </button>
              </Fragment>
            ) : (
              <div className={styles.loader_wrapper}>
                <Loader />
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
