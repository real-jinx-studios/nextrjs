import styles from "./auth.module.css";
import CustomInput from "../../inputs/customInput";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import Loader from "../../utils/loader";
import { Fragment, useState, useRef } from "react";
export default function RegisterForm() {
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
  const [reCAPTCHASuccess, setReCaptchaSuccess] = useState(false);
  const [policyCheck, setPolicyCheck] = useState(false);

  const policyRef = useRef();
  const onReCAPTCHASuccess = (e) => {
    setReCaptchaSuccess(true);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const registrationObject = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      country: countryRef.current.value,
      city: cityRef.current.value,
      vat: vatRef.current.value,
      streetAddr1: streetAddr1Ref.current.value,
      streetAddr2: streetAddr2Ref.current.value,
      postcode: postcodeRef.current.value,
      company_name: companyNameRef.current.value,
      phone_number: phoneNumberRef.current.value,
      email: emailRef.current.value,
      username: r_usernameRef.current.value,
      password: r_passwordRef.current.value,
      passwordRepeat: r_passwordRepeatRef.current.value,
    };

    //const errorObject = validate(registrationObject);

    //console.log(errorObject, Object.keys(errorObject).length);

    /*if (Object.keys(errorObject).length !== 0) {
          setFormErrors(errorObject);
          return;
        }*/

    /* if (!reCAPTCHASuccess) {
          setIsLoading(false);
          return;
        }*/
    const answer = await fetch("/api/user/create-user", {
      method: "POST",
      body: JSON.stringify({
        first_name: registrationObject.firstName,
        last_name: registrationObject.lastName,
        email: registrationObject.email,
        username: registrationObject.username,
        password: registrationObject.password,
        password_repeat: registrationObject.passwordRepeat,
        streetAddr1: registrationObject.streetAddr1,
        streetAddr2: registrationObject.streetAddr2,
        postcode: registrationObject.postcode,
        phone_number: registrationObject.phone_number,
        city: registrationObject.city,
        country: registrationObject.country,
        company_name: registrationObject.company_name,
        vat: registrationObject.vat,
      }),
      ContentType: "application/json",
    });
    setIsLoading(false);
  };
  return (
    <section className={styles.section}>
      <div className={styles.section_decal_1} />
      <div className={styles.section_decal_2} />
      <div className="form holder" className={styles.form}>
        <form onSubmit={handleRegisterSubmit}>
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
              <h3>Billing Details</h3>
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
                reference={countryRef}
                type="text"
                placeholder="Country"
                isRequired
              />
              <CustomInput
                type="text"
                placeholder="VAT Number"
                isRequired
                special="vat"
                reference={vatRef}
              />
              <CustomInput
                reference={cityRef}
                type="text"
                placeholder="City"
                isRequired
              />
              <CustomInput
                reference={streetAddr1Ref}
                type="text"
                placeholder="Street Address line 1"
                isRequired
              />
              <CustomInput
                reference={streetAddr2Ref}
                type="text"
                placeholder="Street Address line 2"
              />
              <CustomInput
                reference={postcodeRef}
                type="text"
                placeholder="Postal Code"
                isRequired
              />
              <CustomInput
                reference={companyNameRef}
                type="text"
                placeholder="Company Name"
                isRequired
              />
              <CustomInput
                reference={phoneNumberRef}
                type="text"
                placeholder="Phone Number"
                isRequired
              />
            </div>
          </div>
          <div className={styles.form_section_wrapper}>
            <div className={styles.form_section_title_wrapper} step-number="2">
              <h3>Account Details</h3>
            </div>
            <div className={styles.input_wrapper}>
              <CustomInput
                reference={emailRef}
                type="text"
                placeholder="Email"
                isRequired
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
            <div className={styles.form_section_title_wrapper} step-number="3">
              <h3>Accept Privacy Policy:</h3>
            </div>
            <div className={styles.input_wrapper}>
              <div className={styles}>
                <div>
                  <input
                    ref={policyRef}
                    type="checkbox"
                    id="policy"
                    onChange={(e) => setPolicyCheck(e.target.checked)}
                  />
                  <label htmlFor="policy">
                    &nbsp;&nbsp; I agree that my data will be processed
                    according to the{" "}
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
                      className={
                        policyCheck ? "button" : "button button_disabled"
                      }
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
      </div>
    </section>
  );
}
