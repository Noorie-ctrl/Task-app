import { useState } from "react";
import type { Status, Priority, CreateTaskInput } from "../types/task";

interface Props {
  onCreate: (task: CreateTaskInput) => Promise<void>;
}

export default function TaskForm({ onCreate }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<Status>("pending");
  const [priority, setPriority] = useState<Priority>("medium");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await onCreate({ title, description, status, priority });
    setTitle("");
    setDescription("");
    setStatus("pending");
    setPriority("medium");
    setLoading(false);
  };

  return (
    <section className="rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
      <div className="border-b px-6 py-4">
        <h2 className="text-lg font-semibold text-slate-800">
          Create Task
        </h2>
      </div>

      <form onSubmit={submit} className="space-y-4 p-6">
        <input
          className="w-full rounded-md border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className="w-full rounded-md border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="grid grid-cols-2 gap-4">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as Status)}
            className="rounded-md border border-slate-300 px-3 py-2"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
            className="rounded-md border border-slate-300 px-3 py-2"
          >
            <option value="low">Low priority</option>
            <option value="medium">Medium priority</option>
            <option value="high">High priority</option>
          </select>
        </div>

        <button
          disabled={loading}
          className="w-full rounded-md bg-blue-600 py-2 text-white font-medium hover:bg-blue-700 disabled:opacity-50"
        >
          Add Task
        </button>
      </form>
    </section>
  );
}
