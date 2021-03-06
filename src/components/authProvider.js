/**
 * 登陆验证
 */
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from "react-admin";
import API_URL from "../config";
export default (type, params) => {
  // called when the user attempts to log in
  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    const request = new Request(`${API_URL}/admin/login`, {
      method: "POST",
      body: JSON.stringify({
        adminName: username,
        adminPassword: password
      }),
      headers: new Headers({ "Content-Type": "application/json" })
    });
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        console.log(response);
        return response.json();
      })
      .then(({ resultBody }) => {
        localStorage.setItem("username", resultBody.object.adminName);
      });
  }
  // called when the user clicks on the logout button
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem("username");
    return Promise.resolve();
  }
  // called when the API returns an error
  if (type === AUTH_ERROR) {
    const { status } = params;
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  }
  // called when the user navigates to a new location
  if (type === AUTH_CHECK) {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  }
  return Promise.reject("Unknown method");
};
