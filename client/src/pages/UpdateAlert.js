/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Main from "./Main";
import { getAlert } from "../services/UserServices";
import { capitalizeFirstLetter } from "./../helper";
import Swal from "sweetalert2";
import { SendSecure } from "./../helper";

const UpdateAlert = (props) => {
  const [alertName, setAlertName] = useState("");
  const [email, setEmail] = useState("");
  const [schedule, setSchedule] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchAlert = async () => {
      let data = await getAlert(props, props.match.params.id);
      setAlertName(data.alert_name);
      setEmail(data.email);
      setSchedule(data.schedule);
      setLoading(false);
    };
    fetchAlert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (alertName === "" || email === "" || schedule === "") {
      Swal.fire("Error", "Do not leave any fields empty!", "error");
    } else {
      let res = await SendSecure(
        "patch",
        `/account/alert/${props.match.params.id}`,
        {
          alert_name: alertName,
          schedule: schedule.toLowerCase(),
          email,
        }
      );
      if (res.type === "error") {
        Swal.fire("Error", res.msg, "error");
      } else {
        Swal.fire("Success", res.msg, "success");
        props.history.push("/");
      }
    }
  };

  console.log(schedule);

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
          <div className="mt-5 main-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="card">
                    <form onSubmit={handleSubmit}>
                      <div className="form-css">
                        <header className="navbar navbar-light bg-light">
                          <div className="container p-1 ms-4">
                            <div className="main-nav">
                              <h2 className="text-center mt-2 ms-2">
                                Update Alert
                              </h2>
                            </div>
                          </div>
                        </header>
                      </div>
                      <div className="px-5 mt-4">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputName1"
                            className="form-label"
                          >
                            Alert Name
                          </label>
                          <input
                            type="name"
                            className="colors form-control"
                            id="exampleInputName1"
                            aria-describedby="emailHelp"
                            placeholder="Name"
                            value={alertName}
                            onChange={(e) => setAlertName(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail"
                            className="form-label "
                          >
                            Email Address
                          </label>
                          <input
                            type="text"
                            className=" colors form-control"
                            id="exampleInputEmail"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="select_group mb-2">
                          <select
                            defaultValue={
                              schedule
                                ? capitalizeFirstLetter(schedule)
                                : "Daily"
                            }
                            className="colors form-control-lg width-color"
                            onChange={(e) => setSchedule(e.target.value)}
                          >
                            <option defaultValue="Weekly">Weekly</option>
                            <option defaultValue="Bi-Weekly">Bi-Weekly</option>
                            <option defaultValue="Monthly">Monthly</option>
                          </select>
                        </div>
                        <div className="mt-3 mb-4 d-grid gap-2">
                          <button type="submit" className="p-3 btn btn-primary">
                            Update
                          </button>
                        </div>
                      </div>
                    </form>
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

export default UpdateAlert;
