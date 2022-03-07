import styles from "../register_form.module.css";
import CustomInput from "../../inputs/customInput";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import Loader from "../../utils/loader";
import { useRouter } from "next/router";
import React, { useRef, useState, Fragment } from "react";
import CustomInputDropdown from "../../inputs/customInputDropdown";

export default function RegisterFormTrial(props) {
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
  const eduRef = useRef();
  const teacherRef = useRef();
  //make useRef const to attach to html input fields for registration account details
  const emailRef = useRef();
  const r_usernameRef = useRef();
  const r_passwordRef = useRef();
  const r_passwordRepeatRef = useRef();
  //make useRef const to attach to html input fields for policy
  const policyRef = useRef();

  //state for the conditional rendering if register is true or false
  const [isStudent, setIsStudent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [loginError, setIsLoginError] = useState(false);
  const [reCAPTCHASuccess, setReCaptchaSuccess] = useState(false);
  const [policyCheck, setPolicyCheck] = useState(false);

  const handleCancelStudent = (e) => {
    setIsStudent(false);
  };
  const handleStudentChange = (e) => {
    setIsStudent(true);
  };

  const onReCAPTCHASuccess = (e) => {
    setReCaptchaSuccess(true);
  };
  return (
    <form className={styles.form}>
      <div className={styles.title__section}>
        <p className={styles.title__section_p}>Create new account</p>
        <p className={styles.title__section_p_subtext}>
          Already have and account?{" "}
          <a
            className={styles.title__section_a}
            onClick={() => props.handleFormStateChange("login")}
          >
            Log in
          </a>
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
        <div className={styles.form_section_title_wrapper} step-number="2">
          <style jsx>
            {`
              .small {
                color: var(--clr-neutral-500);
                padding: 0 0.2em;
                line-height: 1;
                transition: all 0.3 var(--cubic-bezier);
              }
              .small2 {
                color: var(--clr-primary);
                padding: 0 0.2em;
                line-height: 1;
              }
              .gap {
                margin-bottom: 2.9em;
              }
            `}
          </style>
          <h3>
            University/Educational Institution{" "}
            {!isStudent ? (
              <small className="small">(optional)</small>
            ) : (
              <small className="small2">
                (you are now registering for a student account)
              </small>
            )}
          </h3>
        </div>
        <div className={`${styles.input_wrapper} gap`}>
          <style jsx>
            {`
              .gap {
                margin-bottom: 1.5em;
              }
            `}
          </style>
          <CustomInput
            reference={teacherRef}
            type="radio"
            placeholder="Register for student license"
            isRequired
            checked={isStudent}
            handleChange={handleStudentChange}
          />
          {isStudent && (
            <div className="cancel_custom_wrapper">
              <div className="cancel_custom" onClick={handleCancelStudent}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cancel_icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="cancel_text">Cancel</span>
              </div>
            </div>
          )}
        </div>
        {isStudent && (
          <div className={styles.input_wrapper}>
            <CustomInput
              reference={eduRef}
              type="text"
              placeholder="Educational Institution"
              isRequired
            />
            <CustomInput
              reference={teacherRef}
              type="text"
              placeholder="Professor/Lecturer"
              isRequired
            />
          </div>
        )}
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
            a {
              color: var(--clr-primary);
            }
          `}
        </style>
        <div className={styles.form_section_title_wrapper} step-number="3">
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
