import React from "react";
import type { Todo } from "../model";

interface Prop {
  todos: Todo[];
  setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskList: React.FC<Prop> = ({ todos, setToDos }) => {
  const handleComplete = (id: number) => {
    setToDos(
      todos.map((t) =>
        t.id === id ? { ...t, isDone: !t.isDone } : t
      )
    );
  };

  return (
    <div>
      <ul className="space-y-2">
          {todos.map((t)=>{
            return (
              <li
              key={t.id}
              className="flex items-center gap-3 rounded-md border border-slate-200 bg-white p-3"
            >{t.todo}</li> 
            )
          })}
            
        </ul>
      </div>
  );
};

export default TaskList;