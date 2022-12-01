import axios from "axios";
import React from "react";
import { createContext, useContext } from "react";
import { getBearerToken } from "../utils/authService";

let operationsAllowed = {};

const HttpApiServiceContext = createContext(operationsAllowed);

export const HttpApiServiceProvider = (props) => {
  const bearerToken = getBearerToken();
  const BASE_URL = process.env.REACT_APP_API_URL;


    axios.interceptors.request.use(function (config) {
      // Do something before request is sent
      console.log({interCeptRequest:config})
      return config;
     
    }, function (error) {
      // Do something with request error
      console.log({interceptErrorRequest:error})
      // return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      console.log({interCeptResponse:response})
      return response;

    }, function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      console.log({interceptErrorResponse:error})
      // return Promise.reject(error);
    });

  const getHeaders = () => {
    return {
      headers: {
        Authorization: "Bearer " + bearerToken,
      },
    };
  };

  const handleError = (error) => {
    let errorMessage = "Something went wrong, Please try after sometime.";
    const err = { ...error };
    if (err?.response?.data?.message) {
      errorMessage = err?.response?.data?.message;
    } else {
      const { message } = error;
      errorMessage = message;
    }
    return errorMessage;
  };

  const get = (path, header = getHeaders()) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${BASE_URL}${path}`, header)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(handleError(error));
        });
    });
  };

  const patch = (path, data) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(`${BASE_URL}${path}`, data, getHeaders())
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(handleError(error));
        });
    });
  };

  const post = (path, data, headers = getHeaders()) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${BASE_URL}${path}`, data, headers)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(handleError(error));
        });
    });
  };

  const remove = (path, headers = getHeaders()) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${BASE_URL}${path}`, headers)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(handleError(error));
        });
    });
  };
  
  operationsAllowed = {
    get,
    patch,
    post,
    remove,
  };
    
  return (
    <HttpApiServiceContext.Provider value={operationsAllowed}>
      {props.children}
    </HttpApiServiceContext.Provider>
  );
};

export const useHttpApiService = () => {
  return useContext(HttpApiServiceContext);
};