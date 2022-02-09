import styles from "./input.module.css";
import { useRef, useState } from "react";

export default function CustomInput(props) {
  let { isRequired, reference } = props;
  const [isVatValid, setIsVatValid] = useState(false);

  if (props.special === "vat") {
    reference = useRef();
    const handleVat = async (e) => {
      const response = await fetch("/api/dev/vat", {
        method: "POST",
        body: JSON.stringify({
          vat: reference.current.value,
        }),
        ContentType: "application/json",
      });
      const isValid = await response.json();
      setIsVatValid(isValid.valid);
    };
    return (
      <div className={styles.input_wrapper}>
        <input
          ref={reference}
          type={props.type}
          className={styles.input}
          id="name"
          placeholder={props.placeholder}
          value={props.default}
        />
        <label htmlFor="name" className={styles.input_label}>
          {props.placeholder}
          {isVatValid ? (
            <small className={styles.valid}>&nbsp;&nbsp;(VALID)</small>
          ) : (
            <small className={styles.not_valid}>&nbsp;&nbsp;(NOT VALID)</small>
          )}
        </label>
        <div className={styles.vat_check} onClick={handleVat}>
          <svg
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
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.input_wrapper}>
      <input
        ref={reference}
        type={props.type}
        className={styles.input}
        id="name"
        placeholder={props.placeholder}
        value={props.default}
      />
      <label htmlFor="name" className={styles.input_label}>
        {props.placeholder}
      </label>
    </div>
  );
}
