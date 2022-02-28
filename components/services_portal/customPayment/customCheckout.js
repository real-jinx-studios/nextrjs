import styles from "./custom_payment.module.css";
import CustomInput from "../../inputs/customInput";
import React, { useRef, useState } from "react";
import useSWR from "swr";
import Loader from "../../loader";
import LoaderDots from "../../utils/loaderDots";
export default function CustomCheckout(props) {
  const [vatStatus, setVatStatus] = useState("(w/o VAT)");
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/user", fetcher);
  const handleCheckout = (e) => {
    e.preventDefault();
  };
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
      <div className={styles.content_inner_custom_checkout}>
        <div className={styles.cancel_custom_checkout_wrapper}>
          <div
            className={styles.cancel_custom_checkout}
            onClick={props.handleCancel}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.cancel_icon}
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
            <span className={styles.cancel_text}>Cancel Payment</span>
          </div>
        </div>
        <div className={styles.fixed}>
          <div className={styles.type}>
            <div className={styles.type_title}>Payment Type:</div>
            <div className={styles.type_wrapper}>
              <div className={styles.type_decoration}></div>
              {props.type === "tokens" ? (
                <div className={styles.type_text}>
                  {props.type} ({props.tokensAmount})
                </div>
              ) : (
                <div className={styles.type_text}>{props.type}</div>
              )}
            </div>
          </div>
          <div className={styles.total_amount}>
            {props.type !== "tokens" ? (
              <>
                <div className={styles.total_title}>Total Amount:</div>
                <div className={styles.total_total}>
                  <p className={styles.total_cost}>€{props.amount}</p>
                  <p className={styles.total_cost_per_token}>{vatStatus}</p>
                </div>
              </>
            ) : (
              <>
                <div className={styles.total_title}>Total Amount:</div>
                <div className={styles.total_wrapper}>
                  <div className={styles.total_total}>
                    <p className={styles.total_cost}>€{props.tokenCost}</p>
                    <p className={styles.total_cost_per_token}>
                      (€0.60 per token)
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className={styles.custom_payment_form_wrapper}>
          <h3 className={styles.custom_payment_section_title}>Billing Info:</h3>
          <form
            className={styles.custom_checkout_form}
            onSubmit={handleCheckout}
          >
            <div className={styles.custom_checkout_form_fields}>
              <CustomInput
                default={data.first_name}
                type="text"
                placeholder="First Name"
                isRequired
                reference={firstNameRef}
              />
              <CustomInput
                default={data.last_name}
                type="text"
                placeholder="Last Name"
                isRequired
                reference={lastNameRef}
              />
              <CustomInput
                default={data.country}
                type="text"
                placeholder="Country"
                isRequired
                disabled
                reference={countryRef}
              />
              <CustomInput
                default={data.vat}
                type="text"
                placeholder="VAT Number"
                isRequired
                special="vat"
                reference={vatRef}
              />
              <CustomInput
                default={data.city}
                type="text"
                placeholder="City"
                isRequired
                reference={cityRef}
              />
              <CustomInput
                default={data.street_address}
                type="text"
                placeholder="Street Address line 1"
                isRequired
                reference={streetAddr1Ref}
              />
              <CustomInput
                default={data.street_address_2}
                type="text"
                placeholder="Street Address line 2"
                reference={streetAddr2Ref}
              />
              <CustomInput
                default={data.postcode}
                type="text"
                placeholder="Postal Code"
                isRequired
                reference={postcodeRef}
              />
              <CustomInput
                default={data.company_name}
                type="text"
                placeholder="Company Name"
                isRequired
                reference={companyNameRef}
              />
              <CustomInput
                default={data.phone_num}
                type="text"
                placeholder="Phone Number"
                isRequired
                reference={phoneNumberRef}
              />
            </div>
            <div className={styles.paypal_button_container}>
              <h3 className={styles.custom_payment_section_title}>
                Payment Method:
              </h3>
              <div className={styles.paypal_button_container_inner}>
                <button className={styles.paypal_button}>
                  <img
                    src="/images/icons/paypal.svg"
                    alt="Paypal"
                    width={80}
                    height={40}
                  />
                </button>
                <button className={styles.card_payment}>
                  Debit or credit card
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  } else if (!data && !error) {
    return (
      <div className={styles.content_inner_custom_checkout}>
        <LoaderDots size="l" color="system" />
      </div>
    );
  } else {
    return <div className={styles.content}>{JSON.stringify(error)}</div>;
  }
}
