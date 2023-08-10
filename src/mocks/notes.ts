import { Status } from "src/notes/constants/constants";
import { Note } from "src/notes/types/types";

export let notes: Note[] = [
    {
        name: "Shoping list",
        category: "Task",
        content: "Tomatoes, bread",
        dates: [],
        status: Status.ARCHIVED,
    },
    {
        name: "Dentist",
        category: "Idea",
        content:
            "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021 the dates column is 3/5/2021, 5/5/2021",
        dates: ["3/5/2021", "5/5/2021"],
        status: Status.ACTIVE,
    },
    {
        name: "Gym Workout",
        category: "Random Thought",
        content: "Plan gym workout for tomorrow. Focus on cardio and core exercises.",
        dates: [],
        status: Status.ARCHIVED,
    },
    {
        name: "Travel Ideas",
        category: "Idea",
        content: "Research travel destinations for the next vacation. Consider beaches or mountains.",
        dates: [],
        status: Status.ACTIVE,
    },
    {
        name: "Language Learning",
        category: "Task",
        content: "Practice vocabulary and grammar in the target language. Watch language learning videos.",
        dates: [],
        status: Status.ACTIVE,
    },
    {
        name: "Financial Planning",
        category: "Plan",
        content: "Review monthly expenses and create a budget for the next month by 31.07.23",
        dates: ["31.07.23"],
        status: Status.ACTIVE,
    },
    {
        name: "Project Ideas",
        category: "Task",
        content: "Brainstorm new project ideas. Consider photography, painting, or writing.",
        dates: [],
        status: Status.ACTIVE,
    },
];
