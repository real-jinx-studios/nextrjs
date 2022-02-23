import styles from "./wallet_management.module.css";
import ReactTooltip from "react-tooltip";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wallet from "./wallet";
import ActivityReports from "./activityReports";

export default function WalletManagement() {
  const [isActivityReports, setIsActivityReports] = useState(false);
  const handleCopyID = (e) => {
    navigator.clipboard.writeText(e);
    toast.info("Wallet ID copied to clipboard.", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const sampleWallets = [
    {
      name: "Main",
      description: "for da boss",
      hash: "5aa2a5a646870524594986e14cc7b0e3",
      tokens: 9874.55,
    },
    {
      name: "For the secretary",
      description: "so she doesnt report to HR",
      hash: "4e711efe95f5283adeb415872da531dc",
      tokens: 5000.0,
    },
    {
      name: "Child Support",
      description: "the wife is killing me",
      hash: "5aa2a5a64wda0524594986e14cc7bwwq",
      tokens: 2200.68,
    },
  ];

  const wallet_jsx = sampleWallets.map((x) => (
    <Wallet
      name={x.name}
      description={x.description}
      hash={x.hash}
      tokens={x.tokens}
      handleCopyID={handleCopyID}
    />
  ));

  if (isActivityReports) {
    return <ActivityReports setIsActivityReports={setIsActivityReports} />;
  }
  return (
    <div className={styles.content}>
      <div className={styles.title_wrapper}>
        <h2>Wallet Management</h2>
      </div>
      <div className={styles.content_inner_wallet_management}>
        <div
          data-tip
          data-for="remaining-tokens"
          className={styles.wallet_management_stats_tokens_left}
        >
          <ReactTooltip id="remaining-tokens" type="info">
            <span>
              The amount of tokens you have available for distribution
              <br />
              amongst your wallets.
            </span>
          </ReactTooltip>
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
            Remaining Tokens
          </span>
          <span className="neutral-dark-color text-m">123.50</span>
        </div>

        <div
          data-tip
          data-for="num-wallets"
          className={styles.wallet_management_stats_num_wallets}
        >
          <ReactTooltip id="num-wallets" type="info">
            <span>
              Amount of wallets that
              <br />
              you have created.
            </span>
          </ReactTooltip>
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
          <span className="main-color text-s text-bold-m">Wallets</span>
          <span className="neutral-dark-color text-m">3</span>
        </div>

        <div
          data-tip
          data-for="num-tokens"
          className={styles.wallet_management_stats_balance}
        >
          {" "}
          <ReactTooltip id="num-tokens" type="info">
            <span>
              The total number of tokens
              <br />
              that you have across all your wallets.
            </span>
          </ReactTooltip>
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
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span className="main-color text-s text-bold-m">Token Balance</span>
          <span className="neutral-dark-color text-m">17 075.23</span>
        </div>
        <div className={styles.wallet_management_buttons_buy_tokens}>
          <button className="button button-primary">buy tokens</button>
        </div>
        <div className={styles.wallet_management_buttons_add_wallet}>
          <button className="button button-primary">add wallet</button>
        </div>
        <div className={styles.wallet_management_buttons_reports}>
          <button
            className="button button-primary"
            onClick={() => setIsActivityReports(true)}
          >
            activity reports
          </button>
        </div>
        <div className={styles.wallet_management_title_label1}>
          <div>
            <span>Wallet Name</span>
          </div>
        </div>
        <div className={styles.wallet_management_title_label2}>
          <div>
            <span>Wallet ID</span>
          </div>
        </div>
        <div className={styles.wallet_management_title_label3}>
          <div>
            <span>Tokens</span>
          </div>
        </div>
        {wallet_jsx}
      </div>
    </div>
  );
}
