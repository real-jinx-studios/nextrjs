import styles from "./custom_payment.module.css";
import CustomInput from "../../inputs/customInput";
import { useState, useEffect, useRef } from "react";
import RerenderCount from "../../utils/rerenderCount";
import CustomCheckout from "./customCheckout";
export default function CustomPayment() {
  const [selectedPayment, setSelectedPayment] = useState("tokens");
  const [tokenInput, setTokenInput] = useState(50);
  const [customPrice, setCustomPrice] = useState(0);
  const [tokenCost, setTokenCost] = useState(0);
  const [tokenTier, setTokenTier] = useState(0);
  const [isCheckout, setIsCheckout] = useState(false);

  const priceRef = useRef(0);

  const handleCancel = () => {
    setIsCheckout(false);
  };
  const handleCustomPrice = (e) => {
    setCustomCost(e.target.value);
  };
  let tokenPrice = 0.6;
  useEffect(() => {
    if (tokenInput < 1500) {
      tokenPrice = 0.6;
      setTokenTier(0);
    } else if (tokenInput < 3000) {
      tokenPrice = 0.55;
      setTokenTier(1);
    } else if (tokenInput < 4500) {
      tokenPrice = 0.5;
      setTokenTier(2);
    } else if (tokenInput < 6000) {
      tokenPrice = 0.45;
      setTokenTier(3);
    } else if (tokenInput < 15000) {
      tokenPrice = 0.4;
      setTokenTier(4);
    } else if (tokenInput >= 15000) {
      tokenPrice = 0.3;
      setTokenTier(5);
    }
  }, [tokenInput]);

  const handlePaymentSelection = (e) => {
    setSelectedPayment(e.target.value);
  };
  const handleTokenInput = (e) => {
    const regex = /([^0-9]+)/g;
    const tokenNum = e.target.value;
    if (regex.test(tokenNum)) {
      return;
    }

    setTokenInput(tokenNum);
  };
  useEffect(() => {
    const total = ((tokenInput * (tokenPrice * 100)) / 100).toFixed(2);
    setTokenCost(total);
  }, [tokenInput]);

  return (
    <div className={styles.content}>
      <div className={styles.title_wrapper}>
        <h2>Custom Payment and Tokens Purchase</h2>
      </div>
      {!isCheckout && (
        <div className={styles.content_inner_custom_payment}>
          <form
            className={styles.custom_payment_form}
            onSubmit={() => setIsCheckout(true)}
          >
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
                  default={`€${tokenCost}`}
                  value={`€${tokenCost}`}
                  disabled={true}
                />
              ) : (
                <CustomInput
                  special="price"
                  type="text"
                  placeholder="Price, €(VAT excluded)"
                  id="total"
                  name="custom-payment"
                  reference={priceRef}
                  stateHandler={setCustomPrice}
                  default={`€${customPrice}`}
                  /*handleChange={handleCustomCost}*/
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
            aria-hidden={selectedPayment !== "tokens"}
          >
            <div className={styles.token_field}>
              <CustomInput
                type="text"
                value={tokenInput}
                default={50}
                placeholder="Amount (min. 50)"
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
                <tr className={tokenTier === 0 ? styles.active_tier : ""}>
                  <td className="align-left">50 - 1499</td>
                  <td className="align-right">€0.60</td>
                </tr>
                <tr className={tokenTier === 1 ? styles.active_tier : ""}>
                  <td className="align-left">1500 - 2999</td>
                  <td className="align-right">€0.55</td>
                </tr>
                <tr className={tokenTier === 2 ? styles.active_tier : ""}>
                  <td className="align-left">3000 - 4499</td>
                  <td className="align-right">€0.50</td>
                </tr>
                <tr className={tokenTier === 3 ? styles.active_tier : ""}>
                  <td className="align-left">4500 - 5999</td>
                  <td className="align-right">€0.45</td>
                </tr>
                <tr className={tokenTier === 4 ? styles.active_tier : ""}>
                  <td className="align-left">6000 - 14999</td>
                  <td className="align-right">€0.40</td>
                </tr>
                <tr className={tokenTier === 5 ? styles.active_tier : ""}>
                  <td className="align-left">15000+</td>
                  <td className="align-right">€0.30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      {isCheckout && (
        <CustomCheckout
          priceRef={priceRef}
          type={selectedPayment}
          amount={customPrice}
          tokensAmount={tokenInput}
          tokensTier={tokenTier}
          tokenCost={tokenCost}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
}
