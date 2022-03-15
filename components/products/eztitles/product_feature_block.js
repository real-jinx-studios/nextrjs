import Link from "next/link";
import { Fragment } from "react";

export default function ProductFeatureBlock({ feature }) {
  return (
    <Fragment>
      <style jsx>{`
        .feature-wrapper {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }
        .feature-details {
          flex: 1;
          display: grid;
          grid-auto-rows: 0.3fr 0.3fr 1fr 0.3fr;

          padding: 3em;
        }
        .feature-details > * {
        }
        .feature-details.left {
          text-align: right;
          position: relative;
        }
        .feature-details.right {
          text-align: right;
          position: relative;
        }
        .feature-details.left::after {
          position: absolute;
          content: "";
          left: calc(100% - 1px);
          right: 0;
          top: 0;
          bottom: 0;
          background-color: var(--clr-neutral-50);
        }
        .feature-media {
          flex: 0 0 50%;
          padding: 2em;
        }
        .feature-details_title {
          font-size: 2.5rem;
          font-weight: 100;
        }
        .feature-details_actions-wrapper {
          padding: 0.5em 0em;
        }
        .highlight-text {
          color: var(--clr-text-highlight);
          font-weight: 500;
        }
        strong {
          color: var(--clr-text-highlight) !important;
          font-weight: 500;
        }
      `}</style>
      <div className="feature-wrapper">
        {feature.displayOption === "description-media" && (
          <Fragment>
            <div className="feature-details">
              <h3 className="feature-details_title">
                {feature.description.title}
              </h3>
              {feature.description.description.map((paragraph) => (
                <p
                  className="feature-details_description"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
              <div className="feature-details_actions-wrapper flex-center-space_between">
                {feature.description.actions.map((action) => (
                  <Link href={action.href}>
                    <a className="button button_basic_long">{action.name}</a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="feature-media flex-center-center">
              <img
                src={feature.media.image}
                alt={feature.media.alt}
                width={250}
                height={250}
              />
            </div>
          </Fragment>
        )}
        {feature.displayOption === "media-description" && (
          <Fragment>
            <div className="feature-media flex-center-center">
              <img
                src={feature.media.image}
                alt={feature.media.alt}
                width={250}
                height={300}
              />
            </div>
            <div className="feature-details right">
              <h3 className="feature-details_title">
                {feature.description.title}
              </h3>
              {feature.description.description.map((paragraph) => (
                <p
                  className="feature-details_description"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
              <div className="feature-details_actions-wrapper flex-center-space_between">
                {feature.description.actions.map((action) => (
                  <Link href={action.href}>
                    <a className="button button_basic_long">{action.name}</a>
                  </Link>
                ))}
              </div>
            </div>
          </Fragment>
        )}
        {feature.displayOption === "description-description" && (
          <Fragment>
            <div className="feature-details left">
              <h3 className="feature-details_title">
                {feature.description.title}
              </h3>
              {feature.description.description.map((paragraph) => (
                <p
                  className="feature-details_description"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
              <div className="feature-details_actions-wrapper flex-center-space_between">
                {feature.description.actions.map((action) => (
                  <Link href={action.href}>
                    <a className="button button_basic_long">{action.name}</a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="feature-details">
              <h3 className="feature-details_title">{feature.media.title}</h3>
              {feature.media.description.map((paragraph) => (
                <p
                  className="feature-details_description"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
              <div className="feature-details_actions-wrapper flex-center-space_between">
                {feature.media.actions.map((action) => (
                  <Link href={action.href}>
                    <a className="button button_basic_long">{action.name}</a>
                  </Link>
                ))}
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}
