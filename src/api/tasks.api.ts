import type { Task } from "../types/task";

const BASE_URL = "http://localhost:3001/tasks";

export const getTasks = async (): Promise<Task[]> => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createTask = async (
  task: Omit<Task, "id">
): Promise<Task> => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });
  return res.json();
};

export const updateTask = async (task: Task): Promise<Task> => {
  const res = await fetch(`${BASE_URL}/${task.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });
  return res.json();
};

export async function deleteTask(id: number): Promise<void> {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete task");
  };
}
