import { useState } from "react";
import type { Task, Status, Priority } from "../types/task";

interface Props {
  task: Task;
  onUpdate: (task: Task) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

export default function TaskItem({ task, onUpdate, onDelete }: Props) {
  const [status, setStatus] = useState<Status>(task.status);
  const [priority, setPriority] = useState<Priority>(task.priority);
  const [loading, setLoading] = useState(false);

  const save = async () => {
    setLoading(true);
    await onUpdate({ ...task, status, priority });
    setLoading(false);
  };

  return (
    <tr className="hover:bg-slate-50 transition">
      <td className="px-4 py-3">
        <p className="font-medium text-slate-900">{task.title}</p>
        {task.description && (
          <p className="text-xs text-slate-500">{task.description}</p>
        )}
      </td>

      <td className="px-4 py-3">
        <select
          value={status}
          disabled={loading}
          onChange={(e) => setStatus(e.target.value as Status)}
          className="rounded-md border border-slate-300 px-2 py-1"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </td>

      <td className="px-4 py-3">
        <select
          value={priority}
          disabled={loading}
          onChange={(e) => setPriority(e.target.value as Priority)}
          className="rounded-md border border-slate-300 px-2 py-1"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </td>

      <td className="px-4 py-3 flex gap-2">
        <button
          onClick={save}
          disabled={loading}
          className="rounded-md bg-indigo-600 px-3 py-1 text-white text-xs hover:bg-indigo-700 disabled:opacity-50"
        >
          Save
        </button>

        <button
          onClick={() => onDelete(task.id)}
          disabled={loading}
          className="rounded-md bg-rose-500 px-3 py-1 text-white text-xs hover:bg-rose-600 disabled:opacity-50"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
