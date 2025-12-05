import { useState } from "react";
import TaskListView from "../components/TaskListView";
import { mockTasksList } from "../data/mockData";

const ListViewPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTasks = mockTasksList.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-linear-to-b from-slate-900 to-slate-800 min-h-screen">
      <div className="py-6 lg:p-6 max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-white">Tasks</h1>
            <p className="text-slate-400 text-sm whitespace-nowrap">
              List view of all tasks
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto flex-wrap">
            <select className="px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 hover:border-slate-500 cursor-pointer text-sm w-full sm:w-auto">
              <option>All Projects</option>
              <option>Project A</option>
              <option>Project B</option>
            </select>
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 placeholder-slate-400 text-sm w-full sm:w-[calc(100%-123px)] md:w-48"
            />
            <button className="px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 hover:border-slate-500 text-sm cursor-pointer">
              Filter
            </button>
            <button className="px-4 py-2 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 font-medium text-sm cursor-pointer">
              + New Task
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
          {filteredTasks?.length === 0 ? (
            <div className="text-white">No data found!</div>
          ) : (
            filteredTasks?.map((task) => (
              <TaskListView key={task.id} task={task} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ListViewPage;
