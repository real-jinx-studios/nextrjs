import styles from "./input.module.css";

export default function CustomInput(props) {
  const { isRequired, reference } = props;
  if (props.error) {
    return (
      <label className={`${styles.input_wrapper} ${styles.two}`}>
        <input
          ref={reference}
          className={styles.input}
          onChange={props.handleChange}
          type={props.type}
          defaultValue={props.defaultValue}
          value={props.value}
          required
        />
        <span className={styles.placeholder}>{props.placeholder}</span>
      </label>
    );
  }

  return (
    <label className={`${styles.input_wrapper} ${styles.one}`}>
      <input
        ref={reference}
        className={styles.input}
        onChange={props.handleChange}
        type={props.type}
        defaultValue={props.defaultValue}
        value={props.value}
        required
      />
      {isRequired ? (
        <span
          className={`${styles.placeholder} /*${
            isRequired ? styles.required : ""
          }*/`}
        >
          {props.placeholder}
        </span>
      ) : (
        <span className={`${styles.placeholder}`}>
          {props.placeholder} <small>&nbsp;(optional)</small>
        </span>
      )}
    </label>
  );
}
