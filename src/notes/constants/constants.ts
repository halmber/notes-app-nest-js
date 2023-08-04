import { generateStatsSchema } from "src/utils/generateStatsSchema";
import { CategoryType } from "../types/types";

export enum Status {
    ACTIVE = "ACTIVE",
    ARCHIVED = "ARCHIVED",
}

export const NOTES_CATEGORIES: CategoryType[] = ["Task", "Plan", "Random Thought", "Idea"];

export const REGEX_FOR_MATCH_DATES = /\d{1,2}([\/.-])\d{1,2}\1\d{2,4}/g;

export const STATS_SCHEMA_PROPERTIES: Record<string, unknown> = {
    "application/json": {
        schema: {
            type: "object",
            properties: generateStatsSchema(NOTES_CATEGORIES),
        },
    },
};
