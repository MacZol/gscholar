import React from "react";
import { connect } from "react-redux";
import Navbar from "./../components/Navbar";
import SideBar from "./../components/SideBar";
import "../style.css";
// import { store } from "./../Redux/store";

const ms2p = (state) => {
  return {
    detail: state.Login.details,
  };
};
const Main = (props) => {
  return (
    <>
      <Navbar />
      {/* top section ends */}
      <div className="d-flex">
        <SideBar />
        {/* body section starts */}
        {props.children}
        {/* body section ends */}
      </div>
    </>
  );
};
export default connect(ms2p, null)(Main);
