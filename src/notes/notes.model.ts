import { ApiProperty } from "@nestjs/swagger";
import { NOTES_CATEGORIES, Status } from "./constants/constants";
import { CategoryType } from "./types/types";

export class NoteModel {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    content: string;

    @ApiProperty({ enum: NOTES_CATEGORIES })
    category: CategoryType;

    @ApiProperty()
    dates: string[];

    @ApiProperty({ enum: Status })
    status: Status.ACTIVE | Status.ARCHIVED;

    @ApiProperty()
    created: number;
}
