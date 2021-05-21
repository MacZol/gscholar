/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Main from "./Main";
import _ from "lodash";
import { getArticles } from "../services/UserServices";
import usePagination from "./../components/Pagination";

const MyArticles = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  // pagination
  const [page, setPage] = useState(1);
  let perPage = 5;
  let items = Math.ceil(articles.length / perPage);
  const pages = _.range(1, items + 1);
  let paginated = usePagination(articles.length > 0 ? articles : [], perPage);
  let data = paginated.currentData();

  useEffect(() => {
    setLoading(true);
    const fetchArticle = async () => {
      let data = await getArticles(props);
      if(data !== undefined){
        setArticles(data);
        setLoading(false);
      }else if(data === undefined){
        setLoading(false);
      }
    };
    fetchArticle();
  }, []);

  const handleSelect = (page) => {
    setPage(page);
    paginated.jump(page);
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
            {articles.length === 0 ? (
              <div className="container">
                <h1>Your Scholar Account Does Not have any articles</h1>
              </div>
            ) : (
              <>
                <h3 className="text-center">My Articles</h3>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="mt-4 col-10">
                      <table className="table table-bordered">
                        <thead>
                          <tr className="table-color">
                            <th scope="col">SN</th>
                            <th scope="col">Article Name</th>
                            <th scope="col">Cited By</th>
                            <th scope="col">Date Published</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((a, i) => {
                            return (
                              <tr key={i}>
                                <td>{page > 1 ? sn + i + 1 : i + 1}</td>
                                <td>{a.article_name}</td>
                                <td>
                                  <a href={a.linkToCitations} target="_blank">{a.citations}</a>
                                </td>
                                <td>{a.publicationYear.split("-")[0]}</td>
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

export default MyArticles;
