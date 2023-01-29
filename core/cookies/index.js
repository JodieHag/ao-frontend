export const getCookie = (key) => {
  const name = `${key}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');

  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

export const setCookie = (key, value, expiresTime) => {
  let expires = '';

  const expireDate = new Date();
  expireDate.setTime(expireDate.getTime() + expiresTime * 24 * 60 * 60 * 1000);
  expires = `; expires=${expireDate.toUTCString()}`;

  document.cookie = `${key}=${value}${expires}; path=/`;
};

export const removeCookie = (key) => {
  setCookie(key, '', -1);
};
