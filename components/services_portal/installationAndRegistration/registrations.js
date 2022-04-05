import styles from "./ins_app.module.css";
import { Fragment } from "react";
/*var AdmZip = require("adm-zip");*/
export default function Registrations() {
  const handleFileDownload = async (type) => {
    const fileName = "version.zip";
    const fileType = "application/zip";
    const file = await fetch(`https://rjs-server.azurewebsites.net/${type}`);
    const fileBlob = await file.blob();
    if (type === "compressed") {
      saveAs(fileBlob, "license.zip");
    } else {
      saveAs(fileBlob, "license.eztlic");
    }
  };

  const sampleFiles = [
    {
      title: "x",
      size: "1.75 KB",
      icon: "blue",
    },
    {
      title: "Test Build",
      size: "44.53 KB",
      icon: "blue",
    },
    {
      title: "I have no idea",
      size: "31.11 KB",
      icon: "blue",
    },
    {
      title: "y",
      size: "8.01 KB",
      icon: "blue",
    },
  ];
  return (
    <Fragment>
      <h3 className="gray align-center title">Registration Files</h3>
      <style jsx>{`
        .title {
          margin-bottom: var(--offset-6);
        }
        .license_download_wrapper {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: var(--offset-3);
        }
      `}</style>
      <div className="license_download_wrapper">
        <button
          className="button button_basic_long"
          onClick={() => handleFileDownload("compressed")}
        >
          Download
        </button>
        <button
          className="button button_basic_long"
          onClick={() => handleFileDownload("xml")}
        >
          Download
        </button>
      </div>
    </Fragment>
  );
}
