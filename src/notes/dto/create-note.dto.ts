import { IsString, MinLength, IsIn } from "class-validator";
import { CategoryType } from "../types/types";
import { NOTES_CATEGORIES } from "../constants/constants";

export class CreateNoteDto {
    @IsString()
    @MinLength(2)
    readonly name: string;

    //@IsNotEmpty({ message: "Content cannot be empty" })
    @IsString()
    @MinLength(2)
    readonly content: string;

    @IsString()
    @IsIn(NOTES_CATEGORIES)
    readonly category: CategoryType;
}
