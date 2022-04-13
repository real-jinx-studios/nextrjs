import styles from "../services_portal/customPayment/custom_payment.module.css";
import CustomInput from "../inputs/customInput";
import React from "react";
import CustomInputDropdown from "../inputs/customInputDropdown";

export default function ShippingInfoForm({ userInfo = {}, references = {} }) {
  return (
    <div className="custom_checkout_form_fields">
      <style jsx>{`
        .custom_checkout_form_fields {
          margin-bottom: 3em;
          display: grid;
          grid-gap: 1.3em;

          grid-template-columns: 1fr;
        }

        @media (min-width: 432px) {
          .custom_checkout_form_fields {
            grid-template-areas:
              "recipient recipient"
              "country city"
              "address address"
              "postcode recipient_phone";
          }
        }

        .recipient {
          grid-area: recipient;
        }

        .recipient_phone {
          grid-area: recipient_phone;
        }

        .address {
          grid-area: address;
        }

        .city {
          grid-area: city;
        }

        .country {
          grid-area: country;
        }

        .postcode {
          grid-area: postcode;
        }
      `}</style>
      <div className="recipient">
        <CustomInput
          default={userInfo.Shipping.RecipientName}
          type="text"
          placeholder="Contact Name"
          isRequired
          reference={references.recipientRef}
        />
      </div>
      <div className="recipient_phone">
        <CustomInput
          default={userInfo.Shipping.RecipientPhone}
          type="text"
          placeholder="Contact Phone"
          isRequired
          reference={references.recipientPhoneRef}
        />
      </div>
      <div className="country">
        <CustomInputDropdown
          default={userInfo.Shipping.Country}
          value={userInfo.Shipping.Country}
          type="text"
          placeholder="Country"
          isRequired
          isCountry={true}
          reference={references.countryRef}
        />
      </div>
      <div className="city">
        <CustomInput
          default={userInfo.Shipping.City}
          type="text"
          placeholder="City"
          isRequired
          reference={references.cityRef}
        />
      </div>
      <div className="address">
        <CustomInput
          default={userInfo.Shipping.Address}
          type="text"
          placeholder="Address"
          isRequired
          reference={references.addressRef}
        />
      </div>
      <div className="postcode">
        <CustomInput
          default={userInfo.Shipping.PostCode}
          type="text"
          placeholder="Postal Code"
          isRequired
          reference={references.postcodeRef}
        />
      </div>
    </div>
  );
}
