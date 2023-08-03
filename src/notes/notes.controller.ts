import { Controller, Get, Param, Patch, Body, ParseIntPipe } from "@nestjs/common";
import { Note, Stats } from "./types/types";
import { NotesService } from "./notes.service";
import { EditNoteDto } from "./dto/edit-note.dto";

@Controller("notes")
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
    getNote(@Param("id", ParseIntPipe) id: string): Note {
        return this.notesService.getNote(Number(id));
    }

    @Patch(":id")
    editNote(@Body() editNoteDto: EditNoteDto, @Param("id", ParseIntPipe) id: string) {
        return this.notesService.editNote(editNoteDto, Number(id));
    }
}
