import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="navbar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Your Task..."
          className="search-input"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="navbar-actions">
        <button className="new-task-btn">New Task</button>
        <div className="user-profile">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEz1ve3QQhGM3EKWe1dDjnQAOqyMv0RUEcnw&s"
            alt="User Profile"
            className="user-img"
          />
          <span className="username">Adnan wani</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
