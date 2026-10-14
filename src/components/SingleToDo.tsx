import React from "react";
import type { Todo } from "../model";

interface S {
  todos: Todo[];
  setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleToDo: React.FC<S> = ({ setToDos, todos }) => {
  const handleDelete = (id: number) => {
    setToDos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleDone = (id: number) => {
    setToDos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, isDone: !t.isDone } : t
      )
    );
  };

  const handleEdit = (id: number, oldTodo: string) => {
    const newTodo = prompt("Edit your task:", oldTodo);

    if (newTodo !== null && newTodo.trim() !== "") {
      setToDos((prev) =>
        prev.map((t) =>
          t.id === id ? { ...t, todo: newTodo.trim() } : t
        )
      );
    }
  };

  return (
    <ul className="mx-auto mt-6 flex w-full max-w-xl flex-col gap-3 px-4">
      {todos.map((t) => (
        <li
          key={t.id}
          className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
        >
          <span
            className={`min-w-0 flex-1 break-words text-base font-medium ${
              t.isDone
                ? "text-slate-400 line-through"
                : "text-slate-800"
            }`}
          >
            {t.todo}
          </span>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleEdit(t.id, t.todo)}
              disabled={t.isDone}
              className="rounded-lg bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Edit
            </button>

            <button
              onClick={() => handleDone(t.id)}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                t.isDone
                  ? "bg-slate-200 text-slate-700 hover:bg-slate-300"
                  : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
              }`}
            >
              {t.isDone ? "Undo" : "Done"}
            </button>

            <button
              onClick={() => handleDelete(t.id)}
              className="rounded-lg bg-red-100 px-3 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-200"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SingleToDo;