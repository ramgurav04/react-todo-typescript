import React from "react";
import type { Todo } from "../model";
import SingleToDo from "./SingleToDo";

interface Prop {
  todos: Todo[];
  setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskList: React.FC<Prop> = ({ todos, setToDos }) => {
  return (
    <div>
      <ul className="space-y-2 ">
        <SingleToDo todos={todos} setToDos={setToDos} />
      </ul>
    </div>
  );
};

export default TaskList;
