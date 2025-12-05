import KanbanBoard from "../components/KanbanBoard";

const KanbanPage = ({ onTaskClick, tasks }) => {
  return (
    <div className="pt-6 lg:px-6">
      <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-white whitespace-nowrap">
            Team Project Board
          </h1>
          <p className="text-slate-400 text-sm">
            Collaborate and manage team tasks effectively
          </p>
        </div>
        <div className="flex gap-2 w-full md:w-auto flex-wrap">
          <select className="px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 hover:border-slate-500 cursor-pointer text-sm w-full sm:w-auto">
            <option>All Projects</option>
            <option>Project A</option>
            <option>Project B</option>
          </select>
          <input
            type="text"
            placeholder="Search tasks..."
            className="px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 placeholder-slate-400 text-sm w-full sm:w-[calc(100%-123px)] lg:w-48"
          />
          <button className="px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 hover:border-slate-500 text-sm cursor-pointer">
            Filter
          </button>
          <button className="px-4 py-2 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 font-medium text-sm cursor-pointer">
            + New Task
          </button>
        </div>
      </div>

      <div className="h-[calc(100vh-324px)] sm:h-[calc(100vh-280px)] md:h-[calc(100vh-198px)] lg:h-[calc(100vh-177px)] overflow-x-auto">
        <div className="flex gap-6 overflow-x-auto pb-4 min-w-min">
          <KanbanBoard
            title="Backlog"
            count={tasks.backlog.length}
            tasks={tasks.backlog}
            onTaskClick={onTaskClick}
            stage="backlog"
          />
          <KanbanBoard
            title="In Progress"
            count={tasks.inProgress.length}
            tasks={tasks.inProgress}
            onTaskClick={onTaskClick}
            stage="inProgress"
          />
          <KanbanBoard
            title="Review"
            count={tasks.review.length}
            tasks={tasks.review}
            onTaskClick={onTaskClick}
            stage="review"
          />
          <KanbanBoard
            title="Done"
            count={tasks.done.length}
            tasks={tasks.done}
            onTaskClick={onTaskClick}
            stage="done"
          />
        </div>
      </div>
    </div>
  );
};

export default KanbanPage;
