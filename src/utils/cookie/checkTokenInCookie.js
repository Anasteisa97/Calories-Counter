import {getCookie, setCookie} from "./cookie";
import {getToken} from "../../api/token/getToken";

function saveJWTinCookie(token) {
  setCookie('Bearer', token, {
    expires: new Date(Date.now() + 86400e3)
  })
}

export const checkTokenInCookie = new Promise((resolve) => {
  if (getCookie('Bearer')) {
    resolve();
  } else {
    getToken()
      .then(data => saveJWTinCookie(data))
      .then(() => resolve())
  }
})