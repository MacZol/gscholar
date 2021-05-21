/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { getAlerts } from "../services/UserServices";
import usePagination from "./../components/Pagination";
import Main from "./Main";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { SendSecure } from "./../helper";

const ManageAlerts = (props) => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  let perPage = 5;
  let items = Math.ceil(alerts.length / perPage);
  const pages = _.range(1, items + 1);
  let paginated = usePagination(alerts.length > 0 ? alerts : [], perPage);
  let data = paginated.currentData();

  useEffect(() => {
    setLoading(true);
    const fetchAlerts = async () => {
      let data = await getAlerts(props);
      setAlerts(data);
      setLoading(false);
    };
    fetchAlerts();
  }, []);

  let sn = page > 1 ? (page - 1) * 5 : 0;

  const handleSelect = (page) => {
    setPage(page);
    paginated.jump(page);
  };
  const deleteAlert = async (id) => {
    Swal.fire({
      title: "Delete This Alert?",
      text: "This alert will be deleted and cannot be recovered back",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,delete it !",
    }).then(async (result) => {
      if (result.value) {
        let res = await SendSecure("delete", `/account/alert/${id}`);
        if (res.type === "error") {
          Swal.fire("Error", res.msg, "error");
        } else {
          Swal.fire("Success", res.msg, "success");
          window.location = "/alerts/manage";
        }
      }
    });
  };
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
            {alerts.length === 0 ? (
              <div className="container">
                <h1>You have not set any alerts, Set Alerts to See them</h1>
              </div>
            ):(
              <>
            <h3 className="text-center">Manage Alerts</h3>
            <div className="container">
              <div className="row justify-content-center">
                <div className="mt-4 col-10">
                  <table className="table table-bordered">
                    <thead className="text-center">
                      <tr className="table-color">
                        <th scope="col">No.</th>
                        <th scope="col">Alert Name</th>
                        <th scope="col">Manage Alert</th>
                        <th scope="col">Delete Alert</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {data.map((a, i) => {
                        return (
                          <tr key={a._id}>
                            <th scope="row">
                              {page > 1 ? sn + i + 1 : i + 1}
                            </th>
                            <td>{a.alert_name}</td>
                            <td>
                              <Link to={`/alert/${a._id}`}>Update</Link>
                            </td>
                            <td>
                              <button
                                onClick={() => deleteAlert(a._id)}
                                className="btn-danger"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <nav aria-label="...">
                    <ul className="pagination pagination-md">
                      {pages.map((p, i) => (
                        <li
                          className={
                            p === page ? "page-item active" : "page-item"
                          }
                          aria-current="page"
                          key={i}
                        >
                          <span
                            onClick={() => handleSelect(p)}
                            className="page-link"
                          >
                            {p}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
              </>
            )} 
          </div>
        )}
      </Main>
    </>
  );
};

export default ManageAlerts;
