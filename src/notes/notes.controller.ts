import { Controller, Get, Param, Patch, Body, Delete, Post } from "@nestjs/common";
import { Note, Stats } from "./types/types";
import { NotesService } from "./notes.service";
import { EditNoteDto } from "./dto/edit-note.dto";
import { PositiveIntPipe } from "src/pipes/PositiveIntPipe";
import { CreateNoteDto } from "./dto/create-note.dto";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { NoteModel } from "./notes.model";
import { STATS_SCHEMA_PROPERTIES } from "./constants/constants";

@ApiTags("Notes")
@Controller("/notes")
export class NotesController {
    constructor(private readonly notesService: NotesService) {}
    @ApiResponse({ status: 200, description: "OK", type: [NoteModel] })
    @Get()
    getAllNotes(): Note[] {
        return this.notesService.getAllNotes();
    }

    @ApiResponse({
        status: 200,
        description: "OK",
        content: STATS_SCHEMA_PROPERTIES,
    })
    @Get("/stats")
    getDataStatistic(): Stats {
        return this.notesService.getDataStatistic();
    }

    @ApiResponse({ status: 200, description: "OK", type: NoteModel })
    @Get(":id")
    getNote(@Param("id", PositiveIntPipe) id: string): Note {
        return this.notesService.getNote(Number(id));
    }

    @ApiResponse({ status: 200, description: "OK", type: NoteModel })
    @Patch(":id")
    editNote(@Body() editNoteDto: EditNoteDto, @Param("id", PositiveIntPipe) id: string): Note {
        return this.notesService.editNote(editNoteDto, Number(id));
    }

    @ApiResponse({ status: 200, description: "OK", type: NoteModel })
    @Delete(":id")
    deleteNote(@Param("id", PositiveIntPipe) id: string): Note {
        return this.notesService.deleteNote(Number(id));
    }

    @ApiResponse({ status: 201, description: "Created", type: NoteModel })
    @Post()
    addNote(@Body() editNoteDto: CreateNoteDto): Note {
        return this.notesService.addNote(editNoteDto);
    }
}
