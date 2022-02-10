import React from "react";

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
}

export default function TodoItem({ id, text, completed }: TodoItemProps) {
  return <li>{text}</li>;
}
