import React, { useState } from "react";
import "../style.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Send } from "../helper";
import { store } from "./../Redux/store";

const Forget = (props) => {
  if (store.getState().Login.details.email) {
    props.history.push("/");
  }
  /*the below code is validating the fields and if any field is empty it say error do not leave fields empty
   otherwise handler change the user password as requested*/
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      Swal.fire("Error", "Do not leave any fields empty!", "error");
    } else {
      setSending(true);
      let res = await Send("post", "/auth/forgot", {
        email,
      });
      //it will popup error message if something is wrong or if everything is correct it will popup success//
      if (res.type === "error") {
        Swal.fire("Error", res.msg, "error");
      } else {
        Swal.fire("Success", res.msg, "success");
        props.history.push("/login");
      }
      setSending(false);
    }
  };
  // this is the form that forgot page have where user input their details.//
//if you go at the end of this form their is one one link as well for user to back to sign in page if they finished on this page//
  return (
    <>
      <section>
        <div className="main-section">
          <div className="container margin-css">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-8">
                <div className="card">
                  <form onSubmit={handleSubmit}>
                    <div className="form-css">
                      <header className="navbar navbar-light bg-light">
                        <div className="container p-1 ms-4">
                          <div className="main-nav">
                            <img className="mt-2 ms-2 logo" src="/logo.jpg" alt="logo"/>
                          </div>
                        </div>
                      </header>
                    </div>
                    <h1 className=" mt-4 text-center">
                      Did you forget your password?
                    </h1>
                    <p className="password-forget-p mt-1 text-center">
                      Enter your email address and we will send you password
                      reset link on your email.
                    </p>
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
                      <div className="mt-3 d-grid gap-2">
                        <button
                          type="submit"
                          className="p-3 btn btn-primary"
                          disabled={sending}
                        >
                          Request Reset Link
                        </button>
                      </div>
                      <div className=" mb-4 text-center mt-3">
                        <Link className="ms-1  g-back" to="/login">
                          Back to Sign in
                        </Link>
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

export default Forget;