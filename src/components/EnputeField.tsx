import React from "react";

interface Prop {
  todo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handelToDo: (e: React.FormEvent) => void;
}

const EnputeField: React.FC<Prop> = ({
  todo,
  setToDo,
  handelToDo,
}) => {
  return (
    <div>
      <form
        className="flex items-center gap-3"
        onSubmit={handelToDo}
      >
        <input
          value={todo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="Enter your task..."
          className="min-w-0 flex-1 rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />

        <button
          type="submit"
          className="rounded-md bg-sky-600 px-5 py-3 text-sm font-medium text-white hover:bg-sky-700"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default EnputeField;
