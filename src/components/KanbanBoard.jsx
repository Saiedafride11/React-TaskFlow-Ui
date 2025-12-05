const KanbanBoard = ({ title, count, tasks, onTaskClick, stage }) => {
  const stageColors = {
    backlog: "from-rose-500 to-pink-600",
    inProgress: "from-sky-500 to-indigo-500",
    review: "from-amber-400 to-orange-500",
    done: "from-lime-500 to-green-600",
  };

  const priorityColors = {
    high: "bg-red-600/20 text-red-400",
    medium: "bg-yellow-600/20 text-yellow-400",
    low: "bg-green-600/20 text-green-400",
  };

  return (
    <div className="shrink-0 w-96">
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
        <div
          className={`bg-linear-to-r ${stageColors[stage]} px-4 py-3 flex items-center justify-between`}
        >
          <div className="flex items-center gap-3">
            <h2 className="text-white font-bold text-sm">{title}</h2>
            <span className="bg-white/20 text-white text-xs font-semibold px-2 py-1 rounded">
              {count}
            </span>
          </div>
          <button className="text-white hover:bg-white/20 p-1 rounded transition-colors cursor-pointer">
            +
          </button>
        </div>

        <div className="p-3 space-y-3 max-h-[calc(100vh-280px)] overflow-y-auto">
          {tasks?.map((task) => (
            <div
              key={task.id}
              onClick={() => onTaskClick({ ...task, stage })}
              className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-slate-500 rounded-lg p-3 cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/20 group"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="text-slate-400 text-lg group-hover:text-cyan-400 transition-colors">
                  ⋮⋮
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded ${
                    priorityColors[task.priority]
                  }`}
                >
                  {task.priority.toUpperCase()}
                </span>
              </div>

              <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                {task.title}
              </h3>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span>{task.dueDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center">
                    <img
                      src={task.avatar}
                      alt="avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="bg-slate-600 text-slate-300 px-1.5 py-0.5 rounded text-xs">
                    {task.comments} 💬
                  </span>
                  <span className="bg-slate-600 text-slate-300 px-1.5 py-0.5 rounded text-xs">
                    🔗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
