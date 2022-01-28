import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export default function TodoList() {
  const dispatch = useAppDispatch();
  return (
    <ul>
      <li>Todo 1</li>
      <li>Todo 2</li>
      <li>Todo 3</li>
      <li>Todo 4</li>
    </ul>
  );
}
