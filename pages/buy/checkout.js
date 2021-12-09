import React, { useContext, useEffect, useState } from "react";
import Router from "next/router";
import { Store } from "../../utils/store";
import Layout from "../../components/layout";
import Link from "next/link";
import MyImage from "../../components/myImage";

export default function Checkout() {
  const { state } = useContext(Store);
  const {
    checkout: { checkoutItems },
  } = state;

  //handle and calculate total prices
  const [totalPrices, setTotalPrices] = useState({
    subtotal: 0,
    vat: 25,
    total: 0,
  });
  useEffect(() => {
    calculateTP();
  }, []);
  const calculateTP = () => {
    let tempSub = 0;
    const tempVat = 25;
    checkoutItems.forEach((item) => {
      tempSub += item.price * item.quantity;
    });
    let tempTotal = (tempSub, tempVat) => {
      return {
        subtotal: tempSub,
        vat: tempSub * (tempVat / 100),
        total: tempSub + tempSub * (tempVat / 100),
      };
    };
    setTotalPrices({ ...tempTotal(tempSub, tempVat) });
  };

  //generate cart/checkout items
  const items = checkoutItems.map((x) => (
    <div className="cart__items" key={x.name}>
      <div className="cart__items__icon">
        <MyImage src={x.icon} width={50} height={50} layout="intrinsic" />
      </div>
      <div className="cart__items__name justify-left font-bold">
        <span>{x.name}</span>
      </div>
      <div className="cart__items__edition justify-left">
        <span className="font-size-xs">{x.edition}</span>
      </div>
      <div className="cart__items__license justify-left">
        <span>{x.license}</span>
      </div>
      <div className="cart__items__duration justify-left font-size-s">
        {x.duration !== "lifetime" ? (
          <span>
            {x.duration}
            /mo.
          </span>
        ) : (
          <span>{x.duration}</span>
        )}
      </div>
      <div className="cart__items__quantity">
        <span>
          <sub>x</sub>
          {x.quantity}
        </span>
      </div>
      <div className="cart__items__total">
        <span>
          {x.price * x.quantity}
          <sup>EUR</sup>
        </span>
      </div>
    </div>
  ));

  return (
    <Layout
      title="EZTitles store checkout"
      description="checkout page for products purchased on EZTitles.com."
    >
      <section className="checkout">
        <div className="billing">
          <div className="billing__inner">
            <h2 className="billing__title">Welcome to EZTitles store</h2>
            <h2 className="billing__description">
              Please, log-in in your profile or continue as new customer
            </h2>
            <div className="billing__buttons">
              <a href="#" className="button button_basic_long">
                LOG IN
              </a>
              <a href="#" className="button button_basic_long_inverted">
                NEW CUSTOMER
              </a>
            </div>
          </div>
          <div className="billing__inner-step">
            <h2 className="billing-step__title">whatever next step is</h2>
          </div>
        </div>
        <div className="cart">
          <div className="cart__inner">
            <div className="cart__title-section">
              <h2 className="cart__title">Order Summary</h2>
              <span className="cart__edit">Edit</span>
            </div>
            {items}
            <div className="cart__sum">
              <h5 className="cart__sum__title">
                subtotal: {totalPrices.subtotal}
                <sup> EUR</sup>
              </h5>
              <h5 className="cart__sum__title">
                VAT 25%: {totalPrices.vat}
                <sup> EUR</sup>
              </h5>
              <h4 className="cart__sum__title-total">
                TOTAL: {totalPrices.total} <sup> EUR</sup>
              </h4>
            </div>
          </div>
        </div>
      </section>
      {/*   {checkoutItems.length > 0 ? (
        <section className="checkout">
          <div className="billing">
            <div className="billing__inner">
              <h2 className="billing__title">Welcome to EZTitles store</h2>
              <h2 className="billing__description">
                Please, log-in in your profile or continue as new customer
              </h2>
              <div className="billing__buttons">
                <a href="#" className="button button_basic_long">
                  LOG IN
                </a>
                <a href="#" className="button button_basic_long_inverted">
                  NEW CUSTOMER
                </a>
              </div>
            </div>
            <div className="billing__inner-step">
              <h2 className="billing-step__title">whatever next step is</h2>
            </div>
          </div>
          <div className="cart">
            <div className="cart__inner">
              <div className="cart__title-section">
                <h2 className="cart__title">Order Summary</h2>
                <span className="cart__edit">Edit</span>
              </div>
              {items}
              <div className="cart__sum">
                <h5 className="cart__sum__title">
                  subtotal: {totalPrices.subtotal}
                  <sup> EUR</sup>
                </h5>
                <h5 className="cart__sum__title">
                  VAT 25%: {totalPrices.vat}
                  <sup> EUR</sup>
                </h5>
                <h4 className="cart__sum__title-total">
                  TOTAL: {totalPrices.total} <sup> EUR</sup>
                </h4>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="checkout checkout-empty">
          <h1 className="checkout-empty__h1">EMPTY CHECKOUT</h1>
          <Link href="/">
            <a className="checkout-empty__link">Back to home</a>
          </Link>
        </section>
      )}*/}
    </Layout>
  );
}
