import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/taskSlice";

import '../styles/TaskFilters.css'

const TaskFilters = () => {
  const dispatch = useDispatch();

  return (
    <div className="task-filters">
      <h3 className="filters-title">Filter Tasks</h3>
      <div className="filter-buttons">
        <button onClick={() => dispatch(setFilter("all"))} className="filter-button">
          All
        </button>
        <button onClick={() => dispatch(setFilter("completed"))} className="filter-button">
          Completed
        </button>
        <button onClick={() => dispatch(setFilter("pending"))} className="filter-button">
          Pending
        </button>
        <button onClick={() => dispatch(setFilter("overdue"))} className="filter-button">
          Overdue
        </button>
      </div>
    </div>
  );
};

export default TaskFilters;
