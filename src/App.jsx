import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { mockTasksBoard } from "./data/mockData";
import KanbanPage from "./pages/KanbanPage";
import ListViewPage from "./pages/ListViewPage";
import TaskDrawer from "./pages/TaskDrawer";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentView = location.pathname.includes("list") ? "list" : "kanban";

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(
    mockTasksBoard.inProgress[0]
  );
  const [tasks, setTasks] = useState(mockTasksBoard);

  const onTaskClick = (task) => {
    setSelectedTask(task);
    setDrawerOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="bg-linear-to-r from-slate-800 to-slate-900 border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center h-16">
            <div className="w-full sm:w-auto flex items-center justify-between sm:gap-8">
              <button
                onClick={() => navigate("/kanban")}
                className="flex items-center gap-2 bg-transparent border-0 cursor-pointer"
              >
                <div className="w-8 h-8 bg-linear-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TF</span>
                </div>
                <span className="text-white font-bold text-sm sm:text-lg">
                  TaskFlow
                </span>
              </button>

              <div className="flex gap-2">
                <button
                  onClick={() => navigate("/kanban")}
                  className={`px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
                    currentView === "kanban"
                      ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                      : "text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  Kanban
                </button>

                <button
                  onClick={() => {
                    navigate("/list");
                    setDrawerOpen(false);
                  }}
                  className={`px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
                    currentView === "list"
                      ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                      : "text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  List
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-slate-400 text-sm hidden sm:flex">
                View:
                <span className="text-cyan-400 font-semibold ms-1">
                  {currentView === "kanban" ? "Kanban Board" : "List View"}
                </span>
              </div>

              {currentView === "kanban" && (
                <TaskDrawer
                  drawerOpen={drawerOpen}
                  setDrawerOpen={setDrawerOpen}
                  selectedTask={selectedTask}
                  setSelectedTask={setSelectedTask}
                />
              )}
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="transition-all duration-300 bg-linear-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-8">
          {currentView === "kanban" ? (
            <KanbanPage onTaskClick={onTaskClick} tasks={tasks} />
          ) : (
            <ListViewPage />
          )}
        </div>
      </main>
    </div>
  );
}
