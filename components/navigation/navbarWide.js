import { useState, useEffect, useContext } from "react";
import styles from "./navbar2.module.css";
import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";
import BurburMenu from "./burbur_menu";
import ProductsModal from "../modal/ProductsModal";
import { useLogout } from "../../lib/hookers";
export default function NavbarWide({ status = "" }) {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleLogout = () => {
    useLogout();
    router.replace("/user/login?destination=services-portal");
  };
  const handleBurbur = () => {
    setOpen(!open);
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
            <Link href="/#">
              <a>
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
            <a
              className={styles.search_wrapper}
              onClick={() => {
                document.querySelector("body").classList.toggle("grayscale");
              }}
            >
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
                </a>
              </Link>
            ) : (
              <Link href="/user/login?destination=services-portal?account=billing">
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
            <a
              className="buy_now_button"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              BUY NOW
            </a>
          </li>
        </ul>
        <BurburMenu open={open} />
      </div>
      <ProductsModal open={openModal} onClose={() => setOpenModal(false)} />
    </nav>
  );
}
