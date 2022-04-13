import styles from "./services_portal.module.css";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import LoaderDots from "../utils/loaderDots";
import BillingInfoForm from "../forms/BillingInfoForm";
import ShippingInfoForm from "../forms/ShippingInfoForm";
import { promiseResolver } from "../../lib/promiseResolver";
export default function BillingInformation(props) {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [newUserInfo, setNewUserInfo] = useState({});
  // fetch user profile info with fewtch using POST method
  useEffect(() => {
    const fetcher = async () => {
      const [data, error] = await promiseResolver(
        fetch("http://localhost:80/kmweb/WebSite/get-customer-info", {
          method: "POST",
          body: JSON.stringify({
            LoginToken: Cookies.get("uat"),
            GetSAIngo: false,
            GetLicInfo: false,
          }),
        })
      );
      if (error) {
        toast.error(error.message);
      } else {
        const [data1, error] = await promiseResolver(data.json());
        if (error) {
          toast.error(error.message);
        } else {
          setUserInfo(data1);
        }
      }
    };
    fetcher();
  }, []);

  //reference all form input fields
  const legalNameRef = useRef();
  const contactNameRef = useRef();
  const countryRef = useRef();
  const cityRef = useRef();
  const vatRef = useRef();
  const addressRef = useRef();
  const recipientPhoneRef = useRef();

  //ref for use shipping info
  const recipientRef = useRef();
  const phoneRecipientRef = useRef();
  const postcodeRef = useRef();

  const handleInfoUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const billingInfoObject = {
      LegalName: legalNameRef.current.value,
      ContactName: contactNameRef.current.value,
      Country: countryRef.current.value,
      City: cityRef.current.value,
      VAT_ID: vatRef.current.value,
      Address: addressRef.current.value,
      PostCode: postcodeRef.current.value,
    };

    const shippingInfoObject = {
      RecipientName: recipientRef.current.value,
      Country: countryRef.current.value,
      City: cityRef.current.value,
      RecipientPhone: recipientPhoneRef.current.value,
      Address: addressRef.current.value,
      PostCode: postcodeRef.current.value,
    };

    const newUserInfo = {
      LoginToken: Cookies.get("uat"),
      Billing: { ...billingInfoObject },
      Shipping: { ...shippingInfoObject },
    };
    /*    console.log(JSON.stringify(newUserInfo));*/
    const [data, error] = await promiseResolver(
      fetch("http://localhost:80/kmweb/WebSite/update-billing-info", {
        method: "POST",
        body: JSON.stringify(newUserInfo),
      })
    );
    if (error) {
      toast.error(error.message);
    } else {
      const [data1, error] = await promiseResolver(data.json());
      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Successfully updated");
      }
    }
    setIsLoading(false);
  };

  if (userInfo) {
    return (
      <>
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
                userInfo={userInfo}
                references={{
                  legalNameRef: legalNameRef,
                  contactNameRef: contactNameRef,
                  countryRef: countryRef,
                  cityRef: cityRef,
                  vatRef: vatRef,
                  addressRef: addressRef,
                  postcodeRef: postcodeRef,
                }}
              />
            </form>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.title_wrapper}>
            <h2>Shipping Information</h2>
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
              <ShippingInfoForm
                userInfo={userInfo}
                references={{
                  recipientRef: recipientRef,
                  countryRef: countryRef,
                  cityRef: cityRef,
                  recipientPhoneRef: recipientPhoneRef,
                  addressRef: addressRef,
                  postcodeRef: postcodeRef,
                }}
              />
              <div className={styles.submit_buttons}>
                <button className="button button_basic_long">
                  save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className={styles.content}>
        <LoaderDots />
      </div>
    );
  }
}
