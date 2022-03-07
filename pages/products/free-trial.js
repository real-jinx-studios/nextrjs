import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
import FreeTrialHero from "../../components/free_trials/freeTrialHero";
import FreeTrialProducts from "../../components/free_trials/freeTrialProducts";
import FreeTrialStdFrom from "../../components/free_trials/freeTrialStdForm";
export default function FreeTrial() {
  const { data, status } = useSession();

  return (
    <Fragment>
      <Head>
        <title>EZTitles Free Trials</title>
        <meta
          name="description"
          content="Request a demo for every EZTitles product."
        />
      </Head>
      <FreeTrialHero />
      <FreeTrialProducts />
      <FreeTrialStdFrom session={status} data={data || null} />
    </Fragment>
  );
}
