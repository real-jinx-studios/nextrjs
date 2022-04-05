import Link from "next/link";

export default function ProductPageNav({ navReferences }) {
  return (
    <div className="secondary_nav">
      <style jsx>{`
        .secondary_nav {
          position: sticky;
          top: 3.687em;
          z-index: 998;
          background-color: #fff;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          display: flex;
          justify-content: center;
          gap: 0.3em;
          align-items: center;
          flex-wrap: wrap;
          width: 100%;
          margin-bottom: 2rem;
        }
        .secondary_nav a::before {
          position: absolute;
          left: 0;
          bottom: 0;
          height: 1px;
          content: "";
          width: 100%;
          transform-origin: 100% 50%;
          transform: scaleX(0) translateZ(0);

          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          background-color: var(--clr-neutral-500);
        }
        .secondary_nav a {
          cursor: pointer;
          position: relative;
          font-size: 0.95rem;
          color: var(--clr-neutral-500);
        }
        .secondary_nav a:hover {
          color: var(--clr-primary-800);
        }
        .secondary_nav a:hover::before {
          transform-origin: 0% 50%;
          transform: scaleX(0.95) translateZ(0);
        }
        .secondary_nav a.current {
          color: var(--clr-neutral-800);
          font-weight: 400;
          font-size: 1.3rem;
        }
        .secondary_nav a.current::before {
          transform-origin: 0% 50%;
          transform: scaleX(0.95) translateZ(0);
          background-color: var(--clr-neutral-800);
        }
        /*make secondary nav sticky and responsive for mobile*/
        @media (max-width: 768px) {
          .secondary_nav {
            position: static;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-bottom: 2rem;
          }
        }
      `}</style>
      <Link href="#compatibility">
        <a className="secondary_nav-item current" ref={navReferences[0]}>
          / What you can do&nbsp;
        </a>
      </Link>

      <Link href="#formats">
        <a className="secondary_nav-item" ref={navReferences[1]}>
          / How to do it easy&nbsp;
        </a>
      </Link>

      <Link href="#features">
        <a className="secondary_nav-item" ref={navReferences[2]}>
          / Ensure the quality&nbsp;
        </a>
      </Link>

      <Link href="#editions">
        <a className="secondary_nav-item" ref={navReferences[3]}>
          / Complete and export&nbsp;
        </a>
      </Link>
    </div>
  );
}
