import React from "react";
import { connect } from "react-redux";
import { LogOut } from "../Redux/action";
import Swal from "sweetalert2";

const md2p = (dispatch) => {
  return {
    onLogOut: () => {
      dispatch(LogOut());
    },
  };
};
// this code below will log the user out of the system and end the session.//
const Logout = (props) => {
  const logOut = () => {
    props.onLogOut();
    localStorage.removeItem("authtoken");
    props.history.push("/login");
    Swal.fire("Info", "You've been logged out !!", "info");
  };
  logOut();
  return <div>Logging You Out ...</div>;
};

export default connect(null, md2p)(Logout);