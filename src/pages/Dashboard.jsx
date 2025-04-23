import React  from "react";
import TaskList from "../components/TaskList";
import AddTaskForm from "../components/AddTaskForm";
import TaskFilters from "../components/TaskFilters";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CalendarComponent from "../components/Calender";

import "../styles/Dashboard.css";
import { useState } from "react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="dashboard-container">
      <Navbar onSearch={setSearchQuery} />
      <div className="main">
        <Sidebar />
        <div className="dashboard-body">
          <div className="add-task-calendar-container">
            <div className="add-task-form-card glass-card">
              <AddTaskForm />
            </div>
            <div className="calendar-card glass-card">
              <CalendarComponent />
            </div>
          </div>
          <div className="task-filters-card glass-card">
            <TaskFilters />
          </div>
          <div className="task-list-card glass-card">
            <TaskList searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
