export type TStatuses = "active" | "deleted" | "completed" | "clear";

export type TTask = {
  task: string;
  status: TStatuses;
};
