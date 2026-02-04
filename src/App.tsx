import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import type { Task } from "./types/task";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "./api/tasks.api";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      setTasks(await getTasks());
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Task Manager
          </h1>
          <p className="mt-1 text-blue-700">
            Simple CRUD app using React + JSON Server
          </p>
        </header>

        <div className="grid gap-6">
          <TaskForm onCreate={async (t) => {
            const newTask = await createTask(t);
            setTasks((prev) => [...prev, newTask]);
          }} />

          <section className="rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
            <div className="border-b px-6 py-4">
              <h2 className="text-lg font-semibold text-slate-800">
                Tasks
              </h2>
            </div>

            <div className="p-4">
              {loading && (
                <p className="text-center text-slate-500">Loading…</p>
              )}
              {error && (
                <p className="text-center text-red-600">{error}</p>
              )}
              {!loading && (
                <TaskList
                  tasks={tasks}
                  onUpdate={async (task) => {
                    await updateTask(task);
                    setTasks((prev) =>
                      prev.map((t) =>
                        t.id === task.id ? task : t
                      )
                    );
                  }}
                  onDelete={async (id) => {
                    await deleteTask(id);
                    setTasks((prev) =>
                      prev.filter((t) => t.id !== id)
                    );
                  }}
                />
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
