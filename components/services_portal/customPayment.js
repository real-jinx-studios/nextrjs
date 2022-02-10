import styles from "./services_portal.module.css";
import CustomInput from "../inputs/customInput";
import { useState, useEffect, useRef } from "react";
import RerenderCount from "../utils/rerenderCount";
export default function CustomPayment() {
  const [selectedPayment, setSelectedPayment] = useState("tokens");
  const [tokenInput, setTokenInput] = useState(50);
  let tokenPrice = 0.6;
  useEffect(() => {
    if (tokenInput < 1500) {
      tokenPrice = 0.6;
    } else if (tokenInput < 3000) {
      tokenPrice = 0.55;
    } else if (tokenInput < 4500) {
      tokenPrice = 0.5;
    } else if (tokenInput < 6000) {
      tokenPrice = 0.45;
    } else if (tokenInput < 15000) {
      tokenPrice = 0.4;
    } else if (tokenInput > 15000) {
      tokenPrice = 0.3;
    }
  }, [tokenInput]);
  const handlePaymentSelection = (e) => {
    setSelectedPayment(e.target.value);
  };
  const handleTokenInput = (e) => {
    console.log(e.target.value);
    const regex = /([^0-9]+)/g;
    const tokenNum = e.target.value;
    if (regex.test(tokenNum)) {
      return;
    }
    setTokenInput(tokenNum);
  };

  return (
    <div className={styles.content}>
      <div className={styles.title_wrapper}>
        <h2>Custom Payment and Tokens Purchase</h2>
      </div>
      <div className={styles.content_inner_custom_payment}>
        <form className={styles.custom_payment_form}>
          <CustomInput
            type="radio"
            placeholder="Installment"
            id="Installment"
            name="custom-payment"
            default="installment"
            checked={selectedPayment === "installment"}
            handleChange={handlePaymentSelection}
          />
          <CustomInput
            type="radio"
            placeholder="Support and Subscription"
            id="sas"
            name="custom-payment"
            default="sas"
            checked={selectedPayment === "sas"}
            handleChange={handlePaymentSelection}
          />
          <CustomInput
            type="radio"
            placeholder="Upgrade"
            id="upgrade"
            name="custom-payment"
            default="upgrade"
            checked={selectedPayment === "upgrade"}
            handleChange={handlePaymentSelection}
          />
          <CustomInput
            type="radio"
            placeholder="Tokens"
            id="tokens"
            name="custom-payment"
            default="tokens"
            checked={selectedPayment === "tokens"}
            handleChange={handlePaymentSelection}
          />
          <CustomInput
            type="radio"
            placeholder="Other"
            id="Other"
            name="custom-payment"
            default="other"
            checked={selectedPayment === "other"}
            handleChange={handlePaymentSelection}
          />
          <div className="padding-block-s">
            {selectedPayment === "tokens" ? (
              <CustomInput
                type="text"
                placeholder="Price, €(VAT excluded)"
                id="total"
                name="custom-payment"
                default={`€${((tokenInput * (tokenPrice * 100)) / 100).toFixed(
                  2
                )}`}
                disabled={true}
              />
            ) : (
              <CustomInput
                type="text"
                placeholder="Price, €(VAT excluded)"
                id="total"
                name="custom-payment"
              />
            )}
          </div>
          <button className="button button_basic_long margin-block-s">
            MAKE PAYMENT
          </button>
        </form>
        <div
          className={`${styles.custom_payment_token_wrapper} ${
            selectedPayment === "tokens" ? styles.visible : ""
          }`}
        >
          <div className={styles.token_field}>
            <CustomInput
              type="text"
              value={tokenInput}
              default={tokenInput}
              placeholder="Amount (min. 50) x €0.60 per token"
              id="token_amount"
              name="token-amount"
              onBlur={handleTokenInput}
              handleChange={handleTokenInput}
            />
          </div>
          <table className={styles.token_price_table}>
            <thead>
              <tr>
                <th className="align-left">Num. Tokens</th>
                <th className="align-right">Price per Token</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="align-left">50 - 1499</td>
                <td className="align-right">€0.60</td>
              </tr>
              <tr>
                <td className="align-left">1500 - 2999</td>
                <td className="align-right">€0.55</td>
              </tr>
              <tr>
                <td className="align-left">3000 - 4499</td>
                <td className="align-right">€0.50</td>
              </tr>
              <tr>
                <td className="align-left">4500 - 5999</td>
                <td className="align-right">€0.45</td>
              </tr>
              <tr>
                <td className="align-left">6000 - 14999</td>
                <td className="align-right">€0.40</td>
              </tr>
              <tr>
                <td className="align-left">15000+</td>
                <td className="align-right">€0.30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
