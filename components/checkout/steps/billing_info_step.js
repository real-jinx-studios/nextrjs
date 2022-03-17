import styles from "./steps.module.css";
import CustomInput from "../../inputs/customInput";
import React, { useRef, useState } from "react";
import useSWR from "swr";
import LoaderDots from "../../utils/loaderDots";
import BillingInfoForm from "../../forms/BillingInfoForm";
export default function BillingInfoSteps({
  user = {},
  handleSubmit,
  isCartEditable,
  setIsCartEditable,
}) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/user", fetcher);
  const [userInfo, setUserInfo] = useState({});

  //reference all form input fields
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

  if (data && !error) {
    return (
      <div
        className={styles.billing}
        onClick={isCartEditable ? () => setIsCartEditable(false) : ""}
      >
        {
          <div
            className={`${styles.billing__inner} ${
              isCartEditable ? styles.cart_editable : ""
            }`}
          >
            <h3 className={styles.billing__title}>Billing details</h3>
            <form
              noValidate
              onSubmit={handleSubmit}
              className="billing__fields"
            >
              <BillingInfoForm
                userInfo={data}
                references={{
                  firstNameRef: firstNameRef,
                  lastNameRef: lastNameRef,
                  countryRef: countryRef,
                  cityRef: cityRef,
                  vatRef: vatRef,
                  streetAddr1Ref: streetAddr1Ref,
                  streetAddr2Ref: streetAddr2Ref,
                  postcodeRef: postcodeRef,
                  phoneNumberRef: phoneNumberRef,
                  companyNameRef: companyNameRef,
                }}
              />
              <label htmlFor="shit" className="btn">
                <button
                  className="button button_basic_long"
                  type="submit"
                  style={{ marginTop: 28 }}
                >
                  continue
                </button>
              </label>
            </form>
          </div>
        }
      </div>
    );
  } else {
    return <LoaderDots size="l" color="system" />;
  }
}
