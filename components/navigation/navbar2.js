import { useState, useEffect, useContext } from "react";
import styles from "./navbar2.module.css";
import Link from "next/link";
import MyImage from "../utils/myImage";
import cn from "classnames";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { Store } from "../../utils/store";
import { useSession, signOut } from "next-auth/react";
import BurburMenu from "./burbur_menu";
export default function Navbar2() {
  const { app_state, dispatch } = useContext(Store);
  const { logged_in, checkout } = app_state;
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    signOut({ callbackUrl: "/login?destination=services-portal" })
      .then((response) => response)
      .then((data) => {
        router.replace("/login?destination=services-portal");
      });
  };
  const handleBurbur = () => {
    setOpen(!open);
  };

  const handleStateChange = (e) => {
    if (logged_in == true) {
      dispatch({ type: "LOG_OUT" });
      Cookies.set("logged_in", "false");
    } else {
      if (logged_in == false) {
        dispatch({ type: "LOG_IN" });
        Cookies.set("logged_in", "true");
      }
    }
  };

  const router = useRouter();
  const [scroll, setScroll] = useState(false);
  const sticky = 80;
  const catchScroll = (e) => {
    if (window.scrollY > sticky) {
      setScroll(true);
    } else if (window.scrollY <= sticky) {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.onscroll = function (e) {
      catchScroll(e);
    };
  }, []);

  return (
    <nav
      className={cn({
        [styles.navbar_wrapper]: scroll === false,
        [styles.navbar_wrapper_scroll]: scroll === true,
      })}
      role="navigation"
      aria-label="Primary"
    >
      <div className={styles.navbar_inner}>
        <ul className={`${styles.nav_ul_left}`}>
          <li
            className={cn({
              [styles.nav_li]: scroll === false,
              [styles.nav_li_scroll]: scroll === true,
            })}
          >
            <Link href="/subtitle">
              <a className={styles.nav_link_a}>Subtitle</a>
            </Link>
          </li>
          <li
            className={cn({
              [styles.nav_li]: scroll === false,
              [styles.nav_li_scroll]: scroll === true,
            })}
          >
            <Link href="/convert">
              <a className={styles.nav_link_a}>Convert</a>
            </Link>
          </li>
          <li
            className={cn({
              [styles.nav_li]: scroll === false,
              [styles.nav_li_scroll]: scroll === true,
            })}
          >
            <Link href="/subass">
              <a className={styles.nav_link_a}>Subtitling Assistant</a>
            </Link>
          </li>
          <li
            className={cn({
              [styles.nav_li]: scroll === false,
              [styles.nav_li_scroll]: scroll === true,
            })}
          >
            <Link href="/Burn-in">
              <a className={styles.nav_link_a}>Burn-in</a>
            </Link>
          </li>
        </ul>

        <div className={styles.nav_sec_center}>
          <div
            className={cn({
              [router.pathname !== "/"
                ? styles.nav_icon_wrapper
                : styles.nav_icon_wrapper_home]: scroll === false,
              [styles.nav_icon_wrapper_scroll]: scroll === true,
            })}
          >
            <Link href={router.pathname !== "/" ? "/" : "/buy/products"}>
              <a>
                {/*<MyImage
                  priority={true}
                  src="/images/ezlogo.png"
                  height={50}
                  width={100}
                  alt="EZTitles Logo"
                  layout="intrinsic"
                />*/}
                <img
                  src="/images/ezlogo.png"
                  width={100}
                  height={50}
                  alt="EZTitles"
                />
              </a>
            </Link>
          </div>
        </div>
        <ul className={styles.nav_ul_right}>
          <li
            className={cn({
              [styles.nav_li]: scroll === false,
              [styles.nav_li_scroll]: scroll === true,
            })}
          >
            <a className={styles.search_wrapper}>
              <div className="content-wrapper">
                <div className="content">
                  <div className="search-bar">
                    <input
                      type="text"
                      className="search-bar__input"
                      placeholder="search for shit"
                      aria-label="search"
                    />

                    <button
                      className="search-bar__submit"
                      aria-label="submit search"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="29px"
                        viewBox="0 0 24 24"
                        width="36px"
                        fill="#ffffff"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li
            className={cn({
              [styles.nav_li]: scroll === false,
              [styles.nav_li_scroll]: scroll === true,
            })}
          >
            {status === "authenticated" ? (
              <Link href="/services-portal?account=billing">
                <a className={styles.nav_link_a + " " + styles.portal_link}>
                  Services Portal
                  <div className={styles.portal_dropdown_container}>
                    <div className={styles.portal_dropdown_label}>
                      <span>Services Portal</span>
                    </div>
                    <ul className={styles.portal_dropdown_ul}>
                      <Link href="/services-portal?account=billing">
                        <li className={styles.portal_dropdown_ul_li}>
                          <a>Billing Info</a>
                        </li>
                      </Link>
                      <Link href="/services-portal?account=payment">
                        <li className={styles.portal_dropdown_ul_li}>
                          <a>Custom Payment</a>
                        </li>
                      </Link>
                      <Link href="/services-portal?account=wallet">
                        <li className={styles.portal_dropdown_ul_li}>
                          <a>Wallet Management</a>
                        </li>
                      </Link>
                      <Link href="/services-portal?account=install">
                        <li className={styles.portal_dropdown_ul_li}>
                          <a>Installation & Registration</a>
                        </li>
                      </Link>
                      <Link href="/services-portal?account=edit">
                        <li className={styles.portal_dropdown_ul_li}>
                          <a>Edit Account</a>
                        </li>
                      </Link>
                      <li
                        className={styles.portal_dropdown_ul_li}
                        onClick={handleLogout}
                      >
                        LOGOUT
                      </li>
                    </ul>
                  </div>
                </a>
              </Link>
            ) : (
              <Link href="/login?destination=/services-portal?account=billing">
                <a className={styles.nav_link_a}>Login</a>
              </Link>
            )}
          </li>
          <li
            className={cn({
              [styles.nav_li]: scroll === false,
              [styles.nav_li_scroll]: scroll === true,
            })}
          >
            <div className={styles.bm_memu_wrapper} onClick={handleBurbur}>
              <div className={`${styles.bm_menu} ${open ? styles.open : ""}`} />
            </div>
          </li>
          <li
            className={cn({
              [styles.nav_li]: scroll === false,
              [styles.nav_li_scroll]: scroll === true,
            })}
          >
            <Link href="/buy/checkout">
              <a className={styles.buy_now_wrapper}>BUY NOW</a>
            </Link>
          </li>
        </ul>
        <BurburMenu open={open} />
      </div>
    </nav>
  );
}
