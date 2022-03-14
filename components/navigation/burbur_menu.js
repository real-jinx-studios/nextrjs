import Link from "next/link";
export default function BurburMenu({ open }) {
  return (
    <div className={open ? "burbur-menu open" : "burbur-menu"}>
      <style jsx>{`
        .burbur-menu {
          width: 320px;
          position: absolute;
          overflow-x: hidden;
          top: 0;
          height: 100vh;
          background-color: #fefefeee;
          transform: translateX(100vw);
          transition: transform 0.25s;
          z-index: -1;
          display: grid;
          align-items: center;
          background: #fefefeee url("/images/parrot-img.svg") no-repeat 44% 36%;
        }
        .burbur-menu.open {
          visibility: visible;
          transform: translateX(calc(100vw - 320px));
        }
        .burbur-inner {
          margin: 0 auto;
        }
        .burbur-ul {
          list-style: none;
        }
        .burbur-li {
          color: var(--clr-neutral-800);
          margin-bottom: 1.5em;
          padding: 0.3em 1.6em;
          cursor: pointer;
        }
        .burbur-link {
          padding-bottom: 0.1em;
          color: var(--clr-neutral-800);
        }
        .burbur-link {
          position: relative;
          color: var(--clr-neutral-800);
        }
        .burbur-link::before {
          content: "";
          position: absolute;
          left: 0;
          right: 89%;
          top: 96%;
          bottom: 0;
          transition: all 0.3s var(--cubic-bezier);
          background-color: var(--clr-neutral-800);
        }
        .burbur-li:hover .burbur-link::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 96%;
          bottom: 0;
          background-color: var(--clr-neutral-800);
        }
      `}</style>
      <div className="burbur-inner">
        <ul className="burbur-ul">
          <li className="burbur-li">
            <Link href="/products/help">
              <a className="burbur-link">Demos</a>
            </Link>
          </li>
          <li className="burbur-li">
            <Link href="/products/free-trial">
              <a className="burbur-link">Free Trials</a>
            </Link>
          </li>
          <li className="burbur-li">
            <Link href="/products/help">
              <a className="burbur-link">User Guides</a>
            </Link>
          </li>
          <li className="burbur-li">
            <Link href="/products/help">
              <a className="burbur-link">Video Tutorials</a>
            </Link>
          </li>
          <li className="burbur-li">
            <Link href="/products/help">
              <a className="burbur-link">Support</a>
            </Link>
          </li>
          <li className="burbur-li">
            <Link href="/products/help">
              <a className="burbur-link">Help</a>
            </Link>
          </li>
          <li className="burbur-li">
            <Link href="/products/help">
              <a className="burbur-link">Contact Us</a>
            </Link>
          </li>
          <li className="burbur-li">
            <Link href="/products/help">
              <a className="burbur-link">Legal</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
