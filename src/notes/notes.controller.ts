import {
    Controller,
    Get,
    Param,
    Patch,
    Body,
    Delete,
    Post,
    PipeTransform,
    ArgumentMetadata,
    BadRequestException,
    UsePipes,
} from "@nestjs/common";
import { Note, Stats } from "./types/types";
import { NotesService } from "./notes.service";
import { EditNoteDto } from "./dto/edit-note.dto";
import { PositiveIntPipe } from "src/pipes/PositiveIntPipe";
import { CreateNoteDto } from "./dto/create-note.dto";

export class EmptyBodyPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (value === undefined || Object.keys(value).length === 0) {
            throw new BadRequestException("Request body cannot be empty");
        }
        return value;
    }
}
@Controller("/notes")
export class NotesController {
    constructor(private readonly notesService: NotesService) {}
    @Get()
    getAllNotes(): Note[] {
        return this.notesService.getAllNotes();
    }

    @Get("/stats")
    getDataStatistic(): Stats {
        return this.notesService.getDataStatistic();
    }

    @Get(":id")
    getNote(@Param("id", PositiveIntPipe) id: string): Note {
        return this.notesService.getNote(Number(id));
    }

    @Patch(":id")
    editNote(@Body() editNoteDto: EditNoteDto, @Param("id", PositiveIntPipe) id: string): Note {
        return this.notesService.editNote(editNoteDto, Number(id));
    }

    @Delete(":id")
    deleteNote(@Param("id", PositiveIntPipe) id: string): Note {
        return this.notesService.deleteNote(Number(id));
    }

    @Post()
    @UsePipes(new EmptyBodyPipe())
    addNote(@Body(new EmptyBodyPipe()) editNoteDto: CreateNoteDto): Note {
        console.log(editNoteDto);
        return this.notesService.addNote(editNoteDto);
    }
}
