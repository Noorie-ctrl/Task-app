export type Priority = "low" | "medium" | "high";
export type Status = "pending" | "in-progress" | "done";

export type Task = {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
};

export type CreateTaskInput = Omit<Task, "id" | "createdAt">;

