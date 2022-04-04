import "../styles/global.css";
import NavbarWide from "../components/navigation/navbarWide";
import Footer from "../components/navigation/footer";

import React, { useCallback, useContext, useEffect, useState } from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import NavbarSmall from "../components/navigation/navbarSmall";
import Head from "next/head";
import { StoreProvider } from "../utils/store";
import StateWindow from "../components/utils/stateWindow";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [showModal, setModal] = useState(false);
  const router = useRouter();
  /*console.log(Component.name, pageProps, router.pathname, "shit");*/
  /*get screen size for correct navbar*/
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
    /*const [showModal, setShowModal] = useState(false);*/
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
    console.log(pageProps, "assign");

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

  const isBreakpoint = useMediaQuery(1111);
  return (
    <StoreProvider>
      <SessionProvider session={session}>
        <Head>
          <meta
            name="google-site-verification"
            content="ysxVMioFPf2YJs3BRu3gefvPmShIoplEtnSp3FJJbAg"
          />
          <link href="/assets/fontawesome/css/all.css" rel="stylesheet" />
        </Head>

        <header>{isBreakpoint ? <NavbarSmall /> : <NavbarWide />}</header>
        <Component
          setModal={setModal}
          location={router.pathname}
          key={router.pathname}
          {...pageProps}
        />

        <Footer />
        <ToastContainer />
        {/*<StateWindow />*/}
        {/*{(router.pathname!='/subtitle' && router.pathname!='/checkout2' && router.pathname!='/checkout3' )&&<SubtitleButton/>}*/}
      </SessionProvider>
    </StoreProvider>
  );
}
