const CONTENT_TYPE_JSON = 'application/json';

const CONTENT_TYPE_HEADER = 'Content-Type';
const ACCEPT_HEADER = 'Accept';

export const buildUrl = (...paths) => paths.concat('').join('/');

const sendRequest = (stringUrl, {body, params, ...config}) => {
  const url = new URL(stringUrl);
  if (params) {
    Object.keys(params).forEach((key) => {
      const value = params[key];
      if (!Array.isArray(value)) {
        url.searchParams.append(key, value);
      } else {
        value.forEach((v) => {
          url.searchParams.append(key, v);
        });
      }
    });
  }

  if (body) {
    config.body = JSON.stringify(body);
    config.headers = {
      ...config.headers,
      [ACCEPT_HEADER]: CONTENT_TYPE_JSON,
      [CONTENT_TYPE_HEADER]: CONTENT_TYPE_JSON,
    };
  }

  return fetch(url.toString(), config).then(async (response) => {
    let json;
    try {
      if (response.headers.get(CONTENT_TYPE_HEADER)?.includes(CONTENT_TYPE_JSON)) {
        json = await response.json();
      }
    } catch (e) {}

    if (!response.ok) {
      return Promise.reject({
        status: response.status,
        statusText: response.statusText,
        json,
      });
    }

    return json;
  });
};

export const post = (url, config) =>
  sendRequest(url, {
    ...config,
    method: 'POST',
  });

export const get = (url, config) =>
  sendRequest(url, {
    ...config,
    method: 'GET',
  });

export const put = (url, config) =>
  sendRequest(url, {
    ...config,
    method: 'PUT',
  });

export const del = (url, config) =>
  sendRequest(url, {
    ...config,
    method: 'DELETE',
  });
