import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addTodo } from "./todoSlice";

export default function AddTodo() {
  const [todo, setTodo] = useState("");

  const dispatch = useAppDispatch();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);

    dispatch(
      addTodo({
        text: todo,
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Add Todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
