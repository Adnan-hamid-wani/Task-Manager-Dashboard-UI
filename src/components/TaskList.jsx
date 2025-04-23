import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTask, editTask } from "../redux/taskSlice";
import "../styles/TaskList.css";

const TaskList = ({ searchQuery }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedDueDate, setEditedDueDate] = useState("");

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      if (filter === "overdue")
        return new Date(task.dueDate) < new Date() && !task.completed;
      return true;
    })
    .filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase())); // Search filter by title

  const handleEditTask = (task) => {
    setEditingTask(task.id);
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setEditedDueDate(task.dueDate);
  };

  const saveEditedTask = () => {
    dispatch(
      editTask({
        id: editingTask,
        title: editedTitle,
        description: editedDescription,
        dueDate: editedDueDate,
      })
    );
    setEditingTask(null);
  };

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <div key={task.id} className="task-card">
          {editingTask === task.id ? (
            <div className="edit-task-form">
              <input
                className="input-field"
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <textarea
                className="input-field description"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
              <input
                className="input-field"
                type="date"
                value={editedDueDate}
                onChange={(e) => setEditedDueDate(e.target.value)}
              />
              <button className="save-btn" onClick={saveEditedTask}>
                Save
              </button>
              <button
                className="cancel-btn"
                onClick={() => setEditingTask(null)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="task-info">
              <h3 className="task-title">{task.title}</h3>
              <p className="task-description">{task.description}</p>
              <p className="task-due-date">Due: {task.dueDate}</p>
              <p className="task-status">
                Status: {task.completed ? "Completed" : "Pending"}
              </p>
              <div className="task-buttons">
                <button
                  className="complete-btn"
                  onClick={() => dispatch(toggleComplete(task.id))}
                >
                  {task.completed ? "Mark as Pending" : "Mark as Completed"}
                </button>
                <button className="edit-btn" onClick={() => handleEditTask(task)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => dispatch(deleteTask(task.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
