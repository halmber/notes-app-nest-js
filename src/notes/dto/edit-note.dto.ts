import { IsString, IsOptional, MinLength, IsIn } from "class-validator";
import { CategoryType } from "../types/types";
import { NOTES_CATEGORIES, Status } from "../constants/constants";
import { ApiProperty } from "@nestjs/swagger";

export class EditNoteDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    @MinLength(2)
    readonly name?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    @MinLength(2)
    readonly content?: string;

    @ApiProperty({ enum: NOTES_CATEGORIES, required: false })
    @IsOptional()
    @IsString()
    @IsIn(NOTES_CATEGORIES)
    readonly category?: CategoryType;

    @ApiProperty({ enum: Status, required: false })
    @IsOptional()
    @IsString()
    @IsIn([Status.ACTIVE, Status.ARCHIVED])
    readonly status?: Status;
}
