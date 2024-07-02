import axios, { InternalAxiosRequestConfig } from "axios";

const BASE_URL = "https://api.iris-zoloto.kz";

const hasToken = () => {
  return localStorage.getItem("token");
};

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  config.headers["Cache-Control"] = "no-cache";
  config.headers["Pragma"] = "no-cache";
  config.headers["Expires"] = "0";

  if (hasToken()) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return config;
};

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(onRequest);

api.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    // console.log(error.response?.data);
    if (
      (error.response.status !== 404 && error.response.status !== 422) ||
      !error.response.status ||
      (error?.response?.data?.error === "Not Found" &&
        !error.response?.data?.message.includes("No user found")) ||
      (error.response?.data?.status === 409 &&
        !error.response?.data?.message.includes("already exists"))
    ) {
      localStorage.clear();
      window.location.href = "/ru/auth?state=login";
    }
    return Promise.reject(error);
  }
);

export const getMe = async () => {
  return await api
    .get("/users/me/profile")
    .then((response: any) => {
      return response;
    })
    .catch((error: any) => {
      return error;
    });
};

export const getProfile = async (userId: any) => {
  return await api
    .get(`/profile/${userId}`)
    .then((response: any) => {
      return response;
    })
    .catch((error: any) => {
      return error;
    });
};
export const updateProfile = async (data: any) => {
  return await api
    .patch("/profile", data)
    .then((response: any) => {
      return response;
    })
    .catch((error: any) => {
      return error;
    });
};

export const registerUser = async (data: any) => {
  return await api
    .post("/users", data)
    .then(async (response: any) => {
      return response;
    })
    .catch((error: any) => {
      return error;
    });
};

export const login = async (data: any) => {
  return await api
    .post("/auth/login", data)
    .then((response: any) => {
      if (response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
      }
      return response;
    })
    .catch((error: any) => {
      return error;
    });
};
