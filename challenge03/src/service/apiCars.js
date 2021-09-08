const request = (url, options) =>
  fetch(url, options)
    .then((response) => response.json())
    .catch((e) => ({ error: true, message: e.message }));

const createOptions = (method, data) => ({
  method,
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(data),
});

export const getCars = (url) => request(url);
export const postCars = (url, data) => request(url, createOptions("POST", data));
export const delCars = (url, data) => request(url, createOptions("DELETE", data));