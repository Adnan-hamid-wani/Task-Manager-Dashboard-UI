import React from "react";
import { Link } from "react-router-dom";

import '../styles/Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>DAILY TASK</h2>
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/task">Task</Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
          <li><Link to="/notes">Notes</Link></li>
        </ul>
      </nav>
      <div className="upgrade">
        <button>Documentation</button>
      </div>
    </div>
  );
};

export default Sidebar;
