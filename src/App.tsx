import React from "react";
import EnputeField from "./components/EnputeField";
import { useState } from "react";
import type { Todo } from "./model";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
const [todo,setToDo] = useState<string>("");
const [todos, setToDos] = useState<Todo[]>([]);

const handelToDo = (e : React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setToDos([...todos,{id:Date.now(),todo:todo,isDone:false}])
    } 
    console.log(todos);
    
}
  return (
   <>
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-xl rounded-lg bg-white p-6 shadow-md sm:p-8">

        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800">
           To-Do List
          </h1>
        </header>

        <EnputeField
          todo={todo}
          setToDo={setToDo}
          handelToDo={handelToDo}
        />

        <div className="mt-6">
          <TaskList todos={todos} setToDos={setToDos} />
        </div>
      </div>
    </div>
  </>
  );
};

export default App;
