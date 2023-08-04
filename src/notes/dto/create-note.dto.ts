import { IsString, MinLength, IsIn } from "class-validator";
import { CategoryType } from "../types/types";
import { NOTES_CATEGORIES } from "../constants/constants";
import { ApiProperty } from "@nestjs/swagger";

export class CreateNoteDto {
    @ApiProperty()
    @IsString()
    @MinLength(2)
    readonly name: string;

    @ApiProperty()
    @IsString()
    @MinLength(2)
    readonly content: string;

    @ApiProperty({ enum: NOTES_CATEGORIES })
    @IsString()
    @IsIn(NOTES_CATEGORIES)
    readonly category: CategoryType;
}
