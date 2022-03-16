import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

export default function TimelineSection() {
  return (
    <Controller>
      <section className="section section-full-width">
        <style jsx>{`
          .marker {
            /*    transform: translateY(50px);
            opacity: 0;*/
            position: absolute;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 2px solid var(--clr-primary);
          }
          .section-heading {
            text-align: center;
          }
          .one {
            left: 8%;
            top: 29%;
          }
          .two {
            left: 22%;
            top: 35%;
          }
          .three {
            left: 34%;
            top: 51%;
          }
          .four {
            left: 58%;
            top: 68%;
          }
          .five {
            left: 80%;
            top: 30%;
          }
          .timeline {
            position: relative;
            width: 100%;
            height: 500px;
          }
          .timeline-image img {
            object-fit: initial !important;

            max-width: 100% !important;
            display: block !important;
            width: 100% !important;
            height: 300px !important;
          }
        `}</style>

        <Scene
          duration={1600}
          offset={180}
          triggerElement=".trigger"
          indicators={true}
          reverse={true}
          pin
        >
          {(progress) => (
            <div className="timeline trigger">
              <h2 className="section-heading">A Proper Timeline</h2>
              <div className="timeline-image">
                <img
                  src="/images/software/eztitles/timeline.png"
                  width="100%"
                  height={250}
                />
              </div>

              <Tween
                from={{ y: 50, opacity: 0 }}
                to={{ y: 0, opacity: 1 }}
                stagger={1}
                totalProgress={progress}
                paused
              >
                <div className="marker one"></div>
                <div className="marker two"></div>
                <div className="marker three"></div>
                <div className="marker four"></div>
                <div className="marker five"></div>
              </Tween>
            </div>
          )}
        </Scene>
      </section>
    </Controller>
  );
}
