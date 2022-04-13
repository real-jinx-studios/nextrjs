export default function FileFormatsSection() {
  return (
    <section className="product-section flex-center-center-column gap-2">
      <style jsx>{`
        .product-container {
          padding: 3.8em 3em;
        }
        .table {
          display: flex;
          flex-direction: column;
        }
        .table_header {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
        }
        .table_header-cell {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .table_header-cell-text {
          text-align: center;
          font-size: 1.2em;
          font-weight: 400;
          color: var(--clr-neutral-50);
        }
        .table-body {
          width: 100%;
          display: grid;
          align-items: center;
          justify-content: center;
          grid-template-columns: repeat(4, 1fr);
        }
      `}</style>
      <div className="product-container">
        <header>
          <h2 className="section-heading">
            Export your work in any file format used in the industry today
          </h2>
        </header>
        <div className="table">
          <div className="table_header">
            <div className="table_header-cell">
              <span className="table_header-cell-text">Open subtitles</span>
            </div>
            <div className="table_header-cell">
              <span className="table_header-cell-text">Closed Captions</span>
            </div>
            <div className="table_header-cell">
              <span className="table_header-cell-text">Timed Text</span>
            </div>
            <div className="table_header-cell">
              <span className="table_header-cell-text">
                Images for DVD authoring & NLE systems
              </span>
            </div>
            <div className="table_header-cell">
              <span className="table_header-cell-text">
                Text-only scripts for Authoring & NLE systems
              </span>
            </div>
          </div>
          <div className="table-body">
            <ul>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
            </ul>
            <ul>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
            </ul>
            <ul>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
            </ul>
            <ul>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
              <li>.890 files</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
