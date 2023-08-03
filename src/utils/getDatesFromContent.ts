import { REGEX_FOR_MATCH_DATES } from "src/notes/constants/constants";

export const getDatesFromContent = (content: string): string[] => {
    return [...new Set(content?.match(REGEX_FOR_MATCH_DATES))];
};
