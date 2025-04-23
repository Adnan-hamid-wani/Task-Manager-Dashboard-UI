import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../styles/Calender.css";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [details] = useState({
    "2024-12-03": "Meeting with the design team at 3 PM",
    "2024-12-05": "Project deadline submission",
    "2024-12-10": "Call with the client",
  });

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const formatDate = (date) =>
    `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

  return (
    <div className="calendar-container glass-card">
      <Calendar onChange={handleDateChange} value={date} className="cal-det" />
      <div className="details">
        <h3>Details for {formatDate(date)}</h3>
        <p>{details[formatDate(date)] || "No details added for this date."}</p>
      </div>
    </div>
  );
};

export default CalendarComponent;