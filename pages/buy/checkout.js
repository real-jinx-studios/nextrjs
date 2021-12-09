import React from "react";

export default function Checkout() {
  return (
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
          <div className="cart__items"></div>
          <div className="cart__sum">
            <h5 className="cart__sum__title">subtotal:</h5>
            <h5 className="cart__sum__title">VAT 25%:</h5>
            <h4 className="cart__sum__title-total">TOTAL:</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
