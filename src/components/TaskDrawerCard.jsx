const TaskDrawerCard = ({ task, setTask, onClose }) => {
  if (!task) return null;

  return (
    <div className="w-full sm:w-96 h-[calc(100vh-64px)] bg-slate-800 border-l border-slate-700 overflow-y-auto flex flex-col">
      <div className="bg-linear-to-r from-slate-800 to-slate-700 border-b border-slate-700 p-6 shrink-0">
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-xl font-bold text-white text-balance pr-2">
            Task Details
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-xl cursor-pointer"
          >
            ✕
          </button>
        </div>
        <p className="text-sm text-slate-400">ID: {task.id}</p>
      </div>

      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-2">
            Title
          </label>
          <p className="text-white font-semibold text-lg">{task.title}</p>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-2">
            Status
          </label>
          <select
            value={task?.stage}
            onChange={(e) => setTask({ ...task, stage: e.target.value })}
            className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 hover:border-slate-500 cursor-pointer"
          >
            <option value="backlog">Backlog</option>
            <option value="inProgress">In Progress</option>
            <option value="review">Review</option>
            <option value="done">Done</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-2">
            Priority
          </label>
          <select
            value={task?.priority}
            onChange={(e) => setTask({ ...task, priority: e.target.value })}
            className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 hover:border-slate-500 cursor-pointer"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-2">
            Assignee
          </label>
          <div className="flex items-center gap-2 p-2 bg-slate-700 rounded-lg border border-slate-600">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src={task.avatar}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white text-sm font-medium">
              {task.assignee}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-2">
            Due Date
          </label>
          <input
            type="date"
            value={task.dueDate}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 hover:border-slate-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-2">
            Description
          </label>
          <textarea
            placeholder="Add a description..."
            className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 hover:border-slate-500 resize-none h-24 text-sm"
          />
        </div>

        <div className="border-t border-slate-700 pt-6">
          <h3 className="text-sm font-bold text-white mb-3">
            Comments ({task.comments})
          </h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-400 to-pink-500 shrink-0 flex items-center justify-center text-white text-xs font-bold">
                  U{i}
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-400 mb-1">
                    User {i} • {i * 3} hours ago
                  </p>
                  <p className="text-sm text-slate-300">
                    This looks great! Let's proceed with this approach.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 text-sm"
            />
            <button className="px-3 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors text-sm cursor-pointer">
              Send
            </button>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6">
          <h3 className="text-sm font-bold text-white mb-3">Activity</h3>
          <div className="space-y-2 text-xs text-slate-400">
            <p>✓ Created by Alex • Jan 10, 2025</p>
            <p>✓ Moved to In Progress • Jan 11, 2025</p>
            <p>✓ Assigned to Chris • Jan 11, 2025</p>
            <p>✓ Priority changed to High • Jan 12, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDrawerCard;
