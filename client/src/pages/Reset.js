import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { Send } from "../helper";
import { store } from "./../Redux/store";
import "../style.css";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Reset = (props) => {
  let query = useQuery();
  let verifyCode = query.get("code");
  let email = query.get("email");
  if (store.getState().Login.details.email) {
    props.history.push("/");
  }
  if (verifyCode === null && email === null) {
    props.history.push("/login");
  }
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cancel, setCancel] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cancel) {
      props.history.push("/login");
    } else {
      if (confirmPassword === "" || password === "") {
        Swal.fire("Error", "Do not leave any fields empty!", "error");
      } else {
        setSending(true);
        let res = await Send(
          "post",
          `/auth/reset/?email=${email}&code=${verifyCode}`,
          {
            password,
            confirmPassword,
          }
        );
        if (res.type === "error") {
          Swal.fire("Error", res.msg, "error");
        } else {
          Swal.fire("Success", res.msg, "success");
          props.history.push("/login");
        }
        setSending(false);
      }
    }
  };
  return (
    <>
      <div className="main-section mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card">
                <form onSubmit={handleSubmit}>
                  <div className="form-css">
                    <header className="navbar navbar-light bg-light">
                      <div className="container ms-4">
                        <div className="main-nav">
                          <h4 className="mt-2 ms-2">Scholar Web Application</h4>
                        </div>
                      </div>
                    </header>
                    <div className="mt-3 change-password-main">
                      <h3 className="text-center mt-2">Reset Password</h3>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword2"
                          className="form-label "
                        >
                          New Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword2"
                          placeholder="*********"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword3"
                          className="form-label "
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword3"
                          placeholder="*********"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      <div className=" mb-4 mt-3">
                        <button
                          type="submit"
                          className="p-3 btn btn-primary"
                          disabled={sending}
                        >
                          Save
                        </button>
                        <button
                          value={cancel}
                          type="submit"
                          className=" color-cng p-3 ms-3 btn btn-primary"
                          onClick={(e) => setCancel(true)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;
