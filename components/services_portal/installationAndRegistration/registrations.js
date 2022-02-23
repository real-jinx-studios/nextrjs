import styles from "./ins_app.module.css";
import { Fragment } from "react";
export default function Registrations() {
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
      <h3 className="gray align-center">Registration Files</h3>
      <div className={styles.recent_versions}>
        {sampleFiles.map((x) => (
          <div
            className={styles.file_wrapper}
            key={x.title}
            data-before-content={x.icon}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${x.icon} file`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <p>
              {x.title}
              <br />
              <small>{x.size}</small>
            </p>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
