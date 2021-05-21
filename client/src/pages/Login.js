import { Send } from "../helper";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { LogIn } from "../Redux/action";
import { connect } from "react-redux";
import "../style.css";
import { Link } from "react-router-dom";

const ms2p = (state) => {
  return {
    isLogged: state.Login.isLogged,
  };
};
const md2p = (dispatch) => {
  return {
    onLogin: (details) => {
      dispatch(LogIn(details));
    },
  };
};
const Login = (props) => {
  if (props.isLogged) {
    props.history.push("/");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sending, setSending] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      Swal.fire("Error", "Do not leave any fields empty!", "error");
    } else {
      setSending(true);
      let res = await Send("post", "/auth/login", {
        email,
        password,
      });
      if (res.type === "error") {
        Swal.fire("Error", res.msg, "error");
      } else {
        Swal.fire("Success", res.msg, "success");
        localStorage.setItem("authtoken", res.token);
        props.onLogin(res.details);
        props.history.push("/");
      }
      setSending(false);
    }
  };

  return (
    <>
      <section>
        <div className="main-section">
          <div className="container margin-css">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 ">
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
                    <h1 className=" mt-4 text-center">Login Page</h1>
                    <div className="px-5 mt-4">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
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
                      <Link className="password" to="/forget">
                        Forget Password?
                      </Link>
                      <div className="mt-3 d-grid gap-2">
                        <button
                          type="submit"
                          className="p-3 btn btn-primary"
                          disabled={sending}
                        >
                          LOGIN
                        </button>
                      </div>
                      <div className=" mb-4 text-end mt-3">
                        <h6>
                          New User ?
                          <Link className="ms-1 new-user" to="/register">
                            New User
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

export default connect(ms2p, md2p)(Login);
