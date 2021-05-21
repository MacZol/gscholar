import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="bg-light border-right">
        <div className="list-group list-group-flush list-group-sidebar">
          <Link
            to="/"
            className="mt-3 list-group-item list-group-item-action bg-light"
          >
            Home
          </Link>
          <Link
            to="/articles"
            className="list-group-item list-group-item-action bg-light"
          >
            My Articles
          </Link>
          <Link
            to="/messages"
            className="list-group-item list-group-item-action bg-light"
          >
            My Message
          </Link>
          <Link
            to="/metrics"
            className="list-group-item list-group-item-action bg-light"
          >
            Metrics
          </Link>
          <Link
            to="/alerts/manage"
            className="list-group-item list-group-item-action bg-light"
          >
            Manage Alert
          </Link>
          <Link
            to="/account"
            className="list-group-item list-group-item-action bg-light"
          >
            My Account
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
