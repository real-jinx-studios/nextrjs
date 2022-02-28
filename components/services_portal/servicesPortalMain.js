import styles from "./services_portal.module.css";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import BillingInformation2 from "./billingInformation2";
import BillingInformation from "./billingInformation";
import CustomPayment from "./customPayment/customPayment";
import RerenderCount from "../utils/rerenderCount";
import WalletManagement from "./walletManagement/walletManagement";
import InstallationRegistration from "./installationAndRegistration/installationRegistration";
import EditAccount from "./editAccount";

export default function ServicesPortalMain(props) {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState(
    router.query.account || "billing"
  );
  const [userInfo, setUserInfo] = useState();
  const { session, status } = props;

  useEffect(() => {
    setSelectedItem(router.query.account);
  }, [router.query.account]);

  const handleNavClick = (menuItem) => {
    setSelectedItem(menuItem);
  };

  const handleLogout = () => {
    /* signOut({
                 redirect: false,
                 callbackUrl: "/login?destination=services_portal",
               }).then((data) => router.replace(data.url));*/
    signOut({
      redirect: false,
    });
    router.replace("/login?destination=services-portal");
  };

  return (
    <section className={styles.section}>
      <div className={styles.services_wrapper}>
        <div className={styles.services_nav_wrapper}>
          <ul>
            <li
              onClick={() => {
                handleNavClick("billing");
              }}
              className={
                selectedItem === "billing"
                  ? styles.nav_item_active
                  : styles.nav_item
              }
            >
              <span className={styles.nav_item_inner}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.nav_item_icon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  />
                </svg>
                Billing Information
              </span>
            </li>
            <li
              onClick={() => {
                handleNavClick("payment");
              }}
              className={
                selectedItem === "payment"
                  ? styles.nav_item_active
                  : styles.nav_item
              }
            >
              <span className={styles.nav_item_inner}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.nav_item_icon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
                  />
                </svg>
                Custom Payment
              </span>
            </li>
            <li
              onClick={() => {
                handleNavClick("wallet");
              }}
              className={
                selectedItem === "wallet"
                  ? styles.nav_item_active
                  : styles.nav_item
              }
            >
              <span className={styles.nav_item_inner}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.nav_item_icon}
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
                Wallet Management
              </span>
            </li>
            <li
              onClick={() => {
                handleNavClick("install");
              }}
              className={
                selectedItem === "install"
                  ? styles.nav_item_active
                  : styles.nav_item
              }
            >
              <span className={styles.nav_item_inner}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.nav_item_icon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                  />
                </svg>
                Installation and Registration
              </span>
            </li>
            <li
              onClick={() => {
                handleNavClick("edit");
              }}
              className={
                selectedItem === "edit"
                  ? styles.nav_item_active
                  : styles.nav_item
              }
            >
              <span className={styles.nav_item_inner}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.nav_item_icon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Edit Account
              </span>
            </li>
            <li className={styles.nav_item} onClick={handleLogout}>
              <span className={styles.nav_item_inner}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.nav_item_icon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.content_wrapper}>
          {selectedItem === "billing" && <BillingInformation />}
          {selectedItem === "payment" && <CustomPayment />}
          {selectedItem === "wallet" && <WalletManagement />}
          {selectedItem === "install" && <InstallationRegistration />}
          {selectedItem === "edit" && <EditAccount />}
        </div>
      </div>
    </section>
  );
}
