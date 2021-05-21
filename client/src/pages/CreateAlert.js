import React, { useState } from "react";
import Main from "./Main";
import Swal from "sweetalert2";
import { SendSecure } from "./../helper";

const CreateAlert = (props) => {
  const [alertName, setAlertName] = useState("");
  const [email, setEmail] = useState("");
  const [schedule, setSchedule] = useState("Weekly");
  const [citations, setCitations] = useState(false);
  const [hIndex, setHIndex] = useState(false);
  const [i10Index, setI10Index] = useState(false);
  const [selected, setSelected] = useState(false);
  const [changes, setChanges] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (alertName === "" || email === "" || schedule === "") {
      Swal.fire("Error", "Do not leave any fields empty!", "error");
    } else {
      let res = await SendSecure("post", "/account/alerts", {
        citations,
        hIndex,
        alert_name: alertName,
        schedule: schedule.toLowerCase(),
        email,
        changes,
        i10Index,
      });
      if (res.type === "error") {
        Swal.fire("Error", res.msg, "error");
      } else {
        Swal.fire("Success", res.msg, "success");
        props.history.push("/");
      }
    }
  };
  return (
    <>
      <Main>
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
                              Create Alert
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
                          className="form-control"
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
                          className="form-control"
                          id="exampleInputEmail"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <p> Select what you want to include in this Alert.</p>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            value={selected}
                            onChange={() => {
                              setSelected(!selected);
                              setCitations(!citations);
                              setHIndex(!hIndex);
                              setI10Index(!i10Index);
                            }}
                            checked={
                              selected || (citations && hIndex && i10Index)
                                ? true
                                : false
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Select All
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={citations}
                            id="flexCheckDefault"
                            checked={selected || citations ? true : false}
                            onChange={() => setCitations(!citations)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Citation Count
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={hIndex}
                            id="flexCheckDefault"
                            checked={selected || hIndex ? true : false}
                            onChange={() => setHIndex(!hIndex)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            H-Index
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={i10Index}
                            id="flexCheckDefault"
                            checked={selected || i10Index ? true : false}
                            onChange={() => setI10Index(!i10Index)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            I10-Index
                          </label>
                        </div>
                      </div>
                      <div className="select_group mb-2">
                        <select
                          value={schedule}
                          className="colors form-control-lg width-color"
                          onChange={(e) => setSchedule(e.target.value)}
                        >
                          <option defaultValue="Daily">Weekly</option>
                          <option defaultValue="Bi-Weekly">Bi-Weekly</option>
                          <option defaultValue="Monthly">Monthly</option>
                        </select>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={changes}
                          id="flexCheckDefault"
                          onChange={() => setChanges(!changes)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Send email only if there's changes to the current
                          stats.
                        </label>
                      </div>
                      <div className="mt-3 mb-3 d-grid gap-2">
                        <button type="submit" className="p-3 btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default CreateAlert;
