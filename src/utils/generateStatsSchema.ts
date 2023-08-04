import { CategoryType, StatsSchema } from "src/notes/types/types";

export const generateStatsSchema = (categories: CategoryType[]): StatsSchema => {
    const statsSchema: StatsSchema = {} as StatsSchema;
    categories.forEach((category) => {
        statsSchema[category] = {
            type: "object",
            properties: {
                countOfActive: { type: "number" },
                countOfArchived: { type: "number" },
            },
        };
    });
    return statsSchema;
};