import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/userSlice'

const TodoApp = () => {
  const [text, setText] = useState('');
  const todos = useSelector(state => state.app.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="bg-white p-4 mt-6 rounded shadow w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-2">Todo List</h2>
      <div className="flex mb-3 space-x-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Add a todo"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 px-4 py-2 text-white rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
            <span>{todo.text}</span>
            <button onClick={() => dispatch(deleteTodo(todo.id))} className="text-red-500">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
