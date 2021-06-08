"use strict";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const AHJ = "baeb946937c961e3eaf99cb33d7ac3249a1d9";

/**
 * Axios basic configuration
 * Some general configuration can be added like timeout, headers, params etc. More details can be found on https://github.com/axios/axios
 * */
const config = {
  baseURL: window.location.origin,
};

/**
 * Creating the instance of Axios
 * It is because, in large scale application we may need to consume APIs from more than single server,
 * So, may need to create multiple http client with different config
 * Only this client will be used rather than axios in the application
 **/
const httpClient = axios.create(config);
/**
 * Auth interceptors
 * @description Configuration related to AUTH token can be done in interceptors.
 * Currenlty it is just doing nothing but idea to to show the capability of axios and its interceptors
 * In future, interceptors can be created into separate files and consumed into multiple http clients
 * @param {*} config
 */
const authInterceptor = async (config) => {
  const { __raw: accessToken } = await Vue.prototype.$auth.getIdTokenClaims();
  config.headers.Authorization = `Bearer ${accessToken}`;
  config.headers["x-apikey"] = AHJ;
  return config;
};

/** Adding the request interceptors */
httpClient.interceptors.request.use(authInterceptor);

/** Adding the response interceptors */
// httpClient.interceptors.response.use(
//   (response) => {
//     return Promise.resolve(response);
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) dispatch("logout");

//     return Promise.reject(error);
//   }
// );

Vue.use(VueAxios, httpClient);
