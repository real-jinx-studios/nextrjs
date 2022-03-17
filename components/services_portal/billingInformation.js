import styles from "./services_portal.module.css";
import CustomInput from "../inputs/customInput";
import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoaderDots from "../utils/loaderDots";
import CustomInputDropdown from "../inputs/customInputDropdown";
import BillingInfoForm from "../forms/BillingInfoForm";
export default function BillingInformation(props) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/user", fetcher);
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [newUserInfo, setNewUserInfo] = useState({});

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

  const handleInfoUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const billingInfoObject = {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      country: countryRef.current.value,
      city: cityRef.current.value,
      vat: vatRef.current.value,
      streetAddr1: streetAddr1Ref.current.value,
      streetAddr2: streetAddr2Ref.current.value,
      postcode: postcodeRef.current.value,
      company_name: companyNameRef.current.value,
      phone_number: phoneNumberRef.current.value,
    };

    const answer = await fetch("/api/user/update-billing", {
      method: "PATCH",
      body: JSON.stringify(billingInfoObject),
      headers: { "Content-Type": "application/json" },
    });
    const result = await answer.json();
    toast.success("Billing info updated successfully!", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    setIsLoading(false);
  };

  if (data && !error) {
    return (
      <div className={styles.content}>
        <div className={styles.title_wrapper}>
          <h2>Billing Information</h2>
        </div>
        <div className={styles.content_inner}>
          <form
            className={`${styles.billing_form} ${
              isLoading ? styles.updating_form : ""
            }`}
            onSubmit={handleInfoUpdate}
          >
            {isLoading && (
              <div className={styles.loading_overlay}>
                <LoaderDots size="xl" color="system" />
              </div>
            )}
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
            <div className={styles.submit_buttons}>
              <button className="button button_basic_long">save changes</button>
            </div>
          </form>
        </div>
      </div>
    );
  } else if (!data && !error) {
    return (
      <div className={styles.content}>
        <LoaderDots />
      </div>
    );
  } else {
    return <div className={styles.content}>{JSON.stringify(error)}</div>;
  }
}
