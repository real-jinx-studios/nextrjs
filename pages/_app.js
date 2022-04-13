import "../styles/global.css";
import NavbarWide from "../components/navigation/navbarWide";
import Footer from "../components/navigation/footer";

import React, { useCallback, useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";
import NavbarSmall from "../components/navigation/navbarSmall";
import Head from "next/head";

import { ToastContainer } from "react-toastify";
import { useVerifyUserCredentials } from "../lib/hookers";
import { UserContext } from "../lib/context";

export default function App({ Component, pageProps: { ...pageProps } }) {
  const router = useRouter();
  /*get screen size for correct navbar*/
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
    console.log(
      pageProps,
      "assign",
      "put user token auth shit here to send to other pages so we don't re-auth"
    );

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
  };
  /*  const userData = useVerifyUserCredentials();*/

  const isBreakpoint = useMediaQuery(1111);
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="ysxVMioFPf2YJs3BRu3gefvPmShIoplEtnSp3FJJbAg"
        />
        <link href="/assets/fontawesome/css/all.css" rel="stylesheet" />
        <title>EZTitles: professional subtitling and conversion tools.</title>
      </Head>

      <header>
        {isBreakpoint ? (
          <NavbarSmall />
        ) : (
          <NavbarWide status={"authenticated"} />
        )}
      </header>
      <Component
        location={router.pathname}
        key={router.pathname}
        {...pageProps}
      />
      <Footer />
      <ToastContainer />
    </>
  );
}
