import React from "react";
import { useRouter } from "next/router";
export default function PaymentSuccessful({ type, value }) {
  const router = useRouter();

  return (
    <div className="payment-success flex-center-center flex-col">
      <style jsx>{`
        .payment-success {
          margin-top: 2em;
          text-align: center;
        }
        .payment-success_svg {
          width: 250px;
          height: 250px;
          stroke: green;
          stroke-width: 1;
        }
        .payment-success_title {
          font-size: var(--fs-500);
          color: var(--clr-neutral-800);
        }
        .payment-success_title {
          font-size: var(--fs-500);
          color: var(--clr-neutral-800);
        }
        .payment-success_subtitle {
          font-size: var(--fs-300);
          color: var(--clr-neutral-700);
        }
        .return_custom_wrapper {
          margin-left: auto;
        }
        .payment-success_item {
          background: #288ee233;
          padding: 0.5em 0.8em;
          border-radius: 100px;
          color: var(--clr-neutral-800);
        }
        .payment-success_item strong {
          color: var(--clr-primary);
          text-transform: uppercase;
        }
      `}</style>

      <a
        className="return_custom_wrapper"
        href="/services-portal?account=payment"
      >
        <div
          className="return_custom"
          /*onClick={() => router.replace("/services-portal?account=payment")}*/
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="return_icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
          <span className="return_text">Return to Custom Payment</span>
        </div>
      </a>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="payment-success_svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
      <h2 className="payment-success_title">Payment Successful:</h2>
      <p className="payment-success_item">
        <strong>{type}</strong> : € {"34,234"}
      </p>
      <p className="payment-success_subtitle">Thanks you for your payment.</p>
      <p className="payment-success_subtitle">
        We will be sending you an email shortly with all the whatever deatils.
      </p>
    </div>
  );
}
