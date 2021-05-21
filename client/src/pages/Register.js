import React, { useState } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import { store } from "./../Redux/store";
import Swal from "sweetalert2";
import { Send } from "../helper";
// this part of the code below is assigning the value to the each variable we have for this register page//
const Register = (props) => {
  if (store.getState().Login.details.email) {
    props.history.push("/");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [scholarId, setScholarId] = useState("");
 // the code below will handle what user inserted in the fields on register page and execute it.//
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      email === "" ||
      password === "" ||
      firstName === "" ||
      lastName === "" ||
      scholarId === ""
    ) {
     // this will check if there is empty fields in the form or else it will register that user//
      Swal.fire("Error", "Do not leave any fields empty!", "error");
    } else {
      let res = await Send("post", "/auth/register", {
        email,
        password,
        first_Name: firstName,
        last_Name: lastName,
        google_scholar_id: scholarId,
      });
      //it will popup error message if something is wrong or if everything is correct it will popup success//
      if (res.type === "error") {
        Swal.fire("Error", res.msg, "error");
      } else {
        Swal.fire("Success", res.msg, "success");
        props.history.push("/login");
      }
    }
  };
// this is the form that register page have where user input their details.//
// if you go at the end of this form their is one one link as well for user to login if they are already user//
  return (
    <>
      <section>
        <div className="section_register">
          <div className="container margin-css">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="card">
                  <form onSubmit={handleSubmit}>
                    <div className="form-css">
                      <header className="navbar navbar-light bg-light">
                        <div className="container p-1 ms-4">
                          <div className="main-nav">
                            <img className="mt-2 ms-2 logo" src="/logo.jpg" alt="logo" />
                          </div>
                        </div>
                      </header>
                    </div>
                    <h1 className=" mt-4 text-center">Register Page</h1>
                    <div className="px-5 mt-4">
                      <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Your First Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Your Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="exampleInputEmail2" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail2"
                          aria-describedby="emailHelp"
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label for="exampleInputID" className="form-label ">
                          Google Scholar Account
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputID"
                          placeholder="Your Google Scholar ID Url"
                          value={scholarId}
                          onChange={(e) => setScholarId(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleInputPassword1"
                          className="form-label "
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="*********"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="mt-3 d-grid gap-2">
                        <button type="submit" className="p-3 btn btn-primary">
                          SIGN UP
                        </button>
                      </div>
                      <div className=" mb-4 text-end mt-3">
                        <h6>
                          Already A User ?
                          <Link className="ms-1 new-user" to="/login">
                            Login
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;