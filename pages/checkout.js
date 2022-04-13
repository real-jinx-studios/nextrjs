import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import LoaderDots from "../components/utils/loaderDots";
import Cart from "../components/checkout/cart";
import BillingInfoStep from "../components/checkout/steps/billing_info_step";
import EmptyCart from "../components/checkout/emptyCart";
//bullshit
export default function Checkout({ status = "unauthenticated" }) {
  const [currentStep, setCurrentStep] = useState("billing");
  const [isCartEditable, setIsCartEditable] = useState(false);
  const [isVatValid, setIsVatValid] = useState(false);

  const router = useRouter();

  const checkoutItems = [];

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
