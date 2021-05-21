/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Swal from "sweetalert2";
import { store } from "./../Redux/store";
import { Link } from "react-router-dom";

const Navbar = () => {
  const first_Name = store.getState().Login.details.first_Name;
  const profile_picture = store.getState().Login.details.profile_picture;
  const Logout = () => {
    Swal.fire({
      title: "Are you sure to logout?",
      text: "You will loose your browsing session!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
    }).then((result) => {
      if (result.value) {
        window.location = "/logout";
      }
    });
  };
  return (
    <>
      <header>
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <a className="navbar-brand main" href="/">
              <img src="/logo.jpg" class="logo" alt="logo"/>
            </a>
            <form className="d-flex navbar-a">
              <img className="image-nav" src={profile_picture} alt="" />{" "}
              <a className="nav-link" href="/">
                Hi, {first_Name}
              </a>
              <Link className="nav-link active" aria-current="page" to="/alert">
                Set Alert
              </Link>
              <a className="nav-link" href="#" onClick={Logout}>
                Logout
              </a>
            </form>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
