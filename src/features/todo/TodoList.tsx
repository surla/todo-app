import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useAppSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
            />
          );
        })}
      </ul>
    </div>
  );
}
