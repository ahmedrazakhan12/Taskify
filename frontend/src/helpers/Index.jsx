import { jwtDecode } from "jwt-decode";
import { ROUTES } from "../routes";

export const baseUrl = "http://localhost:3000/api/";

export const localStorageKeys = {
  authToken: "authToken",
  authUser: "authUser",
};
export const saveItemToLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const saveTokenToLocalStorage = (authToken) =>
  localStorage.setItem(localStorageKeys.authToken, authToken);

export const getTokenFromLocalStorage = () =>
  localStorage.getItem(localStorageKeys.authToken);

export const GetAuthData = JSON.parse(
  localStorage.getItem(localStorageKeys.authUser)
);

export const getDecodedToken = () => {
  const token = getTokenFromLocalStorage();
  if (token) {
    return jwtDecode(token);
  }
  return null;
};

export const logout = () => {
  localStorage.clear();
  window.location.href = ROUTES.LOGIN;
};
