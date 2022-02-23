import styles from "./input.module.css";
import { useRef, useState, useEffect } from "react";
import LoaderDots from "../utils/loaderDots";

export default function CustomInput(props) {
  let { isRequired, reference } = props;
  const [isVatValid, setIsVatValid] = useState();
  const [vatValue, setVatValue] = useState(props.default);

  //VAT input component
  if (props.special === "vat") {
    const handleVatChange = (e) => {
      setVatValue(e.target.value);
    };
    const handleVat = async (e) => {
      setIsVatValid(undefined);
      const sanitize = /[^A-Z0-9]/g;
      const stripCountry =
        /^((AT)U[0-9]{8}|(BE)0[0-9]{9}|(BG)[0-9]{9,10}|(CY)[0-9]{8}L|(CZ)[0-9]{8,10}|(DE)[0-9]{9}|(DK)[0-9]{8}|(EE)[0-9]{9}|(EL|GR)[0-9]{9}|(ES)[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)[0-9]{8}|(FR)[0-9A-Z]{2}[0-9]{9}|(GB)([0-9]{9}([0-9]{3})|[A-Z]{2}[0-9]{3})|(HU)[0-9]{8}|(IE)[0-9]S[0-9]{5}L|(IT)[0-9]{11}|(LT)([0-9]{9}|[0-9]{12})|(LU)[0-9]{8}|(LV)[0-9]{11}|(MT)[0-9]{8}|(NL)[0-9]{9}B[0-9]{2}|(PL)[0-9]{10}|(PT)[0-9]{9}|(RO)[0-9]{2,10}|(SE)[0-9]{12}|(SI)[0-9]{8}|(SK)[0-9]{10})$/;
      let vatValue = reference.current.value;
      console.log(vatValue);
      vatValue = vatValue.toUpperCase();
      console.log(vatValue);
      vatValue = vatValue.replace(sanitize, "");
      console.log(vatValue);
      if (stripCountry.test(vatValue)) {
        vatValue = vatValue.substring(2);
      }

      const response = await fetch("/api/dev/vat", {
        method: "POST",
        body: JSON.stringify({
          vat: vatValue,
        }),
        ContentType: "application/json",
      });
      const isValid = await response.json();
      setIsVatValid(isValid.valid);
    };
    useEffect(() => {
      handleVat();
    }, []);
    return (
      <div className={styles.input_wrapper}>
        <input
          ref={reference}
          type={props.type}
          className={styles.input}
          id={props.id}
          placeholder={props.placeholder}
          value={vatValue}
          onBlur={handleVat}
          onChange={handleVatChange}
        />
        <label htmlFor={props.id} className={styles.input_label}>
          {props.placeholder}
          {isVatValid === undefined && (
            <small className={styles.pending}>
              &nbsp;&nbsp;(VERIFYING) &nbsp;
              <LoaderDots size="s" color="warning" />
            </small>
          )}
          {isVatValid === false && (
            <small className={styles.not_valid}>&nbsp;&nbsp;(NOT VALID)</small>
          )}
          {isVatValid === true && (
            <small className={styles.valid}>&nbsp;&nbsp;(VALID)</small>
          )}
        </label>
        <div className={styles.vat_check} onClick={handleVat}>
          {/*<svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.vat_check_icon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>*/}
          {isVatValid === undefined && vatValue === "" && <LoaderDots />}
          {isVatValid === undefined && vatValue !== "" && (
            <LoaderDots size="ms" color="warning" />
          )}

          {isVatValid === true && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.vat_check_icon_verified}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
          {isVatValid === false && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.vat_check_icon_failed}
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
          )}
        </div>
      </div>
    );
  }

  //RADIO input component
  if (props.type === "radio") {
    return (
      <label className={styles.radio_input_wrapper}>
        <input
          type="radio"
          className={styles.radio_input}
          name={props.name}
          value={props.default}
          id={props.id}
          ref={reference}
          checked={props.checked}
          onChange={props.handleChange}
        />
        <div className={styles.radio_input_circle}></div>
        <div className={styles.radio_input_text}>{props.placeholder}</div>
      </label>
    );
  }

  //default input component
  return (
    <div className={styles.input_wrapper}>
      <input
        ref={reference}
        type={props.type}
        className={`${styles.input} ${props.disabled ? styles.disabled : ""}`}
        id={props.id}
        placeholder={props.placeholder}
        defaultValue={props.default}
        value={props.value}
        disabled={props.disabled}
        onBlur={props.onBlur}
        onChange={props.handleChange}
      />
      <label htmlFor={props.id} className={styles.input_label}>
        {props.placeholder}
      </label>
    </div>
  );
}
