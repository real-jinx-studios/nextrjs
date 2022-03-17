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
              "first_name last_name"
              "address_line_1 address_line_1"
              "address_line_2 address_line_2"
              "city city"
              "country postcode"
              "company vat"
              "phone phone";
          }
        }
        .first_name {
          grid-area: first_name;
        }
        .last_name {
          grid-area: last_name;
        }
        .address_line_1 {
          grid-area: address_line_1;
        }
        .address_line_2 {
          grid-area: address_line_2;
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
      <div className="first_name">
        <CustomInput
          default={userInfo.first_name}
          type="text"
          placeholder="First Name"
          isRequired
          reference={references.firstNameRef}
        />
      </div>
      <div className="last_name">
        <CustomInput
          default={userInfo.last_name}
          type="text"
          placeholder="Last Name"
          isRequired
          reference={references.lastNameRef}
        />
      </div>
      <div className="country">
        <CustomInputDropdown
          default={userInfo.country}
          value={userInfo.country}
          type="text"
          placeholder="Country"
          isRequired
          isCountry={true}
          reference={references.countryRef}
        />
      </div>
      <div className="vat">
        <CustomInput
          default={userInfo.vat}
          type="text"
          placeholder="VAT Number"
          isRequired
          special="vat"
          reference={references.vatRef}
        />
      </div>
      <div className="city">
        <CustomInput
          default={userInfo.city}
          type="text"
          placeholder="City"
          isRequired
          reference={references.cityRef}
        />
      </div>
      <div className="address_line_1">
        <CustomInput
          default={userInfo.street_address}
          type="text"
          placeholder="Street Address line 1"
          isRequired
          reference={references.streetAddr1Ref}
        />
      </div>
      <div className="address_line_2">
        <CustomInput
          default={userInfo.street_address_2}
          type="text"
          placeholder="Street Address line 2"
          reference={references.streetAddr2Ref}
        />
      </div>
      <div className="postcode">
        <CustomInput
          default={userInfo.postcode}
          type="text"
          placeholder="Postal Code"
          isRequired
          reference={references.postcodeRef}
        />
      </div>
      <div className="company">
        <CustomInput
          default={userInfo.company_name}
          type="text"
          placeholder="Company Name"
          isRequired
          reference={references.companyNameRef}
        />
      </div>
      <div className="phone">
        <CustomInput
          default={userInfo.phone_num}
          type="text"
          placeholder="Phone Number"
          isRequired
          reference={references.phoneNumberRef}
        />
      </div>
    </div>
  );
}
