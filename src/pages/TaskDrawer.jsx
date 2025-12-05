import TaskDrawerCard from "../components/TaskDrawerCard";

const TaskDrawer = ({
  drawerOpen,
  setDrawerOpen,
  selectedTask,
  setSelectedTask,
}) => {
  return (
    <div>
      <button
        onClick={() => setDrawerOpen(!drawerOpen)}
        className="px-3 sm:px-4 py-[6px] sm:py-2 ms-2 sm:ms-0 bg-linear-to-l from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 font-medium text-sm cursor-pointer"
      >
        <span className="hidden sm:block">Task Details</span>
        <span className="block sm:hidden">☰</span>
      </button>

      <div
        className={`
          fixed top-[65px] right-0 h-full w-full sm:w-80 bg-white shadow-xl z-50
          transition-transform duration-300 ease-in-out
          ${drawerOpen ? "right-0 sm:right-[65px]" : "translate-x-full"}
        `}
      >
        <TaskDrawerCard
          task={selectedTask}
          setTask={setSelectedTask}
          onClose={() => setDrawerOpen(false)}
        />
      </div>
    </div>
  );
};

export default TaskDrawer;
