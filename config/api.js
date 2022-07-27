import axios from "axios";

//export const URL_BASE = 'https://seven.agencianetmidia.com.br/api/uploads';

const app = axios.create({
  baseURL: "https://seven.agencianetmidia.com.br/api/app", headers: {
    'X-Requested-With': 'XMLHttpRequest',
  }
});

class api {
  constructor(headers) {
    var baseURL = "https://seven.agencianetmidia.com.br/api/app";
    this.baseURL = baseURL;
    this.headers = headers;
  }

  async post(route, formData, headers) {
    return new Promise((resolve, reject) => {
      fetch(this.baseURL + route, {
        method: 'POST',
        headers: {
          ...this.headers,
          ...headers,
          'Accept': 'application/json',
        },
        body: formData
      }).then(r => resolve(r.json()))
    })
  }

  async get(route, formData, headers) {
    console.log("GET" + JSON.stringify({
      ...this.headers,
      ...headers,
      'Accept': 'application/json',
    }))
    return new Promise((resolve, reject) => {
      fetch(this.baseURL + route, {
        method: 'GET',
        headers: {
          ...this.headers,
          ...headers,
          'Accept': 'application/json',
        },
        body: formData
      }).then(r => resolve(r.json()))
    })
  }
}

const newApi = new api();

export default newApi;