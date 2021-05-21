/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { getArticles, getInformation } from "../services/UserServices";
import usePagination from "./../components/Pagination";
import Main from "./Main";

const Home = (props) => {
  const [articles, setArticles] = useState([]);
  const [information, setInformation] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  let  perPage = 5;
  let  items = Math.ceil(articles.length / perPage);
  let  pages = _.range(1, items + 1);
  let paginated = usePagination(articles.length > 0 ? articles : [], perPage);
  let data = paginated.currentData();

  useEffect(() => {
    const fetchArticle = async () => {
      let data = await getArticles(props);
      if(data !== undefined){
        setArticles(data);
        setLoading(false);
      }
    };
    const fetchInformation = async () => {
      let data = await getInformation(props);
      setInformation(data);
      setLoading(false);
    };
    fetchArticle();
    fetchInformation();
  }, []);

  const handleSelect = (page) => {
    setPage(page);
    paginated.jump(page);
  };
  let sn = page>1 ? (page-1)*5 : 0
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
            <div className="container">
              <div className="row justify-content-center">
                {articles.length === 0 ? (
                  <h1 className="text-conter">Your Scholar Account Does Not have any articles and information</h1>
                ) : (
              <>
                   <div className="col-8">
                  <table className="table table-bordered">
                    <thead>
                      <tr className="table-color">
                        <th scope="col">Personal stats</th>
                        <th scope="col">All</th>
                        <th scope="col">Last week</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Citations</th>
                        <td>{information.totalCitations}</td>
                        <td>{information.citationsLastWeek}</td>
                      </tr>
                      <tr>
                        <th scope="row">H-Index</th>
                        <td>{information.totalHIndex}</td>
                        <td>{information.hIndexLastWeek}</td>
                      </tr>
                      <tr>
                        <th scope="row">I10-Index</th>
                        <td>{information.totalI10Index}</td>
                        <td>{information.i10IndexLastWeek}</td>
                      </tr>
                      <tr>
                        <th scope="row">Full text download</th>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <th scope="row">Profile view</th>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <th scope="row">Publication views</th>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                   <div className="mt-4 col-12">
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
              </>
              )}
              </div>
            </div>
          </div>
        )}
      </>
    </Main>
  );
};

export default Home;
