import styles from "./wallet_management.module.css";
import CustomInputDropdown from "../../inputs/customInputDropdown";
import CustomInput from "../../inputs/customInput";
import { useMemo } from "react";
import { saveAs } from "file-saver";
import { useTable, usePagination, useSortBy } from "react-table";
import ExportSheets from "../../utils/exportSheets";
export default function ActivityReports(props) {
  const wallets = props.wallets;
  const data = useMemo(
    () => [
      {
        date: "2022-02-18 15:29:54",
        walletName: "Child Support",
        details:
          '{"file_name":"D:\\\\Capture\\\\SubtitlingAssistant\\\\Turbulence 2\\\\Turbulence.2.Fear.of.Flying.DVDRip-AVC.mkv","lang":"ru-RU","computer":"2E4ABC4F","asr_provider":"GoogleSpeechAPI"}',
        tokensSpent: "0.38",
      },
      {
        date: "2019-06-25 07:57:34",
        walletName: "Child Support",
        details: "P0829480-not final.mp4[365B6B1C|0|en-US]",
        tokensSpent: "43.71",
      },
      {
        date: "2019-04-21 08:07:26",
        walletName: "Child Support",
        details:
          "Million Dollar Car Hunters S01 - Ep09 9 HD Watch.mp4[2E4ABC4F]",
        tokensSpent: "55.78",
      },
      {
        date: "2020-01-12 12:09:26",
        walletName: "Child Support",
        details: " 1.wmv[2E4ABC4F|0|ro-RO]",
        tokensSpent: "55.78",
      },
      {
        date: "2022-02-18 15:29:54",
        walletName: "Child Support",
        details:
          '{"file_name":"D:\\\\Capture\\\\SubtitlingAssistant\\\\Turbulence 2\\\\Turbulence.2.Fear.of.Flying.DVDRip-AVC.mkv","lang":"ru-RU","computer":"2E4ABC4F","asr_provider":"GoogleSpeechAPI"}',
        tokensSpent: "0.38",
      },
      {
        date: "2019-06-25 07:57:34",
        walletName: "Child Support",
        details: "P0829480-not final.mp4[365B6B1C|0|en-US]",
        tokensSpent: "43.71",
      },
      {
        date: "2019-04-21 08:07:26",
        walletName: "Child Support",
        details:
          "Million Dollar Car Hunters S01 - Ep09 9 HD Watch.mp4[2E4ABC4F]",
        tokensSpent: "55.78",
      },
      {
        date: "2020-01-12 12:09:26",
        walletName: "Child Support",
        details: " 1.wmv[2E4ABC4F|0|ro-RO]",
        tokensSpent: "55.78",
      },
      {
        date: "2022-02-18 15:29:54",
        walletName: "Child Support",
        details:
          '{"file_name":"D:\\\\Capture\\\\SubtitlingAssistant\\\\Turbulence 2\\\\Turbulence.2.Fear.of.Flying.DVDRip-AVC.mkv","lang":"ru-RU","computer":"2E4ABC4F","asr_provider":"GoogleSpeechAPI"}',
        tokensSpent: "0.38",
      },
      {
        date: "2019-06-25 07:57:34",
        walletName: "Child Support",
        details: "P0829480-not final.mp4[365B6B1C|0|en-US]",
        tokensSpent: "43.71",
      },
      {
        date: "2019-04-21 08:07:26",
        walletName: "Child Support",
        details:
          "Million Dollar Car Hunters S01 - Ep09 9 HD Watch.mp4[2E4ABC4F]",
        tokensSpent: "55.78",
      },
      {
        date: "2020-01-12 12:09:26",
        walletName: "Child Support",
        details: " 1.wmv[2E4ABC4F|0|ro-RO]",
        tokensSpent: "55.78",
      },
      {
        date: "2022-02-18 15:29:54",
        walletName: "Child Support",
        details:
          '{"file_name":"D:\\\\Capture\\\\SubtitlingAssistant\\\\Turbulence 2\\\\Turbulence.2.Fear.of.Flying.DVDRip-AVC.mkv","lang":"ru-RU","computer":"2E4ABC4F","asr_provider":"GoogleSpeechAPI"}',
        tokensSpent: "0.38",
      },
      {
        date: "2019-06-25 07:57:34",
        walletName: "Child Support",
        details: "P0829480-not final.mp4[365B6B1C|0|en-US]",
        tokensSpent: "43.71",
      },
      {
        date: "2019-04-21 08:07:26",
        walletName: "Child Support",
        details:
          "Million Dollar Car Hunters S01 - Ep09 9 HD Watch.mp4[2E4ABC4F]",
        tokensSpent: "55.78",
      },
      {
        date: "2020-01-12 12:09:26",
        walletName: "Child Support",
        details: " 1.wmv[2E4ABC4F|0|ro-RO]",
        tokensSpent: "55.78",
      },
      {
        date: "2022-02-18 15:29:54",
        walletName: "Child Support",
        details:
          '{"file_name":"D:\\\\Capture\\\\SubtitlingAssistant\\\\Turbulence 2\\\\Turbulence.2.Fear.of.Flying.DVDRip-AVC.mkv","lang":"ru-RU","computer":"2E4ABC4F","asr_provider":"GoogleSpeechAPI"}',
        tokensSpent: "0.38",
      },
      {
        date: "2019-06-25 07:57:34",
        walletName: "Main",
        details: "P0829480-not final.mp4[365B6B1C|0|en-US]",
        tokensSpent: "43.71",
      },
      {
        date: "2019-04-21 08:07:26",
        walletName: "Main",
        details:
          "Million Dollar Car Hunters S01 - Ep09 9 HD Watch.mp4[2E4ABC4F]",
        tokensSpent: "55.78",
      },
      {
        date: "2020-01-12 12:09:26",
        walletName: "Main",
        details: " 1.wmv[2E4ABC4F|0|ro-RO]",
        tokensSpent: "55.78",
      },
      {
        date: "2022-02-18 15:29:54",
        walletName: "Main",
        details:
          '{"file_name":"D:\\\\Capture\\\\SubtitlingAssistant\\\\Turbulence 2\\\\Turbulence.2.Fear.of.Flying.DVDRip-AVC.mkv","lang":"ru-RU","computer":"2E4ABC4F","asr_provider":"GoogleSpeechAPI"}',
        tokensSpent: "0.38",
      },
      {
        date: "2019-06-25 07:57:34",
        walletName: "Main",
        details: "P0829480-not final.mp4[365B6B1C|0|en-US]",
        tokensSpent: "43.71",
      },
      {
        date: "2019-04-21 08:07:26",
        walletName: "Main",
        details:
          "Million Dollar Car Hunters S01 - Ep09 9 HD Watch.mp4[2E4ABC4F]",
        tokensSpent: "55.78",
      },
      {
        date: "2020-01-12 12:09:26",
        walletName: "Main",
        details: " 1.wmv[2E4ABC4F|0|ro-RO]",
        tokensSpent: "55.78",
      },
      {
        date: "2022-02-18 15:29:54",
        walletName: "Main",
        details:
          '{"file_name":"D:\\\\Capture\\\\SubtitlingAssistant\\\\Turbulence 2\\\\Turbulence.2.Fear.of.Flying.DVDRip-AVC.mkv","lang":"ru-RU","computer":"2E4ABC4F","asr_provider":"GoogleSpeechAPI"}',
        tokensSpent: "0.38",
      },
      {
        date: "2019-06-25 07:57:34",
        walletName: "Main",
        details: "P0829480-not final.mp4[365B6B1C|0|en-US]",
        tokensSpent: "43.71",
      },
      {
        date: "2019-04-21 08:07:26",
        walletName: "Main",
        details:
          "Million Dollar Car Hunters S01 - Ep09 9 HD Watch.mp4[2E4ABC4F]",
        tokensSpent: "55.78",
      },
      {
        date: "2020-01-12 12:09:26",
        walletName: "Main",
        details: " 1.wmv[2E4ABC4F|0|ro-RO]",
        tokensSpent: "55.78",
      },
      {
        date: "2022-02-18 15:29:54",
        walletName: "Main",
        details:
          '{"file_name":"D:\\\\Capture\\\\SubtitlingAssistant\\\\Turbulence 2\\\\Turbulence.2.Fear.of.Flying.DVDRip-AVC.mkv","lang":"ru-RU","computer":"2E4ABC4F","asr_provider":"GoogleSpeechAPI"}',
        tokensSpent: "0.38",
      },
      {
        date: "2019-06-25 07:57:34",
        walletName: "Main",
        details: "P0829480-not final.mp4[365B6B1C|0|en-US]",
        tokensSpent: "43.71",
      },
      {
        date: "2019-04-21 08:07:26",
        walletName: "Main",
        details:
          "Million Dollar Car Hunters S01 - Ep09 9 HD Watch.mp4[2E4ABC4F]",
        tokensSpent: "55.78",
      },
      {
        date: "2020-01-12 12:09:26",
        walletName: "Main",
        details: " 1.wmv[2E4ABC4F|0|ro-RO]",
        tokensSpent: "55.78",
      },
      {
        date: "2022-02-18 15:29:54",
        walletName: "Main",
        details:
          '{"file_name":"D:\\\\Capture\\\\SubtitlingAssistant\\\\Turbulence 2\\\\Turbulence.2.Fear.of.Flying.DVDRip-AVC.mkv","lang":"ru-RU","computer":"2E4ABC4F","asr_provider":"GoogleSpeechAPI"}',
        tokensSpent: "0.38",
      },
      {
        date: "2019-06-25 07:57:34",
        walletName: "Main",
        details: "P0829480-not final.mp4[365B6B1C|0|en-US]",
        tokensSpent: "43.71",
      },
      {
        date: "2019-04-21 08:07:26",
        walletName: "Main",
        details:
          "Million Dollar Car Hunters S01 - Ep09 9 HD Watch.mp4[2E4ABC4F]",
        tokensSpent: "55.78",
      },
      {
        date: "2020-01-12 12:09:26",
        walletName: "Main",
        details: " 1.wmv[2E4ABC4F|0|ro-RO]",
        tokensSpent: "55.78",
      },
    ],
    []
  );
  const columns = useMemo(
    () => [
      { Header: "Date", accessor: "date" },
      { Header: "Wallet Name", accessor: "walletName" },
      { Header: "Details", accessor: "details" },
      { Header: "Tokens Spent", accessor: "tokensSpent" },
    ],
    []
  );
  const handleDownloadReport = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/services-portal/export-sheets", {
      method: "POST",
      body: JSON.stringify({ data: data, columns: columns }),
      headers: { "Content-Type": "application/json" },
    });

    const file = await res.blob();
    saveAs(file, "file.xlsx");
  };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data }, useSortBy, usePagination);
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
            <CustomInputDropdown>
              <option value="Current Status">Current Status</option>
              <option value="Projects">Projects</option>
              <option value="Wallet Transactions">Wallet Transactions</option>
            </CustomInputDropdown>
          </div>
          <div className={styles.filter_report_date_range}>
            <p>from</p>
            <CustomInput type="date" />
            <p>to</p>
            <CustomInput type="date" />
          </div>
          <div className={styles.filter_report_wallet}>
            <p>wallet</p>
            <CustomInputDropdown>
              {wallets.map((wallet) => (
                <option value={wallet.name} key={wallet.hash}>
                  {wallet.name}
                </option>
              ))}
            </CustomInputDropdown>
          </div>
          <div className={styles.filter_report_actions}>
            <button className="button button_small">SEARCH</button>
            <div className={styles.download_report_wrapper}>
              <button
                className="button button_small"
                onClick={handleDownloadReport}
              >
                DOWNLOAD
              </button>
              <br />
              <code>.xlsx</code>
            </div>
          </div>
        </div>
        <div className={styles.activity_reports_results}>
          <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    // Add the sorting props to control sorting. For this example
                    // we can add them into the header props
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      {/* Add a sort direction indicator */}
                      <br />
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={styles.sort_icon}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={styles.sort_icon}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 15l7-7 7 7"
                              />
                            </svg>
                          )
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.sort_icon}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          style={{
                            padding: "11px",

                            border: "solid 1px gray",

                            background: "papayawhip",
                          }}
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {"<<"}
            </button>{" "}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {"<"}
            </button>{" "}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {">"}
            </button>{" "}
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>{" "}
            <span>
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            <span>
              | Go to page:{" "}
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
                style={{ width: "100px" }}
              />
            </span>{" "}
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[9, 18, 27, 36, 45].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
