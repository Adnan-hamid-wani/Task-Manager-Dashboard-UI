import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import '../styles/AddTaskForm.css'

const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (!title || !dueDate) {
      alert("Title and Due Date are required!");
      return;
    }
    dispatch(
      addTask({
        id: Date.now().toString(),
        title,
        description,
        dueDate,
        completed: false,
      })
    );
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <div className="add-task-form">
      <h2 className="form-title">Add New Task</h2>
      <input
        className="input-field"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="input-field description"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="input-field"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button className="add-task-button" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default AddTaskForm;
