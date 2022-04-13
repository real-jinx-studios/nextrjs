import styles from "../services_portal/customPayment/custom_payment.module.css";
import CustomInput from "../inputs/customInput";
import React from "react";
import CustomInputDropdown from "../inputs/customInputDropdown";

export default function BillingInfoForm({ userInfo = {}, references = {} }) {
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
            /* grid-template-columns: 1fr 1fr;*/
            grid-template-areas:
              "contact_name legal_name"
              "address address"
              "country city"
              "postcode vat";
          }
        }

        .contact_name {
          grid-area: contact_name;
        }

        .legal_name {
          grid-area: legal_name;
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

        .company {
          grid-area: company;
        }

        .vat {
          grid-area: vat;
        }

        .phone {
          grid-area: phone;
        }
      `}</style>
      <div className="contact_name">
        <CustomInput
          default={userInfo.ContactName}
          type="text"
          placeholder="Contact Name"
          isRequired
          reference={references.contactNameRef}
        />
      </div>
      <div className="legal_name">
        <CustomInput
          default={userInfo.LegalName}
          type="text"
          placeholder="Legal Name"
          isRequired
          reference={references.legalNameRef}
        />
      </div>
      <div className="country">
        <CustomInputDropdown
          default={userInfo.Billing.Country}
          value={userInfo.Billing.Country}
          type="text"
          placeholder="Country"
          isRequired
          isCountry={true}
          reference={references.countryRef}
        />
      </div>
      <div className="vat">
        <CustomInput
          default={userInfo.VAT_ID}
          type="text"
          placeholder="VAT Number"
          isRequired
          special="vat"
          reference={references.vatRef}
        />
      </div>
      <div className="city">
        <CustomInput
          default={userInfo.Billing.City}
          type="text"
          placeholder="City"
          isRequired
          reference={references.cityRef}
        />
      </div>
      <div className="address">
        <CustomInput
          default={userInfo.Billing.Address}
          type="text"
          placeholder="Address"
          isRequired
          reference={references.addressRef}
        />
      </div>
      <div className="postcode">
        <CustomInput
          default={userInfo.Billing.PostCode}
          type="text"
          placeholder="Postal Code"
          isRequired
          reference={references.postcodeRef}
        />
      </div>
    </div>
  );
}
