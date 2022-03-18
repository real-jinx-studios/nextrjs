import Link from "next/link";
import { Fragment } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function ProductFeatureBlock({ feature }) {
  console.log(feature.media.video);
  return (
    <Fragment>
      <style jsx>{`
        .feature-wrapper {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          /*outline: red solid 1px;*/
        }
        .feature-details {
          flex: 1;
          display: grid;
          grid-auto-rows: 0.3fr 0.3fr 1fr 0.3fr;
          justify-content: end;
          padding: 0.5em 3em;
        }
        .feature-details > * {
        }
        .feature-details.left.split {
          text-align: right;
          position: relative;
          /*outline: red solid 1px;*/
        }
        .feature-details.left {
          text-align: left;
          position: relative;
          /*outline: red solid 1px;*/
        }
        .feature-details.right {
          text-align: right;
          position: relative;
          /*outline: red solid 1px;*/
        }
        .feature-details.left.split::after {
          position: absolute;
          content: "";
          left: calc(100% - 1px);
          right: 0;
          top: 0;
          bottom: 0;
          background-color: var(--clr-neutral-50);
        }
        .feature-media {
          /*outline: red solid 1px;*/
          /*flex: 0 0 50%;*/
          height: 100%;
          padding: 3em;
        }
        .feature-details_title {
          font-size: 2.5rem;
          font-weight: 100;
        }
        .feature-details_actions-wrapper {
        }
        .feature-details_actions-wrapper > a:nth-child(1) {
          margin: 0 1em;
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
              <div className="feature-details_actions-wrapper">
                {feature.description.actions.map((action) => (
                  <Link href={action.href}>
                    <a className="button button_basic_long">{action.name}</a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="feature-media flex-center-center">
              {!feature.isAnimated ? (
                <img
                  src={feature.media.image}
                  alt={feature.media.alt}
                  width={250}
                  height={250}
                />
              ) : (
                <Player
                  autoplay
                  loop
                  src={feature.media.video}
                  style={{ height: "500px", width: "500px" }}
                >
                  <Controls
                    visible={false}
                    buttons={["play", "repeat", "frame", "debug"]}
                  />
                </Player>
              )}
            </div>
          </Fragment>
        )}
        {feature.displayOption === "media-description" && (
          <Fragment>
            <div className="feature-media flex-center-center">
              {!feature.isAnimated ? (
                <img
                  src={feature.media.image}
                  alt={feature.media.alt}
                  width={250}
                  height={250}
                />
              ) : (
                <Player
                  autoplay
                  loop
                  src={feature.media.video}
                  style={{ height: "500px", width: "500px" }}
                >
                  <Controls
                    visible={false}
                    buttons={["play", "repeat", "frame", "debug"]}
                  />
                </Player>
              )}
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
              <div className="feature-details_actions-wrapper">
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
            <div className="feature-details left split">
              <h3 className="feature-details_title">
                {feature.description.title}
              </h3>
              {feature.description.description.map((paragraph) => (
                <p
                  className="feature-details_description"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
              <div className="feature-details_actions-wrapper">
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
              <div className="feature-details_actions-wrapper">
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
