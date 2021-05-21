import axios from "axios";
import Swal from "sweetalert2";

export const Send = async (method, url, data) => {
  let res = await axios({
    url: "/api" + url,
    method,
    data,
  });
  return res.data;
};

export const SendSecure = async (method, url, data) => {
  let key = await localStorage.getItem("authtoken");
  let res = await axios({
    url: "/api" + url,
    method,
    data,
    headers: {
      scholarauthtoken: "ScholarApp AuthToken " + key,
    },
  });
  if (res.data.type === "logout") {
    window.location = "/logout";
    Swal.fire("Error", res.data.msg, "error");
  } else {
    return res.data;
  }
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const SendSecureFile = async (method, url, data) => {
  let key = await localStorage.getItem("authtoken");
  let res = await axios({
    url: "/api" + url,
    method,
    data,
    headers: {
      scholarauthtoken: "ScholarApp AuthToken " + key,
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });
  if (res.data.type === "logout") {
    window.location = "/logout";
    Swal.fire("Error", res.data.msg, "error");
  } else {
    return res.data;
  }
};

