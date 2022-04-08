import styles from "./ins_app.module.css";
import { Fragment } from "react";
import axios from "axios";
const zlib = require("zlib");
export default function Registrations() {
  const handleFileDownload = async (type) => {
    if (type !== "zlib") {
      const file = await fetch(`http://localhost:5000/${type}`);
      const fileBlob = await file.blob();
      if (type === "compressed") {
        saveAs(fileBlob, "license.zip");
      } else {
        saveAs(fileBlob, "license.eztlic");
      }
    } else {
      const file = await fetch(`http://localhost:5000/${type}`);
      const fileBlob = await file.blob();
      const byteArray = new Uint8Array(await fileBlob.arrayBuffer());
      zlib.inflate(byteArray, function (err, result) {
        if (err) {
          console.log("err", err);
        } else {
          try {
            saveAs(
              new Blob([result.toString()], { type: "text/xml;charset=utf-8" }),
              "license.eztlic"
            );
          } catch (err) {
            console.log(err);
          }
        }
      });
    }
  };
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
        <button
          className="button button_basic_long"
          onClick={() => handleFileDownload("zlib")}
        >
          Download
        </button>
      </div>
    </Fragment>
  );
}
