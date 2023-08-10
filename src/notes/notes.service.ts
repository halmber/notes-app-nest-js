import { Injectable, NotFoundException, HttpStatus, HttpException } from "@nestjs/common";
import { notes } from "src/mocks/notes";
import { Stats } from "./types/types";
import { NOTES_CATEGORIES, Status } from "./constants/constants";
import { getCountOfCategory } from "src/utils/getCountOfCategory ";
import { EditNoteDto } from "./dto/edit-note.dto";
import { getDatesFromContent } from "src/utils/getDatesFromContent";
import { CreateNoteDto } from "./dto/create-note.dto";
import { NoteModel } from "./notes.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class NotesService {
    constructor(@InjectModel(NoteModel) private noteRepository: typeof NoteModel) {
        this.initializeDatabase();
    }

    private async initializeDatabase() {
        if ((await this.noteRepository.count()) === 0) {
            await this.noteRepository.bulkCreate(notes);
        }
    }

    async getAllNotes(): Promise<NoteModel[]> {
        return await this.noteRepository.findAll();
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

    async getNoteById(id: number): Promise<NoteModel> {
        const note = await this.noteRepository.findByPk(id);

        if (!note) {
            throw new NotFoundException(`Note with id ${id} was not found.`);
        }

        return note;
    }

    async editNoteById(payload: EditNoteDto, id: number): Promise<NoteModel> {
        if (Object.keys(payload).length === 0) {
            throw new HttpException("No content", HttpStatus.NO_CONTENT);
        }

        const note = await this.noteRepository.findByPk(id);

        if (note) {
            await note.update({
                ...payload,
                dates: payload.content ? getDatesFromContent(payload.content) : note.dates,
            });
        } else {
            throw new NotFoundException(`Note with id ${id} was not found.`);
        }

        return note;
    }

    async deleteNoteById(id: number): Promise<NoteModel> {
        const note = await this.noteRepository.findByPk(id);

        if (note) {
            await note.destroy();
        } else {
            throw new NotFoundException(`Note with id ${id} was not found.`);
        }

        return note;
    }

    async addNote(payload: CreateNoteDto): Promise<NoteModel> {
        if (Object.keys(payload).length === 0) {
            throw new HttpException("Empty request body", HttpStatus.BAD_REQUEST);
        }
        const newNote = {
            ...payload,
            dates: getDatesFromContent(payload.content),
            status: Status.ACTIVE,
        };
        return await this.noteRepository.create(newNote);
    }
}
