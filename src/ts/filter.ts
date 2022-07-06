import { TStatuses } from "./task";

export type TFilterers = "all";

export type TFilter = TFilterers | Exclude<TStatuses, "clear">;
