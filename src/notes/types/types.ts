import { Status } from "../constants/constants";

export type CategoryType = "Idea" | "Task" | "Plan" | "Random Thought";

export interface Note {
    name: string;
    created: number;
    category: CategoryType;
    content: string;
    dates: string[];
    status: Status.ACTIVE | Status.ARCHIVED;
}
