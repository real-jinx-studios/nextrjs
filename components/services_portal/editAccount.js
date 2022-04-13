import styles from "./services_portal.module.css";
import CustomInput from "../inputs/customInput";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import { promiseResolver } from "../../lib/promiseResolver";
import Cookies from "js-cookie";
export default function EditAccount({ session }) {
  let username = "";
  let email = "";
  if (session.status === "authenticated") {
    username = session.data.user.name;
    email = session.data.user.email;
  }
  const oldPass = useRef();
  const newPass = useRef();
  const newPassRe = useRef();
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (newPass.current.value !== newPassRe.current.value) {
      return;
    }
    const [data, error] = await promiseResolver(
      fetch("http://localhost:80/kmweb/WebSite/change-password", {
        method: "POST",
        body: JSON.stringify({
          LoginToken: Cookies.get("uat"),
          PreviousPassword: oldPass.current.value,
          NewPassword: newPass.current.value,
        }),
      })
    );
    if (error) {
      toast.error(error.message);
    } else if (data.message) {
      toast.success("Password changed successfully!", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  debugger;
  return (
    <div className={styles.content}>
      <div className={styles.title_wrapper}>
        <h2>Account Information</h2>
      </div>
      <div className={styles.content_inner_edit_account}>
        <div className={styles.email_username_section}>
          <CustomInput
            default={email}
            type="text"
            placeholder="Email"
            isRequired
            disabled
          />
          <CustomInput
            default={username.name}
            type="text"
            placeholder="Username"
            isRequired
            disabled
          />
        </div>
        <div className={styles.change_password_section}>
          <h3>Change Password</h3>
          <form onSubmit={handlePasswordChange}>
            <CustomInput
              reference={oldPass}
              type="password"
              placeholder="Old Password"
              isRequired
            />
            <CustomInput
              reference={newPass}
              type="password"
              placeholder="New Password"
              isRequired
            />
            <CustomInput
              reference={newPassRe}
              type="password"
              placeholder="Repeat New Password"
              isRequired
            />
            <button
              type="submit"
              className="button button_small margin-inline-l"
            >
              SAVE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
