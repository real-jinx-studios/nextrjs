import styles from "./custom_payment.module.css";
import CustomInput from "../../inputs/customInput";
import React, { useRef, useState } from "react";
import useSWR from "swr";
import Loader from "../../loader";
import LoaderDots from "../../utils/loaderDots";
import BillingInfoForm from "../../forms/BillingInfoForm";
import PaymentSuccessful from "./PaymentSuccessful";
import PaymentFailed from "./PaymentFailed";
export default function CustomCheckout({
  priceRef = 0,
  setPaymentStatus,
  type,
  amount,
  tokensAmount,
  tokensTier,
  tokenCost,
  handleCancel,
  paymentStatus,
}) {
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

  if (paymentStatus === "success") {
    return <PaymentSuccessful type={type} value={0} />;
  }
  if (paymentStatus === "failed") {
    return <PaymentFailed type={type} value={0} />;
  }

  if (data && !error) {
    return (
      <div className={styles.content_inner_custom_checkout}>
        <div className="cancel_custom_wrapper">
          <div className="cancel_custom" onClick={handleCancel}>
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
            <span className="cancel_text">Cancel Payment</span>
          </div>
        </div>
        <div className={styles.fixed}>
          <div className={styles.type}>
            <div className={styles.type_title}>Payment Type:</div>
            <div className={styles.type_wrapper}>
              <div className={styles.type_decoration}></div>
              {type === "tokens" ? (
                <div className={styles.type_text}>
                  {type} ({tokensAmount})
                </div>
              ) : (
                <div className={styles.type_text}>{type}</div>
              )}
            </div>
          </div>
          <div className={styles.total_amount}>
            {type !== "tokens" ? (
              <>
                <div className={styles.total_title}>Total Amount:</div>
                <div className={styles.total_total}>
                  <p className={styles.total_cost}>
                    €
                    {priceRef.current != undefined ? priceRef.current.value : 0}
                  </p>
                  <p className={styles.total_cost_per_token}>{vatStatus}</p>
                </div>
              </>
            ) : (
              <>
                <div className={styles.total_title}>Total Amount:</div>
                <div className={styles.total_wrapper}>
                  <div className={styles.total_total}>
                    <p className={styles.total_cost}>€{tokenCost}</p>
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
            <div className={styles.paypal_button_container}>
              <h3 className={styles.custom_payment_section_title}>
                Payment Method:
              </h3>
              <div className={styles.paypal_button_container_inner}>
                <button
                  onClick={() => setPaymentStatus("failed")}
                  className={styles.paypal_button}
                >
                  <img
                    src="/images/icons/paypal.svg"
                    alt="Paypal"
                    width={80}
                    height={40}
                  />
                </button>
                <button
                  onClick={() => setPaymentStatus("success")}
                  className={styles.card_payment}
                >
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
