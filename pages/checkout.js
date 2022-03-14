import React, { useContext, useEffect, useState } from "react";
import Router from "next/router";
import { Store } from "../utils/store";
import Layout from "../components/layout";
import Link from "next/link";
import MyImage from "../components/utils/myImage";
import NumberFormat from "react-number-format";
import { signIn, signOut, useSession } from "next-auth/react";
import Cookies from "js-cookie";
import CustomInput from "../components/inputs/customInput";
import styles from "../styles/login.module.css";
import axios from "axios";
export default function Checkout() {
  const [login, setLogin] = useState({ login: false });
  const [billing, setBilling] = useState(false);
  const { data: session, state } = useSession();

  const { app_state } = useContext(Store);
  const {
    checkout: { checkoutItems },
  } = app_state;

  //handle and calculate total prices
  const [totalPrices, setTotalPrices] = useState({
    subtotal: 0,
    vat: 25,
    total: 0,
  });
  useEffect(() => {
    calculateTotalPrice();
    checkLogin();
  }, []);
  const checkLogin = async () => {
    /*const loginTemp = JSON.parse(Cookies.get("session"));
    if (loginTemp.logged_in === "true") {
      const details = axios
        .post("http://localhost:5000/get/user", {
          username: loginTemp.username,
        })
        .then(function (response) {
          setLogin({ user: true, ...response.data[0] });
        })
        .catch(function (error) {
          console.log(error, "error ass");
        });
    } else {
      setLogin({ user: false });
    }*/
  };
  const fetchLoginDetails = async (username) => {};
  const calculateTotalPrice = () => {
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

  //format numbers to look more like prices
  const numFormat = (num) => {
    let fNum = num.toFixed(2);
    fNum = fNum.replace(/(\d)(?=(\d{3})+(?!\d))/g, "2,");
    return fNum;
  };

  //generate cart/checkout items
  const items = checkoutItems.map((x) => (
    <div className="cart__items" key={x.name}>
      <div className="cart__items__icon flex-c-c">
        <MyImage src={x.icon} width={50} height={50} layout="intrinsic" />
      </div>
      <div className="cart__items__name flex-c-c justify-left font-bold">
        <span>{x.name}</span>
      </div>
      <div className="cart__items__edition flex-c-c justify-left">
        <span className="font-size-xs">{x.edition}</span>
      </div>
      <div className="cart__items__license flex-c-c justify-left">
        <span>{x.license}</span>
      </div>
      <div className="cart__items__duration flex-c-c justify-left font-size-s">
        <span>
          {x.duration}
          {x.duration !== "lifetime" && "/mo."}
        </span>
      </div>
      <div className="cart__items__quantity flex-c-c">
        <span>
          <sub>x</sub>
          {x.quantity}
        </span>
      </div>
      <div className="cart__items__total flex-c-c">
        <span>
          <NumberFormat
            value={x.price * x.quantity}
            displayType={"text"}
            thousandSeparator={true}
          />
          <sup>EUR</sup>
        </span>
      </div>
    </div>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    setBilling(true);
  };

  return (
    <Layout
      title="EZTitles store checkout"
      description="checkout page for products purchased on EZTitles.com"
    >
      <section className="checkout">
        <input type="checkbox" id="shit" className="input_c" />
        <div className="billing">
          {
            <div className="billing__inner">
              <h2 className="billing__title">Billing details</h2>
              {/*<button onClick={signOut}>ok</button>*/}
              <form
                noValidate
                onSubmit={handleSubmit}
                className="billing__fields"
              >
                <CustomInput
                  type="text"
                  placeholder="First name"
                  defaultValue={login.first_name}
                />
                <CustomInput
                  type="text"
                  placeholder="last name"
                  defaultValue={login.last_name}
                />
                <CustomInput
                  type="text"
                  placeholder="VAT ID"
                  defaultValue={login.vat}
                />
                <CustomInput
                  type="text"
                  placeholder="Postal code/ZIP code"
                  defaultValue={login.postcode}
                />
                <CustomInput
                  type="text"
                  placeholder="Address line 1"
                  defaultValue={login.street_address}
                />
                <CustomInput
                  type="text"
                  placeholder="Address line 2"
                  defaultValue={login.street_address_2}
                />
                <CustomInput
                  type="text"
                  placeholder="City"
                  defaultValue={login.city}
                />
                <CustomInput
                  type="text"
                  placeholder="Country"
                  defaultValue={login.country}
                />
                <CustomInput
                  type="text"
                  placeholder="Phone Number"
                  defaultValue={login.phone_num}
                />
                <label htmlFor="shit" className="btn">
                  <button
                    className="button button_basic_long"
                    type="submit"
                    style={{ marginTop: 28 }}
                  >
                    continue
                  </button>
                </label>
              </form>
            </div>
          }
          <div className="billing__inner-step">
            <h2 className="billing-step__title">Hardware ID</h2>
          </div>
        </div>
        <div className="cart">
          <div className="cart__inner">
            <div className="cart__title-section">
              <h2 className="cart__title">Order Summary</h2>
              <span className="cart__edit">Edit</span>
            </div>
            <div className={"cart__items-section"}>{items}</div>
            <div className="cart__sum">
              <div className="cart__sum__title flex justify-sb">
                <span className="font-size-m">subtotal: </span>
                <span className="font-size-m">
                  <NumberFormat
                    value={totalPrices.subtotal}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                  <sup> EUR</sup>
                </span>
              </div>
              <div className="cart__sum__title flex justify-sb">
                <span className="font-size-m">VAT 25%: </span>
                <span className="font-size-m">
                  <NumberFormat
                    value={totalPrices.vat}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                  <sup> EUR</sup>
                </span>
              </div>
              <div className="cart__sum__title-total flex justify-sb font-bold">
                <span className="font-size-ml">TOTAL: </span>
                <span className="font-size-ml">
                  <NumberFormat
                    value={totalPrices.total}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                  <sup> EUR</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
