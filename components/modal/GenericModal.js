import { Fragment } from "react";
import ReactDom from "react-dom";
import FreeTrialStdFrom from "../free_trials/freeTrialStdForm";
export default function GenericModal({ children, open, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <Fragment>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          z-index: 998;
          background-color: #19191955;
        }
        .modal-content {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: var(--clr-neutral-50);
          padding: 50px;
          z-index: 998;
        }
        .modal-close_svg {
          stroke: red;
          width: 50px;
          height: 50px;
          cursor: pointer;
          stroke-width: 1px;
        }
      `}</style>
      <div className="modal-overlay" />
      <div className="modal-content">
        <div className="modal-close" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="modal-close_svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        {children}
      </div>
    </Fragment>,
    document.getElementById("modal-portal")
  );
}
