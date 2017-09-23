/* eslint-env browser */
class persist {
  static get ACCESS_TOKEN_KEY() {
    return 'accessToken';
  }

  static getAccessToken() {
    return localStorage.getItem(persist.ACCESS_TOKEN_KEY);
  }

  static setAccessToken(value) {
    return localStorage.setItem(persist.ACCESS_TOKEN_KEY, value);
  }

  static removeAccessToken() {
    return localStorage.removeItem(persist.ACCESS_TOKEN_KEY);
  }
}

export default persist;
