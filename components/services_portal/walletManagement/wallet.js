import styles from "./wallet_management.module.css";
import { useState } from "react";

export default function Wallet(props) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const x = props;
  const handleDelete = (e) => {
    console.log(x.name);
    setIsDeleteOpen(true);
  };
  return (
    <div className={styles.wallet_management_wallets}>
      <div
        className={`${styles.wallet_management_delete_prompt_wrapper} ${
          isDeleteOpen ? styles.delete_prompt_open : ""
        }`}
      >
        <div className={styles.delete_prompt_title}>Delete wallet:</div>
        <div className={styles.delete_prompt_wrapper}>
          <div className={styles.delete_prompt}>Yes</div>
          <div
            className={styles.delete_prompt}
            onClick={() => setIsDeleteOpen(false)}
          >
            No
          </div>
        </div>
        <div className={styles.delete_prompt_title_wrapper}>
          <p className={styles.delete_prompt_title_text}>{x.name}</p>
          <p className={styles.delete_prompt_title_description}>
            {x.description}
          </p>
        </div>
        <div className={styles.delete_prompt_hash_wrapper}>
          <span className={styles.delete_prompt_title_hash}>{x.hash}</span>
        </div>
        <div className={styles.delete_prompt_available_token_wrapper}>
          <p>Tokens:</p>
          <p>{x.tokens}</p>
        </div>
      </div>
      <div className={styles.wallet_description}>
        <div className={styles.wallet_name_wrapper}>
          <span
            className={`${styles.wallet_delete_button}  animated_shadow`}
            onClick={handleDelete}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>

          <span className={`${styles.wallet_edit_button}  animated_shadow`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </span>
        </div>
        <div className={styles.wallet_name_wrapper}>
          <p className={styles.wallet_description_title}>{x.name}</p>
          <p className={styles.wallet_description_text}>{x.description}</p>
        </div>
      </div>
      <div className={styles.wallet_hash}>
        <div className={styles.wallet_hash_wrapper}>
          <p>{x.hash}</p>
          <a onClick={() => x.handleCopyID(x.hash)} className={styles.copy}>
            Copy ID
          </a>
        </div>
      </div>
      <div className={styles.wallet_tokens}>
        <span className={styles.wallet_tokens_wrapper}>{x.tokens}</span>

        <div className={styles.token_operations_wrapper}>
          <span className={`${styles.operations_button} animated_shadow`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </span>
          <span className={`${styles.operations_button}  animated_shadow`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 12H6"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
