import { Injectable, NotFoundException } from "@nestjs/common";
import { notes } from "src/mocks/notes";
import { Note, Stats, Stat } from "./types/types";
import { NOTES_CATEGORIES, Status } from "./constants/constants";
import { getCountOfCategory } from "src/utils/getCountOfCategory ";
import { EditNoteDto } from "./dto/edit-note.dto";
import { getDatesFromContent } from "src/utils/getDatesFromContent";

@Injectable()
export class NotesService {
    getAllNotes(): Note[] {
        return notes;
    }

    getDataStatistic(): Stats {
        const stats: Stats = {} as Stats;
        NOTES_CATEGORIES.forEach((category) => {
            stats[category] = {
                countOfActive: getCountOfCategory(notes, category, Status.ACTIVE),
                countOfArchived: getCountOfCategory(notes, category, Status.ARCHIVED),
            };
        });
        return stats;
    }

    getNote(id: number): Note {
        const note = notes.find((note) => note.id === id);
        if (!note) {
            throw new NotFoundException(`Note with id ${id} was not found.`);
        }
        return note;
    }

    editNote(payload: EditNoteDto, id: number) {
        const noteIndex = notes.findIndex((note) => note.id === id);
        if (noteIndex !== -1) {
            notes[noteIndex] = {
                ...notes[noteIndex],
                ...payload,
                dates: payload.content ? getDatesFromContent(payload.content) : notes[noteIndex].dates,
            };
            return notes[noteIndex];
        } else {
            throw new NotFoundException(`Note with id ${id} was not found.`);
        }
    }
}
