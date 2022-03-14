import styles from "./trial_request_form.module.css";
import CustomInput from "../inputs/customInput";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import Loader from "../utils/loader";
import { useRouter } from "next/router";
import { useRef, useState, Fragment } from "react";
import CustomInputDropdown from "../inputs/customInputDropdown";

export default function TrialRequestForm(props) {
  const userType = props.data.user.name.type;
  //make useRef const to attach to html input fields for user
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
      <div className={styles.form_section_wrapper}>
        <div className={styles.form_section_title_wrapper} step-number="1">
          <p>Download the Hardware ID tool and run it on your computer.</p>
          <button className="button button_basic_long">DOWNLOAD</button>
        </div>
        <div className={styles.input_wrapper}>
          <p className={styles.input_info}>
            Enter the Hardware ID obtained from the HardID tool.
          </p>
          <CustomInput
            reference={firstNameRef}
            type="text"
            placeholder="Hardware ID"
            isRequired
          />
        </div>
      </div>

      {userType !== "student" ? (
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
          <div className={styles.form_section_title_wrapper} step-number="2">
            <p>Select Product(s):</p>
          </div>
          <div className="shit">
            <div className={styles.product_outer}>
              <div className={styles.product_select_wrapper}>
                <div>
                  <input
                    className={styles.checkbox_input}
                    ref={policyRef}
                    type="checkbox"
                    id="ezt"
                    onChange={(e) => setPolicyCheck(e.target.checked)}
                  />
                  <label className={styles.product_wrapper} for="ezt">
                    <label className={styles.product} for="ezt">
                      <img
                        src="/images/icons/ez_icon3.png"
                        width={50}
                        height={50}
                        alt="EZtitles Icon"
                      />
                      <p>EZTitles Ultimate</p>
                    </label>
                  </label>
                </div>
                <div>
                  <input
                    className={styles.checkbox_input}
                    ref={policyRef}
                    type="checkbox"
                    id="ezc"
                    onChange={(e) => setPolicyCheck(e.target.checked)}
                  />
                  <label className={styles.product_wrapper} for="ezc">
                    <label className={styles.product} for="ezc">
                      <img
                        src="/images/icons/ezc_icon3.png"
                        width={50}
                        height={50}
                        alt="EZConvert Icon"
                      />
                      <p>EZConvert Professional (5 day trial)</p>
                    </label>
                  </label>
                </div>
                <div>
                  <input
                    className={styles.checkbox_input}
                    ref={policyRef}
                    type="checkbox"
                    id="ezp1"
                    onChange={(e) => setPolicyCheck(e.target.checked)}
                  />
                  <label className={styles.product_wrapper} for="ezp1">
                    <label className={styles.product} for="ezp1">
                      <img
                        src="/images/icons/ep_icon3.png"
                        width={50}
                        height={50}
                        alt="EZTitles Plugin Icon"
                      />
                      <p>EZTitles Plug-in for ProMedia@ Carbon</p>
                    </label>
                  </label>
                </div>
                <div>
                  <input
                    className={styles.checkbox_input}
                    ref={policyRef}
                    type="checkbox"
                    id="ezp2"
                    onChange={(e) => setPolicyCheck(e.target.checked)}
                  />
                  <label className={styles.product_wrapper} for="ezp2">
                    <label className={styles.product} for="ezp2">
                      <img
                        src="/images/icons/ep_icon3.png"
                        width={50}
                        height={50}
                        alt="EZTitles Plugin Icon"
                      />
                      <p>EZTitles Plug-in for Cambria FTC</p>
                    </label>
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              {!isLoading ? (
                <Fragment>
                  <button
                    className={
                      policyCheck ? "button" : "button button_disabled"
                    }
                    type="submit"
                  >
                    SEND TRIAL REQUEST
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
      ) : (
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
          <div className={styles.form_section_title_wrapper} step-number="2">
            <p>Student Trial:</p>
          </div>
          <div className="shit">
            <div className={styles.product_outer}>
              <div className={styles.product_select_wrapper}>
                <div>
                  <input
                    className={styles.checkbox_input}
                    ref={policyRef}
                    type="checkbox"
                    id="ezt"
                    checked={true}
                  />
                  <label className={styles.product_wrapper} htmlFor="ezt">
                    <label className={styles.product} htmlFor="ezt">
                      <img
                        src="/images/icons/ez_icon3.png"
                        width={50}
                        height={50}
                        alt="EZtitles Icon"
                      />
                      <p>EZTitles Ultimate: Student Trial (3 months)</p>
                    </label>
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              {!isLoading ? (
                <Fragment>
                  <button className={"button"} type="submit">
                    SEND TRIAL REQUEST
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
      )}
    </form>
  );
}
