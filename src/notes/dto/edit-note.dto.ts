import { IsString, IsOptional, MinLength, IsIn } from "class-validator";
import { CategoryType } from "../types/types";
import { NOTES_CATEGORIES, Status } from "../constants/constants";

export class EditNoteDto {
    @IsOptional()
    @IsString()
    @MinLength(2)
    readonly name?: string;

    @IsOptional()
    @IsString()
    @MinLength(2)
    readonly content?: string;

    @IsOptional()
    @IsString()
    @IsIn(NOTES_CATEGORIES)
    readonly category?: CategoryType;

    @IsOptional()
    @IsString()
    @IsIn([Status.ACTIVE, Status.ARCHIVED])
    readonly status?: Status;
}
