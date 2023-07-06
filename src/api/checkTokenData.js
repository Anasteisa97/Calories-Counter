import { getToken } from "./api";

const setNewTokenData = (newTokenExpiresData) => {
  newTokenExpiresData.setDate(newTokenExpiresData.getDate() + 1); // + 1 сутки с текущей даты
  getToken()
    .then((data) => {
      localStorage.token = data;
      localStorage.tokenExpiresData = newTokenExpiresData;
    })
}

export const checkTokenData = new Promise((resolve) => {

  let newTokenExpiresData = new Date();
  let isTokenExpiresData = !!localStorage.tokenExpiresData;

  if (!localStorage.token || !isTokenExpiresData || localStorage.token === 'undefined') {
    setNewTokenData(newTokenExpiresData)
  }
  if (isTokenExpiresData) {
    let curTokenExpiresData = new Date(localStorage.tokenExpiresData);
    if (curTokenExpiresData < newTokenExpiresData) {
      setNewTokenData(newTokenExpiresData)
    }
  }

  resolve();
});
