import Cookies from "js-cookie";

export async function useVerifyUserCredentials(username, password) {
  try {
    const res = await fetch(`http://localhost:80/kmweb/WebSite/login`, {
      method: "POST",
      body: JSON.stringify({
        Username: username,
        Password: password,
      }),
    });

    if (res.status === 200) {
      const token = await res.json();
      Cookies.set("uat", token.LoginToken, {
        expires: 18,
      });
      return { username: username, loginToken: token.LoginToken };
    } else {
      console.error("Invalid credentials");
    }
  } catch (e) {
    console.error((e, "shit"));
  }
}

export function useLogout() {
  Cookies.remove("uat");
}

export async function getShit() {
  try {
    const res = await fetch(`http://localhost:80/kmweb/info`, {
      method: "GET",
    });

    if (res.status === 200) {
      const token = await res.json();

      console.log(token, "shit");
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (e) {
    console.log(e, "shit");
    throw new Error(e);
  }
}
