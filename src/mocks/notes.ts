import { Status } from "src/notes/constants/constants";
import { Note } from "src/notes/types/types";

export let notes: Note[] = [
    {
        name: "Shoping list",
        created: 1690797198699,
        category: "Task",
        content: "Tomatoes, bread",
        dates: [],
        status: Status.ARCHIVED,
    },
    {
        name: "Dentist",
        created: 1690795198699,
        category: "Idea",
        content:
            "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021 the dates column is 3/5/2021, 5/5/2021",
        dates: ["3/5/2021", "5/5/2021"],
        status: Status.ACTIVE,
    },
    {
        name: "Gym Workout",
        created: 1690785198699,
        category: "Random Thought",
        content: "Plan gym workout for tomorrow. Focus on cardio and core exercises.",
        dates: [],
        status: Status.ARCHIVED,
    },
    {
        name: "Travel Ideas",
        created: 1690685198699,
        category: "Idea",
        content: "Research travel destinations for the next vacation. Consider beaches or mountains.",
        dates: [],
        status: Status.ACTIVE,
    },
    {
        name: "Language Learning",
        created: 1690585198699,
        category: "Task",
        content: "Practice vocabulary and grammar in the target language. Watch language learning videos.",
        dates: [],
        status: Status.ACTIVE,
    },
    {
        name: "Financial Planning",
        created: 1690485198699,
        category: "Plan",
        content: "Review monthly expenses and create a budget for the next month by 31.07.23",
        dates: ["31.07.23"],
        status: Status.ACTIVE,
    },
    {
        name: "Project Ideas",
        created: 1690385198699,
        category: "Task",
        content: "Brainstorm new project ideas. Consider photography, painting, or writing.",
        dates: [],
        status: Status.ACTIVE,
    },
];
