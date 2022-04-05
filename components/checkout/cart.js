import React, { useState, useEffect, useRef, Fragment } from "react";
import NumberFormat from "react-number-format";
import MyImage from "../utils/myImage";

export default function Cart({
  checkoutItems,
  isCartEditable,
  setIsCartEditable,
}) {
  //format numbers to look more like prices
  const numFormat = (num) => {
    let fNum = num.toFixed(2);
    fNum = fNum.replace(/(\d)(?=(\d{3})+(?!\d))/g, "2,");
    return fNum;
  };
  //handle and calculate total prices
  const [totalPrices, setTotalPrices] = useState({
    subtotal: 0,
    vat: 25,
    total: 0,
  });
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

  const dialog = React.useRef();

  useEffect(() => {
    calculateTotalPrice();
  }, []);
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
        <div className={!isCartEditable ? "" : "editable"}>
          <span className="value">
            {x.duration}
            {x.duration !== "lifetime" && "/mo."}
          </span>
          {isCartEditable && (
            <div className="actions">
              <button onClick={() => modalRef.current.show()}>+</button>
              <button>-</button>
            </div>
          )}
        </div>
      </div>
      <div className="cart__items__quantity_title flex-c-c justify-left">
        <span>Licenses</span>
      </div>
      <div className="cart__items__quantity flex-c-c justify-left">
        <div className={!isCartEditable ? "" : "editable"}>
          <span className="value">{x.quantity}</span>
          {isCartEditable && (
            <div className="actions">
              <button data-a11y-dialog-show="my-dialog">+</button>
              <button>-</button>
            </div>
          )}
        </div>
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

  return (
    <div className="cart">
      <style jsx>{`
        .editable {
        }
      `}</style>
      <div className="cart__inner">
        <div className="cart__title-section">
          <h2 className="cart__title"> Order Summary</h2>
          {!isCartEditable ? (
            <span
              onClick={() => setIsCartEditable(!isCartEditable)}
              className="cart__edit"
            >
              Edit
            </span>
          ) : (
            <span
              onClick={() => setIsCartEditable(!isCartEditable)}
              className="cart__edit"
            >
              Cancel
            </span>
          )}
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
            <span
              onClick={() => modalRef.current.show()}
              className="font-size-ml"
            >
              TOTAL:{" "}
            </span>
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
  );
}
