import "whatwg-fetch";

export function GetRequest(url, headers) {
  const parameters = {
    headers,
  };
  parameters.headers["Content-Type"] = "application/json";

  return fetch(url, {
    credentials: "same-origin",
    method: "GET",
    headers: parameters.headers,
  }).then((response) => response);
}

export function Request(url, headers, method, body) {
  const parameters = {
    headers,
  };
  parameters.headers["Content-Type"] = "application/json";
  return fetch(url, {
    credentials: "same-origin",
    method,
    body: JSON.stringify(body),
    headers: parameters.headers,
    followAllRedirects: true,
    followOriginalHttpMethod: true,
  }).then((response) => response);
}

export function RequestFile(url, headers, method, body) {
  const parameters = {
    headers,
  };
  parameters.headers["Content-Type"] = "application/json";
  return fetch(url, {
    credentials: "same-origin",
    method,
    body,
    headers: parameters.headers,
  }).then((response) => response);
}

export function GetGeocoding(url) {
  return fetch(url, {
    method: "GET",
  }).then((response) => response);
}

export function GetFile(url, headers) {
  return fetch(url, {
    headers,
    responseType: "blob",
  }).then((response) => response);
}
