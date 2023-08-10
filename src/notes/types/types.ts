import { Status } from "../constants/constants";

export type CategoryType = "Idea" | "Task" | "Plan" | "Random Thought";

export interface Note {
    name: string;
    category: CategoryType;
    content: string;
    dates: string[];
    status: Status.ACTIVE | Status.ARCHIVED;
}

export type Stat = {
    countOfActive: number;
    countOfArchived: number;
};

export type Stats = {
    [key in CategoryType]: Stat;
};

export type StatsSchema = {
    [key in CategoryType]: {
        type: "object";
        properties: {
            countOfActive: { type: "number" };
            countOfArchived: { type: "number" };
        };
    };
};
