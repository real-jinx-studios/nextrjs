export default function LicenseOptionsSection() {
  return (
    <section className="section flex-center-center">
      <style jsx>{`
        .section-heading {
          font-size: var(--fs-600);
          font-weight: 200;
        }
        .c {
          text-align: center;
        }
        .license-options-wrapper {
          align-items: start;
          display: grid;
          gap: 2rem;
          grid-template-rows: masonry;
          margin: 6rem calc(30% - 30vw);
          padding: 0 1rem;
        }
        .section-subtitle {
          font-weight: 500;
          font-size: var(--fs-400);
        }
        .license-option {
          border: 1px solid var(--clr-primary);
          border-radius: 9px;
          padding: 2em;
        }
        .license-option_icon {
        }
        .license-option_title {
          font-size: var(--fs-500);
        }
        .license-options-description,
        .license-option_title {
          margin-top: 1em;
        }
        @media (min-width: 432px) {
          .license-options-wrapper {
            grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
          }
        }
      `}</style>
      <div className="c">
        <header>
          <h2 className="section-heading">A license for every need</h2>
          <p className="section-subtitle">
            EZTitles can be licensed in different ways so it could fit your
            desired workflow.
          </p>
        </header>
        <div className="license-options-wrapper">
          <div className="license-option">
            <div className="license-option_icon flex-center-center">
              <img
                src="images/icons/dongle-icon.svg"
                alt="dongle icon"
                width={90}
                height={90}
              />
            </div>
            <p className="license-option_title">Dongle</p>
            <div className="license-option_description">
              <p>
                The normal EZTitles license comes on a dongle so the software
                will work on the computer where it has been plugged at that
                time.
              </p>
            </div>
          </div>
          <div className="license-option">
            <div className="license-option_icon flex-center-center">
              <img
                src="images/icons/online-icon.svg"
                alt="dongle icon"
                width={90}
                height={90}
              />
            </div>
            <p className="license-option_title">Online License Manager</p>
            <div className="license-option_description">
              <p>
                Available from EZTitles 5 onwards you could assign your licenses
                to your associates for a specified period of time and for a
                particular computer. Once expired it could either be extended or
                assigned to a different PC.
              </p>
            </div>
          </div>
          <div className="license-option">
            <div className="license-option_icon flex-center-center">
              <img
                src="images/icons/graduation-hat.webp"
                alt="dongle icon"
                width={90}
                height={90}
              />
            </div>
            <p className="license-option_title">Classroom Package</p>
            <div className="license-option_description">
              <p>
                If your educational institution offers trainings at Audiovisual
                Translation and needs to equip a lab with а professional
                subtitling software, we provide Classroom packages with 80%
                discount plus a free license for the teacher
              </p>
              <a className="underlined_link" href="#">
                Learn more about the Classroom packages
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
