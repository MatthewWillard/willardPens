import jwtDecode from "jwt-decode";
import config from "../config";

let timeoutId;
const tenSecondsInMs = 10000;

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },






};

export default TokenService;