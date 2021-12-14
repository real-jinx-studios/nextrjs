import styles from "../../styles/checkout2.module.css";
import MyImage from "../../components/myImage";
import Link from "next/link";

export default function Checkout3() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.client_info_section}>
            {/*VAT*/}
            <div className={styles.client_info_section_part1}>
              <form className={styles.client_info_section_part1_form}>
                <div className={styles.client_info_section_part1_form_inner}>
                  <div
                    className={styles.client_order_summary_content_title}
                    style={{ justifyContent: "unset" }}
                  >
                    <div className={styles.checkout_step}>1</div>
                    <h3
                      className={styles.client_order_summary_content_title_text}
                    >
                      VAT Info
                    </h3>
                  </div>
                  <fieldset
                    className={
                      styles.client_info_section_part1_form_inner_fieldset
                    }
                  >
                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                      <input
                        className={styles.input}
                        type="text"
                        value="France"
                        required
                      />
                      <span className={styles.placeholder}>Country</span>
                    </label>
                    <div className={styles.client_info_section_part1_vat}>
                      <label
                        className={`${styles.input_wrapper} ${styles.one}`}
                        style={{ paddingRight: 12 }}
                      >
                        <input
                          className={styles.input}
                          type="text"
                          value="FR"
                          disabled
                          required
                        />
                      </label>
                      <label
                        className={`${styles.input_wrapper} ${styles.one}`}
                      >
                        <input className={styles.input} type="text" required />
                        <span className={styles.placeholder}>VAT Number</span>
                      </label>
                    </div>
                  </fieldset>
                  <div className={styles.button_wrapper}>
                    <button type="submit" className={styles.button}>
                      <div className={styles.button_inner}>
                        <div className={styles.button_inner_text}>
                          Proceed to next step
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/*hardID*/}
            <div className={styles.client_info_section_part1}>
              <form className={styles.client_info_section_part1_form}>
                <div className={styles.client_info_section_part1_form_inner}>
                  <div
                    className={styles.client_order_summary_content_title}
                    style={{ justifyContent: "unset" }}
                  >
                    <div className={styles.checkout_step}>2</div>
                    <h3
                      className={styles.client_order_summary_content_title_text}
                    >
                      HardID
                    </h3>
                  </div>
                  <div
                    className={styles.client_order_summary_content_disclaimer}
                  >
                    <p
                      className={
                        styles.client_order_summary_content_disclaimer_text
                      }
                    >
                      In order to activate your software we need a hardwareID
                      for every license you have purchased. You can do this now
                      if you have your hardwareID or at another time via email.{" "}
                      <Link href="#">
                        <a className={styles.download_hardID}>
                          Download Tool here!
                        </a>
                      </Link>
                    </p>
                  </div>
                  <div className={styles.client_info_section_part1_hardID}>
                    <div className={styles.button_wrapper}>
                      <button type="submit" className={styles.button}>
                        <div className={styles.button_inner}>
                          <div className={styles.button_inner_text}>
                            Provide ID
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className={styles.button_wrapper2}>
                      <button type="submit" className={styles.button2}>
                        <div className={styles.button_inner2}>
                          <div className={styles.button_inner_text2}>
                            Skip this step
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <fieldset
                    className={
                      styles.client_info_section_part1_form_inner_fieldset
                    }
                  >
                    <div
                      className={
                        styles.client_info_section_part1_hardID_field_wrapper
                      }
                    >
                      <label
                        className={`${styles.input_wrapper} ${styles.one}`}
                      >
                        <input className={styles.input} type="text" required />
                        <span className={styles.placeholder}>Hardware ID</span>
                      </label>
                      <span
                        className={styles.client_info_hardID_content_item_icon}
                      >
                        <MyImage
                          src="/images/icons/eztit_icon2.png"
                          width={50}
                          height={50}
                          alt="product icon"
                        />
                      </span>
                      <span
                        className={styles.client_info_hardID_content_item_title}
                      >
                        EZTitles
                        <br />
                        <small>Ultimate</small>
                      </span>
                    </div>
                  </fieldset>
                  <div className={styles.button_wrapper}>
                    <button type="submit" className={styles.button}>
                      <div className={styles.button_inner}>
                        <div className={styles.button_inner_text}>
                          Proceed to billing
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/*billing*/}
            <div className={styles.client_info_section_part1}>
              <form className={styles.client_info_section_part1_form}>
                <div className={styles.client_info_section_part1_form_inner}>
                  <div
                    className={styles.client_order_summary_content_title}
                    style={{ justifyContent: "unset" }}
                  >
                    <div className={styles.checkout_step}>3</div>
                    <h3
                      className={styles.client_order_summary_content_title_text}
                    >
                      Billing Info
                    </h3>
                  </div>
                  <fieldset
                    className={
                      styles.client_info_section_part1_form_inner_fieldset
                    }
                  >
                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                      <input className={styles.input} type="text" required />
                      <span className={styles.placeholder}>Full name</span>
                    </label>
                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                      <input className={styles.input} type="text" required />
                      <span className={styles.placeholder}>Email</span>
                    </label>
                  </fieldset>
                  <fieldset
                    className={
                      styles.client_info_section_part1_form_inner_fieldset
                    }
                  >
                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                      <input className={styles.input} type="text" required />
                      <span className={styles.placeholder}>Phone number</span>
                    </label>
                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                      <input className={styles.input} type="text" required />
                      <span className={styles.placeholder}>
                        Street Address 1
                      </span>
                    </label>
                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                      <input className={styles.input} type="text" required />
                      <span className={styles.placeholder}>
                        Street Address 2
                      </span>
                    </label>
                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                      <input className={styles.input} type="text" required />
                      <span className={styles.placeholder}>City</span>
                    </label>
                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                      <input className={styles.input} type="text" required />
                      <span className={styles.placeholder}>Country</span>
                    </label>
                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                      <input className={styles.input} type="text" required />
                      <span className={styles.placeholder}>Province/State</span>
                    </label>
                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                      <input className={styles.input} type="text" required />
                      <span className={styles.placeholder}>Postcode</span>
                    </label>
                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                      <input className={styles.input} type="text" required />
                      <span className={styles.placeholder}>Company name</span>
                    </label>
                  </fieldset>
                  <div className={styles.button_wrapper}>
                    <button type="submit" className={styles.button}>
                      <div className={styles.button_inner}>
                        <div className={styles.button_inner_text}>
                          Proceed to payment
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/*card*/}
            <div className={styles.client_info_section_part1}>
              <form className={styles.client_info_section_part1_form}>
                <div className={styles.client_info_section_part1_form_inner}>
                  <div
                    className={styles.client_order_summary_content_title}
                    style={{ justifyContent: "unset" }}
                  >
                    <div className={styles.checkout_step}>4</div>
                    <h3
                      className={styles.client_order_summary_content_title_text}
                    >
                      Payment details
                    </h3>
                  </div>
                  <fieldset
                    className={
                      styles.client_info_section_part1_form_inner_fieldset
                    }
                  >
                    <label className={`${styles.input_wrapper} ${styles.one}`}>
                      <input className={styles.input} type="text" required />
                      <span className={styles.placeholder}>Name on card</span>
                    </label>
                    <div
                      className={
                        styles.client_info_section_part1_payment_field_wrapper
                      }
                    >
                      <label
                        className={`${styles.input_wrapper} ${styles.one}`}
                      >
                        <input className={styles.input} type="text" required />
                        <span className={styles.placeholder}>Card number</span>
                      </label>
                      <label
                        className={`${styles.input_wrapper} ${styles.one}`}
                        style={{ paddingLeft: 12 }}
                      >
                        <input className={styles.input} type="text" required />
                        <span className={styles.placeholder}>Exp. date</span>
                      </label>
                      <label
                        className={`${styles.input_wrapper} ${styles.one}`}
                        style={{ paddingLeft: 12 }}
                      >
                        <input className={styles.input} type="text" required />
                        <span className={styles.placeholder}>CVV</span>
                      </label>
                    </div>
                  </fieldset>
                  <div className={styles.button_wrapper}>
                    <button type="submit" className={styles.button}>
                      <div className={styles.button_inner}>
                        <div className={styles.button_inner_text}>PAY NOW</div>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.client_order_summary_section}>
            <div className={styles.client_order_summary_wrapper}>
              <div className={styles.client_order_summary_inner}>
                <div className={styles.client_order_summary_content}>
                  <div className={styles.client_order_summary_content_title}>
                    <h3
                      className={styles.client_order_summary_content_title_text}
                    >
                      Order summary
                    </h3>
                    <button
                      className={styles.client_order_summary_content_title_edit}
                    >
                      Edit
                    </button>
                  </div>
                  <ul className={styles.client_order_summary_content_items_ul}>
                    <li>
                      <span
                        className={
                          styles.client_order_summary_content_item_icon
                        }
                      >
                        <MyImage
                          src="/images/icons/eztit_icon2.png"
                          width={50}
                          height={50}
                          alt="product icon"
                        />
                      </span>
                      <span
                        className={
                          styles.client_order_summary_content_item_title
                        }
                      >
                        EZTitles
                        <br />
                        <small>Ultimate</small>
                      </span>
                      <span
                        className={
                          styles.client_order_summary_content_item_payment
                        }
                      >
                        Rent
                        <br />
                        <small>1 mth.</small>
                      </span>
                      <span
                        className={styles.client_order_summary_content_item_qty}
                      >
                        x1
                      </span>
                      <span
                        className={
                          styles.client_order_summary_content_item_price
                        }
                      >
                        €125
                        <br />
                        <small>incl. VAT</small>
                      </span>
                    </li>
                  </ul>
                  <hr
                    className={styles.client_order_summary_content_separator}
                  />
                  <div
                    className={
                      styles.client_order_summary_content_total_wrapper
                    }
                  >
                    <div className={styles.client_order_summary_content_total}>
                      <div
                        className={
                          styles.client_order_summary_content_total_content
                        }
                      >
                        <div
                          className={
                            styles.client_order_summary_content_total_content_inner
                          }
                        >
                          <small>subtotal:</small>
                          <small
                            className={
                              styles.client_order_summary_content_total_content_inner_price
                            }
                          >
                            €100.00
                          </small>
                        </div>
                        <div
                          className={
                            styles.client_order_summary_content_total_content_inner
                          }
                        >
                          <small>VAT 25%:</small>
                          <small
                            className={
                              styles.client_order_summary_content_total_content_inner_price
                            }
                          >
                            €25.00
                          </small>
                        </div>
                        <div
                          className={
                            styles.client_order_summary_content_total_content_inner
                          }
                          style={{ fontWeight: "800" }}
                        >
                          <span>Total:</span>
                          <span
                            className={
                              styles.client_order_summary_content_total_content_inner_price
                            }
                          >
                            €125.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
