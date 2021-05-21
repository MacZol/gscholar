/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import Main from "./Main";
import { getProfile } from "../services/UserServices";
import Swal from "sweetalert2";
import { SendSecure, SendSecureFile } from "./../helper";

const MyAccount = (props) => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [old, setOld] = useState("");
  const [newp, setNewP] = useState("");
  const [repeat, setRepeat] = useState("");

  useEffect(() => {
    setLoading(false);
    const fetchProfile = async () => {
      let data = await getProfile(props);
      setProfile(data);
      setLoading(false);
      setFirstName(data.first_Name);
      setLastName(data.last_Name);
      setEmail(data.email);
    };
    fetchProfile();
  }, []);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "" || email === "") {
      Swal.fire("Error", "Do not leave any fields empty!", "error");
    } else {
      let formData = new FormData();
      formData.append("first_Name", firstName);
      formData.append("last_Name", lastName);
      formData.append("email", email);
      formData.append("profile_picture", image);
      let res = await SendSecureFile("patch", "/account/profile", formData);
      if (res.type === "error") {
        Swal.fire("Error", res.msg, "error");
      } else {
        Swal.fire("Success", res.msg, "success");
        props.history.push("/");
      }
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (old === "" || newp === "" || repeat === "") {
      Swal.fire("Error", "Do not leave any fields empty!", "error");
    } else {
      let res = await SendSecure("post", "/auth/change", { old, newp, repeat });
      if (res.type === "error") {
        Swal.fire("Error", res.msg, "error");
      } else {
        Swal.fire("Success", res.msg, "success");
        props.history.push("/");
      }
    }
  };

  const deleteAccount = async (id)=>{
    Swal.fire({
      title: "Are you sure you want  to delete your account?",
      text: "You will loose all your alerts and messages!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete  My Account!",
    }).then(async (result) => {
      if (result.value) {
       let res = await SendSecure("delete","/account/delete");
       if(res.type === "logout"){
         window.location="/logout"
       }
      }
    });
  }

  return (
    <>
      <Main>
        {loading ? (
          <div className="container d-flex">
            <div className="justify-content-center">
              <img src="giphy.gif" alt="loading" />
            </div>
          </div>
        ) : (
          <div className="main-section mt-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="card">
                    <form onSubmit={handleProfileUpdate}>
                      <div className="form-css">
                        <header className="navbar navbar-light bg-light">
                          <div className="container ms-4">
                            <div className="main-nav">
                              <h2 className="text-center mt-2 ms-2">
                                My Account
                              </h2>
                            </div>
                          </div>
                        </header>
                      </div>
                      <div className="row flex-md-row-reverse mt-3 mb-3">
                        <div className="col-lg-6 col-sm-12">
                          <div className="text-center myaccount-img">
                            <img
                              className="image-account"
                              src={profile.profile_picture}
                              alt="photo"
                            />
                          </div>
                          <div className="colors input-group account-photo mt-4 ms-5">
                            <input
                              type="file"
                              className="colors form-control"
                              onChange={(e) => setImage(e.target.files[0])}
                              id="inputGroupFile02"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 p-3">
                          <div className="px-5 mt-4">
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                              >
                                First Name:
                              </label>
                              <input
                                type="text"
                                className="colors form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Your First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputEmail2"
                                className="form-label"
                              >
                                Last name:
                              </label>
                              <input
                                type="text"
                                className="colors form-control"
                                id="exampleInputEmail2"
                                aria-describedby="emailHelp"
                                placeholder="Your Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="exampleInputID"
                                className="form-label "
                              >
                                Email Address:
                              </label>
                              <input
                                type="text"
                                className="colors form-control"
                                id="exampleInputID"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                            <div className="mt-3 mb-3 ">
                              <button
                                type="submit"
                                className="p-3 btn btn-primary"
                              >
                                Update
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <hr />
                    <div className="row ms-5 mb-2 ">
                      <div className="col-md-11 col-sm-12">
                        <h3 className="m-3 text-center">Change Password</h3>
                        <div>
                          <form onSubmit={handlePasswordUpdate}>
                            <div className="row">
                              <div className="col-md-4 col-sm-10">
                                <div className="input__group  mar-btm">
                                  <label htmlFor="">Old Password:</label>
                                  <input
                                    type="password"
                                    name="old_password"
                                    id="old_password"
                                    className="colors form-height form-control"
                                    placeholder="***************"
                                    value={old}
                                    onChange={(e) => setOld(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-10">
                                <label htmlFor="">New Password:</label>
                                <div className="input__group  mar-btm">
                                  <input
                                    type="password"
                                    name="new_password"
                                    id="new_password"
                                    className="colors form-height form-control"
                                    placeholder="***************"
                                    value={newp}
                                    onChange={(e) => setNewP(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-10">
                                <label htmlFor="">Confirm Password:</label>
                                <div className="input__group  mar-btm">
                                  <input
                                    type="password"
                                    name="confirm_password"
                                    id="confirm_password"
                                    className="colors form-height form-control"
                                    placeholder="***************"
                                    value={repeat}
                                    onChange={(e) => setRepeat(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mt-3 mb-3 ">
                              <button
                                type="submit"
                                className="p-3 btn btn-danger"
                              >
                                Update
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <hr/>
                    <div className="row ms-5 mb-2 ">
                      <div className="col-md-11 col-sm-12">
                         <div className="mt-3 mb-3 ">
                              <button
                                type="submit"
                                className="p-3 btn btn-primary"
                                onClick = {(e)=> deleteAccount(profile._id)}
                              >
                                Delete Account
                              </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Main>
    </>
  );
};

export default MyAccount;
