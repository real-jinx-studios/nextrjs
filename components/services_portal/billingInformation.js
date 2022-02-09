import styles from "./services_portal.module.css";
import CustomInput from "../inputs/customInput";
import React, { useEffect, useState } from "react";
export default function BillingInformation(props) {
  const [userInfo, setUserInfo] = useState({});
  const [newUserInfo, setNewUserInfo] = useState({});
  useEffect(() => {
    fetch("/api/user")
      .then((result) => result.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, []);
  return (
    <div className={styles.content}>
      <div className={styles.title_wrapper}>
        <h2>Billing Information</h2>
      </div>
      <div className={styles.content_inner}>
        <form className={styles.billing_form}>
          <CustomInput
            default={userInfo.first_name}
            type="text"
            placeholder="First Name"
            isRequired
          />
          <CustomInput
            default={userInfo.last_name}
            type="text"
            placeholder="Last Name"
            isRequired
          />
          <CustomInput
            default={userInfo.country}
            type="text"
            placeholder="Country"
            isRequired
          />
          <CustomInput
            default={userInfo.vat}
            type="text"
            placeholder="VAT Number"
            isRequired
            special="vat"
          />
          <CustomInput
            default={userInfo.city}
            type="text"
            placeholder="City"
            isRequired
          />
          <CustomInput
            default={userInfo.street_address}
            type="text"
            placeholder="Street Address line 1"
            isRequired
          />
          <CustomInput
            default={userInfo.street_address_2}
            type="text"
            placeholder="Street Address line 2"
          />
          <CustomInput
            default={userInfo.postcode}
            type="text"
            placeholder="Postal Code"
            isRequired
          />
          <CustomInput
            default={userInfo.company_name}
            type="text"
            placeholder="Company Name"
            isRequired
          />
          <CustomInput
            default={userInfo.phone_num}
            type="text"
            placeholder="Phone Number"
            isRequired
          />
          <div className={styles.submit_buttons}>
            <button className="button button_basic_long">save changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}
