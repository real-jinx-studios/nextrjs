import { useState } from "react";

export default function FuckedUpMenu() {
  const [active, setActive] = useState(false);
  const testThisShit = (e) => {
    setActive(!active);
  };
  return (
    <section className="product-section">
      <style jsx>{`
        .product-container {
          max-width: 75rem;
          overflow: initial;
          height: 632px;
        }
        .fucked_up_menu_wrapper {
          display: flex;
          justify-content: center;
          align-items: stretch;
          width: 100%;
          height: 100%;
          flex-wrap: wrap;
          position: relative;
          gap: 2em;
        }
        .content_box {
          flex-basis: 48%;
          display: flex;
          position: relative;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 300px;
          border-radius: 9px;
          border: 2px solid var(--clr-primary);
          transition: all 0.3s ease-in-out;
        }
        .top_left {
          transform-origin: top left;
        }
        .content_box.open {
          height: 100%;
          flex-basis: 100%;
        }
        .content_box.closed {
          display: none;
        }
        .circle {
          position: absolute;
          width: 200px;
          height: 200px;
          bottom: 50%;
          right: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: translate(50%, 50%);
          border-radius: 50%;
          background-color: var(--clr-main);
          transition: all 0.29s ease-in-out;
        }
        .circle.active.top_left {
          bottom: 0;
          right: 0;
          transform: translate(50%, 50%) scale(0.8);
          border-radius: 50%;
        }
        .circle_relative_cover {
          border: 2px solid var(--clr-primary);
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          border-radius: 50%;
        }
        /*  .arc {
          overflow: hidden;
          position: absolute;

          top: -2px;
          right: 50%;
          bottom: 50%;
          left: -2px;
          transform-origin: 100% 100%;
          transform: rotate(15deg) skewX(30deg);
        }
        .arc.top_left {
          transform: rotate(15deg) skewX(30deg);
        }
        .arc.top_right {
          transform: rotate(105deg) skewX(30deg);
        }
        .arc.bottom_right {
          transform: rotate(195deg) skewX(30deg);
        }
        .arc.bottom_left {
          transform: rotate(285deg) skewX(30deg);
        }
        .arc::before {
          box-sizing: border-box;
          display: block;
          border: solid 2px var(--clr-primary);
          width: 200%;
          height: 200%;
          border-radius: 50%;
          transform: skewX(-30deg);
          content: "";
        }*/
        /* .top_left::before {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          width: 180px;
          height: 180px;

          border-radius: 50%;
          border: 2px solid #fefefe00;
          transform: translateY(50%) translateX(50%) rotate(-45deg);
          border-top: 2px solid var(--clr-primary);
        }*/
        .circle_inner {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--clr-neutral-50);
        }
      `}</style>
      <div className="product-container">
        <header>
          <h2 className="product-title">Fucked Up Menu</h2>
        </header>
        <div className="fucked_up_menu_wrapper">
          <div
            className={`content_box top_left ${active ? "open" : ""}`}
            onClick={testThisShit}
          ></div>
          <div
            className={`content_box bottom_left ${active ? "closed" : ""}`}
          ></div>
          <div
            className={`content_box top_right ${active ? "closed" : ""}`}
          ></div>
          <div
            className={`content_box bottom_right ${active ? "closed" : ""}`}
          ></div>
          <div className={`circle  ${active ? "active top_left" : ""}`}>
            <div className="circle_relative_cover">
              <div className="arc top_left"></div>
              <div className="arc top_right"></div>
              <div className="arc bottom_left"></div>
              <div className="arc bottom_right"></div>
            </div>
            <div className="circle_inner">LEARN THIS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
