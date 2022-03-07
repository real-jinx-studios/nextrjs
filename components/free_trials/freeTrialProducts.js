import styles from "./free_trial.module.css";
import { Fragment, useEffect, useState } from "react";
import ProductCard from "./productCard";
import FreeTrialStdFrom from "./freeTrialStdForm";
import LoginForm from "../forms/auth/loginForm";
import RegisterFormTrial from "../forms/auth/registerFormTrial";
export default function FreeTrialProducts() {
  const products = [0, 1, 2, 3];

  return (
    <section
      className={styles.products_section}
      aria-labelledby="products-trial-section"
    >
      <div className="container">
        <h2
          id="products-trial-section"
          className={styles.products_section_title}
        >
          Get a <strong>Free Trial</strong> for our software products to test
          their full potential <strong>without any restrictions</strong> on
          features or captions count. Please, choose the product that will fit
          your workflow.
        </h2>
      </div>
      <div className="container">
        <div className={styles.products_section_wrapper}>
          {products.map((product, i) => (
            <ProductCard key={i} type={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
