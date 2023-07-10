import React from "react";

import "./Dashboard.scss";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <div className="content">
          <h3>CREATORVERSE</h3>
          <div className="nav">
            <Link to="/">VIEW ALL CREATORS</Link>
            <Link to="/addcreator">ADD A CREATOR</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Dashboard;
