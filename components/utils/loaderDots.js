import styles from "./loader-dots.module.css";
export default function LoaderDots({ size, color }) {
  if (size === "s") {
    return <div className={`${styles.loading_s} ${color}`} />;
  } else if (size === "ms") {
    return <div className={`${styles.loading_ms} ${color}`} />;
  } else if (size === "m") {
    return <div className={`${styles.loading_m} ${color}`} />;
  } else if (size === "l") {
    return <div className={`${styles.loading_l} ${color}`} />;
  } else if (size === "xl") {
    return <div className={`${styles.loading_xl} ${color}`} />;
  } else {
    return <div className={`${styles.disabled}`} />;
  }
}
