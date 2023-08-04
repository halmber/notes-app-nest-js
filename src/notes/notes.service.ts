import { Injectable, NotFoundException, HttpStatus, HttpException } from "@nestjs/common";
import { notes } from "src/mocks/notes";
import { Note, Stats } from "./types/types";
import { NOTES_CATEGORIES, Status } from "./constants/constants";
import { getCountOfCategory } from "src/utils/getCountOfCategory ";
import { EditNoteDto } from "./dto/edit-note.dto";
import { getDatesFromContent } from "src/utils/getDatesFromContent";
import { CreateNoteDto } from "./dto/create-note.dto";

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

    editNote(payload: EditNoteDto, id: number): Note {
        if (Object.keys(payload).length === 0) {
            throw new HttpException("No content", HttpStatus.NO_CONTENT);
        }

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

    deleteNote(id: number): Note {
        const noteIndex = notes.findIndex((note) => note.id === id);
        if (noteIndex !== -1) {
            return notes.splice(noteIndex, 1)[0];
        } else {
            throw new NotFoundException(`Note with id ${id} was not found.`);
        }
    }

    addNote(payload: CreateNoteDto): Note {
        if (Object.keys(payload).length === 0) {
            throw new HttpException("Empty request body", HttpStatus.BAD_REQUEST);
        }
        const newNote = {
            ...payload,
            id: notes.at(-1).id + 1,
            created: new Date().getTime(),
            dates: getDatesFromContent(payload.content),
            status: Status.ACTIVE,
        };
        notes.push(newNote);
        return newNote;
    }
}
