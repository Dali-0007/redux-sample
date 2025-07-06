import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/actions/counterActions";
import { login, logout } from "./redux/actions/userActions";
import { addTodo, deleteTodo } from "./redux/actions/todoActions";

export default function App() {
  const count = useSelector((state) => state.counter.count);
  const user = useSelector((state) => state.user);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      <hr />

      <h2>User Auth</h2>
      {user.isLoggedIn ? (
        <>
          <p>Hello, {user.username}</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <button onClick={() => dispatch(login("Dalinaidu"))}>Login</button>
      )}

      <hr />

      <h2>Todo List</h2>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addTodo(todoInput));
          setTodoInput("");
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => dispatch(deleteTodo(i))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
