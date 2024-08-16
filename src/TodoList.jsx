import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Add a new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  // Delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter a new task"
        style={{ padding: "8px", width: "300px", marginRight: "10px" }}
      />
      <button onClick={addTask} style={{ padding: "8px 16px" }}>
        Add Task
      </button>
      <ul style={{ marginTop: "20px", listStyleType: "none", padding: "0" }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              marginBottom: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {task}
            <button onClick={() => deleteTask(index)} style={{ padding: "5px 10px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
