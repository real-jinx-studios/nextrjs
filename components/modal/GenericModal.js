import styles from "./register_modal.module.css";
import FreeTrialStdFrom from "../free_trials/freeTrialStdForm";
export default function GenericModal(props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal_inner}>
        <div className={styles.modal_header}>
          <FreeTrialStdFrom />
        </div>
        <div className={styles.modal_footer}></div>
      </div>
    </div>
  );
}
