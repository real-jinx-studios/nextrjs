import React, { useContext, useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { Store } from "../utils/store";
import Layout from "../components/layout";
import MyImage from "../components/utils/myImage";
import NumberFormat from "react-number-format";
import { useSession } from "next-auth/react";
import CustomInput from "../components/inputs/customInput";
import LoaderDots from "../components/utils/loaderDots";
import Cart from "../components/checkout/cart";
import BillingInfoStep from "../components/checkout/steps/billing_info_step";
import EmptyCart from "../components/checkout/emptyCart";
//bullshit
export default function Checkout() {
  const [login, setLogin] = useState({ login: false });
  const [currentStep, setCurrentStep] = useState("billing");
  const [hasShippings, setHasShippings] = useState(false);
  const [isCartEditable, setIsCartEditable] = useState(false);
  const [isVatValid, setIsVatValid] = useState(false);

  const { data: session, status } = useSession();
  const router = useRouter();

  const { app_state } = useContext(Store);
  const {
    checkout: { checkoutItems },
  } = app_state;

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/user/login?destination=checkout");
    }
  }, [status]);

  //generate cart/checkout items

  const handleBillingSubmit = (e) => {
    e.preventDefault();
    setCurrentStep("hardid");
  };

  if (status === "authenticated") {
    if (checkoutItems && checkoutItems.length > 0) {
      return (
        <section className="checkout offset-top">
          {currentStep === "billing" && (
            <BillingInfoStep
              handleSubmit={handleBillingSubmit}
              isVatValid={isVatValid}
              stepNumber={1}
              isCartEditable={isCartEditable}
              setIsCartEditable={setIsCartEditable}
            />
          )}
          {currentStep === "hardid" && <div>hardware id step</div>}
          <Cart
            checkoutItems={checkoutItems}
            isCartEditable={isCartEditable}
            setIsCartEditable={setIsCartEditable}
          />
        </section>
      );
    } else {
      return <EmptyCart />;
    }
  }
  return (
    <section className="section flex-center-center">
      <LoaderDots />
    </section>
  );
}
