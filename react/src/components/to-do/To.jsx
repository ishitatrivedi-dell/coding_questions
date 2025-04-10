import { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Handle adding a task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); // Clear input
    }
  };

  // Handle removing a task
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center p-6  min-h-screen">
      <h1 className="text-3xl font-bold mb-6">To-Do List</h1>

      <div className="flex gap-3 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="px-4 py-2 rounded border border-gray-300 outline-none w-64"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md">
        {tasks.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-3 mb-2 shadow rounded"
          >
            <span>{t}</span>
            <button
              onClick={() => removeTask(index)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
