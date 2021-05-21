/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Charts from "../components/Charts";
import { getInformation, getGraphInformation } from "../services/UserServices";
import Main from "./Main";

const Metrics = (props) => {
  const [information, setInformation] = useState({});
  const [loading, setLoading] = useState(false);
  const [citations, setCitations] = useState([]);
  const [time, setTime] = useState("daily");
  const [hIndex, setHIndex] = useState([]);
  const [i10Index, setI10Index] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchInformation = async () => {
      let data = await getInformation(props);
      setInformation(data);
      setLoading(false);
    };

    const fetchDailyData = async () => {
      let data = await getGraphInformation(props, time);
      setCitations(data.citations);
      setHIndex(data.hIndex);
      setI10Index(data.i10Index);
      setLoading(false);
    };
    fetchInformation();
    fetchDailyData();
  }, [time]);
  let isNoInformation =
    citations.length === 0 && hIndex.length === 0 && i10Index.length === 0
      ? true
      : false;

  return (
    <Main>
      <>
        {loading ? (
          <div className="container d-flex">
            <div className="justify-content-center">
              <img src="giphy.gif" alt="loading" />
            </div>
          </div>
        ) : (
          <div className="main-section mt-5">
            <h3 className="text-center mb-5">Metrics Information</h3>
            {information.totalCitations === undefined ? (
              <>
                <h1 className="text-center">
                  Your account doesnot have information to display
                </h1>
              </>
            ) : (
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-7">
                    <table className="table table-bordered">
                      <thead>
                        <tr className="table-color">
                          <th scope="col">Personal stats</th>
                          <th scope="col">All</th>
                          <th scope="col">Last week</th>
                          <th scope="col">Last Month</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Citations</th>
                          <td>{information.totalCitations}</td>
                          <td>{information.citationsLastWeek}</td>
                          <td>{information.citationsLastMonth}</td>
                        </tr>
                        <tr>
                          <th scope="row">H-Index</th>
                          <td>{information.totalHIndex}</td>
                          <td>{information.hIndexLastWeek}</td>
                          <td>{information.hIndexLastMonth}</td>
                        </tr>
                        <tr>
                          <th scope="row">I10-Index</th>
                          <td>{information.totalI10Index}</td>
                          <td>{information.i10IndexLastWeek}</td>
                          <td>{information.i10IndexLastMonth}</td>
                        </tr>
                        <tr>
                          <th scope="row">Full text download</th>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <th scope="row">Profile view</th>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <th scope="row">Publication views</th>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {isNoInformation ? (
                  <h1>
                    Not enough statistics generated. Data will be shown after 24
                    hours of account creation.
                  </h1>
                ) : (
                  <>
                    <div>
                      <div className="row">
                        <div className="col-7 text-center">
                          <input
                            type="checkbox"
                            id="btn-check"
                            autoComplete="off"
                            checked={time === "daily" ? true : false}
                            onChange={() => setTime("daily")}
                            value={time}
                            name="daily"
                          />
                          <label className="ml-3 fs-4 mr-2" htmlFor="btn-check">
                            Daily
                          </label>
                          <input
                            type="checkbox"
                            id="btn-check"
                            autoComplete="off"
                            checked={time === "monthly" ? true : false}
                            onChange={() => setTime("monthly")}
                            value={time}
                            name="weekly"
                          />
                          <label className="ml-2 fs-4" htmlFor="btn-check">
                            Monthly
                          </label>
                        </div>
                      </div>
                      {time === "daily" && (
                        <>
                          <div className="d-flex justify-content-center">
                            <div>
                              <Charts
                                text="Citations"
                                data={citations}
                                time="Daily"
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-center mt-5">
                            <div>
                              <Charts
                                text="H-Index "
                                data={hIndex}
                                time="Daily"
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-center mt-5 mb-3">
                            <div>
                              <Charts
                                text="I10-Index "
                                data={i10Index}
                                time="Daily"
                              />
                            </div>
                          </div>
                        </>
                      )}
                      {time === "monthly" && (
                        <>
                          <div className="d-flex justify-content-center">
                            <div>
                              <Charts
                                text="Citations"
                                data={citations}
                                time="Monthly"
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-center mt-5">
                            <div>
                              <Charts
                                text="H-Index "
                                data={hIndex}
                                time="Monthly"
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-center mt-5 mb-3">
                            <div>
                              <Charts
                                text="I10-Index "
                                data={i10Index}
                                time="Monthly"
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </>
    </Main>
  );
};

export default Metrics;
