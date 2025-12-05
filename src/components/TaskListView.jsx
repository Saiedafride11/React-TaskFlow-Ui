const TaskListView = ({ task }) => {
  const statusColors = {
    backlog: "from-rose-500 to-pink-600",
    inProgress: "from-sky-500 to-indigo-500",
    review: "from-amber-400 to-orange-500",
    done: "from-lime-500 to-green-600",
  };

  const priorityColors = {
    high: "bg-red-600/20 text-red-400 border border-red-500/30",
    medium: "bg-yellow-600/20 text-yellow-400 border border-yellow-500/30",
    low: "bg-green-600/20 text-green-400 border border-green-500/30",
  };

  const statusLabels = {
    backlog: "Backlog",
    inProgress: "In Progress",
    review: "Review",
    done: "Done",
  };

  return (
    <div className="bg-slate-800 hover:bg-slate-700/80 border border-slate-700 rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
        <div className="lg:col-span-2">
          <h3 className="text-white font-semibold hover:text-cyan-400 transition-colors">
            {task.title}
          </h3>
          <p className="text-slate-400 text-xs mt-1">ID: {task.id}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 items-start lg:items-center">
          <span
            className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap text-white bg-linear-to-r ${
              statusColors[task.status]
            }`}
          >
            {statusLabels[task.status]}
          </span>
          <span
            className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${
              priorityColors[task.priority]
            }`}
          >
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <img
                src={task.avatar}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>

            <span>{task.assignee}</span>
          </div>
        </div>
        <div className="flex items-center justify-between lg:justify-end gap-4">
          <span className="text-slate-400">{task.dueDate}</span>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300">
              {task.comments} 💬
            </span>
            <button className="text-slate-400 hover:text-slate-200 text-lg cursor-pointer">
              ⋮
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskListView;
