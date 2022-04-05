export default function ShotChangeSection() {
  return (
    <section className="section section-full-width">
      <style jsx>{`
        .container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .timeline_image_wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 1920px;
          transform: translateX(0);
        }
        .image_wrapper {
          position: relative;
          width: 100%;
        }
        .image_wrapper::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 3px;
          background-color: #efa91e;
        }
      `}</style>
      <div className="container">
        <header className="header">
          <h2 className="section-heading">
            EZTitles offers an ocean of useful features and automations to help
            your subtitling endeavors
          </h2>
        </header>
      </div>
      <div className="timeline_image_wrapper">
        <div className="image_wrapper">
          <img src="https://source.unsplash.com/475x300" />
        </div>
        <div className="image_wrapper">
          <img src="https://source.unsplash.com/475x300" />
        </div>
        <div className="image_wrapper">
          <img src="https://source.unsplash.com/475x300" />
        </div>
        <div className="image_wrapper">
          <img src="https://source.unsplash.com/475x300" />
        </div>
      </div>
    </section>
  );
}
