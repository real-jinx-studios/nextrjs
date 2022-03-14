import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function ProductsShowcase() {
  const [selectedProduct, setSelectedProduct] = useState("eztitles");
  const handleSelectProductChange = (e) => {
    setSelectedProduct(e.target.value);
  };
  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();
  useEffect(() => {
    oneRef.current.classList.add("active");
    twoRef.current.classList.add("active");
    threeRef.current.classList.add("active");
    oneRef.current.click();
  }, []);
  return (
    <section className="section wide">
      <style jsx>{`
        .main {
          margin: 0 auto;
          display: flex;
          width: 100%;
          justify-content: center;
        }
        .one,
        .two,
        .three {
          border: 2px solid var(--clr-neutral-50);
          border-radius: 9px;
          width: 350px;
          position: relative;
          z-index: 1;
          min-height: 600px;
          transition: all 0.35s cubic-bezier(1, -0.65, 0, 1.35);
        }
        .one {
          transform: translateX(0);

          background: rgb(17, 75, 103);
          background: linear-gradient(
            45deg,
            rgba(17, 75, 103, 1) 0%,
            rgba(32, 104, 140, 1) 66%,
            rgba(47, 133, 176, 1) 100%
          );
          border-color: #00ffff;
        }
        .two {
          transform: translateX(0);
          background: rgb(106, 19, 9);
          background: linear-gradient(
            45deg,
            rgba(106, 19, 9, 1) 0%,
            rgba(131, 24, 13, 1) 66%,
            rgba(142, 27, 15, 1) 100%
          );
          border-color: #ce4f4a;
        }
        .three {
          transform: translateX(0);
          background: rgb(154, 68, 27);
          background: linear-gradient(
            45deg,
            rgba(154, 68, 27, 1) 0%,
            rgba(183, 66, 6, 1) 66%,
            rgba(210, 77, 4, 1) 100%
          );
          border-color: #fbb03b;
        }

        #green:checked ~ .one.active {
          transform: translateX(100%);
          z-index: 2;
        }
        #green:checked ~ .two.active {
          transform: translateX(-40%) scale(0.9);
        }
        #green:checked ~ .three.active {
          transform: translateX(-60%) scale(0.9);
        }
        #red:checked ~ .one.active {
          transform: translateX(60%) scale(0.9);
        }
        #red:checked ~ .two.active {
          transform: translateX(0) scale(1);
          z-index: 2;
        }
        #red:checked ~ .three.active {
          transform: translateX(-60%) scale(0.9);
        }
        #purple:checked ~ .one.active {
          transform: translateX(60%) scale(0.9);
        }
        #purple:checked ~ .two.active {
          transform: translateX(40%) scale(0.9);
        }
        #purple:checked ~ .three.active {
          transform: translateX(-100%) scale(1);
          z-index: 2;
        }
        #green,
        #red,
        #purple {
          position: absolute;
          top: 0;
          left: 0;
          display: none;
        }
        #green {
          top: 50%;
        }
        #red {
          top: 55%;
        }
        #purple {
          top: 60%;
        }
        .main_wrapper {
          display: flex;
          justify-content: space-between;
        }
        .main_controller {
          display: flex;
          gap: 2em;
          margin-top: 1.89em;
          justify-content: center;
        }
        .main_controller label::before {
          color: var(--clr-neutral-50) !important;
          display: inline-block;
          content: "";
          width: 0.5em;
          height: 0.5em;
          border-radius: 50%;
          background-color: var(--clr-neutral-50);
          font-size: 1.5rem !important;
        }
        .card {
          padding: 1.8em 2.1em;
        }
        .card_product_platforms,
        .card_product_title,
        .card_product_description,
        .card_product_learn_more {
          margin-bottom: 1.89em;
        }
        .card_product_platforms img {
          margin-left: auto;
        }
        .card_product_title {
        }
        .card_product_title p {
          font-size: 2.1rem;
          font-weight: bold;
        }
        .card_product_description {
          margin-bottom: 2.5em;
        }
        .card_product_description p {
          font-size: 0.96rem;
        }
        .card_product_learn_more {
          display: flex;
          justify-content: center;
        }
        .details_container {
          flex: 0 0 34%;
          padding: 2em;
          margin: 0 auto;
        }
        .details_products {
        }
        .details_products.active {
        }
        .details_title_wrapper {
          text-align: center;
        }
        .details_title {
          font-size: 2.2rem;
        }
        .details_subtitle {
        }
        .details_buttons {
          margin-left: auto;
          margin-right: auto;
          width: 50%;
          display: flex;
          gap: 1.8em;
          flex-direction: column;
        }
      `}</style>
      <div className="main_wrapper">
        <div className="details_container">
          <div className="details_product">
            <div className="details_title_wrapper">
              <h3 className="details_title">
                Subtitles and Closed Captions creation software
              </h3>
              <p className="details_subtitle">
                <strong>Starting from €58/month</strong>
                <br />
                <em>for EZTitles Essentials</em>
              </p>
            </div>
            <div className="details_buttons">
              <Link href="/products/free-trial">
                <a className="button button_basic_long">FREE TRIAL</a>
              </Link>
              <Link href="/checkout">
                <a className="button button_basic_long">BUY NOW</a>
              </Link>
              <Link href="/products/ezt/license">
                <a className="button button_basic_long">LICENSE EDITIONS</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="main_inner">
          <div className="main">
            <input type="radio" name="switch" id="green" />
            <input type="radio" name="switch" id="red" />
            <input type="radio" name="switch" id="purple" />
            <label ref={oneRef} className="one card" htmlFor="green">
              <div className="card_product_platforms">
                <img width={45} height={45} src="/images/windows.png" />
              </div>
              <div className="card_product_title">
                <p>EZTitles</p>
              </div>
              <div className="card_product_description">
                <p>
                  EZTitles redefines what professional subtitling software can
                  do! World-class Streaming Services, TV, Digital Cinema, DVD
                  and Blu-ray subtitle preparation software. Powerful conversion
                  tool for almost any known file format. Breakthrough module for
                  Closed Captioning. Three groundbreaking products. Single
                  software.
                </p>
              </div>
              <div className="card_product_learn_more">
                <Link href="/subtitle">
                  <a className="button button_basic_long_outline">LEARN MORE</a>
                </Link>
              </div>
            </label>
            <label ref={twoRef} className="two card" htmlFor="red">
              <div className="card_product_platforms">
                <img width={45} height={45} src="/images/windows.png" />
              </div>
              <div className="card_product_title">
                <p>EZConvert</p>
              </div>
              <div className="card_product_description">
                <p>
                  Fast and accurate subtitle conversion tool which supports a
                  variety of subtitle formats and DVD, Blu-ray and NLE authoring
                  systems. EZConvert does not bother with different output file
                  format a client may require. It simply has them all!
                </p>
              </div>
              <div className="card_product_learn_more">
                <Link href="/convert">
                  <a className="button button_basic_long_outline">LEARN MORE</a>
                </Link>
              </div>
            </label>
            <label ref={threeRef} className="three card" htmlFor="purple">
              <div className="card_product_platforms">
                <img width={45} height={45} src="/images/windows.png" />
              </div>
              <div className="card_product_title">
                <p>EZTitles Plug-ins</p>
              </div>
              <div className="card_product_description">
                <p>
                  The plug-ins for ProMedia Carbon & Rhozet Carbon Coder, and
                  Capella Systems' Cambria File Convert are powerful tools which
                  allows you to load and encode your subtitles Closed Caption,
                  Teletext or DVB files with the video.
                </p>
              </div>
              <div className="card_product_learn_more">
                <Link href="/plugins">
                  <a className="button button_basic_long_outline">LEARN MORE</a>
                </Link>
              </div>
            </label>
          </div>
          <div className="main_controller">
            <label htmlFor="green" />
            <label htmlFor="red" />
            <label htmlFor="purple" />
          </div>
        </div>
      </div>
    </section>
  );
}
