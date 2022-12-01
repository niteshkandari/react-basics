export function checkAutoLogin() {
  let tokeninLocalStorage = localStorage.getItem("token");
  if (!tokeninLocalStorage) {
    return;
  }
}

export function storeToken(token) {
  localStorage.setItem("token", token);
}
export function userIsLoggedIn() {
  let tokeninLocalStorage = localStorage.getItem("token");
  if (tokeninLocalStorage) {
    return true;
  }
  return false;
}

export function getBearerToken() {
  return localStorage.getItem("token");
}

export function logOutUser() {
  localStorage.removeItem("token");
}
