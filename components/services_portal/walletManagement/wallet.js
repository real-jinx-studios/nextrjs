import styles from "./wallet_management.module.css";
import { useState } from "react";
import GenericModal from "../../modal/GenericModal";
import CustomInput from "../../inputs/customInput";

export default function Wallet(props) {
  const [isOpen, setIsOpen] = useState(false);
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
          <span
            className={`${styles.operations_button} animated_shadow`}
            onClick={() => setIsOpen(true)}
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
      <GenericModal open={isOpen} onClose={() => setIsOpen(false)}>
        <style jsx>{`
          .action-container {
          }
          .action-container_text {
            font-size: var(--fs-500);
            color: var(--clr-neutral-800);
          }
          .wallet-modal_content {
            gap: 0.5em;
            display: grid;
            grid-template-area:
              "from" "to" "transfer"
              "amount" "amount" "transfer";
          }
          .wallet-modal_content p {
            color: var(--clr-neutral-800);
          }
          .wallet-modal_content-from {
            grid-area: from;
          }
          .wallet-modal_content-to {
            grid-area: to;
          }

          .wallet-modal_content-from,
          .wallet-modal_content-to,
          .wallet-modal_content-confirm,
          .wallet-modal_content-amount {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .wallet-modal_content-to {
            margin-top: 2.5em;
          }
          .wallet-modal_content-from::before {
            content: "\f063";
            font-weight: 900;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: "Font Awesome 6 Free";
            position: absolute;
            font-size: 2rem;
            left: 0;
            right: 0;
            top: 125%;
            bottom: 0;
            color: var(--clr-neutral-500);
            animation: spin 1.8s infinite linear;
          }

          @keyframes spin {
            0% {
              transform: translateY(-19px);
              opacity: 1;
            }
            100% {
              transform: translateY(20px);
              opacity: 0;
            }
          }
        `}</style>
        <div className="wallet-modal">
          <p className="action-container_text">add tokens</p>
          <div className="wallet-modal_content">
            <div className="wallet-modal_content-from">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svg_icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="main-color text-s text-bold-m">
                Available Tokens
              </span>
              <span className="neutral-dark-color text-m">123.50</span>
            </div>
            <div className="wallet-modal_content-to">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svg_icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                />
              </svg>
              <span className="main-color text-s text-bold-m">{x.name}</span>
              <span className="neutral-dark-color text-m">{x.tokens}</span>
            </div>
            <div className="wallet-modal_content-amount">
              <CustomInput
                special="price"
                type="text"
                placeholder="Amount of Tokens to trnsfer"
              />
            </div>
            <div className="wallet-modal_content-confirm">
              <button className="button button_basic_long">transfer</button>
            </div>
          </div>
        </div>
      </GenericModal>
    </div>
  );
}
