import { LOG_IN, LOG_OUT } from "./constant";
export const LogIn = (details) => {
  return {
    type: LOG_IN,
    payload: details,
  };
};
export const LogOut = () => {
  return {
    type: LOG_OUT,
  };
};
