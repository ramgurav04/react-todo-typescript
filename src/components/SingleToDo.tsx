import React from "react";
import type { Todo } from "../model";

interface S {
  todos: Todo[];
  setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleToDo: React.FC<S> = ({ setToDos, todos }) => {
  return (
    <>
      {todos.map((t) => (
        <li
          key={t.id}
          className="flex items-center gap-3 rounded-md border border-slate-200 bg-white p-3"
        >
          {t.todo}
        </li>
      ))}
    </>
  );
};

export default SingleToDo;
