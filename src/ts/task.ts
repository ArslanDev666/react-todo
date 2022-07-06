import { TFilter } from "./filter";

export type TStatuses = Exclude<TFilter, "all">;

export type TTask = {
  task: string;
  status: TStatuses;
};
