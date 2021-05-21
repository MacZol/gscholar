import React, { useState, useEffect } from "react";
import Main from "./Main";
import _ from "lodash";
import usePagination from "./../components/Pagination";
import { getMessages, getMessage } from "../services/UserServices";
import moment from "moment";
import Modal from "react-modal";
import parse from "html-react-parser";

const MyMessages = (props) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModelIsOpen] = useState(false);

  // pagination
  const [page, setPage] = useState(1);
  let perPage = 5;
  let items = Math.ceil(messages.length / perPage);
  const pages = _.range(1, items + 1);
  let paginated = usePagination(messages.length > 0 ? messages : [], perPage);
  let data = paginated.currentData();

  useEffect(() => {
    setLoading(true);
    const fetchMessage = async () => {
      let data = await getMessages(props);
      setMessages(data);
      setLoading(false);
    };
    fetchMessage();
  }, [props]);

  const ViewSingleMessage = async (id) => {
    setModelIsOpen(true);
    setLoading(true);
    let data = await getMessage(props, id);
    if (data) {
      setMessage(data);
      setLoading(false);
    }
  };
  const handleSelect = (page) => {
    setPage(page);
    paginated.jump(page);
  };
  const customStyles = {
    content: {
      marginLeft: "30%",
      marginRight: "30%",
      width: "50%",
      height: "50%",
      backgroundColor: "#ddd",
    },
  };

  let sn = page > 1 ? (page - 1) * 5 : 0;

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
            {messages.length === 0 ? (
              <div className="container">
                <h1>You have not recieved any messages yet</h1>
              </div>
            ) : (
              <>
                <h3 className="text-center">My Message</h3>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="mt-4 col-10">
                      <table className="table table-bordered">
                        <thead>
                          <tr className="table-color">
                            <th scope="col">No</th>
                            <th scope="col">Message Subject</th>
                            <th scope="col">From</th>
                            <th scope="col">Date Received</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((a, i) => {
                            return (
                              <tr key={i}>
                                <td>{page > 1 ? sn + i + 1 : i + 1}</td>
                                <td>
                                  {" "}
                                  <button
                                    onClick={() => ViewSingleMessage(a._id)}
                                  >
                                    {a.name}
                                  </button>{" "}
                                </td>
                                <td>Scholar Web App</td>
                                <td>
                                  {moment(a.date).format(
                                    "MMMM Do YYYY, h:mm:ss a"
                                  )}
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
                      <Modal
                        ariaHideApp={false}
                        isOpen={modalIsOpen}
                        style={customStyles}
                      >
                        <div className="d-flex justify-content-end">
                          <button
                            className="btn btn-primary"
                            onClick={() => setModelIsOpen(false)}
                          >
                            Close
                          </button>
                        </div>
                        <div>{parse(String(message.message))}</div>
                        <div></div>
                      </Modal>
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

export default MyMessages;
