import styles from "./wallet_management.module.css";
export default function ActivityReports(props) {
  return (
    <div className={styles.content}>
      <div className={styles.title_wrapper}>
        <h2 className={styles.activity_reports_title}>
          <small
            className={styles.activity_reports_title_step}
            onClick={() => props.setIsActivityReports(false)}
          >
            wallet management
          </small>
          &nbsp;/ Activity Reports
        </h2>
      </div>
      <div className={styles.content_inner_activity_reports}>
        <div className={styles.activity_reports_filter}>
          <div className={styles.filter_report_type}>
            <p>Report Type</p>
          </div>
          <div className={styles.filter_report_date_range}>
            <p>from</p>
            <p>to</p>
          </div>
          <div className={styles.filter_report_wallet}>
            <p>wallet</p>
          </div>
          <div className={styles.filter_report_actions}>
            <p>search</p>
            <p>export</p>
          </div>
        </div>
        <div className={styles.activity_reports_results}></div>
      </div>
    </div>
  );
}
