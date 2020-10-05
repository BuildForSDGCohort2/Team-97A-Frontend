import axios from "axios";
import JWTDecode from "jwt-decode";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
  timeout: 5000,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("access_token"),
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 403 &&
      error.response.statusText === "Forbidden"
    ) {
      const refresh_token = localStorage.getItem("refresh_token");

      return axiosInstance
        .post("/accounts/refresh/", { refresh: refresh_token })
        .then((response) => {
          localStorage.setItem("access_token", response.data.access);
          localStorage.setItem("refresh_token", response.data.refresh);

          axiosInstance.defaults.headers["Authorization"] =
            "Bearer " + response.data.access;
          originalRequest.headers["Authorization"] =
            "Bearer " + response.data.access;

          return axiosInstance(originalRequest);
        })
        .catch((err) => {
          // console.log(err);
        });
    }
    return Promise.reject(error);
  }
);

/***************************users***********************/
const getCurrentUser = async () => {
  const access_token = localStorage.getItem("token");
  const JWTuser = JWTDecode(access_token);
  const user_id = JWTuser.user_id;
  const { data: user } = await axiosInstance.get(`/accounts/users/${user_id}/`);
  return user;
};

const getAllUsers = async () => {
  const { data: users } = await axiosInstance.get(`/accounts/users/`);
  return users;
};

const editUser = async (user) => {
  const respponse = await axiosInstance.patch(
    `/accounts/users/${user.id}/`,
    user
  );
  return respponse;
};

const verifyUser = async (data) => {
  await axiosInstance.post(`/accounts/verify/`, data);
};

const updateUserVerification = async (data, id) => {
  console.log(data);
  await axiosInstance.put(`/accounts/verify/${id}/`, data);
};

/****************** packages********************/

const createNewPackage = async (data) => {
  const response = await axiosInstance.post("/packages/", data);
  return response.data;
};

const getAllPackages = async () => {
  try {
    const { data: packages } = await axiosInstance.get("/packages/");
    return packages;
  } catch (e) {
    console.log(e);
  }
};

const getSinglePackage = async (packageID) => {
  try {
    const { data: singlePackage } = await axiosInstance.get(
      `/packages/${packageID}/`
    );
    return singlePackage;
  } catch (e) {
    console.log(e.response);
  }
};

const updatePackage = async (singlePackage) => {
  const response = await axiosInstance.patch(
    `/packages/${singlePackage.id}/`,
    singlePackage
  );
  return response;
};

/**************************tracker****************/

const updateTracker = async (tracker) => {
  const response = await axiosInstance.patch(
    `/trackers/${tracker.id}/`,
    tracker
  );
  return response.data;
};

// ************************wallet*************************

const transerFunds = async (singlePackage) => {
  const response = await axiosInstance.post(
    `/wallets/transfer/${singlePackage.price}/`,
    singlePackage
  );
  return response;
};

export default {
  getCurrentUser,
  getAllUsers,
  editUser,
  verifyUser,
  updateUserVerification,
  createNewPackage,
  getAllPackages,
  getSinglePackage,
  updatePackage,
  updateTracker,
  transerFunds,
};
